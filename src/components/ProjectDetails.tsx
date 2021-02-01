import React, {ReactElement} from 'react';
import {Link, useParams} from 'react-router-dom'
import {useProjectApi} from '../shared/ProjectApi';
import {Actions} from '../Store';
import Project from '../types/Project';
import ProjectProgress from './ProjectProgress';
import ProjectTimes from './ProjectTimes';

interface Props {
  favorites: Project[]
  dispatch: React.Dispatch<Actions>
}

export default function ProjectDetails(props: Props): ReactElement {
  const {id} = useParams<{id: string}>()
  const [project] = useProjectApi<Project>('get', `projects/${id}`)

  if (!project) {return <p>Lade</p>}

  const onAddToFavorite = () => {
    props.dispatch({type: 'ADD_TO_FAVORITE', project})
  }

  const onRemoveFromFavorite = () => {
    props.dispatch({type: 'REMOVE_FROM_FAVORITE', project})
  }

  const countLikes = (): number => {
    return props.favorites.filter(favorite => favorite.id === project.id).length
  }

  return (
    <>
      <div>
        <h1>{project.title}</h1>
        <div className="ui divider" />
        <div className="ui grid">
          <div className="four wide column">
            <h4>
              <i className="file image outline middle aligned icon" />
              Image
            </h4>
            <img className="ui image" alt="" src={project.img} />
          </div>
          <div className="four wide column">
            <h4>
              <i className="clock outline middle aligned icon" />
              Times
            </h4>
            <ProjectTimes project={project} />
          </div>
          <div className="four wide column">
            <h4>
              <i className="flag outline middle aligned icon" />
              Progress
            </h4>
            <ProjectProgress project={project} />
          </div>
          <div className="four wide column">
            <h4>
              <i className="compass outline middle aligned icon" />
              Status
            </h4>
            <p>{project.status}</p>
          </div>
        </div>
      </div>
      <div className="ui divider" />
      <div className="ui labeled button">
        <div onClick={onAddToFavorite} className="ui icon button">
          <i className="thumbs green up icon" />
        </div>
        <div onClick={onRemoveFromFavorite} className="ui icon button">
          <i className="thumbs red down icon" />
        </div>
        <span className="ui basic label">
          {countLikes()}
        </span>
      </div>
      <div className="ui divider" />
      <Link to="/projects" className="ui red button">Back</Link>
      <Link to={`/projects/edit/${project.id}`} className="ui yellow button">Edit</Link>
    </>
  )
}
