import { useState } from 'react'

export interface Project {
    name: string;
    description: string; // Contiendra du HTML
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
                        <h2>{props.project.name}</h2>
                        <img src={props.project.images[currentImageIndex]} alt={props.project.name} />
                        <div className="image-controls">
                            <button onClick={handlePreviousImage}>Précédente</button>
                            <button onClick={handleNextImage}>Suivante</button>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: props.project.description }}></p>
                        {props.project.link && <a href={props.project.link}>Lien vers le projet</a>}
                    </section>
                </div>
            )}
        </>
    );
}