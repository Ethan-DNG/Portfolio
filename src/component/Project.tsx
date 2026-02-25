import { useState } from 'react'

export interface Project {
    name: string;
    description: string;
    technologies?: string[];
    features?: string[];
    context?: string;
    image: string;
    link: string | undefined;
    images: string[];
}

export const Project = (props: { project: Project }) => {
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0); // État pour suivre l'image affichée

    const handleNextImage = () => {
        // Passage à l'image suivante
        if (currentImageIndex < props.project.images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setCurrentImageIndex(0); // Retour à la première image si on arrive à la fin
        }
    };

    const handlePreviousImage = () => {
        // Passage à l'image précédente
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        } else {
            setCurrentImageIndex(props.project.images.length - 1); // Retour à la dernière image
        }
    };

    return (
        <>
            <div className="project" onClick={() => setFullScreen(true)}>
                <img src={props.project.image} alt={props.project.name} />
                <p>{props.project.name}</p>
            </div>

            {fullScreen && (
                <div onClick={() => setFullScreen(false)} className="full-screen-project">
                    <section onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-button" onClick={() => setFullScreen(false)}>
                            ✕
                        </button>
                        <h2>{props.project.name}</h2>
                        <div className="project-image-container">
                            <img src={props.project.images[currentImageIndex]} alt={props.project.name} />
                        </div>
                        <div className="image-controls">
                            <button className="projetButton" onClick={handlePreviousImage}>
                                <span>←</span> PRÉCÉDENTE
                            </button>
                            <span className="image-counter">{currentImageIndex + 1} / {props.project.images.length}</span>
                            <button className="projetButton" onClick={handleNextImage}>
                                SUIVANTE <span>→</span>
                            </button>
                        </div>
                        <div className="project-description">
                            <p className="project-intro" dangerouslySetInnerHTML={{ __html: props.project.description }}></p>

                            {props.project.technologies && props.project.technologies.length > 0 && (
                                <div className="project-section">
                                    <h4>🛠️ Technologies utilisées</h4>
                                    <div className="tech-tags">
                                        {props.project.technologies.map((tech, index) => (
                                            <span key={index} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {props.project.features && props.project.features.length > 0 && (
                                <div className="project-section">
                                    <h4>✨ Fonctionnalités principales</h4>
                                    <ul className="features-list">
                                        {props.project.features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {props.project.context && (
                                <div className="project-section project-context">
                                    <h4>📋 Contexte</h4>
                                    <p>{props.project.context}</p>
                                </div>
                            )}
                        </div>
                        {props.project.link && <a href={props.project.link} className="project-link">Voir le projet</a>}
                    </section>
                </div>
            )}
        </>
    );
}