/* ==========================================================================
   Mahrane AMOR - Portfolio
   Language switching: English (source, in the HTML) / Francais / Deutsch

   Runs immediately rather than on DOMContentLoaded: it is loaded at the end of
   <body>, so the nodes already exist, and applying translations before
   script.js starts means the typewriter picks up the translated sentence.
   ========================================================================== */

(function () {
  'use strict';

  var LANGS = ['en', 'fr', 'de'];

  /* Proper nouns (people, institutions, certificate names, technologies) are
     intentionally absent below, so they fall back to the English DOM. */
  var DICT = {

    /* ---------------------------------------------------------------- FR -- */
    fr: {
      nav_1: 'Accueil', nav_2: 'Projets', nav_3: 'Expérience', nav_4: 'Compétences',
      nav_5: 'Formation', nav_6: 'Certifications', nav_7: 'Activités',
      nav_8: 'Recommandation', nav_9: 'Contact',

      badge_1: 'Ouvert aux stages et aux opportunités de jeune diplômé',
      tw_1: 'Élève ingénieur en Data Science &amp; ',
      tw_2: 'passionné de MLOps',
      herosub_1: 'Élève ingénieur en dernière année de Data Science à l’ENET’Com, je conçois des systèmes d’IA prêts pour la production &mdash; architectures RAG agentiques, modèles de deep learning et pipelines de données en temps réel. Ce qui m’intéresse, c’est ce qui rend l’IA réellement utilisable : des réponses sourcées, des pipelines respectueux de la vie privée et une inférence assez rapide pour être déployée.',

      btn_1: 'Voir mes projets', btn_2: 'Télécharger le CV', btn_3: 'Me contacter',

      stat_1: 'Stages en IA &amp; Data', stat_2: 'Projets présentés',
      stat_3: 'Certifications', stat_4: 'Langues parlées',

      eyebrow_1: 'Travaux sélectionnés',
      sectitle_1: 'Projets',
      secsub_1: 'Des systèmes de bout en bout en IA agentique, imagerie médicale, modélisation prédictive et ingénierie de données temps réel &mdash; chacun conçu, évalué et déployé.',

      pmeta_1: 'IA agentique &middot; Santé',
      ptitle_1: 'YouRi &mdash; Assistant médical RAG agentique',
      pdesc_1: 'Un assistant intelligent de questions-réponses cliniques bâti sur une architecture RAG agentique avec LangGraph, où chaque réponse du LLM s’appuie sur des sources vérifiables afin d’éliminer les hallucinations.',
      li_1: 'Conception d’un <strong>routeur de requêtes à trois portées d’exécution</strong> (interne / externe / hybride) et d’un filtre de métadonnées à triple axe, atteignant <strong>100&nbsp;% de précision de portée contre 37&nbsp;%</strong> pour un RAG classique sur un benchmark clinique de 30 questions.',
      li_2: 'Mise en place d’un <strong>pipeline de pseudonymisation des données personnelles</strong> qui masque l’identité du patient (noms &rarr; identifiants internes, date de naissance &rarr; âge) avant toute inférence LLM externe, garantissant un traitement conforme au RGPD.',
      li_3: 'Réduction de la latence d’inférence <strong>&times;15 (38,7&nbsp;s &rarr; 2,5&nbsp;s)</strong> par quantification INT8 du reranker, sans altérer les décisions de pertinence sur le corpus réel.',

      pmeta_2: 'Deep learning &middot; Imagerie médicale',
      ptitle_2: 'GlioScan &mdash; Segmentation 3D de tumeurs cérébrales',
      pdesc_2: 'Un pipeline U-Net qui segmente les tumeurs cérébrales à partir d’IRM multimodales du jeu de données BraTS 2021, exposé via une interface web FastAPI.',
      li_4: 'Entraînement de U-Nets 2D et 3D sur des volumes FLAIR / T1 / T1ce / T2 de <strong>600 patients BraTS 2021</strong>, avec un <strong>Dice moyen de 0,942</strong> (tumeur entière 0,926, noyau tumoral 0,953, tumeur rehaussée 0,946).',
      li_5: 'Pipeline PyTorch complet &mdash; mise en cache des volumes, perte combinée Dice + entropie croisée, métriques par région et augmentation au moment du test &mdash; entraîné en <strong>~80 minutes sur une seule RTX 4050 de 6&nbsp;Go</strong>.',
      li_6: 'Livré avec un service FastAPI exposant un point d’accès <strong>/predict</strong> et une interface d’import : déposez les quatre volumes NIfTI d’un patient et la tumeur est superposée aux coupes axiales en quelques secondes.',

      pmeta_3: 'Ingénierie des données &middot; MLOps',
      ptitle_3: 'Détection d’anomalies en temps réel dans les réseaux 5G',
      pdesc_3: 'Un pipeline de streaming qui surveille les performances du réseau 5G en temps réel et signale pannes et menaces de sécurité dès qu’elles surviennent.',
      li_7: 'Ingestion en streaming avec <strong>Apache Kafka</strong> alimentant un pipeline de traitement temps réel.',
      li_8: 'Modèles de machine learning et de deep learning entraînés à détecter les pannes réseau et les anomalies de sécurité.',
      li_9: 'Prédictions exposées via des <strong>API REST</strong> et restituées dans des tableaux de bord Power BI pour l’aide à la décision.',

      pmeta_4: 'Vision par ordinateur &middot; Imagerie médicale',
      ptitle_4: 'Détection du cancer du sein par CNN',
      pdesc_4: 'Un réseau de neurones convolutif pour la détection du cancer du sein sur des données d’imagerie médicale, conteneurisé et déployé pour une inférence à l’échelle.',
      li_10: 'Pipeline de prétraitement des images : redimensionnement, normalisation et <strong>augmentation de données</strong>.',
      li_11: 'Entraîné et évalué sous TensorFlow / PyTorch, optimisé sur les métriques de validation.',
      li_12: 'Pipeline d’inférence conteneurisé avec Docker et déployé sur <strong>Azure ML / App Service</strong> derrière une API REST.',

      pmeta_5: 'Machine learning &middot; Déploiement',
      ptitle_5: 'Prédiction de la gravité des accidents de la route',
      pdesc_5: 'Des modèles prédictifs qui estiment la gravité des accidents à partir de données routières, livrés dans le cloud via un pipeline CI/CD.',
      li_13: 'Collecte et prétraitement des données : valeurs manquantes, encodage des variables catégorielles, puis <strong>analyse exploratoire</strong> pour isoler les facteurs de gravité.',
      li_14: 'Construction et optimisation de modèles de <strong>régression logistique, forêt aléatoire et XGBoost</strong>.',
      li_15: 'Évalués sur l’exactitude, le score F1 et l’AUC-ROC ; déployés via Docker + CI/CD sur Azure.',

      pmeta_6: 'Ingénierie des données &middot; Automatisation',
      ptitle_6: 'Extracteur d’annonces automobiles Tayara.tn',
      pdesc_6: 'Un extracteur en double implémentation qui récupère et structure les annonces de véhicules de Tayara.tn &mdash; un workflow n8n automatisé pour des exécutions planifiées sans code, et un script Python autonome pour l’intégration dans un pipeline.',
      li_16: 'Extraction multi-pages sur <strong>plus de 30 pages</strong> avec reprise automatique et délais intelligents &mdash; environ <strong>20 pages en 2 à 3 minutes</strong> avec un taux de réussite supérieur à 95&nbsp;%.',
      li_17: 'Un agent <strong>Mistral AI</strong> nettoie et normalise les champs clés (marque, modèle, année, prix, carburant, boîte, localisation) en un CSV valide à 100&nbsp;%, prêt à l’analyse.',
      li_18: 'Deux voies interchangeables : un workflow n8n s’appuyant sur l’API Jina.ai pour des exécutions planifiées sans code, et un script <strong>requests + BeautifulSoup</strong> pour les développeurs souhaitant des filtres ou formats d’export personnalisés.',

      srclink_1: 'Voir le code', srclink_2: 'Voir le code',
      srclink_3: 'Voir le code', srclink_4: 'Voir le code',

      eyebrow_2: 'Mon parcours professionnel',
      sectitle_2: 'Expérience',
      secsub_2: 'Trois stages en IA agentique, business intelligence et synthèse vocale.',

      role_1: 'Stagiaire ingénieur IA', role_2: 'Stagiaire data analyst', role_3: 'Stagiaire ingénieur IA',
      date_1: 'Juil. 2026 &mdash; Août 2026', date_2: 'Août 2025', date_3: 'Juin 2025 &mdash; Juil. 2025',

      li_19: 'Conception et réalisation de <strong>YouRi</strong>, un assistant médical intelligent fondé sur une architecture RAG agentique (LangGraph), chaque réponse du LLM s’appuyant sur des sources vérifiables afin d’éliminer les hallucinations dans les questions-réponses cliniques.',
      li_20: 'Développement d’un routeur de requêtes à trois portées d’exécution (interne / externe / hybride) et d’un filtre de métadonnées à triple axe, surpassant le RAG classique avec <strong>100&nbsp;% contre 37&nbsp;%</strong> de précision de portée sur un benchmark clinique de 30 questions.',
      li_21: 'Mise en œuvre d’un <strong>pipeline de pseudonymisation des données personnelles</strong> masquant l’identité du patient avant toute inférence LLM externe, pour un traitement conforme au RGPD.',
      li_22: 'Optimisation de la latence d’inférence d’un facteur <strong>&times;15</strong> (38,7&nbsp;s &rarr; 2,5&nbsp;s) par quantification INT8 du reranker, sans altérer les décisions de pertinence sur le corpus réel.',

      li_23: 'Conception et mise en œuvre de tableaux de bord décisionnels pour le suivi de la performance commerciale dans la distribution.',
      li_24: 'Création de tableaux de bord interactifs pour <strong>la gestion des stocks, l’analyse du chiffre d’affaires et le suivi de la satisfaction client</strong>.',
      li_25: 'Modélisation et intégration de données issues de sources multiples pour garantir des <strong>indicateurs</strong> justes et cohérents.',
      li_26: 'Développement de métriques avancées et de mesures calculées en <strong>DAX</strong>.',
      li_27: 'Déploiement des tableaux de bord et des solutions de données sur Microsoft Azure pour un accès sécurisé et évolutif.',

      tsub_1: 'Fine-tuning de F5-TTS pour la synthèse vocale neuronale en arabe',
      li_28: 'Implémentation et fine-tuning du modèle <strong>F5-TTS</strong> pour la génération de parole en arabe.',
      li_29: 'Application de stratégies d’entraînement progressif pour améliorer la stabilité du modèle et la qualité audio.',
      li_30: 'Optimisation des performances d’inférence pour une parole plus fluide et plus naturelle.',
      li_31: 'Évaluation de la parole générée par des métriques techniques et des tests d’écoute perceptifs.',

      eyebrow_3: 'Mes outils',
      sectitle_3: 'Compétences &amp; technologies',
      secsub_3: 'Des pipelines de données à l’entraînement de modèles, jusqu’au déploiement conteneurisé dans le cloud.',
      skill_1: 'Programmation', skill_2: 'Données &amp; Big Data',
      skill_3: 'Machine learning &amp; IA', skill_4: 'Outils &amp; plateformes',

      langname_1: 'Arabe', langlevel_1: 'Langue maternelle',
      langname_2: 'Anglais', langlevel_2: 'Niveau professionnel',
      langname_3: 'Français', langlevel_3: 'Niveau professionnel',

      eyebrow_4: 'Parcours académique',
      sectitle_4: 'Formation',
      infoh_1: 'École Nationale d’Électronique et des Télécommunications de Sfax (ENET’Com)',
      degree_1: 'Diplôme d’ingénieur en Data Science',
      infop_1: 'Cursus d’ingénieur couvrant le machine learning, le deep learning, les architectures big data, la modélisation statistique et le déploiement cloud.',
      infoh_2: 'Institut Préparatoire aux Études d’Ingénieurs de Kairouan (IPEIK)',
      degree_2: 'Cycle préparatoire &mdash; filière Technologie et Physique',
      infop_2: 'Deux années de préparation intensive en mathématiques, physique et sciences de l’ingénieur en vue du concours national d’entrée aux écoles d’ingénieurs.',

      eyebrow_5: 'Attestations',
      sectitle_5: 'Certifications',

      eyebrow_6: 'Au-delà du code',
      sectitle_6: 'Engagement &amp; activités',
      degree_3: 'Participant',
      infop_3: 'Développement de mon réseau parmi les chercheurs en IA et les experts du secteur, et approfondissement des tendances de recherche les plus récentes en ML.',
      degree_4: 'Membre actif',
      infop_4: 'Participation au hackathon MindShift, avec une contribution au développement de projets IA/ML et à la résolution collaborative de problèmes.',
      degree_5: 'Membre',
      infop_5: 'Participation à des projets communautaires et à des initiatives de leadership, développant la gestion de projet, le travail en équipe et la communication au travers d’actions à impact social.',

      eyebrow_7: 'Ce que dit mon encadrant',
      sectitle_7: 'Recommandation',
      secsub_4: 'Du professeur qui m’a enseigné quatre matières et a encadré mon projet de fin d’année.',
      rectitle_1: 'Professeur de mathématiques appliquées',
      recaff_1: 'Département de mathématiques et informatique décisionnelle',
      recaff_2: 'École Nationale d’Électronique et des Télécommunications de Sfax (ENET’Com), Université de Sfax, Tunisie',
      recdate_1: '3 septembre 2026 &middot; A enseigné à Mahrane et encadré son projet',
      quote_1: '&laquo;&nbsp;Mon appréciation repose sur une base inhabituellement large. Mahrane a suivi quatre de mes enseignements du cursus d’ingénieur en Data Science : <strong>Optimisation et calcul différentiel</strong>, <strong>Machine Learning</strong> et <strong>Deep Learning</strong>, qu’il a validés, et au cours de l’année universitaire en cours (2026&ndash;2027) il suivra mes deux électifs de niveau master, <strong>IA générative</strong> et <strong>Apprentissage par renforcement</strong>. Au-delà des cours, de décembre 2025 à avril 2026, j’ai été l’encadrant direct de son projet de fin d’année. Le machine learning est mon propre domaine de recherche et, durant ces quatre mois d’encadrement quotidien, j’ai supervisé huit autres étudiants de niveau comparable ; face à ce groupe de référence, Mahrane était sans ambiguïté le plus fort.&nbsp;&raquo;',
      highlight_1: 'Sans ambiguïté le plus fort de sa promotion',

      eyebrow_8: 'Me contacter',
      sectitle_8: 'Travaillons ensemble',
      secsub_5: 'Je suis ouvert aux stages, aux premiers postes et aux collaborations en IA, data science et ingénierie du machine learning. Le plus simple pour me joindre est l’e-mail.',

      footer_1: '&copy; <span id="year">2026</span> Mahrane AMOR. Tous droits réservés.',
      footer_2: 'Réalisé en HTML, CSS et JavaScript purs.'
    },

    /* ---------------------------------------------------------------- DE -- */
    de: {
      nav_1: 'Start', nav_2: 'Projekte', nav_3: 'Erfahrung', nav_4: 'Kenntnisse',
      nav_5: 'Ausbildung', nav_6: 'Zertifikate', nav_7: 'Aktivitäten',
      nav_8: 'Empfehlung', nav_9: 'Kontakt',

      badge_1: 'Offen für Praktika und Einstiegspositionen',
      tw_1: 'Data-Science-Student &amp; ',
      tw_2: 'MLOps-Enthusiast',
      herosub_1: 'Data-Science-Student im Abschlussjahr an der ENET’Com. Ich entwickle produktionsreife KI-Systeme &mdash; agentische RAG-Architekturen, Deep-Learning-Modelle und Echtzeit-Datenpipelines. Mich interessiert vor allem, was KI in der Praxis nutzbar macht: belegbare Antworten, datenschutzkonforme Pipelines und Inferenz, die schnell genug für den Produktivbetrieb ist.',

      btn_1: 'Projekte ansehen', btn_2: 'Lebenslauf herunterladen', btn_3: 'Kontakt aufnehmen',

      stat_1: 'KI- &amp; Data-Praktika', stat_2: 'Ausgewählte Projekte',
      stat_3: 'Zertifikate', stat_4: 'Gesprochene Sprachen',

      eyebrow_1: 'Ausgewählte Arbeiten',
      sectitle_1: 'Projekte',
      secsub_1: 'End-to-End-Systeme aus agentischer KI, medizinischer Bildgebung, prädiktiver Modellierung und Echtzeit-Datentechnik &mdash; jedes entwickelt, evaluiert und ausgeliefert.',

      pmeta_1: 'Agentische KI &middot; Gesundheitswesen',
      ptitle_1: 'YouRi &mdash; Agentischer RAG-Medizinassistent',
      pdesc_1: 'Ein intelligenter Assistent für klinische Fragen und Antworten auf Basis einer agentischen RAG-Architektur mit LangGraph, bei dem jede LLM-Antwort auf überprüfbaren Quellen beruht, um Halluzinationen auszuschließen.',
      li_1: 'Entwicklung eines <strong>Query-Routers mit drei Ausführungsbereichen</strong> (intern / extern / hybrid) sowie eines dreiachsigen Metadatenfilters &mdash; <strong>100&nbsp;% Scope-Genauigkeit gegenüber 37&nbsp;%</strong> bei klassischem RAG in einem klinischen Benchmark mit 30 Fragen.',
      li_2: 'Aufbau einer <strong>PII-Pseudonymisierungs-Pipeline</strong>, die Patientendaten (Namen &rarr; interne IDs, Geburtsdatum &rarr; Alter) vor jeder externen LLM-Inferenz unkenntlich macht und so eine DSGVO-konforme Verarbeitung sicherstellt.',
      li_3: 'Reduktion der Inferenzlatenz um das <strong>15-Fache (38,7&nbsp;s &rarr; 2,5&nbsp;s)</strong> durch INT8-Quantisierung des Rerankers bei unveränderten Relevanzentscheidungen auf dem realen Korpus.',

      pmeta_2: 'Deep Learning &middot; Medizinische Bildgebung',
      ptitle_2: 'GlioScan &mdash; 3D-Hirntumorsegmentierung',
      pdesc_2: 'Eine U-Net-Pipeline, die Hirntumore aus multimodalen MRT-Aufnahmen des BraTS-2021-Datensatzes segmentiert und über eine FastAPI-Weboberfläche bereitstellt.',
      li_4: 'Training von 2D- und 3D-U-Nets auf FLAIR-/T1-/T1ce-/T2-Volumina von <strong>600 BraTS-2021-Patienten</strong> mit einem <strong>mittleren Dice von 0,942</strong> (Gesamttumor 0,926, Tumorkern 0,953, anreichernder Tumor 0,946).',
      li_5: 'Vollständige PyTorch-Pipeline &mdash; Volumen-Caching, kombinierter Dice- und Kreuzentropie-Verlust, Metriken je Region und Test-Time-Augmentation &mdash; trainiert in <strong>rund 80 Minuten auf einer einzelnen RTX 4050 mit 6&nbsp;GB</strong>.',
      li_6: 'Enthält einen FastAPI-Dienst mit <strong>/predict</strong>-Endpunkt und Upload-Oberfläche: die vier NIfTI-Volumina eines Patienten hochladen und der Tumor wird in Sekunden auf den axialen Schichten eingeblendet.',

      pmeta_3: 'Data Engineering &middot; MLOps',
      ptitle_3: 'Echtzeit-Anomalieerkennung in 5G-Netzen',
      pdesc_3: 'Eine Streaming-Pipeline, die die Leistung von 5G-Netzen in Echtzeit überwacht und Ausfälle sowie Sicherheitsbedrohungen unmittelbar meldet.',
      li_7: 'Streaming-Ingestion mit <strong>Apache Kafka</strong> als Zulauf für eine Echtzeit-Verarbeitungspipeline.',
      li_8: 'ML- und Deep-Learning-Modelle zur Erkennung von Netzausfällen und Sicherheitsanomalien.',
      li_9: 'Vorhersagen über <strong>REST-APIs</strong> bereitgestellt und in Power-BI-Dashboards zur Entscheidungsunterstützung dargestellt.',

      pmeta_4: 'Computer Vision &middot; Medizinische Bildgebung',
      ptitle_4: 'Brustkrebserkennung mit CNNs',
      pdesc_4: 'Ein Convolutional Neural Network zur Brustkrebserkennung auf medizinischen Bilddaten, containerisiert und für skalierbare Inferenz bereitgestellt.',
      li_10: 'Bildvorverarbeitung: Skalierung, Normalisierung und <strong>Data Augmentation</strong>.',
      li_11: 'Training und Evaluierung in TensorFlow / PyTorch, optimiert anhand von Validierungsmetriken.',
      li_12: 'Inferenz-Pipeline mit Docker containerisiert und auf <strong>Azure ML / App Service</strong> hinter einer REST-API bereitgestellt.',

      pmeta_5: 'Machine Learning &middot; Deployment',
      ptitle_5: 'Vorhersage der Schwere von Verkehrsunfällen',
      pdesc_5: 'Prädiktive Modelle, die die Unfallschwere aus Verkehrsunfalldaten schätzen und über eine CI/CD-Pipeline in die Cloud ausgeliefert werden.',
      li_13: 'Datenerhebung und -aufbereitung: fehlende Werte, Kodierung kategorialer Merkmale, anschließend <strong>explorative Datenanalyse</strong> zur Bestimmung der Einflussfaktoren.',
      li_14: 'Aufbau und Feinabstimmung von <strong>logistischer Regression, Random Forest und XGBoost</strong>.',
      li_15: 'Bewertet anhand von Accuracy, F1-Score und ROC-AUC; Deployment über Docker und CI/CD auf Azure.',

      pmeta_6: 'Data Engineering &middot; Automatisierung',
      ptitle_6: 'Tayara.tn Fahrzeug-Scraper',
      pdesc_6: 'Ein Scraper in zwei Ausführungen, der Fahrzeuganzeigen von Tayara.tn extrahiert und strukturiert &mdash; ein automatisierter n8n-Workflow für geplante No-Code-Läufe sowie ein eigenständiges Python-Skript zur Pipeline-Integration.',
      li_16: 'Mehrseitiges Scraping über <strong>30+ Seiten</strong> mit automatischem Retry und intelligenten Wartezeiten &mdash; etwa <strong>20 Seiten in 2&ndash;3 Minuten</strong> bei über 95&nbsp;% Erfolgsquote.',
      li_17: 'Ein <strong>Mistral-AI</strong>-Agent bereinigt und normalisiert die Schlüsselfelder (Marke, Modell, Baujahr, Preis, Kraftstoff, Getriebe, Ort) zu einer zu 100&nbsp;% validen, analysebereiten CSV-Datei.',
      li_18: 'Zwei austauschbare Wege: ein n8n-Workflow mit der Jina.ai-API für geplante No-Code-Läufe und ein Skript mit <strong>requests und BeautifulSoup</strong> für Entwickler, die eigene Filter oder Exportformate brauchen.',

      srclink_1: 'Quellcode ansehen', srclink_2: 'Quellcode ansehen',
      srclink_3: 'Quellcode ansehen', srclink_4: 'Quellcode ansehen',

      eyebrow_2: 'Meine bisherigen Stationen',
      sectitle_2: 'Erfahrung',
      secsub_2: 'Drei Praktika in agentischer KI, Business Intelligence und Sprachsynthese.',

      role_1: 'Praktikant KI-Entwicklung', role_2: 'Praktikant Datenanalyse', role_3: 'Praktikant KI-Entwicklung',
      date_1: 'Juli 2026 &mdash; Aug. 2026', date_2: 'Aug. 2025', date_3: 'Juni 2025 &mdash; Juli 2025',

      li_19: 'Konzeption und Umsetzung von <strong>YouRi</strong>, einem intelligenten medizinischen Assistenten auf Basis einer agentischen RAG-Architektur (LangGraph), bei dem jede LLM-Antwort auf überprüfbaren Quellen beruht, um Halluzinationen in klinischen Frage-Antwort-Szenarien auszuschließen.',
      li_20: 'Entwicklung eines Query-Routers mit drei Ausführungsbereichen (intern / extern / hybrid) und eines dreiachsigen Metadatenfilters &mdash; <strong>100&nbsp;% gegenüber 37&nbsp;%</strong> Scope-Genauigkeit im Vergleich zu klassischem RAG in einem klinischen Benchmark mit 30 Fragen.',
      li_21: 'Implementierung einer <strong>PII-Pseudonymisierungs-Pipeline</strong>, die die Patientenidentität vor jeder externen LLM-Inferenz entfernt und DSGVO-konforme Verarbeitung sicherstellt.',
      li_22: 'Optimierung der Inferenzlatenz um den Faktor <strong>15</strong> (38,7&nbsp;s &rarr; 2,5&nbsp;s) durch INT8-Quantisierung des Rerankers bei unveränderten Relevanzentscheidungen auf dem realen Korpus.',

      li_23: 'Konzeption und Umsetzung von Entscheidungs-Dashboards zur Überwachung der Vertriebsleistung im Einzelhandel.',
      li_24: 'Aufbau interaktiver Dashboards für <strong>Bestandsverwaltung, Umsatzanalyse und Kundenzufriedenheit</strong>.',
      li_25: 'Modellierung und Integration von Daten aus mehreren Quellen für korrekte und konsistente <strong>KPIs</strong>.',
      li_26: 'Entwicklung fortgeschrittener Kennzahlen und berechneter Measures mit <strong>DAX</strong>.',
      li_27: 'Bereitstellung von Dashboards und Datenlösungen auf Microsoft Azure für sicheren, skalierbaren Zugriff.',

      tsub_1: 'Fine-Tuning von F5-TTS für arabische neuronale Sprachsynthese',
      li_28: 'Implementierung und Fine-Tuning des <strong>F5-TTS</strong>-Modells für arabische Sprachgenerierung.',
      li_29: 'Einsatz progressiver Trainingsstrategien zur Verbesserung von Modellstabilität und Audioqualität.',
      li_30: 'Optimierung der Inferenzleistung für flüssigere, natürlichere Sprachausgabe.',
      li_31: 'Bewertung der erzeugten Sprache mit technischen Metriken und perzeptiven Hörtests.',

      eyebrow_3: 'Womit ich arbeite',
      sectitle_3: 'Kenntnisse &amp; Technologien',
      secsub_3: 'Von Datenpipelines und Modelltraining bis zum containerisierten Deployment in der Cloud.',
      skill_1: 'Programmierung', skill_2: 'Daten &amp; Big Data',
      skill_3: 'Machine Learning &amp; KI', skill_4: 'Tools &amp; Plattformen',

      langname_1: 'Arabisch', langlevel_1: 'Muttersprache',
      langname_2: 'Englisch', langlevel_2: 'Verhandlungssicher',
      langname_3: 'Französisch', langlevel_3: 'Verhandlungssicher',

      eyebrow_4: 'Akademischer Werdegang',
      sectitle_4: 'Ausbildung',
      infoh_1: 'Nationale Hochschule für Elektronik und Telekommunikation Sfax (ENET’Com)',
      degree_1: 'Ingenieurstudium Data Science',
      infop_1: 'Ingenieurstudium mit Machine Learning, Deep Learning, Big-Data-Architekturen, statistischer Modellierung und Cloud-Deployment.',
      infoh_2: 'Vorbereitungsinstitut für Ingenieurstudien Kairouan (IPEIK)',
      degree_2: 'Vorbereitungszyklus &mdash; Fachrichtung Technik und Physik',
      infop_2: 'Zweijährige intensive Vorbereitung in Mathematik, Physik und Ingenieurwissenschaften für den nationalen Aufnahmewettbewerb der Ingenieurschulen.',

      eyebrow_5: 'Nachweise',
      sectitle_5: 'Zertifikate',

      eyebrow_6: 'Über den Code hinaus',
      sectitle_6: 'Engagement &amp; Aktivitäten',
      degree_3: 'Teilnehmer',
      infop_3: 'Ausbau meines Netzwerks unter KI-Forschenden und Branchenexperten sowie vertieftes Verständnis aktueller ML-Forschungstrends.',
      degree_4: 'Aktives Mitglied',
      infop_4: 'Teilnahme am MindShift-Hackathon mit Beiträgen zur Entwicklung von KI-/ML-Projekten und zur gemeinsamen Problemlösung.',
      degree_5: 'Mitglied',
      infop_5: 'Mitwirkung an Gemeinschaftsprojekten und Führungsinitiativen mit Entwicklung von Projektmanagement-, Team- und Kommunikationsfähigkeiten durch gesellschaftlich wirksame Aktivitäten.',

      eyebrow_7: 'Was mein Betreuer sagt',
      sectitle_7: 'Empfehlung',
      secsub_4: 'Von dem Professor, der mich in vier Lehrveranstaltungen unterrichtet und mein Jahresabschlussprojekt betreut hat.',
      rectitle_1: 'Professor für Angewandte Mathematik',
      recaff_1: 'Fachbereich Mathematik und Entscheidungsinformatik',
      recaff_2: 'Nationale Hochschule für Elektronik und Telekommunikation Sfax (ENET’Com), Universität Sfax, Tunesien',
      recdate_1: '3. September 2026 &middot; Hat Mahrane unterrichtet und direkt betreut',
      quote_1: '&bdquo;Meine Einschätzung beruht auf einer ungewöhnlich breiten Grundlage. Mahrane hat vier meiner Lehrveranstaltungen im Data-Science-Ingenieurstudium besucht: <strong>Optimierung und Differentialrechnung</strong>, <strong>Machine Learning</strong> und <strong>Deep Learning</strong>, die er abgeschlossen hat, und im laufenden Studienjahr (2026&ndash;2027) wird er meine beiden Master-Wahlfächer <strong>Generative KI</strong> und <strong>Reinforcement Learning</strong> belegen. Über den Hörsaal hinaus war ich von Dezember 2025 bis April 2026 der direkte Betreuer seines Jahresabschlussprojekts. Machine Learning ist mein eigenes Forschungsgebiet, und in diesen vier Monaten täglicher Betreuung habe ich acht weitere Studierende vergleichbaren Niveaus betreut; gemessen an dieser Vergleichsgruppe war Mahrane eindeutig der Stärkste.&ldquo;',
      highlight_1: 'Eindeutig der Stärkste seines Jahrgangs',

      eyebrow_8: 'Kontakt',
      sectitle_8: 'Arbeiten wir zusammen',
      secsub_5: 'Ich bin offen für Praktika, Einstiegspositionen und Kooperationen in KI, Data Science und Machine-Learning-Engineering. Am schnellsten erreichen Sie mich per E-Mail.',

      footer_1: '&copy; <span id="year">2026</span> Mahrane AMOR. Alle Rechte vorbehalten.',
      footer_2: 'Gebaut mit reinem HTML, CSS und JavaScript.'
    }
  };

  /* ---------------------------------------------------------------------- */

  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = {};   // English captured from the HTML, so 'en' needs no dictionary
  var i;

  for (i = 0; i < nodes.length; i++) {
    EN[nodes[i].getAttribute('data-i18n')] = nodes[i].innerHTML;
  }

  function stored() {
    try {
      var v = localStorage.getItem('lang');
      return LANGS.indexOf(v) > -1 ? v : null;
    } catch (e) { return null; }
  }

  function preferred() {
    var saved = stored();
    if (saved) return saved;
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return LANGS.indexOf(nav) > -1 ? nav : 'en';
  }

  function apply(lang) {
    var dict = lang === 'en' ? EN : DICT[lang];
    if (!dict) return;

    for (var j = 0; j < nodes.length; j++) {
      var key = nodes[j].getAttribute('data-i18n');
      var val = dict[key];
      if (val === undefined) val = EN[key];   // proper nouns keep their English
      if (val !== undefined) nodes[j].innerHTML = val;
    }

    document.documentElement.setAttribute('lang', lang);

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    var select = document.querySelector('.lang-select');
    if (select && select.value !== lang) select.value = lang;

    try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }

    // script.js listens for this to retype the hero sentence.
    document.dispatchEvent(new CustomEvent('i18n:change', { detail: { lang: lang } }));
  }

  window.setLanguage = apply;

  var select = document.querySelector('.lang-select');
  if (select) {
    select.addEventListener('change', function () { apply(select.value); });
  }

  apply(preferred());
})();
