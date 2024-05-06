import TopTitle from '@/components/TopTitle'
import data from '../../../data.json'
import ProjectsGrid from './ProjectsGrid'


const ProjectsPage = () => {

    return (
        <div>
            <TopTitle title="Projetos"/>
            <ProjectsGrid projects={data.projects}/>
        </div>
    )
}

export default ProjectsPage