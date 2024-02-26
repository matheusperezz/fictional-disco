import data from '../../../data.json'
import ProjectsGrid from './ProjectsGrid'


const ProjectsPage = () => {

    return (
        <div>
            <h1>Projects</h1>
            <ProjectsGrid projects={data.projects}/>
        </div>
    )
}

export default ProjectsPage