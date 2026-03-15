import { useState } from 'react';

export interface Skill {
    name: string;
    description: string;
    shortDescription: string;
    projects?: string[];
}

export const Skill = (props: { skill: Skill; index: number }) => {
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    return (
        <>
            <div className="skill" onClick={() => setFullScreen(true)}>
                <span className="skill-number">{String(props.index + 1).padStart(2, '0')}</span>
                <h3>{props.skill.name}</h3>
                <p className="skill-desc-short">{props.skill.shortDescription}</p>
            </div>

            {fullScreen && (
                <div onClick={() => setFullScreen(false)} className="full-screen-skill">
                    <section onClick={(e) => e.stopPropagation()}>
                        <button className="close-modal-button" onClick={() => setFullScreen(false)}>
                            ✕
                        </button>
                        <h3>{props.skill.name}</h3>
                        <p>{props.skill.description}</p>
                        {props.skill.projects && props.skill.projects.length > 0 && (
                            <div className="skill-projects">
                                <h4>Projets associés</h4>
                                <ul>
                                    {props.skill.projects.map((project, index) => (
                                        <li key={index}>{project}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </section>
                </div>
            )}
        </>
    );
};