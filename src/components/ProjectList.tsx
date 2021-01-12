import axios, {AxiosResponse} from 'axios';
import React, {ReactElement, useEffect, useState} from 'react';

import Project from '../types/Project';
import ProjectListItem from './ProjectListItem'

interface Props {
  showDetails: (project: Project) => void
}

export default function ProjectList(props: Props): ReactElement {
  const [projects, setBooks] = useState<Project[]>()

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/projects'
    })
      .then((response: AxiosResponse<Project[]>) => setBooks(response.data))
  }, [])

  if (!projects) {return <p>Lade</p>}

  return (
    <div className="ui three cards" style={{padding: 20}}>
      {projects.map(project => <ProjectListItem key={project.id} project={project} showDetails={props.showDetails} />)}
    </div>
  )
}
