import { Router } from 'express'

import * as db from '../db/projects'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const projects = await db.getAllProjects()

    res.json({ projects: projects.map(project => project.name) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
