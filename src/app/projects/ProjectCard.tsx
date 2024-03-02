'use client'
import Carousel from "./Carousel"

const ProjectCard = (project: Project) => {

    return (
        <div className="max-w-sm overflow-hidden shadow-lg m-4 rounded-md p-4">
            <h3>{project.title}</h3>
            <p className="text-sm text-neutral-600 mb-4">{project.description}</p>
            <Carousel images={project.sources}/>
            <a href={project.github} className="text-blue-600/100 mt-8">GitHub</a>
        </div>
    )

}

export default ProjectCard