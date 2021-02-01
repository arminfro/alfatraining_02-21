import React, {ReactElement, useReducer} from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import ClassCounter from "./ClassCounter"
import FunctionalCounter from "./FunctionalCounter"
import ProjectDetails from "./ProjectDetails"
import ProjectCreate from "./ProjectCreate"
import ProjectList from "./ProjectList"
import ProjectEdit from './ProjectEdit'
import Home from "./Home"
import {initialStore, reducer} from "../Store"

export default function Routing(): ReactElement {
  const [store, dispatch] = useReducer(reducer, initialStore)
  console.log('store', store)
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
        <ProjectDetails dispatch={dispatch} favorites={store.favorites} />
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
