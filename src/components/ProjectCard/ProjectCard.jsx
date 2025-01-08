import github from '/github2.png'

// import style from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className='project-container' id={project.id % 2 === 0 ? 'ad' : 'bd'}>
      <div className="project-img-container">
        <a target="_blank" href={project.deploymentLink}><img id="project-img" src={project.image} alt="1"/></a>
      </div>
      <div className='project-info'>
        <div className='project-link'>
          <a id="github-link" target="_blank" href={project.repositoryLink} style={{backgroundImage: `url(${github})`}}></a>
        </div>
        <div className="project-desc">
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className='tech-list'>
            {project.tech.map(te => 
              <span key={te.id}>{te}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard