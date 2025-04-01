import './App.css'
import {HeroHeader} from "./component/HeroHeader.tsx";
import {AboutMe} from "./component/AboutMe.tsx";
import {Project} from "./component/Project.tsx";
import {ProjectList} from "./component/ProjectList.tsx";
import {Navbar} from "./component/Navbar.tsx";
import cv from "./assets/CV.pdf"
import photo from "./assets/Photo.jpg"
import {ToolsList} from "./component/ToolsList.tsx";
import {Tool} from"./component/Tool.tsx"
import { faJava, faPython, faPhp, faReact, faHtml5, faCss3Alt, faJs, faCuttlefish } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {Footer} from "./component/Footer.tsx";
import {Timeline} from "./component/Timeline.tsx"
import {Skill} from "./component/Skill.tsx";
import {SkillsList} from "./component/SkillsList.tsx";
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
    { name: "JavaScript", img: faJs }
  ];


  const projects: Project[] = [{
    name: "Travia",
    description: "Travia est un site web immersif dans l’univers de Star Wars, permettant aux utilisateurs de réserver des billets pour des navettes interplanétaires. Développé avec <b>PHP</b>, <b>HTML</b>, <b>CSS</b> et <b>JavaScript</b>, il repose sur une base de données <b>MySQL</b> pour la gestion des réservations. Que vous souhaitiez explorer Coruscant, Tatooine ou Endor, Travia vous transporte au cœur de l’aventure interstellaire avec un système de réservation efficace et immersif. Ce projet a été développé en groupe de trois.",
    image: travia1,
    link: undefined,
    images: [travia1,travia2,travia3,travia4]
  },
    {
      name: "Wikispeed",
      description: "Wikispeed est un jeu multijoueur développé en <b>React</b> et <b>Node.js</b>. Dans ce jeu, les joueurs reçoivent une liste d'articles <b>Wikipedia</b> et doivent les atteindre le plus rapidement possible en parcourant les liens. Les joueurs peuvent utiliser des artéfacts, qui peuvent être des bonus ou des malus, pour influencer le jeu. Le mode solo est disponible, mais le jeu utilise également <b>WebSocket</b> pour permettre le jeu en multijoueur en temps réel. Ce projet a été développé en groupe de quatre.",
      image: wikispeed1,
      link: undefined,
      images: [wikispeed1,wikispeed2,wikispeed3]
    },
    {
      name: "Mon Portfolio",
      description: "Mon Portfolio est un site web que j'ai codé moi-même en <b>React</b>. Ce projet présente mes compétences, mes réalisations et mes projets. Le site utilise des technologies comme <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, ainsi que des outils comme <b>React</b> pour la gestion dynamique du contenu et des animations. Le design est responsive, ce qui permet de consulter le portfolio sur différents appareils. Il met également en valeur mon expérience en développement web et mes projets précédents.",
      image: portfolio1,
      link: undefined,
      images: [portfolio1, portfolio2, portfolio3]
    }
  ];
  const skills: Skill[]  = [
    { name: "Réaliser", description: "Partir des exigences et aller jusqu'à une application complète", shortDescription: "Créer une application complète" },
    { name: "Optimiser", description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné", shortDescription: "Choisir les bons algorithmes" },
    { name: "Administrer", description: "Déployer des services dans une architecture réseau", shortDescription: "Gérer les services réseau" },
    { name: "Gérer", description: "Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité", shortDescription: "Gérer et sécuriser les données" },
    { name: "Conduire", description: "Appliquer une démarche de suivi de projet en fonction des besoins et métiers des clients et des utilisateurs", shortDescription: "Suivre un projet informatique" },
    { name: "Collaborer", description: "Situer son rôle au sein d'une équipe informatique", shortDescription: "Travailler en équipe IT" }
  ];

  return (
    <>
      <Navbar />
      <main>
    <HeroHeader/>
      <AboutMe img={photo} cv={cv} text={"Actuellement en deuxième année de BUT Informatique, je me passionne pour le développement web et les technologies émergentes. Toujours à la recherche de nouveaux défis, j’aime concevoir des solutions créatives et optimisées pour améliorer l’expérience utilisateur."}
      />
        <Timeline/>
        <ProjectList projects={projects} />
        <ToolsList toolList={tools}/>
        <SkillsList skills={skills} />
      </main>
      <Footer/>

    </>
  )
}

export default App
