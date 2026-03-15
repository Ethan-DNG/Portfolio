import { useLang } from '../context/LanguageContext';

export const AboutMe = (props: { img: string; cv: string }) => {
    const { t } = useLang();
    const a = t.about;
    return (
        <section id="apropos" className="section-background aboutme">
            <h2>{a.title}</h2>
            <div className="content">
                <figure>
                    <img src={props.img} alt="Ethan Duong" />
                </figure>
                <div className="text">
                    <p>{a.bio}</p>
                    <div className="text-highlight">
                        <div className="highlight-chip"><span>🎓</span>{a.chip_year}</div>
                        <div className="highlight-chip"><span>🎯</span>{a.chip_alt}</div>
                        <div className="highlight-chip"><span>📍</span>{a.chip_loc}</div>
                    </div>
                    <button>
                        <a href={props.cv} target="_blank" rel="noopener noreferrer">
                            {a.cv_button}
                        </a>
                    </button>
                </div>
            </div>
        </section>
    );
};