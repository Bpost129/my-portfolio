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



// *******  change project title to navbar style, give hover effect to reveal better description, perhaps with tech "badges"  ******* //


// ********************** //