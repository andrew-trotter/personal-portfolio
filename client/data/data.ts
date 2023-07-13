import { Project } from "../../models/project";


const projects: Project[] = [
  {
    id: 1,
    name: 'Pinky Promise - Dev Academy Final Project',
    desc: 'A web app to help keep yourself and friends accountable!',
    image: '../../images/pinky-promise.png',
    techs: [{name: 'React'}, {name: 'react-query'}, {name: 'tailwind.css'}, {name: 'TypeScript'}, {name: 'Knex'}, {name: 'SQLite3'}, ]
  },{
    id: 2,
    name: 'Foundations Blog',
    desc: 'My basic blog detailing my journey through the Foundations content of Dev Academy',
    image: '../../images/personal-blog.png',
    techs: [{name: 'HTML'}, {name: 'CSS'},]
  },
]

export default projects