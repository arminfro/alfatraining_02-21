import React, {ReactElement, useReducer} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom'

import BookList from './BookList'
import BookDetails from './BookDetails'
import Home from './Home'
import BookCreate from './BookCreate';
import BookEdit from './BookEdit';
import {reducer} from '../Store';
import Cart from './Cart';

export default function Routes(): ReactElement {
  const [store, dispatch] = useReducer(reducer, {cart: []})
  return (
    <div className="ui container">
      <Switch>
        <Route path='/books/create'>
          <BookCreate />
        </Route>

        <Route path='/books/edit/:isbn'>
          <BookEdit />
        </Route>

        <Route path='/books/:isbn'>
          <BookDetails dispatch={dispatch} />
        </Route>

        <Route path='/books'>
          <BookList />
        </Route>

        <Route path='/cart'>
          <Cart cart={store.cart} dispatch={dispatch} />
        </Route>

        <Route path='/home'>
          <Home />
        </Route>

        <Route exact path=''>
          <Redirect to="/home" />
        </Route>
      </Switch>
    </div>
  )
}
