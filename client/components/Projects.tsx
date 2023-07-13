import projects from "../data/data"
import ProjectItem from "./ProjectItem"

function Projects() {
  const data = projects
  return (
    <div className="projects">
      {data.map(project => <ProjectItem key={project.id} project={project}/>)}
    </div>
  )
}

export default Projects