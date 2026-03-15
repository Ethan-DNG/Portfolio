import { useState } from 'react';
import { useLang } from '../context/LanguageContext';

export interface Project {
    name: string;
    description?: string;
    technologies?: string[];
    features?: string[];
    context?: string;
    image: string;
    link: string | undefined;
    images: string[];
}

export const Project = (props: { project: Project }) => {
    const { t } = useLang();
    const m = t.projects.modal;

    // Look up translated content if available, fallback to props
    const projectName = props.project.name as keyof typeof t.projects.items;
    const translatedProject = t.projects.items[projectName];

    const description = translatedProject?.description || props.project.description || '';
    const features = translatedProject?.features || props.project.features || [];
    const context = translatedProject?.context || props.project.context;

    const [fullScreen, setFullScreen] = useState(false);
    const [currentImageIndex, setIndex] = useState(0);
    const [zoomedImage, setZoomedImage] = useState<string | null>(null);

    const handleNext = () =>
        setIndex((i) => (i < props.project.images.length - 1 ? i + 1 : 0));
    const handlePrev = () =>
        setIndex((i) => (i > 0 ? i - 1 : props.project.images.length - 1));

    const currentSrc = props.project.images[currentImageIndex];

    return (
        <>
            {/* Project card */}
            <div className="project" onClick={() => { setFullScreen(true); setIndex(0); }}>
                <img src={props.project.image} alt={props.project.name} />
                <span className="project-view-hint">{m.view}</span>
                <p>{props.project.name}</p>
            </div>

            {/* Full-screen modal */}
            {fullScreen && (
                <div onClick={() => setFullScreen(false)} className="full-screen-project">
                    <section onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-button" onClick={() => setFullScreen(false)}>✕</button>

                        <h2>{props.project.name}</h2>

                        {/* Clickable image */}
                        <div
                            className="project-image-container project-image-container--clickable"
                            onClick={() => setZoomedImage(currentSrc)}
                            title={m.zoom_hint}
                        >
                            <img src={currentSrc} alt={`${props.project.name} — ${currentImageIndex + 1}`} />
                            <div className="zoom-overlay-hint">
                                <span>🔍</span> {m.zoom_hint}
                            </div>
                        </div>

                        {/* Image controls */}
                        <div className="image-controls">
                            <button className="projetButton" onClick={handlePrev}>
                                <span>←</span> {m.prev}
                            </button>
                            <span className="image-counter">
                                {currentImageIndex + 1} / {props.project.images.length}
                            </span>
                            <button className="projetButton" onClick={handleNext}>
                                {m.next} <span>→</span>
                            </button>
                        </div>

                        {/* Description */}
                        <div className="project-description">
                            <p className="project-intro" dangerouslySetInnerHTML={{ __html: description }} />

                            {props.project.technologies && props.project.technologies.length > 0 && (
                                <div className="project-section">
                                    <h4>{m.technologies}</h4>
                                    <div className="tech-tags">
                                        {props.project.technologies.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {features.length > 0 && (
                                <div className="project-section">
                                    <h4>{m.features}</h4>
                                    <ul className="features-list">
                                        {features.map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {context && (
                                <div className="project-section project-context">
                                    <h4>{m.context}</h4>
                                    <p>{context}</p>
                                </div>
                            )}
                        </div>

                        {props.project.link && (
                            <a href={props.project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                {m.view}
                            </a>
                        )}
                    </section>
                </div>
            )}

            {/* Image lightbox */}
            {zoomedImage && (
                <div
                    className="image-lightbox"
                    onClick={() => setZoomedImage(null)}
                    aria-label="Fermer l'image agrandie"
                >
                    <button
                        className="lightbox-close"
                        onClick={() => setZoomedImage(null)}
                        aria-label="Fermer"
                    >
                        ✕
                    </button>
                    <img
                        src={zoomedImage}
                        alt="Image agrandie"
                        onClick={(e) => e.stopPropagation()}
                    />
                    <p className="lightbox-hint">
                        {props.project.images.length > 1
                            ? `${currentImageIndex + 1} / ${props.project.images.length}`
                            : ''}
                    </p>
                </div>
            )}
        </>
    );
};