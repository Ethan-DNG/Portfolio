import { useState } from 'react'
export interface Skill {
    name: string;
    description: string;
    shortDescription: string;
}
export const Skill=(props:{skill:Skill}) => {
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    return (<>
            <div  className={"skill"} onClick={()=>setFullScreen(true)}>
                <h3>{props.skill.name}</h3>
                <p>{props.skill.shortDescription}</p>
            </div>
            {fullScreen &&
                <div onClick={()=>setFullScreen(false)} className="full-screen-skill">
                    <section onClick={(e) => e.stopPropagation()}>
                        <h3>{props.skill.name}</h3>
                        <p>{props.skill.description}</p>
                    </section>
                </div>
            }
        </>

    )
}