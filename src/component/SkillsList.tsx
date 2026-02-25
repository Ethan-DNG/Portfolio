import { Skill } from "./Skill";
export const SkillsList = (props: { skills: Skill[] }) => {
    return <>
        <section className="section-background skills" id="competences">
            <h2>Les 6 Compétences du BUT Informatique</h2>
            <p className="skills-intro">Cliquez sur une compétence pour découvrir les détails et projets associés</p>
            <div className="skills-container">
                {props.skills.map((skill: Skill, index) => { return <Skill skill={skill} key={index}></Skill> })}
            </div>
        </section>
    </>
}