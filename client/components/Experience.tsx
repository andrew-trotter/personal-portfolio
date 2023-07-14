import projects from "../data/data"
import ExperienceItem from "./ExperienceItem"

function Projects() {
  const data = projects
  return (
    <ul id="projects" className="my-14">
      {data.map(project => <ExperienceItem key={project.id} project={project}/>)}
    </ul>
  )
}

export default Projects