import React, {ReactElement} from 'react';

import {projects} from '../shared/projects'
import ProjectListItem from './ProjectListItem'

export default function ProjectList(): ReactElement {
  return (
    <div className="ui three cards" style={{padding: 20}}>
      {projects.map(project => <ProjectListItem key={project.id} project={project} />)}
    </div>
  )
}
