import React, {ReactElement} from 'react';

import ClassCounter from './ClassCounter';
import ProjectList from './ProjectList'

export default function App(): ReactElement {
  return (
    <div className="ui container">
      <ClassCounter />
      <ProjectList />
    </div>
  );
}
