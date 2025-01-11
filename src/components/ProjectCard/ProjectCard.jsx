import github from '/github2.png'

import styles from './ProjectCard.module.css'

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectContainer} id={styles[project.id % 2 === 0 ? 'ad' : 'bd']}>
      <div className={styles.projectImgContainer}>
        <a target="_blank" href={project.deploymentLink}><img id={styles['project-img']} src={project.image} alt="1"/></a>
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectLink}>
          <a id={styles.githubLink} target="_blank" href={project.repositoryLink} style={{backgroundImage: `url(${github})`}}></a>
        </div>
        <div className={styles.projectDesc}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className={styles.techList}>
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