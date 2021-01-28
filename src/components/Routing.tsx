import React, {ReactElement} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import ClassCounter from "./ClassCounter"
import FunctionalCounter from "./FunctionalCounter"
import ProjectDetails from "./ProjectDetails"
import ProjectForm from "./ProjectForm"
import ProjectList from "./ProjectList"

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
        <ProjectForm />
      </Route>
      <Route path="/projects/:id">
        <ProjectDetails />
      </Route>
      <Route path="/projects">
        <ProjectList />
      </Route>
      <Route path="/home">
        <p>Home!</p>
      </Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
    </Switch>
  )
}
