import React, {ReactElement} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import ClassCounter from "./ClassCounter"
import FunctionalCounter from "./FunctionalCounter"
import ProjectDetails from "./ProjectDetails"
import ProjectCreate from "./ProjectCreate"
import ProjectList from "./ProjectList"
import ProjectEdit from './ProjectEdit'
import Home from "./Home"

export default function Routing(): ReactElement {
  return (
    <Switch>
      <Route path="/functional-counter">
        <FunctionalCounter />
      </Route>
      <Route path="/class-counter">
        <ClassCounter />
      </Route>
      <Route path="/projects/new">
        <ProjectCreate />
      </Route>
      <Route path="/projects/edit/:id">
        <ProjectEdit />
      </Route>
      <Route path="/projects/:id">
        <ProjectDetails />
      </Route>
      <Route path="/projects">
        <ProjectList />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  )
}
