import React, {ReactElement, useState} from 'react';

import ClassCounter from './ClassCounter';
import ProjectList from './ProjectList'
import ProjectDetails from './ProjectDetails'

import Project from '../types/Project'

type ViewState = 'list' | 'details'

export default function App(): ReactElement {
  const [viewState, setViewState] = useState<ViewState>('list');
  const [project, setProject] = useState<Project>();

  const showList = () => {
    setViewState('list')
    setProject(undefined)
  };

  const showDetails = (project_: Project) => {
    setProject(project_)
    setViewState('details')
  };

  return (
    <div className="ui container">
      <ClassCounter />
      {
        viewState === 'details' && project
          ? <ProjectDetails showList={showList} project={project} />
          : <ProjectList showDetails={showDetails} />
      }
    </div>
  )
}
