import React, {ReactElement} from "react"
import {NavLink} from "react-router-dom"
import ProjectForm from "./ProjectForm"

interface Props {
  children: ReactElement
}

export default function Layout(props: Props): ReactElement {
  return (
    <>
      <div className="ui menu">
        <NavLink exact to="/" className="item">Home</NavLink>
        <NavLink to="/functional-counter" className="item">Functional Counter</NavLink>
        <NavLink to="/class-counter" className="item">Class Counter</NavLink>
        <NavLink exact to="/projects" className="item">Projects</NavLink>
        <NavLink to="/projects/new" className="item">new Project</NavLink>
      </div>

      <div className="ui container">
        {props.children}
      </div>
    </>
  )
}
