import React, {ReactElement, useState} from "react"
import {useHistory} from "react-router-dom"
import {projectApi} from "../shared/ProjectApi"
import {Status} from "../types/Project"

import css from './ProjectForm.module.css'

interface FormTimes {
  title?: string
  begin: string
  end: string
}

interface Props {
  title: string
  image: string
  status: Status
  progress: number
  times: FormTimes[]
  isEdit: boolean
  id?: number
}

export default function ProjectForm(props: Props): ReactElement {
  console.log(css)
  const buildTime = () => {
    return {title: '', begin: '', end: ''}
  }
  const history = useHistory()
  const [title, setTitle] = useState(props.title)
  const [image, setImage] = useState(props.image)
  const [status, setStatus] = useState<Status>(props.status)
  const [progress, setProgress] = useState(props.progress)
  const [times, setTimes] = useState(props.times)

  const onChangeProgress = (changeValue: number) => {
    setProgress(currentProgress => {
      const newProgress = currentProgress + changeValue
      if (newProgress >= 0 && newProgress <= 100) {
        return newProgress
      } else {
        return currentProgress
      }
    })
  }

  const project = (): any => {
    return {
      title,
      img: image,
      status,
      progress,
      times: times.map(time => ({...time, begin: new Date(time.begin).toString(), end: new Date(time.end).toString()}))
    }
  }

  const onChangeTimes = (index: number, attribute: string, newValue: string) => {
    setTimes(currentTimes => {
      const copyTimes = [...currentTimes]
      copyTimes[index] = {...copyTimes[index], [attribute]: newValue}
      return copyTimes
    })
  }

  const onAddTime = () => {
    setTimes(currentTimes => [...currentTimes, buildTime()])
  }

  const onRemoveTime = () => {
    setTimes(currentTimes => {
      const copyTimes = [...currentTimes]
      if (copyTimes.length > 1) {
        copyTimes.pop()
      }
      return copyTimes
    })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() // prevent reload
    projectApi(
      props.isEdit ? 'put' : 'post',
      props.isEdit ? `projects/${props.id}` : 'projects',
      () => {
        history.push(props.isEdit ? `/projects/${props.id}` : '/projects')
      },
      project()
    )
  }

  return (
    <form onSubmit={onSubmit} className={`ui form ${css.projectForm}`}>
      <h4 className="ui dividing header">Project {props.isEdit ? 'Edit' : 'Create'}</h4>
      <div className="field">
        <div className="field">
          <label>Titel</label>
          <div className="field">
            <input required minLength={3} value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Titel" />
          </div>
        </div>
        <div className="field">
          <label>Image</label>
          <div className="field">
            <input required pattern="[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?" value={image} onChange={e => setImage(e.target.value)} type="text" placeholder="Image Url" />
          </div>
        </div>
        <div className="field">
          <label>Status</label>
          <select value={status} onChange={e => setStatus(e.target.value as Status)} className="ui fluid dropdown">
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="is-completed">Is Completed</option>
          </select>
        </div>
        <div className="field">
          <label>Progress</label>
          <button disabled={progress > 95} onClick={() => onChangeProgress(5)} type="button" className="ui button">+5</button>
          <button disabled={progress < 5} onClick={() => onChangeProgress(-5)} type="button" className="ui button">-5</button>
          <button disabled={progress >= 100} onClick={() => onChangeProgress(1)} type="button" className="ui button">+1</button>
          <button disabled={progress <= 0} onClick={() => onChangeProgress(-1)} type="button" className="ui button">-1</button>
          <div className="ui progress">
            <div className="bar" style={{width: `${progress}%`}}>
              <div className="progress">{`${progress}%`}</div>
            </div>
          </div>
        </div>
        <label>Times</label>
        <button onClick={onAddTime} type="button" className="ui button">+</button>
        <button disabled={times.length === 1} onClick={onRemoveTime} type="button" className="ui button">-</button>
        {times.map((time, index) =>
          <div key={index} className="inline fields">
            <div className="six wide field">
              <label>Titel</label>
              <input value={time.title} onChange={e => onChangeTimes(index, 'title', e.target.value)} type="text" placeholder="Titel" />
            </div>
            <div className="four wide field">
              <label>Begin</label>
              <input required value={time.begin} onChange={e => onChangeTimes(index, 'begin', e.target.value)} type="date" placeholder="Begin" />
            </div>
            <div className="four wide field">
              <label>End</label>
              <input required value={time.end} onChange={e => onChangeTimes(index, 'end', e.target.value)} type="date" placeholder="End" />
            </div>
          </div>
        )}
      </div>
      <button className="ui button">Submit</button>
    </form>
  )
}
