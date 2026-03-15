import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLang();
    return (
        <footer id="contact">
            <a href="#home">
                ./Ethan<span>Duong</span>
            </a>
            <div className="footer-socials">
                <figure>
                    <a href="https://www.linkedin.com/in/duongethan" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </figure>
                <figure>
                    <a href="https://github.com/ethan-dng" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </figure>
                <figure>
                    <a href="mailto:duongethan1@gmail.com" aria-label="Email">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </figure>
            </div>
            <p>{t.footer.copyright}</p>
        </footer>
    );
};