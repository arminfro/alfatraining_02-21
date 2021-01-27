import React, {ReactElement} from 'react';
import {useProjectApi} from '../shared/ProjectApi';
import Project from '../types/Project';
import ProjectListItem from './ProjectListItem';

interface Props {
  showDetails: (project: Project) => void
}

export default function ProjectList(props: Props): ReactElement {
  const [projects] = useProjectApi<Project[]>('get', 'projects')

  return projects
    ? (
      <div className="ui three cards" style={{padding: 20}}>
        {projects.map(project => <ProjectListItem key={project.id} project={project} showDetails={props.showDetails} />)}
      </div>
    ) : (
      <p>Lade</p>
    )
}
