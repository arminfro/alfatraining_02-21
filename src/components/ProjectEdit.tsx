import React, {ReactElement} from "react"
import {useParams} from 'react-router-dom'
import ProjectForm from './ProjectForm'
import {useProjectApi} from '../shared/ProjectApi'
import Project from '../types/Project'

export default function ProjectEdit(): ReactElement {
  const {id} = useParams<{id: string}>()
  const [project] = useProjectApi<Project>('get', `projects/${id}`)

  if (!project) {return <p>Lade</p>}

  const dateToInputString = (date: Date): string => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDay() + 1).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <ProjectForm
      title={project.title}
      image={project.img}
      status={project.status}
      progress={project.progress}
      times={project.times.map(time => ({...time, begin: dateToInputString(time.begin), end: dateToInputString(time.end)}))}
      isEdit={true}
      id={+id}
    />
  )
}

