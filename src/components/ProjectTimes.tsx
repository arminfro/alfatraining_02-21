import React, {ReactElement} from 'react';
import Time from 'react-time'

import Project from '../types/Project';

interface Props {
  project: Project
}

export default function ProjectTimes(props: Props): ReactElement {
  const project = props.project

  return (
    <div className="ui relaxed divided list metadata">
      {project.times.map(({begin, end, title}) =>
        <div key={begin.toString()} className="item">
          <div className="content">
            {title &&
              <span className="header">
                {title}
              </span>
            }
            <Time value={new Date(begin)} format="DD/MM HH:mm" />
            ...
            <Time value={new Date(end)} format="DD/MM HH:mm" />
          </div>
        </div>
      )}
    </div>
  )
}

