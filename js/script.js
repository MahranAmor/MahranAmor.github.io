/* ==========================================================================
   Mahrane AMOR - Portfolio
   Theme toggle | mobile nav | scroll spy | stat counters | reveal on scroll
   ========================================================================== */

(function () {
  'use strict';

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme ---------- */
  function initTheme() {
    var toggle = document.querySelector('.theme-toggle');
    if (!toggle) return;

    // Stored preference wins; otherwise the OS preference applies via CSS.
    try {
      var saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);
    } catch (e) { /* private mode / blocked storage */ }

    toggle.addEventListener('click', function () {
      var current = root.getAttribute('data-theme');
      if (!current) {
        current = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
    });
  }

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var hamburger = document.querySelector('.hamburger');
    var menu = document.querySelector('.nav-menu');
    if (!hamburger || !menu) return;

    function close() {
      hamburger.classList.remove('active');
      menu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', function () {
      var open = menu.classList.toggle('active');
      hamburger.classList.toggle('active', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('.nav-link')) close();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });

    document.addEventListener('click', function (e) {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) close();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 1080) close();
    });
  }

  /* ---------- Navbar shadow + back-to-top visibility ---------- */
  function initScrollChrome() {
    var navbar = document.querySelector('.navbar');
    var toTop = document.querySelector('.to-top');
    var ticking = false;

    function update() {
      var y = window.scrollY;
      if (navbar) navbar.classList.toggle('scrolled', y > 8);
      if (toTop) toTop.classList.toggle('visible', y > 600);
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });

    update();

    if (toTop) {
      toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      });
    }
  }

  /* ---------- Scroll spy: highlight the section in view ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
    var sections = links
      .map(function (link) { return document.querySelector(link.getAttribute('href')); })
      .filter(Boolean);

    if (!sections.length) return;

    function setActive(id) {
      links.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + id);
      });
    }

    var observer = new IntersectionObserver(function (entries) {
      // Pick the entry closest to the top of the viewport among those intersecting.
      var visible = entries.filter(function (e) { return e.isIntersecting; });
      if (!visible.length) return;
      visible.sort(function (a, b) {
        return a.boundingClientRect.top - b.boundingClientRect.top;
      });
      setActive(visible[0].target.id);
    }, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Reveal elements as they scroll into view ---------- */
  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        // Stagger siblings slightly so groups cascade instead of popping at once.
        var delay = Math.min(i * 70, 280);
        setTimeout(function () { el.classList.add('visible'); }, delay);
        obs.unobserve(el);
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Animated hero counters ---------- */
  function initCounters() {
    var counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    function run(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';

      if (reduceMotion || isNaN(target)) {
        el.textContent = (isNaN(target) ? el.textContent : target) + suffix;
        return;
      }

      var duration = 1200;
      var start = null;

      function step(timestamp) {
        if (start === null) start = timestamp;
        var progress = Math.min((timestamp - start) / duration, 1);
        // easeOutCubic
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) window.requestAnimationFrame(step);
      }

      window.requestAnimationFrame(step);
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(run);
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Rotating job title (typewriter) ---------- */
  function initTypewriter() {
    var el = document.querySelector('.typewriter');
    if (!el) return;

    var roles;
    try {
      roles = JSON.parse(el.getAttribute('data-roles'));
    } catch (e) {
      return; // malformed list: leave the static text in place
    }
    if (!Array.isArray(roles) || roles.length < 2) return;

    // Reduced motion: keep the first role, no cycling.
    if (reduceMotion) return;

    var TYPE_MS = 70;      // per character while typing
    var DELETE_MS = 38;    // per character while deleting
    var HOLD_FULL = 1900;  // pause on a complete word
    var HOLD_EMPTY = 320;  // pause before the next word

    var index = 0;
    var chars = roles[0].length;
    var deleting = true;   // the first role is already rendered, so erase it first
    var timer = null;

    function tick() {
      var word = roles[index];

      if (deleting) {
        chars -= 1;
        el.textContent = word.slice(0, chars);
        if (chars === 0) {
          deleting = false;
          index = (index + 1) % roles.length;
          timer = setTimeout(tick, HOLD_EMPTY);
          return;
        }
        timer = setTimeout(tick, DELETE_MS);
        return;
      }

      chars += 1;
      el.textContent = word.slice(0, chars);
      if (chars === word.length) {
        deleting = true;
        timer = setTimeout(tick, HOLD_FULL);
        return;
      }
      timer = setTimeout(tick, TYPE_MS);
    }

    // Pause while the tab is hidden so it does not race through the list
    // in the background and resume mid-word on return.
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        clearTimeout(timer);
      } else {
        clearTimeout(timer);
        timer = setTimeout(tick, 400);
      }
    });

    timer = setTimeout(tick, HOLD_FULL);
  }

  /* ---------- Footer year ---------- */
  function initYear() {
    var el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Boot ---------- */
  function init() {
    initTheme();
    initNav();
    initScrollChrome();
    initScrollSpy();
    initReveal();
    initCounters();
    initTypewriter();
    initYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
