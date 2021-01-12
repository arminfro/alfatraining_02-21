import React, {ReactElement} from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";

interface Props {children: ReactElement}

export default function Layout(props: Props): ReactElement {
  return (
    <Router>
      <div className="ui menu">
        <NavLink to="/home" className="item">Home</NavLink>
        <NavLink to="/books" className="item">Books</NavLink>
      </div>

      <div className="ui container">
        {props.children}
      </div>
    </Router>
  )
}
