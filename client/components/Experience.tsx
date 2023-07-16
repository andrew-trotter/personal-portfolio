import {experiences} from "../data/data"
import ExperienceItem from "./ExperienceItem"

function Experience() {
  const data = experiences
  return (
    <ul id="experiences" className="my-14">
      {data.map(experience => <ExperienceItem key={experience.id} experience={experience}/>)}
    </ul>
  )
}

export default Experience