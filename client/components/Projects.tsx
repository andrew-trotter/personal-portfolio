import projects from "../data/data"
import ProjectItem from "./ProjectItem"

function Projects() {
  const data = projects
  return (
    <ul className="my-14">
      {data.map(project => <ProjectItem key={project.id} project={project}/>)}
    </ul>
  )
}

export default Projects