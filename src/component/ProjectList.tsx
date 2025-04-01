import { Project } from "./Project"; // Assurez-vous que le fichier est correct

export const ProjectList = ({ projects }: { projects: Project[] }) => {


    return (<section className="projects section-background">
            <h2>Projets</h2>
        <ul className="project-list">
                {projects.map((project, index) => (
                    <li key={index}>
                        <Project project={project} />
                    </li>
                ))}
        </ul></section>
    );
};
