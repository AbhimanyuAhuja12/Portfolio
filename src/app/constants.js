import HomeGrid from "./components/HomeGrid"
import ProjectsGrid from "./components/ProjectsGrid"
import WorkGrid from './components/WorkGrid'
import ResumeGrid from "./components/ResumeGrid"

export const GRIDS = [
  { label: "home", Component: HomeGrid },
  { label: "projects", Component: ProjectsGrid },

  { label: "work", Component: WorkGrid },

  {label:"resume", Component:ResumeGrid},
]

