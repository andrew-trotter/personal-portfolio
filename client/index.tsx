import { createRoot } from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import App from './components/App'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      
    </Route>,
  ),
)

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <RouterProvider router={router} />,
  )
})
