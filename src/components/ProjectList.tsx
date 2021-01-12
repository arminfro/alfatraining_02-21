import axios, {AxiosResponse} from 'axios';
import React, {ReactElement, useEffect, useState} from 'react';

import Project from '../types/Project';
import ProjectListItem from './ProjectListItem'
import LoadingSpinner from './shared/LoadingSpinner';

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

  return projects
    ? (
      <div className="ui three cards" style={{padding: 20}}>
        {projects.map(project => <ProjectListItem key={project.id} project={project} showDetails={props.showDetails} />)}
      </div>
    ) : (
      <LoadingSpinner name="Projects" />
    )
}
