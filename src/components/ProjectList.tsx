import React, {ReactElement} from 'react';
import {useProjectApi} from '../shared/ProjectApi';
import Project from '../types/Project';
import ProjectListItem from './ProjectListItem';

export default function ProjectList(): ReactElement {
  const [projects] = useProjectApi<Project[]>('get', 'projects')

  return projects
    ? (
      <div className="ui three cards" style={{padding: 20}}>
        {projects.map(project => <ProjectListItem key={project.id} project={project} />)}
      </div>
    ) : (
      <p>Lade</p>
    )
}
