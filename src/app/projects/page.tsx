import ProjectCard from "./ProjectCard"

const ProjectsPage = () => {
    
    let sources = [
        'https://images.pexels.com/photos/19845798/pexels-photo-19845798/free-photo-of-frio-com-frio-iceberg-neve.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/20104868/pexels-photo-20104868/free-photo-of-madeira-restaurante-hotel-mesa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ]

    return (
        <div>
            <h1>Projects</h1>
            <ProjectCard
                id=""
                sources={sources}
                title="Project 1"
                description="This is the first project."
                github=""/>
        </div>
    )
}

export default ProjectsPage