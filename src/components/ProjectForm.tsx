import React, {ReactElement} from "react"

export default function ProjectForm(): ReactElement {
  return (
    <form className="ui form">
      <h4 className="ui dividing header">Project Create</h4>
      <div className="field">
        <div className="field">
          <label>Titel</label>
          <div className="field">
            <input type="text" placeholder="Titel" />
          </div>
        </div>
        <div className="field">
          <label>Image</label>
          <div className="field">
            <input type="text" placeholder="Image Url" />
          </div>
        </div>
        <div className="field">
          <label>Status</label>
          <select className="ui fluid dropdown">
            <option value="in-progress">In Progress</option>
            <option value="on-hold">On Hold</option>
            <option value="is-completed">Is Completed</option>
          </select>
        </div>
        <div className="field">
          <label>Progress</label>
          <button type="button" className="ui button">+5</button>
          <button type="button" className="ui button">-5</button>
          <button type="button" className="ui button">+1</button>
          <button type="button" className="ui button">-1</button>
          <div className="ui progress">
            <div className="bar" style={{width: '50%'}}>
              <div className="progress">50%</div>
            </div>
          </div>
        </div>
        <label>Times</label>
        <div className="inline fields">
          <div className="six wide field">
            <label>Titel</label>
            <input type="text" placeholder="Titel" />
          </div>
          <div className="four wide field">
            <label>Begin</label>
            <input type="date" placeholder="Begin" />
          </div>
          <div className="four wide field">
            <label>End</label>
            <input type="date" placeholder="End" />
          </div>
          <button type="button" className="ui button">+</button>
          <button type="button" className="ui button">-</button>
        </div>
      </div>
      <button className="ui button">Submit</button>
    </form >
  )
}
