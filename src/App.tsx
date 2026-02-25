import './App.css'
import { HeroHeader } from "./component/HeroHeader.tsx";
import { AboutMe } from "./component/AboutMe.tsx";
import { Project } from "./component/Project.tsx";
import { ProjectList } from "./component/ProjectList.tsx";
import { Navbar } from "./component/Navbar.tsx";
import cv from "./assets/CV.pdf"
import photo from "./assets/Photo.jpg"
import { ToolsList } from "./component/ToolsList.tsx";
import { Tool } from "./component/Tool.tsx"
import { faJava, faPython, faPhp, faReact, faHtml5, faCss3Alt, faJs, faCuttlefish, faNodeJs, faVuejs, faGit, faGithub, faGitlab, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./component/Footer.tsx";
import { Timeline } from "./component/Timeline.tsx"
import { Skill } from "./component/Skill.tsx";
import { SkillsList } from "./component/SkillsList.tsx";
import travia1 from "./assets/projects_images/Travia/TraviaHome.png"
import travia2 from "./assets/projects_images/Travia/TraviaLoading.png"
import travia3 from "./assets/projects_images/Travia/TraviaPurchase.png"
import travia4 from "./assets/projects_images/Travia/TraviaTickets.png"
import wikispeed1 from "./assets/projects_images/Wikispeed/Wikispeed1.png"
import wikispeed2 from "./assets/projects_images/Wikispeed/Wikispeed2.png"
import wikispeed3 from "./assets/projects_images/Wikispeed/Wikispeed3.png"
import portfolio1 from "./assets/projects_images/Portfolio/Portfolio1.png"
import portfolio2 from "./assets/projects_images/Portfolio/Portfolio2.png"
import portfolio3 from "./assets/projects_images/Portfolio/Portfolio3.png"
import codex1 from "./assets/projects_images/Codex/img_1.png"
import codex2 from "./assets/projects_images/Codex/img_2.png"
import codex3 from "./assets/projects_images/Codex/img_3.png"
import codex4 from "./assets/projects_images/Codex/img_4.png"
import codex5 from "./assets/projects_images/Codex/img_5.png"
import codex6 from "./assets/projects_images/Codex/img_6.png"
import qix1 from "./assets/projects_images/QIX/Qix1.png"
import qix2 from "./assets/projects_images/QIX/Qix2.png"
import qix3 from "./assets/projects_images/QIX/Qix3.png"
import qix4 from "./assets/projects_images/QIX/Qix4.png"







function App() {

  const tools: Tool[] = [
    { name: "Java", img: faJava },
    { name: "React", img: faReact },
    { name: "C", img: faCuttlefish },
    { name: "Python", img: faPython },
    { name: "PHP", img: faPhp },
    { name: "SQL", img: faDatabase },
    { name: "HTML", img: faHtml5 },
    { name: "CSS", img: faCss3Alt },
    { name: "JavaScript", img: faJs },
    { name: "Vue.js", img: faVuejs },
    { name: "Nuxt.js", img: faVuejs },
    { name: "Node.js", img: faNodeJs },
    { name: "Twig", img: faLeaf },
    { name: "Git", img: faGit },
    { name: "GitHub", img: faGithub },
    { name: "GitLab", img: faGitlab },
    { name: "Docker", img: faDocker },
  ];


  const projects: Project[] = [{
    name: "Travia",
    description: "Travia est un site web immersif dans l'univers de Star Wars, permettant aux utilisateurs de réserver des billets pour des navettes interplanétaires vers différentes planètes emblématiques de la saga.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Système de réservation de billets pour navettes interplanétaires",
      "Base de données pour la gestion des réservations",
      "Interface immersive dans l'univers Star Wars",
      "Navigation entre différentes destinations (Coruscant, Tatooine, Endor)"
    ],
    context: "Projet développé en groupe de trois lors de ma formation en BUT Informatique.",
    image: travia1,
    link: undefined,
    images: [travia1, travia2, travia3, travia4]
  },
  {
    name: "Wikispeed",
    description: "Wikispeed est un jeu multijoueur innovant où les joueurs doivent atteindre des articles Wikipedia cibles le plus rapidement possible en naviguant à travers les liens hypertextes.",
    technologies: ["React", "Node.js", "WebSocket"],
    features: [
      "Mode solo et multijoueur en temps réel",
      "Système d'artéfacts (bonus et malus) pour influencer le jeu",
      "Navigation dynamique entre articles Wikipedia",
      "Communication temps réel via WebSocket"
    ],
    context: "Projet développé en équipe de quatre personnes.",
    image: wikispeed1,
    link: undefined,
    images: [wikispeed1, wikispeed2, wikispeed3]
  },
  {
    name: "Mon Portfolio",
    description: "Site web personnel présentant mes compétences, réalisations et projets de développement. Design moderne, responsive et animations fluides.",
    technologies: ["React", "TypeScript", "HTML", "CSS", "Vite"],
    features: [
      "Design responsive adapté à tous les appareils",
      "Gestion dynamique du contenu avec React",
      "Animations et transitions fluides",
      "Présentation interactive des projets et compétences"
    ],
    context: "Projet personnel développé pour mettre en valeur mon parcours et mes compétences en développement web.",
    image: portfolio1,
    link: undefined,
    images: [portfolio1, portfolio2, portfolio3]
  },
  {
    name: "Codex Naturalis",
    description: "Adaptation numérique du jeu de société Codex Naturalis avec des fonctionnalités supplémentaires. Développement en programmation orientée objet avec Java.",
    technologies: ["Java", "POO (Programmation Orientée Objet)"],
    features: [
      "Gestion complète des cartes et règles du jeu",
      "Modes de jeu alternatifs",
      "Interface de jeu interactive",
      "Respect des principes de la POO"
    ],
    context: "Projet réalisé en binôme lors de ma première année de BUT Informatique.",
    image: codex5,
    link: undefined,
    images: [codex1, codex2, codex3, codex4, codex5, codex6]
  },
  {
    name: "QIX",
    description: "Remake complet du jeu rétro arcade QIX avec une interface moderne. Implémentation de fonctionnalités avancées incluant un système de sauvegarde, des bonus dynamiques et un mode compétitif pour deux joueurs.",
    technologies: ["Python", "Pygame"],
    features: [
      "Recréation fidèle du gameplay original du jeu QIX",
      "Système de sauvegarde et de progression",
      "Gestion de bonus dynamiques et power-ups",
      "Mode compétitif à deux joueurs",
      "Interface graphique moderne et intuitive"
    ],
    context: "Projet développé en binôme pendant ma formation.",
    image: qix1,
    link: undefined,
    images: [qix1, qix2, qix3, qix4]
  }
  ];
  const skills: Skill[] = [
    {
      name: "Réaliser",
      description: "Concevoir, développer et valider des applications complètes en partant des exigences utilisateur jusqu'à la mise en production. Maîtrise du cycle de développement complet avec les technologies modernes.",
      shortDescription: "Concevoir et développer des applications",
      projects: ["Travia (PHP, MySQL)", "Wikispeed (React, Node.js, WebSocket)", "Portfolio (React)", "QIX (Python, Pygame)"]
    },
    {
      name: "Optimiser",
      description: "Analyser et optimiser les performances des applications en sélectionnant les algorithmes et structures de données appropriés. Garantir l'efficacité et la scalabilité des solutions.",
      shortDescription: "Optimiser les performances",
      projects: ["Codex Naturalis (Java OOP)", "Wikispeed (temps réel)", "QIX (gameplay temps réel)"]
    },
    {
      name: "Administrer",
      description: "Déployer et administrer des services dans une infrastructure réseau. Gérer les environnements de développement, staging et production avec les outils DevOps modernes.",
      shortDescription: "Gérer l'infrastructure réseau",
      projects: ["TP Réseaux (configuration routeurs/switch)", "TP Services réseau (DHCP, DNS, HTTP)"]
    },
    {
      name: "Gérer",
      description: "Concevoir et optimiser des bases de données relationnelles et NoSQL. Implémenter la sécurité des données et garantir l'intégrité des informations tout en assurant des performances optimales.",
      shortDescription: "Gérer et sécuriser les données",
      projects: ["Travia (MySQL)", "Isart Digital (gestion pédagogique)"]
    },
    {
      name: "Conduire",
      description: "Piloter des projets informatiques en appliquant les méthodologies agiles. Comprendre et traduire les besoins métiers en solutions techniques adaptées.",
      shortDescription: "Piloter des projets IT",
      projects: ["Refonte menu navigation (EasyVista)", "Projets universitaires en équipe"]
    },
    {
      name: "Collaborer",
      description: "Travailler efficacement au sein d'équipes pluridisciplinaires. Utiliser les outils de versioning (Git) et communiquer de manière claire avec les différents acteurs du projet.",
      shortDescription: "Collaborer en équipe IT",
      projects: ["EasyVista (équipe React/PHP)", "Wikispeed (équipe de 4)", "Travia (équipe de 3)", "QIX (équipe de 2)"]
    }
  ];

  return (
    <>
      <Navbar />
      <main>
        <HeroHeader />
        <AboutMe img={photo} cv={cv} text={"Actuellement en troisième année de BUT Informatique, je me passionne pour le développement web et les technologies émergentes. Toujours à la recherche de nouveaux défis, j’aime concevoir des solutions créatives et optimisées pour améliorer l’expérience utilisateur."}
        />
        <Timeline />
        <ProjectList projects={projects} />
        <ToolsList toolList={tools} />
        <SkillsList skills={skills} />
      </main>
      <Footer />

    </>
  )
}

export default App
