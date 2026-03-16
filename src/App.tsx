import './App.css'
import { HeroHeader } from "./component/HeroHeader.tsx";
import { AboutMe } from "./component/AboutMe.tsx";
import { CategorizedProject, ProjectList } from "./component/ProjectList.tsx";
import { Navbar } from "./component/Navbar.tsx";
import cv from "./assets/CV.pdf"
import photo from "./assets/Photo.jpg"
import { ToolsList } from "./component/ToolsList.tsx";
import { Tool } from "./component/Tool.tsx"
import { faJava, faPython, faPhp, faReact, faHtml5, faCss3Alt, faJs, faCuttlefish, faNodeJs, faVuejs, faGit, faGithub, faGitlab, faDocker } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Footer } from "./component/Footer.tsx";
import { Timeline } from "./component/Timeline.tsx"
import { SkillsWheel } from "./component/SkillsWheel.tsx";
import { Skill } from "./component/Skill.tsx";

// ─── Project images ───────────────────────────────────────────────────────────
import travia1 from "./assets/projects_images/Travia/TraviaHome.png"
import travia2 from "./assets/projects_images/Travia/TraviaLoading.png"
import travia3 from "./assets/projects_images/Travia/TraviaPurchase.png"
import travia4 from "./assets/projects_images/Travia/TraviaTickets.png"
import wikispeed1 from "./assets/projects_images/Wikispeed/Wikispeed1.png"
import wikispeed2 from "./assets/projects_images/Wikispeed/Wikispeed2.png"
import wikispeed3 from "./assets/projects_images/Wikispeed/Wikispeed3.png"
import umeal1 from "./assets/projects_images/Umeal/Umeal_1.png"
import umeal2 from "./assets/projects_images/Umeal/Umeal_2.png"
import umeal3 from "./assets/projects_images/Umeal/Umeal_3.png"
import umeal4 from "./assets/projects_images/Umeal/Umeal_4.png"
import umeal5 from "./assets/projects_images/Umeal/Umeal_5.png"
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

  // ─── Tools ───────────────────────────────────────────────────────────────
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

  // ─── Projects ─────────────────────────────────────────────────────────────
  // To add a project, simply push a new object to this array.
  // Set `category` to: 'BUT1' | 'BUT2' | 'BUT3' | 'Perso'
  const projects: CategorizedProject[] = [

    // ── BUT 1 ────────────────────────────────────────────────────────────────
    {
      category: 'BUT2',
      name: "Travia",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      image: travia1,
      link: undefined,
      images: [travia1, travia2, travia3, travia4],
    },
    {
      category: 'BUT1',
      name: "Codex Naturalis",
      technologies: ["Java", "POO (Programmation Orientée Objet)"],
      image: codex5,
      link: undefined,
      images: [codex1, codex2, codex3, codex4, codex5, codex6],
    },
    {
      category: 'BUT1',
      name: "QIX",
      technologies: ["Python"],
      image: qix1,
      link: undefined,
      images: [qix1, qix2, qix3, qix4],
    },

    // ── BUT 2 ────────────────────────────────────────────────────────────────
    {
      category: 'BUT2',
      name: "Wikispeed",
      technologies: ["React", "Node.js", "WebSocket"],
      image: wikispeed1,
      link: undefined,
      images: [wikispeed1, wikispeed2, wikispeed3],
    },

    // ── BUT 3 ─────────────────────────────────────────────────────────────────
    {
      category: 'BUT3',
      name: "Umeal",
      technologies: ["React", "Express.js", "Node.js", "React Native", "MongoDB", "Vitest"],
      image: umeal1,
      link: undefined,
      images: [umeal1, umeal2, umeal3, umeal4, umeal5],
    },

    // ── Perso ─────────────────────────────────────────────────────────────────
    // Ajouter ici les projets personnels au fur et à mesure
    // Exemple :
    // {
    //   category: 'Perso',
    //   name: "Mon projet perso",
    //   description: "...",
    //   technologies: ["..."],
    //   features: ["..."],
    //   context: "Projet personnel.",
    //   image: monImage,
    //   link: "https://mon-lien.com",
    //   images: [monImage],
    // },
  ];

  // ─── Skills ───────────────────────────────────────────────────────────────
  const skills: Skill[] = [
    {
      name: "Réaliser",
      description: "Concevoir, développer et valider des applications complètes en partant des exigences utilisateur jusqu'à la mise en production. Maîtrise du cycle de développement complet avec les technologies modernes.",
      shortDescription: "Concevoir et développer des applications",
      projects: ["Travia (PHP, MySQL)", "Wikispeed (React, Node.js, WebSocket)", "Portfolio (React)", "QIX (Python)"]
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
        <AboutMe img={photo} cv={cv} />
        <Timeline />
        <ProjectList projects={projects} />
        <ToolsList toolList={tools} />
        <SkillsWheel skills={skills} />
      </main>
      <Footer />
    </>
  )
}

export default App
