import ProjectCard from '../../components/ProjectCard/ProjectCard'

import { projectsData } from '../../data/projectsData'

const Projects = () => {
  return (
    <>
      {/* <div className="project-list"> */}

        {projectsData.map(project => 
          <ProjectCard key={project.id} project={project} />
        )}

      {/* </div>   */}
    </>
  )
}

export default Projects





// ********************** //



// *******  update aboutMe, skills list, project descriptions, ? Contact Form ? ******* //

// *******  check outcomes resources  ******* //

// *******  start a resume template  ******* //

// ********************** //