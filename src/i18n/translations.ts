// ─── Language types ───────────────────────────────────────────────────────────
export type Lang = 'fr' | 'en';

// ─── Skill data per language ─────────────────────────────────────────────────
export interface SkillData {
    name: string;
    shortDescription: string;
    description: string;
    projects: string[];
}

export interface ButYearData {
    label: string;
    subtitle: string;
    centerMiddle: string;
    centerBottom: string;
    skills: SkillData[];
}

const makeButYears = (lang: 'fr' | 'en'): ButYearData[] => {
    const isFr = lang === 'fr';

    const skillsFr: Record<string, { short: string; desc: (level: 1 | 2 | 3) => string }> = {
        Réaliser: {
            short: [
                'Développer des applications informatiques simples',
                "Partir des exigences jusqu'à une application complète",
                'Adapter des applications sur un ensemble de supports',
            ][0], // overridden per level below
            desc: (l) => [
                "Niveau 1 — Développer des applications informatiques simples. Implémenter et élaborer des conceptions simples, faire des essais en regard des spécifications et développer des interfaces utilisateurs.",
                "Niveau 2 — Partir des exigences et aller jusqu'à une application complète. Élaborer et implémenter les spécifications, appliquer l'accessibilité et l'ergonomie, adopter de bonnes pratiques et valider la qualité par les tests.",
                "Niveau 3 — Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT...). Choisir les architectures adaptées, faire évoluer une application existante et intégrer des solutions en production.",
            ][l - 1],
        },
        Optimiser: {
            short: '', desc: (l) => [
                "Niveau 1 — Appréhender et construire des algorithmes. Analyser un problème avec méthode, comparer des algorithmes classiques et mobiliser les outils mathématiques utiles.",
                "Niveau 2 — Sélectionner les algorithmes adéquats pour répondre à un problème donné. Choisir des structures de données complexes, utiliser des techniques adaptées, sécuriser les données et évaluer l'impact environnemental des solutions.",
                "Niveau 3 — Analyser et optimiser des applications. Anticiper les métriques, profiler un code existant et utiliser des bibliothèques spécialisées selon le domaine d'application.",
            ][l - 1],
        },
        Administrer: {
            short: '', desc: (l) => [
                "Niveau 1 — Installer et configurer un poste de travail. Identifier les composants d'un système numérique, utiliser un système multitâche, installer les outils de développement et configurer un poste dans un réseau d'entreprise.",
                "Niveau 2 — Déployer des services dans une architecture réseau. Concevoir des applications communicantes, utiliser des services réseaux virtualisés et sécuriser les services et les données d'un système.",
                "",
            ][l - 1],
        },
        Gérer: {
            short: '', desc: (l) => [
                "Niveau 1 — Concevoir et mettre en place une base de données à partir d'un cahier des charges client. Mettre à jour et interroger une base relationnelle, visualiser les données et concevoir le modèle adapté.",
                "Niveau 2 — Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité. Optimiser les modèles, assurer l'intégrité et la confidentialité, restituer les données et manipuler des sources hétérogènes.",
                "",
            ][l - 1],
        },
        Conduire: {
            short: '', desc: (l) => [
                "Niveau 1 — Identifier les besoins métiers des clients et des utilisateurs. Appréhender les besoins, mettre en place les outils de gestion de projet et identifier les acteurs d'un cycle de développement.",
                "Niveau 2 — Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs. Identifier les processus d'une organisation, formaliser les besoins, évaluer la faisabilité et suivre le projet.",
                "",
            ][l - 1],
        },
        Collaborer: {
            short: '', desc: (l) => [
                "Niveau 1 — Identifier ses aptitudes pour travailler dans une équipe. Comprendre l'écosystème numérique, repérer les rôles, découvrir les aptitudes attendues et développer les compétences interpersonnelles.",
                "Niveau 2 — Situer son rôle et ses missions au sein d'une équipe informatique. Comprendre la place de l'informatique dans l'organisation, intégrer une équipe, mobiliser ses compétences interpersonnelles et rendre compte de son activité.",
                "Niveau 3 — Manager une équipe informatique. Organiser une veille, comprendre les enjeux de l'innovation numérique, guider le changement et accompagner le management de projet.",
            ][l - 1],
        },
    };

    if (isFr) {
        return [
            {
                label: 'BUT 1', subtitle: '1ère année — 6 compétences',
                centerMiddle: 'Compétences', centerBottom: 'Informatique',
                skills: [
                    { name: 'Réaliser', shortDescription: 'Développer des applications informatiques simples', description: skillsFr.Réaliser.desc(1), projects: ['QIX', 'Codex Naturalis'] },
                    { name: 'Optimiser', shortDescription: 'Appréhender et construire des algorithmes', description: skillsFr.Optimiser.desc(1), projects: ['Codex Naturalis'] },
                    { name: 'Administrer', shortDescription: 'Installer et configurer un poste de travail', description: skillsFr.Administrer.desc(1), projects: [] },
                    { name: 'Gérer', shortDescription: 'Concevoir et mettre en place une base de données', description: skillsFr.Gérer.desc(1), projects: [] },
                    { name: 'Conduire', shortDescription: 'Identifier les besoins métiers des clients et des utilisateurs', description: skillsFr.Conduire.desc(1), projects: [] },
                    { name: 'Collaborer', shortDescription: 'Identifier ses aptitudes pour travailler dans une équipe', description: skillsFr.Collaborer.desc(1), projects: ['Codex Naturalis', 'QIX'] },
                ],
            },
            {
                label: 'BUT 2', subtitle: '2ème année — 6 compétences',
                centerMiddle: 'Compétences', centerBottom: 'Informatique',
                skills: [
                    { name: 'Réaliser', shortDescription: "Partir des exigences jusqu'à une application complète", description: skillsFr.Réaliser.desc(2), projects: ['Wikispeed', 'Travia'] },
                    { name: 'Optimiser', shortDescription: 'Sélectionner les algorithmes adéquats pour répondre à un problème donné', description: skillsFr.Optimiser.desc(2), projects: ['Wikispeed'] },
                    { name: 'Administrer', shortDescription: 'Déployer des services dans une architecture réseau', description: skillsFr.Administrer.desc(2), projects: [] },
                    { name: 'Gérer', shortDescription: 'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité', description: skillsFr.Gérer.desc(2), projects: ['Travia'] },
                    { name: 'Conduire', shortDescription: 'Appliquer une démarche de suivi de projet', description: skillsFr.Conduire.desc(2), projects: ['Travia'] },
                    { name: 'Collaborer', shortDescription: "Situer son rôle et ses missions au sein d'une équipe informatique", description: skillsFr.Collaborer.desc(2), projects: ['Wikispeed', 'Travia'] },
                ],
            },
            {
                label: 'BUT 3', subtitle: '3ème année — 3 compétences',
                centerMiddle: 'Compétences', centerBottom: 'Informatique',
                skills: [
                    { name: 'Réaliser', shortDescription: 'Adapter des applications sur un ensemble de supports', description: skillsFr.Réaliser.desc(3), projects: ['Umeal'] },
                    { name: 'Optimiser', shortDescription: 'Analyser et optimiser des applications', description: skillsFr.Optimiser.desc(3), projects: ['Umeal'] },
                    { name: 'Collaborer', shortDescription: 'Manager une équipe informatique', description: skillsFr.Collaborer.desc(3), projects: ['Umeal'] },
                ],
            },
        ];
    }

    // ── English ──────────────────────────────────────────────────────────────────
    return [
        {
            label: 'Year 1', subtitle: '1st year — 6 skills',
            centerMiddle: 'Skills', centerBottom: 'CS Degree',
            skills: [
                { name: 'Develop', shortDescription: 'Develop simple software applications', description: "Level 1 — Develop simple software applications. Implement and design simple solutions, test them against specifications, and build user interfaces.", projects: ['QIX', 'Codex Naturalis'] },
                { name: 'Optimize', shortDescription: 'Understand and build algorithms', description: "Level 1 — Understand and build algorithms. Analyse problems methodically, compare standard algorithms, and use the mathematical tools needed for computing.", projects: ['Codex Naturalis'] },
                { name: 'Administer', shortDescription: 'Install and configure a workstation', description: "Level 1 — Install and configure a workstation. Identify system components, use a multi-user system, install development tools, and configure a workstation on a company network.", projects: [] },
                { name: 'Manage', shortDescription: 'Design and set up a database', description: "Level 1 — Design and set up a database from client specifications. Query a relational database, visualise data, and model the appropriate schema.", projects: [] },
                { name: 'Lead', shortDescription: "Identify client and user business needs", description: "Level 1 — Identify client and user business needs. Understand needs, set up project management tools, and identify the stakeholders and phases of a development cycle.", projects: [] },
                { name: 'Collaborate', shortDescription: 'Identify your strengths for teamwork', description: "Level 1 — Identify your strengths for teamwork. Understand the digital ecosystem, identify team roles, and develop the interpersonal skills needed to work effectively with others.", projects: ['Codex Naturalis', 'QIX'] },
            ],
        },
        {
            label: 'Year 2', subtitle: '2nd year — 6 skills',
            centerMiddle: 'Skills', centerBottom: 'CS Degree',
            skills: [
                { name: 'Develop', shortDescription: 'From requirements to a complete application', description: "Level 2 — From requirements to a complete application. Translate requirements into specifications, apply accessibility and ergonomics principles, follow good practices, and validate quality through testing.", projects: ['Wikispeed', 'Travia'] },
                { name: 'Optimize', shortDescription: 'Select the right algorithms for a given problem', description: "Level 2 — Select the right algorithms for a given problem. Choose advanced data structures, use suitable algorithmic techniques, secure data and code, and assess environmental impact.", projects: ['Wikispeed'] },
                { name: 'Administer', shortDescription: 'Deploy services in a network architecture', description: "Level 2 — Deploy services in a network architecture. Design communicating applications, use virtualised network services, and secure system services and data.", projects: [] },
                { name: 'Manage', shortDescription: 'Optimise a database and implement security', description: "Level 2 — Optimise a database, interact with an application, and implement security. Improve data models, ensure confidentiality and integrity, present data, and work with heterogeneous sources.", projects: ['Travia'] },
                { name: 'Lead', shortDescription: 'Apply a project monitoring approach', description: "Level 2 — Apply project monitoring based on business needs. Identify organisational processes, formalise needs, assess feasibility, and implement project tracking.", projects: ['Travia'] },
                { name: 'Collaborate', shortDescription: 'Define your role within an IT team', description: "Level 2 — Define your role within an IT team. Understand how IT is structured within an organisation, integrate into a team, mobilise interpersonal skills, and report on your activity.", projects: ['Wikispeed', 'Travia'] },
            ],
        },
        {
            label: 'Year 3', subtitle: '3rd year — 3 skills',
            centerMiddle: 'Skills', centerBottom: 'CS Degree',
            skills: [
                { name: 'Develop', shortDescription: 'Adapt applications across multiple platforms', description: "Level 3 — Adapt applications across multiple platforms (embedded, web, mobile, IoT...). Choose the right architectures, evolve an existing application, and integrate solutions into production environments.", projects: ['Umeal'] },
                { name: 'Optimize', shortDescription: 'Analyse and optimise applications', description: "Level 3 — Analyse and optimise applications. Anticipate performance metrics, profile existing code, and choose specialised libraries or methods suited to the domain.", projects: ['Umeal'] },
                { name: 'Collaborate', shortDescription: 'Manage an IT team', description: "Level 3 — Manage an IT team. Organise technology watch, understand innovation challenges, guide change, and support project management.", projects: ['Umeal'] },
            ],
        },
    ];
};

