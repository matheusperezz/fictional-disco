import ProjectCard from "./ProjectCard"

interface ProjectsGridProps {
    projects: Project[]
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    id={project.id}
                    title={project.title}
                    description={project.description}
                    github={project.github}
                    sources={project.sources}
                />
            ))}
        </div>
    )
}

export default ProjectsGrid