import { useLang } from '../context/LanguageContext';

export const HeroHeader = () => {
  const { t } = useLang();
  return (
    <section className="hero" id="home">
      <div className="hero-badge">{t.hero.badge}</div>
      <h1>
        Ethan<br />
        <span>Duong</span>
      </h1>
      <p>{t.hero.subtitle}</p>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">{t.hero.cta_projects}</a>
        <a href="#apropos" className="btn-secondary">{t.hero.cta_about}</a>
      </div>
      <div className="hero-scroll">{t.hero.scroll}</div>
    </section>
  );
};