// ─── Main translations object ─────────────────────────────────────────────────
export const translations = {
    fr: {
        lang: 'fr' as Lang,
        nav: {
            about: 'À propos',
            timeline: 'Parcours',
            projects: 'Projets',
            stack: 'Stack',
            skills: 'Compétences',
            contact: 'Contact',
        },
        hero: {
            badge: "Recherche Alternance — École d'Ingénieur",
            subtitle: 'Développeur web passionné · Futur élève ingénieur en apprentissage',
            cta_projects: 'Voir mes projets',
            cta_about: 'En savoir plus',
            scroll: 'Scroll',
        },
        about: {
            title: 'À propos',
            bio: "Actuellement en troisième année de BUT Informatique, je me passionne pour le développement web et les technologies émergentes. J'intégrerai une école d'ingénieur l'année prochaine et je suis activement à la recherche d'une alternance pour y poursuivre ma formation. Toujours à la recherche de nouveaux défis, j'aime concevoir des solutions créatives et optimisées pour améliorer l'expérience utilisateur.",
            chip_year: 'Futur cycle ingénieur',
            chip_alt: 'Recherche Alternance',
            chip_loc: 'Île-de-France',
            cv_button: '↓ Télécharger mon CV',
        },
        timeline: {
            title: 'Parcours',
            see_skills: 'Voir les 6 compétences du BUT',
            entries: [
                {
                    year: 'Depuis Déc. 2025',
                    title: 'Apprenti Développeur Web',
                    location: 'EasyVista — Noisy-le-Grand',
                    details: [
                        "Développement d'interfaces utilisateur modernes sous React.js pour des solutions ITSM.",
                        "Pilotage de la refonte complète du menu de navigation pour optimiser l'UX.",
                        "Intégration front-end et communication avec un back-end PHP complexe.",
                    ],
                },
                {
                    year: 'Avr. – Juin 2025',
                    title: 'Développeur Stagiaire',
                    location: 'Isart Digital — Paris',
                    details: [
                        "Développement d'applications web en Nuxt.js et PHP pour la gestion pédagogique.",
                        "Automatisation des processus de signalement de retards et traitement de flux de données.",
                    ],
                },
                {
                    year: '2023 – 2026',
                    title: 'BUT Informatique',
                    location: 'IUT Marne-la-Vallée (UGE)',
                    subtitle: "Parcours A : Réalisation d'applications : conception, développement et validation",
                    link: '#competences',
                    linkText: 'Voir les 6 compétences du BUT',
                },
                {
                    year: '2020 – 2023',
                    title: 'Baccalauréat Général',
                    location: 'Lycée Flora Tristan',
                    subtitle: 'Mention Bien · Spécialités : Mathématiques et Physique-Chimie',
                },
            ],
        },
        projects: {
            title: 'Projets',
            tabs: {
                BUT1: { label: 'BUT 1', subtitle: '1ère année' },
                BUT2: { label: 'BUT 2', subtitle: '2ème année' },
                BUT3: { label: 'BUT 3', subtitle: '3ème année' },
                Perso: { label: 'Perso', subtitle: 'Projets perso' },
            },
            empty_generic_title: (tab: string) => `Aucun projet ${tab} pour l'instant`,
            empty_generic_desc: (tab: string) => `Les projets de ${tab} seront ajoutés prochainement.`,
            empty_perso_title: 'Projets personnels à venir',
            empty_perso_desc: 'Cette section accueillera bientôt mes projets personnels. Restez connecté !',
            empty_perso_tags: ['Side projects', 'Open source', 'Expérimentations'],
            modal: {
                prev: 'Précédente',
                next: 'Suivante',
                technologies: '🛠 Technologies utilisées',
                features: '✨ Fonctionnalités principales',
                context: '📋 Contexte',
                view: 'Voir le projet →',
                zoom_hint: 'Cliquer pour agrandir',
            },
            items: {
                "Travia": {
                    description: "Travia est un site web immersif dans l'univers de Star Wars, permettant aux utilisateurs de réserver des billets pour des navettes interplanétaires vers différentes planètes emblématiques de la saga.",
                    features: [
                        "Système de réservation de billets pour navettes interplanétaires",
                        "Base de données pour la gestion des réservations",
                        "Interface immersive dans l'univers Star Wars",
                        "Navigation entre différentes destinations (Coruscant, Tatooine, Endor)"
                    ],
                    context: "Projet développé en groupe de trois lors de ma deuxième année de BUT Informatique."
                },
                "Codex Naturalis": {
                    description: "Adaptation numérique du jeu de société Codex Naturalis avec des fonctionnalités supplémentaires. Développement en programmation orientée objet avec Java.",
                    features: [
                        "Gestion complète des cartes et règles du jeu",
                        "Modes de jeu alternatifs",
                        "Interface de jeu interactive",
                        "Respect des principes de la POO"
                    ],
                    context: "Projet réalisé en binôme lors de ma première année de BUT Informatique."
                },
                "QIX": {
                    description: "Remake complet du jeu rétro arcade QIX avec une interface moderne. Implémentation de fonctionnalités avancées incluant un système de sauvegarde, des bonus dynamiques et un mode compétitif pour deux joueurs.",
                    features: [
                        "Recréation fidèle du gameplay original du jeu QIX",
                        "Système de sauvegarde et de progression",
                        "Gestion de bonus dynamiques et power-ups",
                        "Mode compétitif à deux joueurs",
                        "Interface graphique moderne et intuitive"
                    ],
                    context: "Projet développé en binôme pendant ma première année de formation."
                },
                "Wikispeed": {
                    description: "Wikispeed est un jeu multijoueur innovant où les joueurs doivent atteindre des articles Wikipedia cibles le plus rapidement possible en naviguant à travers les liens hypertextes.",
                    features: [
                        "Mode solo et multijoueur en temps réel",
                        "Système d'artéfacts (bonus et malus) pour influencer le jeu",
                        "Navigation dynamique entre articles Wikipedia",
                        "Communication temps réel via WebSocket"
                    ],
                    context: "Projet développé en équipe de quatre personnes en deuxième année de BUT."
                },
                "Umeal": {
                    description: "Plateforme complète pour aider à la gestion des restaurants universitaires (RU). L'application s'adresse aux étudiants (réservations, consultation), aux cantiniers (gestion en temps réel) et aux administrateurs.",
                    features: [
                        "Étudiants : Réservation à des créneaux précis, consultation des temps d'attente et des menus",
                        "Cantiniers : Modification des plats et gestion en un clic de la disponibilité en direct (disponible/indisponible)",
                        "Administrateur : Gestion des cantiniers (création, modification, suppression) et des infos des RU",
                        "Visualisation de statistiques complètes sur le restaurant"
                    ],
                    context: "Projet de BUT 3 réalisé en équipe de 6 personnes. Application web (React) et mobile (React Native)."
                }
            }
        },
        tools: { title: 'Stack Technique' },
        skills: {
            title: 'Compétences BUT',
            hint: 'Cliquez sur un segment ou une carte pour découvrir le détail de la compétence',
            badge: 'Compétence BUT',
            related: 'Projets associés',
            center_top: 'BUT',
            butYears: makeButYears('fr'),
        },
        footer: { copyright: '© 2025 Ethan Duong — Tous droits réservés' },
    },

    en: {
        lang: 'en' as Lang,
        nav: {
            about: 'About',
            timeline: 'Journey',
            projects: 'Projects',
            stack: 'Stack',
            skills: 'Skills',
            contact: 'Contact',
        },
        hero: {
            badge: 'Seeking Work-study — Engineering School',
            subtitle: 'Passionate web developer · Future engineering student',
            cta_projects: 'View my projects',
            cta_about: 'Learn more',
            scroll: 'Scroll',
        },
        about: {
            title: 'About',
            bio: "Currently in my third year of a Bachelor's in Computer Science (BUT Informatique), I am passionate about web development and emerging technologies. Next year, I will join an engineering school and I am actively seeking a work-study position (alternance) to continue my training. Always looking for new challenges, I love designing creative and optimised solutions to enhance user experience.",
            chip_year: 'Future Engineering Student',
            chip_alt: 'Seeking work-study',
            chip_loc: 'Île-de-France',
            cv_button: '↓ Download my CV',
        },
        timeline: {
            title: 'Journey',
            see_skills: 'See the 6 BUT skills',
            entries: [
                {
                    year: 'Since Dec. 2025',
                    title: 'Apprentice Web Developer',
                    location: 'EasyVista — Noisy-le-Grand',
                    details: [
                        "Building modern user interfaces with React.js for ITSM solutions.",
                        "Led the full redesign of the navigation menu to improve UX.",
                        "Front-end integration and communication with a complex PHP back-end.",
                    ],
                },
                {
                    year: 'Apr. – Jun. 2025',
                    title: 'Intern Developer',
                    location: 'Isart Digital — Paris',
                    details: [
                        "Web application development in Nuxt.js and PHP for academic management.",
                        "Automation of delay reporting processes and data stream processing.",
                    ],
                },
                {
                    year: '2023 – 2026',
                    title: 'Bachelor in Computer Science (BUT)',
                    location: 'IUT Marne-la-Vallée (UGE)',
                    subtitle: "Track A: Application Development — design, development & validation",
                    link: '#competences',
                    linkText: 'See the 6 BUT skills',
                },
                {
                    year: '2020 – 2023',
                    title: 'French Baccalaureate (High School Diploma)',
                    location: 'Lycée Flora Tristan',
                    subtitle: 'Grade: Bien (Merit) · Majors: Mathematics & Physics-Chemistry',
                },
            ],
        },
        projects: {
            title: 'Projects',
            tabs: {
                BUT1: { label: 'Year 1', subtitle: '1st year' },
                BUT2: { label: 'Year 2', subtitle: '2nd year' },
                BUT3: { label: 'Year 3', subtitle: '3rd year' },
                Perso: { label: 'Personal', subtitle: 'Personal projects' },
            },
            empty_generic_title: (tab: string) => `No ${tab} projects yet`,
            empty_generic_desc: (tab: string) => `${tab} projects will be added soon.`,
            empty_perso_title: 'Personal projects coming soon',
            empty_perso_desc: 'This section will soon feature my personal projects. Stay tuned!',
            empty_perso_tags: ['Side projects', 'Open source', 'Experiments'],
            modal: {
                prev: 'Previous',
                next: 'Next',
                technologies: '🛠 Technologies used',
                features: '✨ Main features',
                context: '📋 Context',
                view: 'View project →',
                zoom_hint: 'Click to enlarge',
            },
            items: {
                "Travia": {
                    description: "Travia is an immersive website set in the Star Wars universe, allowing users to book tickets for interplanetary shuttles to various iconic planets from the saga.",
                    features: [
                        "Ticket booking system for interplanetary shuttles",
                        "Database for reservation management",
                        "Immersive interface in the Star Wars universe",
                        "Navigation between different destinations (Coruscant, Tatooine, Endor)"
                    ],
                    context: "Project developed in a group of three during my second year of the Computer Science Bachelor's degree."
                },
                "Codex Naturalis": {
                    description: "Digital adaptation of the Codex Naturalis board game with additional features. Object-oriented programming development using Java.",
                    features: [
                        "Complete management of cards and game rules",
                        "Alternative game modes",
                        "Interactive game interface",
                        "Respect for OOP principles"
                    ],
                    context: "Project carried out in pairs during my first year of the Computer Science Bachelor's degree."
                },
                "QIX": {
                    description: "Complete remake of the retro arcade game QIX with a modern interface. Implementation of advanced features including a save system, dynamic bonuses, and a competitive two-player mode.",
                    features: [
                        "Faithful recreation of the original QIX gameplay",
                        "Save and progression system",
                        "Management of dynamic bonuses and power-ups",
                        "Competitive two-player mode",
                        "Modern and intuitive graphical interface"
                    ],
                    context: "Project developed in pairs during my first year of training."
                },
                "Wikispeed": {
                    description: "Wikispeed is an innovative multiplayer game where players must reach target Wikipedia articles as quickly as possible by navigating through hyperlinks.",
                    features: [
                        "Single-player and real-time multiplayer modes",
                        "Artifact system (buffs and debuffs) to influence the game",
                        "Dynamic navigation between Wikipedia articles",
                        "Real-time communication via WebSocket"
                    ],
                    context: "Project developed in a team of four during the second year of the Bachelor's degree."
                },
                "Umeal": {
                    description: "Comprehensive platform to assist in the management of university restaurants (RU). The application is aimed at students (booking, viewing), canteen staff (real-time management), and administrators.",
                    features: [
                        "Students: Booking at specific time slots, viewing waiting times and menus",
                        "Canteen Staff: Dish modification and one-click real-time availability management (available/unavailable)",
                        "Administrator: Canteen staff management (creation, modification, deletion) and RU info management",
                        "Visualisation of comprehensive statistics about the restaurant"
                    ],
                    context: "3rd year Bachelor project carried out in a team of 6. Web (React) and mobile (React Native) application."
                }
            }
        },
        tools: { title: 'Tech Stack' },
        skills: {
            title: 'BUT Skills',
            hint: 'Click on a segment or card to explore the skill details',
            badge: 'BUT Skill',
            related: 'Related projects',
            center_top: 'BUT',
            butYears: makeButYears('en'),
        },
        footer: { copyright: '© 2025 Ethan Duong — All rights reserved' },
    },
} as const;

export type T = typeof translations['fr'];
