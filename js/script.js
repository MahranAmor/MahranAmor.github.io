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

  /* ---------- Hero title typewriter ---------- */
  var typeTimer = null;
  var visibilityBound = false;

  function initTypewriter() {
    var wrap = document.querySelector('.hero-title.typewriter');
    if (!wrap) return;

    // A language switch re-runs this; stop the previous run first.
    clearTimeout(typeTimer);

    var parts = Array.prototype.slice.call(wrap.querySelectorAll('.tw'));
    if (!parts.length) return;

    // The real text lives in the HTML so it survives with JS disabled and is
    // there for crawlers. Capture it, then blank the spans before revealing.
    var segments = parts.map(function (el) {
      return { el: el, text: el.textContent };
    });

    function reveal() {
      segments.forEach(function (s) { s.el.style.visibility = 'visible'; });
    }

    if (reduceMotion) {
      reveal();
      return;
    }

    segments.forEach(function (s) { s.el.textContent = ''; });
    reveal();

    var TYPE_MS = 55;   // per character
    var START_MS = 450; // beat before the first character

    var seg = 0;
    var chars = 0;

    function tick() {
      var current = segments[seg];

      chars += 1;
      current.el.textContent = current.text.slice(0, chars);

      if (chars >= current.text.length) {
        seg += 1;
        chars = 0;
        if (seg >= segments.length) return; // sentence complete, caret keeps blinking
      }

      typeTimer = setTimeout(tick, TYPE_MS);
    }

    // Background tabs throttle timers; pause rather than resume mid-word.
    // Bound once: initTypewriter also runs again on every language change.
    if (!visibilityBound) {
      visibilityBound = true;
      document.addEventListener('visibilitychange', onVisibility);
    }

    function onVisibility() {
      if (document.hidden) {
        clearTimeout(typeTimer);
      } else if (seg < segments.length) {
        clearTimeout(typeTimer);
        typeTimer = setTimeout(tick, 300);
      }
    }

    typeTimer = setTimeout(tick, START_MS);
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

  // i18n.js rewrites the hero sentence; retype it in the new language.
  document.addEventListener('i18n:change', function () {
    initTypewriter();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
