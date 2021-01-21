import React, {ReactElement} from 'react';

import {projects} from '../shared/projects'
import Project from '../types/Project';
import ProjectListItem from './ProjectListItem'

interface Props {
  showDetails: (project: Project) => void
}

export default function ProjectList(props: Props): ReactElement {
  return (
    <div className="ui three cards" style={{padding: 20}}>
      {projects.map(project => <ProjectListItem key={project.id} project={project} showDetails={props.showDetails} />)}
    </div>
  )
}
