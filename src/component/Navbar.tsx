import{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons";


export const Navbar =()=>{
    const [fullScreen, setFullScreen] = useState(false);
    return (<>
            <button onClick={()=>setFullScreen(true)} className={"burgerButton"}><FontAwesomeIcon icon={faBars} color={"white"} /></button>
            <nav className={"navbar"}>
                <ul >
                    <li><a href="#apropos">À propos</a></li>
                    <li><a href="#parcours">Parcours</a></li>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#competences" >Compétences</a></li>
                    <li><a href="#contact" >Contact</a></li>

                </ul>
            </nav>
            {fullScreen &&
                <nav className={"navbar-fullscreen"}>
                    <ul>
                        <li><a href="#apropos" onClick={()=>setFullScreen(false)}>À propos</a></li>
                        <li><a href="#parcours" onClick={()=>setFullScreen(false)}>Parcours</a></li>
                        <li><a href="#projects" onClick={()=>setFullScreen(false)}>Projets</a></li>
                        <li><a href="#competences" onClick={()=>setFullScreen(false)}>Compétences</a></li>
                        <li><a href="#contact" onClick={()=>setFullScreen(false)}>Contact</a></li>
                    </ul>
                </nav>
            }

        </>
    )
}