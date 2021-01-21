import React, {ReactElement} from 'react';
import Project from '../types/Project';

interface Props {
  project: Project
}

export default function ProjectProgress(props: Props): ReactElement {
  const project = props.project
  const progressBarClassMap: {[key: string]: string} = {
    'is-completed': 'success',
    'in-progress': 'warning',
    'on-hold': 'error'
  }

  return (
    <div className={`ui progress ${progressBarClassMap[project.status]}`}>
      <div className="bar" style={{width: `${project.progress}%`}}>
        <div className="progress">{project.progress}%</div>
      </div>
    </div>
  )
}
