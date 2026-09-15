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

  /* Proper nouns (people, companies, institutions, certificate and technology
     names) are intentionally absent below, so they fall back to English. */
  var DICT = {

    /* ---------------------------------------------------------------- FR -- */
    fr: {
      nav_home: 'Accueil', nav_projects: 'Projets', nav_experience: 'Expérience',
      nav_skills: 'Compétences', nav_education: 'Formation', nav_certs: 'Certifications',
      nav_activities: 'Associatif', nav_recommendation: 'Recommandation', nav_contact: 'Contact',

      hero_badge: 'Ouvert aux stages et aux opportunités de jeune diplômé',
      hero_role_lead: 'Élève ingénieur en Data Science &amp; ',
      hero_role_accent: 'passionné de MLOps',
      hero_sub: 'Élève ingénieur en dernière année de Data Science à l’ENET’Com, je conçois des systèmes d’IA prêts pour la production &mdash; architectures RAG agentiques, modèles de deep learning et pipelines de données en temps réel. Ce qui m’intéresse, c’est ce qui rend l’IA réellement utilisable : des réponses sourcées, des pipelines respectueux de la vie privée et une inférence assez rapide pour être déployée.',

      btn_work: 'Voir mes projets', btn_cv: 'Télécharger le CV', btn_contact: 'Me contacter',

      stat_internships: 'Stages en IA &amp; Data', stat_projects: 'Projets présentés',
      stat_certs: 'Certifications', stat_languages: 'Langues parlées',

      eyebrow_projects: 'Travaux sélectionnés',
      title_projects: 'Projets',
      sub_projects: 'Des systèmes de bout en bout en IA agentique, imagerie médicale, modélisation prédictive et ingénierie de données temps réel &mdash; chacun conçu, évalué et déployé.',
      link_source: 'Voir le code',

      p1_meta: 'IA agentique &middot; Santé',
      p1_title: 'YouRi &mdash; Assistant médical RAG agentique',
      p1_desc: 'Un assistant médical intelligent bâti sur une architecture RAG agentique avec LangGraph, raisonnant à la fois sur les dossiers patients et sur les connaissances médicales externes pour que chaque réponse reste fondée sur des sources vérifiables.',
      p1_b1: 'Conception d’une <strong>architecture RAG agentique avec LangGraph</strong>, permettant un raisonnement médical contextuel sur les dossiers patients et les connaissances médicales externes.',
      p1_b2: 'Développement d’un pipeline de recherche médicale combinant <strong>recherche hybride, reranking, RAG correctif (CRAG), routage de requêtes et recherche par spécialité</strong> pour des réponses sourcées.',
      p1_b3: 'Évaluations comparatives de LLM médicaux et de modèles de reconnaissance vocale open source &mdash; <strong>MedGemma, Llama, Qwen, Whisper Large-v3 et faster-whisper</strong> &mdash; selon des critères de performance et d’intégration.',
      p1_b4: 'Intégration de <strong>faster-whisper</strong> dans le workflow agentique, transformant les requêtes cliniques orales en texte structuré pour la classification des requêtes, la recherche et le raisonnement du LLM en aval.',

      p2_meta: 'Deep learning &middot; Imagerie médicale',
      p2_title: 'GlioScan &mdash; Segmentation 3D de tumeurs cérébrales',
      p2_desc: 'Segmentation multi-classes de tumeurs cérébrales à partir d’IRM multimodales, fondée sur des U-Nets 2D et 3D en PyTorch et exposée via une interface FastAPI.',
      p2_b1: 'Développement de modèles de deep learning <strong>U-Net 2D et 3D</strong> pour la segmentation multi-classes de tumeurs cérébrales à partir d’IRM multimodales, en PyTorch.',
      p2_b2: 'Conception du pipeline de prétraitement d’imagerie médicale : <strong>traitement NIfTI, normalisation z-score, recadrage spatial, redimensionnement en profondeur</strong> et préparation des données volumétriques.',
      p2_b3: 'Optimisation de l’entraînement avec <strong>perte Dice + entropie croisée, ordonnancement cosinus du taux d’apprentissage et précision mixte (AMP)</strong>, avec séparation au niveau patient pour éviter toute fuite de données.',
      p2_b4: 'Évaluation par <strong>scores Dice sur les régions Whole Tumor, Tumor Core et Enhancing Tumor</strong>, et déploiement de l’inférence via une interface FastAPI.',

      p3_meta: 'Ingénierie des données &middot; MLOps',
      p3_title: 'Surveillance et détection d’anomalies en temps réel dans les réseaux 5G',
      p3_desc: 'Un pipeline de streaming qui surveille les performances du réseau 5G en temps réel et signale pannes et menaces de sécurité dès qu’elles surviennent.',
      p3_b1: 'Conception et mise en œuvre d’un <strong>pipeline de données temps réel</strong> pour la surveillance des performances du réseau 5G à l’aide de technologies de streaming, avec une analyse exploratoire pour identifier les facteurs clés des anomalies réseau.',
      p3_b2: 'Intégration des composants de traitement via <strong>Apache Kafka</strong> pour l’ingestion et la communication en temps réel.',
      p3_b3: 'Développement de modèles de machine learning et de deep learning pour détecter les anomalies telles que pannes réseau et menaces de sécurité, avec exposition des résultats via des <strong>API REST</strong> et des tableaux de bord interactifs.',
      p3_b4: 'Visualisation des indicateurs réseau et des anomalies dans <strong>Power BI</strong> pour l’aide à la décision et le monitoring.',

      p4_meta: 'Machine learning &middot; Déploiement',
      p4_title: 'Prédiction de la gravité des accidents de la route',
      p4_desc: 'Des modèles prédictifs qui estiment la gravité des accidents à partir de données routières, livrés dans le cloud via un pipeline CI/CD.',
      p4_b1: 'Collecte et prétraitement des données : valeurs manquantes, encodage des variables catégorielles, puis <strong>analyse exploratoire</strong> pour isoler les facteurs de gravité.',
      p4_b2: 'Construction et optimisation de modèles de <strong>régression logistique, forêt aléatoire et XGBoost</strong>.',
      p4_b3: 'Évalués sur l’exactitude, le score F1 et l’AUC-ROC ; déployés via Docker + CI/CD sur Azure.',

      p5_meta: 'Vision par ordinateur &middot; Imagerie médicale',
      p5_title: 'Détection du cancer du sein par CNN',
      p5_desc: 'Un réseau de neurones convolutif pour la détection du cancer du sein sur des données d’imagerie médicale, conteneurisé et déployé pour une inférence à l’échelle.',
      p5_b1: 'Pipeline de prétraitement des images : redimensionnement, normalisation et <strong>augmentation de données</strong>.',
      p5_b2: 'Entraîné et évalué sous TensorFlow / PyTorch, optimisé sur les métriques de validation.',
      p5_b3: 'Pipeline d’inférence conteneurisé avec Docker et déployé sur <strong>Azure ML / App Service</strong> derrière une API REST.',

      p6_meta: 'Ingénierie des données &middot; Automatisation',
      p6_title: 'Extracteur d’annonces automobiles Tayara.tn',
      p6_desc: 'Un extracteur en double implémentation qui récupère et structure les annonces de véhicules de Tayara.tn &mdash; un workflow n8n automatisé pour des exécutions planifiées sans code, et un script Python autonome pour l’intégration dans un pipeline.',
      p6_b1: 'Extraction multi-pages sur <strong>plus de 30 pages</strong> avec reprise automatique et délais intelligents &mdash; environ <strong>20 pages en 2 à 3 minutes</strong> avec un taux de réussite supérieur à 95&nbsp;%.',
      p6_b2: 'Un agent <strong>Mistral AI</strong> nettoie et normalise les champs clés (marque, modèle, année, prix, carburant, boîte, localisation) en un CSV valide à 100&nbsp;%, prêt à l’analyse.',
      p6_b3: 'Deux voies interchangeables : un workflow n8n s’appuyant sur l’API Jina.ai pour des exécutions planifiées sans code, et un script <strong>requests + BeautifulSoup</strong> pour les développeurs souhaitant des filtres ou formats d’export personnalisés.',

      eyebrow_exp: 'Mon parcours professionnel',
      title_exp: 'Expérience',
      sub_exp: 'Trois stages en IA agentique, synthèse vocale et business intelligence.',

      e1_role: 'Stagiaire ingénieur IA', e1_date: 'Juil. 2026 &mdash; Août 2026',
      e1_loc: 'À distance', e1_sub: 'Assistant médical intelligent',
      e1_b1: 'Conception d’une <strong>architecture RAG agentique avec LangGraph</strong>, permettant un raisonnement médical contextuel sur les dossiers patients et les connaissances médicales externes.',
      e1_b2: 'Développement d’un pipeline de recherche médicale combinant <strong>recherche hybride, reranking, RAG correctif (CRAG), routage de requêtes et recherche par spécialité</strong> pour des réponses sourcées.',
      e1_b3: 'Réalisation d’évaluations comparatives de LLM médicaux et de modèles de reconnaissance vocale open source &mdash; <strong>MedGemma, Llama, Qwen, Whisper Large-v3 et faster-whisper</strong> &mdash; selon des critères de performance et d’intégration.',
      e1_b4: 'Intégration de <strong>faster-whisper</strong> dans le workflow agentique, transformant les requêtes cliniques orales en entrées textuelles structurées pour la classification des requêtes, la recherche et le raisonnement du LLM en aval.',

      e2_role: 'Stagiaire ingénieur IA', e2_date: 'Juil. 2025 &mdash; Août 2025',
      e2_loc: 'À distance', e2_sub: 'Fine-tuning de F5-TTS pour la synthèse vocale neuronale en arabe',
      e2_b1: 'Implémentation et fine-tuning du modèle <strong>F5-TTS</strong> pour la génération de parole en arabe.',
      e2_b2: 'Application de stratégies d’entraînement progressif pour améliorer la stabilité du modèle et la qualité audio.',
      e2_b3: 'Optimisation des performances d’inférence pour une parole plus fluide et plus naturelle.',
      e2_b4: 'Évaluation de la parole générée par des métriques techniques et des tests d’écoute perceptifs.',

      e3_role: 'Stagiaire data analyst', e3_date: 'Juin 2025',
      e3_loc: 'À distance', e3_sub: 'Business intelligence et analyse de performance dans la distribution',
      e3_b1: 'Conception et mise en œuvre de tableaux de bord décisionnels pour le suivi de la performance commerciale dans la distribution.',
      e3_b2: 'Création de tableaux de bord interactifs pour <strong>la gestion des stocks, l’analyse du chiffre d’affaires et le suivi de la satisfaction client</strong>.',
      e3_b2b: 'Optimisation des performances d’inférence pour une parole plus fluide et plus naturelle.',
      e3_b3: 'Modélisation et intégration de données issues de sources multiples pour garantir des <strong>indicateurs</strong> justes et cohérents.',
      e3_b4: 'Développement de métriques avancées et de mesures calculées en <strong>DAX</strong>.',
      e3_b5: 'Déploiement des tableaux de bord et des solutions de données sur Microsoft Azure pour un accès sécurisé et évolutif.',

      eyebrow_skills: 'Mes outils',
      title_skills: 'Compétences &amp; technologies',
      sub_skills: 'Des pipelines de données à l’entraînement de modèles, jusqu’au déploiement conteneurisé dans le cloud.',
      skill_programming: 'Langages de programmation', skill_bigdata: 'Big Data',
      skill_ai: 'IA &amp; machine learning', skill_devops: 'DevOps &amp; déploiement',
      skill_tools: 'Systèmes &amp; outils',

      lang_ar: 'Arabe', level_native: 'Langue maternelle',
      lang_en: 'Anglais', level_fluent_en: 'Courant',
      lang_fr: 'Français', level_fluent_fr: 'Courant',
      lang_de: 'Allemand', level_a2: 'Niveau A2',

      eyebrow_edu: 'Parcours académique',
      title_edu: 'Formation',
      edu1_name: 'École Nationale d’Électronique et des Télécommunications de Sfax (ENET’Com)',
      edu1_degree: 'Ingénierie des données et systèmes décisionnels (Data Science)',
      edu1_date: 'Sep. 2024 &mdash; en cours',
      edu1_desc: 'Cursus d’ingénieur couvrant le machine learning, le deep learning, les architectures big data, la modélisation statistique et le déploiement cloud.',
      edu2_name: 'Institut Préparatoire aux Études d’Ingénieurs de Kairouan (IPEIK)',
      edu2_degree: 'Cycle préparatoire &mdash; filière Technologie et Physique',
      edu2_date: 'Sep. 2022 &mdash; Mai 2024',
      edu2_desc: 'Deux années de préparation intensive en mathématiques, physique et sciences de l’ingénieur en vue du concours national d’entrée aux écoles d’ingénieurs.',

      eyebrow_certs: 'Attestations',
      title_certs: 'Certifications',

      eyebrow_act: 'Au-delà du code',
      title_act: 'Engagement associatif',
      act1_role: 'Participant', act1_date: 'Janvier 2026',
      act1_desc: 'Développement de mon réseau parmi les chercheurs en IA et les experts du secteur, et approfondissement des tendances de recherche les plus récentes en ML.',
      act2_role: 'Membre actif', act2_date: 'Sep. 2024 &mdash; en cours',
      act2_desc: 'Participation au hackathon MindShift, avec une contribution au développement de projets IA/ML et à la résolution collaborative de problèmes.',
      act3_role: 'Membre actif', act3_date: 'Sep. 2021 &mdash; Août 2024',
      act3_desc: 'Participation à des projets communautaires et à des initiatives de leadership, développant la gestion de projet, le travail en équipe et la communication au travers d’actions à impact social.',

      eyebrow_rec: 'Ce que dit mon encadrant',
      title_rec: 'Recommandation',
      sub_rec: 'Du professeur qui m’a enseigné quatre matières et a encadré mon projet de fin d’année.',
      rec_title: 'Professeur de mathématiques appliquées',
      rec_dept: 'Département de mathématiques et informatique décisionnelle',
      rec_school: 'École Nationale d’Électronique et des Télécommunications de Sfax (ENET’Com), Université de Sfax, Tunisie',
      rec_date: '3 septembre 2026 &middot; A enseigné à Mahrane et encadré son projet',
      rec_quote: '&laquo;&nbsp;Mon appréciation repose sur une base inhabituellement large. Mahrane a suivi quatre de mes enseignements du cursus d’ingénieur en Data Science : <strong>Optimisation et calcul différentiel</strong>, <strong>Machine Learning</strong> et <strong>Deep Learning</strong>, qu’il a validés, et au cours de l’année universitaire en cours (2026&ndash;2027) il suivra mes deux électifs de niveau master, <strong>IA générative</strong> et <strong>Apprentissage par renforcement</strong>. Au-delà des cours, de décembre 2025 à avril 2026, j’ai été l’encadrant direct de son projet de fin d’année. Le machine learning est mon propre domaine de recherche et, durant ces quatre mois d’encadrement quotidien, j’ai supervisé huit autres étudiants de niveau comparable ; face à ce groupe de référence, Mahrane était sans ambiguïté le plus fort.&nbsp;&raquo;',
      rec_highlight: 'Sans ambiguïté le plus fort de sa promotion',

      eyebrow_contact: 'Me contacter',
      title_contact: 'Travaillons ensemble',
      sub_contact: 'Je suis ouvert aux stages, aux premiers postes et aux collaborations en IA, data science et ingénierie du machine learning. Le plus simple pour me joindre est l’e-mail.',

      footer_copy: '&copy; <span id="year">2026</span> Mahrane AMOR. Tous droits réservés.',
      footer_built: 'Réalisé en HTML, CSS et JavaScript purs.'
    },

    /* ---------------------------------------------------------------- DE -- */
    de: {
      nav_home: 'Start', nav_projects: 'Projekte', nav_experience: 'Erfahrung',
      nav_skills: 'Kenntnisse', nav_education: 'Ausbildung', nav_certs: 'Zertifikate',
      nav_activities: 'Engagement', nav_recommendation: 'Empfehlung', nav_contact: 'Kontakt',

      hero_badge: 'Offen für Praktika und Einstiegspositionen',
      hero_role_lead: 'Data-Science-Student &amp; ',
      hero_role_accent: 'MLOps-Enthusiast',
      hero_sub: 'Data-Science-Student im Abschlussjahr an der ENET’Com. Ich entwickle produktionsreife KI-Systeme &mdash; agentische RAG-Architekturen, Deep-Learning-Modelle und Echtzeit-Datenpipelines. Mich interessiert vor allem, was KI in der Praxis nutzbar macht: belegbare Antworten, datenschutzkonforme Pipelines und Inferenz, die schnell genug für den Produktivbetrieb ist.',

      btn_work: 'Projekte ansehen', btn_cv: 'Lebenslauf herunterladen', btn_contact: 'Kontakt aufnehmen',

      stat_internships: 'KI- &amp; Data-Praktika', stat_projects: 'Ausgewählte Projekte',
      stat_certs: 'Zertifikate', stat_languages: 'Gesprochene Sprachen',

      eyebrow_projects: 'Ausgewählte Arbeiten',
      title_projects: 'Projekte',
      sub_projects: 'End-to-End-Systeme aus agentischer KI, medizinischer Bildgebung, prädiktiver Modellierung und Echtzeit-Datentechnik &mdash; jedes entwickelt, evaluiert und ausgeliefert.',
      link_source: 'Quellcode ansehen',

      p1_meta: 'Agentische KI &middot; Gesundheitswesen',
      p1_title: 'YouRi &mdash; Agentischer RAG-Medizinassistent',
      p1_desc: 'Ein intelligenter medizinischer Assistent auf Basis einer agentischen RAG-Architektur mit LangGraph, der über Patientenakten und externes medizinisches Wissen hinweg schlussfolgert, sodass jede Antwort auf überprüfbaren Quellen beruht.',
      p1_b1: 'Entwurf einer <strong>agentischen RAG-Architektur mit LangGraph</strong>, die kontextbewusstes medizinisches Schlussfolgern über Patientenakten und externes medizinisches Wissen ermöglicht.',
      p1_b2: 'Entwicklung einer medizinischen Retrieval-Pipeline aus <strong>hybrider Suche, Reranking, korrigierendem RAG (CRAG), Query-Routing und fachgebietsbewusstem Retrieval</strong> für belegte Antworten.',
      p1_b3: 'Vergleichende Evaluierung quelloffener medizinischer LLMs und Speech-to-Text-Modelle &mdash; <strong>MedGemma, Llama, Qwen, Whisper Large-v3 und faster-whisper</strong> &mdash; nach Leistungs- und Integrationskriterien.',
      p1_b4: 'Integration von <strong>faster-whisper</strong> in den agentischen Workflow: gesprochene klinische Anfragen werden in strukturierten Text überführt, als Grundlage für Query-Klassifikation, Retrieval und LLM-gestütztes Schlussfolgern.',

      p2_meta: 'Deep Learning &middot; Medizinische Bildgebung',
      p2_title: 'GlioScan &mdash; 3D-Hirntumorsegmentierung',
      p2_desc: 'Mehrklassige Hirntumorsegmentierung aus multimodalen MRT-Aufnahmen, umgesetzt mit 2D- und 3D-U-Nets in PyTorch und über eine FastAPI-Schnittstelle bereitgestellt.',
      p2_b1: 'Entwicklung von <strong>2D- und 3D-U-Net</strong>-Deep-Learning-Modellen zur mehrklassigen Hirntumorsegmentierung aus multimodalen MRT-Aufnahmen mit PyTorch.',
      p2_b2: 'Aufbau der Vorverarbeitungspipeline für medizinische Bilddaten: <strong>NIfTI-Verarbeitung, z-Score-Normalisierung, räumliches Zuschneiden, Tiefen-Resizing</strong> und volumetrische Datenaufbereitung.',
      p2_b3: 'Optimiertes Training mit <strong>Dice- plus Kreuzentropie-Verlust, Cosine-Learning-Rate-Scheduling und Mixed-Precision (AMP)</strong>, mit patientenweiser Datenaufteilung gegen Data Leakage.',
      p2_b4: 'Evaluierung über <strong>Dice-Scores für Whole Tumor, Tumor Core und Enhancing Tumor</strong> sowie Bereitstellung der Inferenz über eine FastAPI-Schnittstelle.',

      p3_meta: 'Data Engineering &middot; MLOps',
      p3_title: 'Echtzeit-Überwachung und Anomalieerkennung in 5G-Netzen',
      p3_desc: 'Eine Streaming-Pipeline, die die Leistung von 5G-Netzen in Echtzeit überwacht und Ausfälle sowie Sicherheitsbedrohungen unmittelbar meldet.',
      p3_b1: 'Konzeption und Umsetzung einer <strong>Echtzeit-Datenpipeline</strong> zur Überwachung der 5G-Netzleistung mit Streaming-Technologien, samt explorativer Datenanalyse zur Bestimmung der Hauptfaktoren hinter Netzanomalien.',
      p3_b2: 'Integration der Verarbeitungskomponenten über <strong>Apache Kafka</strong> für Ingestion und Kommunikation in Echtzeit.',
      p3_b3: 'Entwicklung von ML- und Deep-Learning-Modellen zur Erkennung von Anomalien wie Netzausfällen und Sicherheitsbedrohungen, mit Ergebnisbereitstellung über <strong>REST-APIs</strong> und interaktive Dashboards.',
      p3_b4: 'Visualisierung von Netzkennzahlen und Anomalien in <strong>Power BI</strong> zur Entscheidungsunterstützung und Überwachung.',

      p4_meta: 'Machine Learning &middot; Deployment',
      p4_title: 'Vorhersage der Schwere von Verkehrsunfällen',
      p4_desc: 'Prädiktive Modelle, die die Unfallschwere aus Verkehrsunfalldaten schätzen und über eine CI/CD-Pipeline in die Cloud ausgeliefert werden.',
      p4_b1: 'Datenerhebung und -aufbereitung: fehlende Werte, Kodierung kategorialer Merkmale, anschließend <strong>explorative Datenanalyse</strong> zur Bestimmung der Einflussfaktoren.',
      p4_b2: 'Aufbau und Feinabstimmung von <strong>logistischer Regression, Random Forest und XGBoost</strong>.',
      p4_b3: 'Bewertet anhand von Accuracy, F1-Score und ROC-AUC; Deployment über Docker und CI/CD auf Azure.',

      p5_meta: 'Computer Vision &middot; Medizinische Bildgebung',
      p5_title: 'Brustkrebserkennung mit CNNs',
      p5_desc: 'Ein Convolutional Neural Network zur Brustkrebserkennung auf medizinischen Bilddaten, containerisiert und für skalierbare Inferenz bereitgestellt.',
      p5_b1: 'Bildvorverarbeitung: Skalierung, Normalisierung und <strong>Data Augmentation</strong>.',
      p5_b2: 'Training und Evaluierung in TensorFlow / PyTorch, optimiert anhand von Validierungsmetriken.',
      p5_b3: 'Inferenz-Pipeline mit Docker containerisiert und auf <strong>Azure ML / App Service</strong> hinter einer REST-API bereitgestellt.',

      p6_meta: 'Data Engineering &middot; Automatisierung',
      p6_title: 'Tayara.tn Fahrzeug-Scraper',
      p6_desc: 'Ein Scraper in zwei Ausführungen, der Fahrzeuganzeigen von Tayara.tn extrahiert und strukturiert &mdash; ein automatisierter n8n-Workflow für geplante No-Code-Läufe sowie ein eigenständiges Python-Skript zur Pipeline-Integration.',
      p6_b1: 'Mehrseitiges Scraping über <strong>30+ Seiten</strong> mit automatischem Retry und intelligenten Wartezeiten &mdash; etwa <strong>20 Seiten in 2&ndash;3 Minuten</strong> bei über 95&nbsp;% Erfolgsquote.',
      p6_b2: 'Ein <strong>Mistral-AI</strong>-Agent bereinigt und normalisiert die Schlüsselfelder (Marke, Modell, Baujahr, Preis, Kraftstoff, Getriebe, Ort) zu einer zu 100&nbsp;% validen, analysebereiten CSV-Datei.',
      p6_b3: 'Zwei austauschbare Wege: ein n8n-Workflow mit der Jina.ai-API für geplante No-Code-Läufe und ein Skript mit <strong>requests und BeautifulSoup</strong> für Entwickler, die eigene Filter oder Exportformate brauchen.',

      eyebrow_exp: 'Meine bisherigen Stationen',
      title_exp: 'Erfahrung',
      sub_exp: 'Drei Praktika in agentischer KI, Sprachsynthese und Business Intelligence.',

      e1_role: 'Praktikant KI-Entwicklung', e1_date: 'Juli 2026 &mdash; Aug. 2026',
      e1_loc: 'Remote', e1_sub: 'Intelligenter medizinischer Assistent',
      e1_b1: 'Entwurf einer <strong>agentischen RAG-Architektur mit LangGraph</strong>, die kontextbewusstes medizinisches Schlussfolgern über Patientenakten und externes medizinisches Wissen ermöglicht.',
      e1_b2: 'Entwicklung einer medizinischen Retrieval-Pipeline aus <strong>hybrider Suche, Reranking, korrigierendem RAG (CRAG), Query-Routing und fachgebietsbewusstem Retrieval</strong> für belegte Antworten.',
      e1_b3: 'Durchführung vergleichender Evaluierungen quelloffener medizinischer LLMs und Speech-to-Text-Modelle &mdash; <strong>MedGemma, Llama, Qwen, Whisper Large-v3 und faster-whisper</strong> &mdash; nach Leistungs- und Integrationskriterien.',
      e1_b4: 'Integration von <strong>faster-whisper</strong> in den agentischen Workflow: gesprochene klinische Anfragen werden in strukturierte Texteingaben überführt, als Grundlage für Query-Klassifikation, Retrieval und LLM-gestütztes Schlussfolgern.',

      e2_role: 'Praktikant KI-Entwicklung', e2_date: 'Juli 2025 &mdash; Aug. 2025',
      e2_loc: 'Remote', e2_sub: 'Fine-Tuning von F5-TTS für arabische neuronale Sprachsynthese',
      e2_b1: 'Implementierung und Fine-Tuning des <strong>F5-TTS</strong>-Modells für arabische Sprachgenerierung.',
      e2_b2: 'Einsatz progressiver Trainingsstrategien zur Verbesserung von Modellstabilität und Audioqualität.',
      e2_b3: 'Optimierung der Inferenzleistung für flüssigere, natürlichere Sprachausgabe.',
      e2_b4: 'Bewertung der erzeugten Sprache mit technischen Metriken und perzeptiven Hörtests.',

      e3_role: 'Praktikant Datenanalyse', e3_date: 'Juni 2025',
      e3_loc: 'Remote', e3_sub: 'Business Intelligence und Leistungsanalyse im Einzelhandel',
      e3_b1: 'Konzeption und Umsetzung von Entscheidungs-Dashboards zur Überwachung der Vertriebsleistung im Einzelhandel.',
      e3_b2: 'Aufbau interaktiver Dashboards für <strong>Bestandsverwaltung, Umsatzanalyse und Kundenzufriedenheit</strong>.',
      e3_b2b: 'Optimierung der Inferenzleistung für flüssigere, natürlichere Sprachausgabe.',
      e3_b3: 'Modellierung und Integration von Daten aus mehreren Quellen für korrekte und konsistente <strong>KPIs</strong>.',
      e3_b4: 'Entwicklung fortgeschrittener Kennzahlen und berechneter Measures mit <strong>DAX</strong>.',
      e3_b5: 'Bereitstellung von Dashboards und Datenlösungen auf Microsoft Azure für sicheren, skalierbaren Zugriff.',

      eyebrow_skills: 'Womit ich arbeite',
      title_skills: 'Kenntnisse &amp; Technologien',
      sub_skills: 'Von Datenpipelines und Modelltraining bis zum containerisierten Deployment in der Cloud.',
      skill_programming: 'Programmiersprachen', skill_bigdata: 'Big Data',
      skill_ai: 'KI &amp; Machine Learning', skill_devops: 'DevOps &amp; Deployment',
      skill_tools: 'Systeme &amp; Werkzeuge',

      lang_ar: 'Arabisch', level_native: 'Muttersprache',
      lang_en: 'Englisch', level_fluent_en: 'Fließend',
      lang_fr: 'Französisch', level_fluent_fr: 'Fließend',
      lang_de: 'Deutsch', level_a2: 'Niveau A2',

      eyebrow_edu: 'Akademischer Werdegang',
      title_edu: 'Ausbildung',
      edu1_name: 'Nationale Hochschule für Elektronik und Telekommunikation Sfax (ENET’Com)',
      edu1_degree: 'Data Engineering und Entscheidungssysteme (Data Science)',
      edu1_date: 'Sep. 2024 &mdash; heute',
      edu1_desc: 'Ingenieurstudium mit Machine Learning, Deep Learning, Big-Data-Architekturen, statistischer Modellierung und Cloud-Deployment.',
      edu2_name: 'Vorbereitungsinstitut für Ingenieurstudien Kairouan (IPEIK)',
      edu2_degree: 'Vorbereitungszyklus &mdash; Fachrichtung Technik und Physik',
      edu2_date: 'Sep. 2022 &mdash; Mai 2024',
      edu2_desc: 'Zweijährige intensive Vorbereitung in Mathematik, Physik und Ingenieurwissenschaften für den nationalen Aufnahmewettbewerb der Ingenieurschulen.',

      eyebrow_certs: 'Nachweise',
      title_certs: 'Zertifikate',

      eyebrow_act: 'Über den Code hinaus',
      title_act: 'Gesellschaftliches Engagement',
      act1_role: 'Teilnehmer', act1_date: 'Januar 2026',
      act1_desc: 'Ausbau meines Netzwerks unter KI-Forschenden und Branchenexperten sowie vertieftes Verständnis aktueller ML-Forschungstrends.',
      act2_role: 'Aktives Mitglied', act2_date: 'Sep. 2024 &mdash; heute',
      act2_desc: 'Teilnahme am MindShift-Hackathon mit Beiträgen zur Entwicklung von KI-/ML-Projekten und zur gemeinsamen Problemlösung.',
      act3_role: 'Aktives Mitglied', act3_date: 'Sep. 2021 &mdash; Aug. 2024',
      act3_desc: 'Mitwirkung an Gemeinschaftsprojekten und Führungsinitiativen mit Entwicklung von Projektmanagement-, Team- und Kommunikationsfähigkeiten durch gesellschaftlich wirksame Aktivitäten.',

      eyebrow_rec: 'Was mein Betreuer sagt',
      title_rec: 'Empfehlung',
      sub_rec: 'Von dem Professor, der mich in vier Lehrveranstaltungen unterrichtet und mein Jahresabschlussprojekt betreut hat.',
      rec_title: 'Professor für Angewandte Mathematik',
      rec_dept: 'Fachbereich Mathematik und Entscheidungsinformatik',
      rec_school: 'Nationale Hochschule für Elektronik und Telekommunikation Sfax (ENET’Com), Universität Sfax, Tunesien',
      rec_date: '3. September 2026 &middot; Hat Mahrane unterrichtet und direkt betreut',
      rec_quote: '&bdquo;Meine Einschätzung beruht auf einer ungewöhnlich breiten Grundlage. Mahrane hat vier meiner Lehrveranstaltungen im Data-Science-Ingenieurstudium besucht: <strong>Optimierung und Differentialrechnung</strong>, <strong>Machine Learning</strong> und <strong>Deep Learning</strong>, die er abgeschlossen hat, und im laufenden Studienjahr (2026&ndash;2027) wird er meine beiden Master-Wahlfächer <strong>Generative KI</strong> und <strong>Reinforcement Learning</strong> belegen. Über den Hörsaal hinaus war ich von Dezember 2025 bis April 2026 der direkte Betreuer seines Jahresabschlussprojekts. Machine Learning ist mein eigenes Forschungsgebiet, und in diesen vier Monaten täglicher Betreuung habe ich acht weitere Studierende vergleichbaren Niveaus betreut; gemessen an dieser Vergleichsgruppe war Mahrane eindeutig der Stärkste.&ldquo;',
      rec_highlight: 'Eindeutig der Stärkste seines Jahrgangs',

      eyebrow_contact: 'Kontakt',
      title_contact: 'Arbeiten wir zusammen',
      sub_contact: 'Ich bin offen für Praktika, Einstiegspositionen und Kooperationen in KI, Data Science und Machine-Learning-Engineering. Am schnellsten erreichen Sie mich per E-Mail.',

      footer_copy: '&copy; <span id="year">2026</span> Mahrane AMOR. Alle Rechte vorbehalten.',
      footer_built: 'Gebaut mit reinem HTML, CSS und JavaScript.'
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
