import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectList = ({ projects }) => {
  return (
    <>
      <div className='project-list-section'>
        <div className='container custom_container'>
          <div className='row g-xl-4 g-lg-4 g-md-4 g-4 justify-content-center'>{projects.length > 0 && projects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
        </div>
      </div>
    </>
  )
}

export default ProjectList
