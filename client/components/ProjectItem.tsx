import { Project } from '../../models/project'
import FeatureItem from './FeatureItem'

interface Props {
  project: Project
}

function ProjectItem(props: Props) {
  const project = props.project

  return (
    <li className="flex">
      <div className=''>
        <img src={project.image} alt={project.name} />
        <div>
          <h4 className="text-white">{project.name}</h4>
          <h5>{project.desc}</h5>
          <div className="features">
            {project.techs.map((tech) => (
              <FeatureItem key={tech.name} name={tech.name} />
            ))}
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProjectItem
