import {Skill} from "./Skill";
export const SkillsList=(props: {skills:Skill[]}) => {
    return <>
        <section className="section-background skills" id="competences">
            <h2>Compétences</h2>
            <div className="skills-container">
            {props.skills.map((skill:Skill,index) => {return <Skill skill={skill} key={index}></Skill>})}
            </div>
        </section>
    </>
}