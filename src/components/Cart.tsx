import React, {SyntheticEvent} from 'react';
import BookListItem from './BookListItem';

import {Actions} from '../Store'
import Book from '../types/Book';
import {Dispatch} from '../Store'

interface IProps {
  dispatch: Dispatch
  cart: Book[]
}

export default function Cart(props: IProps): JSX.Element {
  const books = props.cart.reduce((acc: Book[], book) => {
    acc.find(book_ => book_.isbn === book.isbn) || acc.push(book)
    return acc
  }, [])
    .sort((bookA, bookB) => Number(bookA.isbn) - Number(bookB.isbn))

  const countBook = (book: Book): number => {
    return props.cart.filter(_book => _book.isbn === book.isbn).length
  }

  const onChangeCount = (event: SyntheticEvent, action: Actions): void => {
    event.preventDefault()
    props.dispatch(action)
  }

  return (
    <>
      <h1>Shopping Cart</h1>
      <div className="ui middle aligned selection divided list">
        {books.map(book =>
          <BookListItem key={book.isbn} book={book}>
            <div className="right floated content">
              <div className="ui buttons">
                <button className="ui button"><i className="shopping cart icon" />{countBook(book)}</button>
                <button className="ui button green" onClick={(e) => onChangeCount(e, {type: 'addToCart', book})}>Add One</button>
                <button className="ui button red" onClick={(e) => onChangeCount(e, {type: 'removeFromCart', book})}>Remove One</button>
              </div>
            </div>
          </BookListItem>
        )}
      </div>
    </>
  )
}
