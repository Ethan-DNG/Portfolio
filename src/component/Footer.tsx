import { faLinkedin,faGithub} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = ()=>{
    return (
        <footer id="contact">
            <a href="#home">./EthanDuong</a>
            <div>
                <figure>
                    <a href="https://www.linkedin.com/in/duongethan" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} color={"black"} />
                    </a>
                </figure>
                <figure>
                    <a href="https://github.com/ethan-dng" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} color={"black"} />
                    </a>
                </figure>
                <figure>
                    <a href="mailto:duongethan1@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} color={"black"} />
                    </a>
                </figure>
            </div>
            <p>©Ethan Duong</p>
        </footer>
    )
}