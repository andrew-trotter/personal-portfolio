import connection from './connection'
import { Project } from '../../models/project'

export function getAllProjects(db = connection){
  return db('projects').select() as Promise<Project[]>
}
