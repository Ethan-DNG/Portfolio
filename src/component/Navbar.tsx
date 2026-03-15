import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useLang } from '../context/LanguageContext';

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const { lang, toggleLang, t } = useLang();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const links = [
        { href: '#apropos', label: t.nav.about },
        { href: '#parcours', label: t.nav.timeline },
        { href: '#projects', label: t.nav.projects },
        { href: '#stack', label: t.nav.stack },
        { href: '#competences', label: t.nav.skills },
        { href: '#contact', label: t.nav.contact },
    ];

    return (
        <>
            <button
                onClick={() => setMenuOpen((v) => !v)}
                className="burgerButton"
                aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
                <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} color="currentColor" />
            </button>

            <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} aria-label="Navigation principale">
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="navbar-actions">
                    {/* Language toggle */}
                    <button
                        className="lang-toggle"
                        onClick={toggleLang}
                        aria-label={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
                        title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
                    >
                        <span className={lang === 'fr' ? 'active' : ''}>FR</span>
                        <span className="lang-sep">·</span>
                        <span className={lang === 'en' ? 'active' : ''}>EN</span>
                    </button>

                    {/* Theme toggle */}
                    <button
                        className="theme-toggle"
                        onClick={() => setIsDark((v) => !v)}
                        aria-label={isDark ? 'Mode clair' : 'Mode sombre'}
                        title={isDark ? 'Mode clair / Light mode' : 'Mode sombre / Dark mode'}
                    >
                        <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                    </button>
                </div>
            </nav>

            {/* Mobile fullscreen menu */}
            {menuOpen && (
                <nav className="navbar-fullscreen" aria-label="Menu mobile">
                    <div className="navbar-fullscreen-actions">
                        <button className="lang-toggle lang-toggle--large" onClick={toggleLang}>
                            <span className={lang === 'fr' ? 'active' : ''}>FR</span>
                            <span className="lang-sep">·</span>
                            <span className={lang === 'en' ? 'active' : ''}>EN</span>
                        </button>
                        <button
                            className="theme-toggle theme-toggle-mobile"
                            onClick={() => setIsDark((v) => !v)}
                        >
                            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
                        </button>
                    </div>
                    <ul>
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={() => setMenuOpen(false)}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};