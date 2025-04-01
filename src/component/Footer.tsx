import { faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = ()=>{
    return (<footer>
            <a>./EthanDuong</a>
            <div><figure><FontAwesomeIcon icon={faLinkedin} color={"black"}/></figure> <figure><FontAwesomeIcon icon={faGithub} color={"black"}/></figure> <figure><FontAwesomeIcon icon={faEnvelope} color={"black"}/></figure></div>
            <p>©Ethan Duong</p>
        </footer>

    )
}