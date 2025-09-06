export interface ProjectType {
  id: number
  title: string
  description: string
  image: string
  stack: string[]
  year: number
  link?: string
  color: string
  bgcolor: string
  bordercolor: string
  type: string
  slug: string
  video?: string
}

export interface ProjectStore {
  activeProject: ProjectType | null;
  setActiveProject: (project: ProjectType | null) => void;
}