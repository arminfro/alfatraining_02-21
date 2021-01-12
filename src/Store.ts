import {Dispatch as ReactDispatch} from 'react'
import Book from './types/Book'

export interface Store {
  cart: Book[]
}

interface AddToCart {
  type: "addToCart"
  book: Book
}

interface RemoveFromCart {
  type: "removeFromCart"
  book: Book
}

export type Actions = AddToCart | RemoveFromCart

export type Dispatch = ReactDispatch<Actions>

export const reducer = (state: Store, action: Actions): Store => {
  switch (action.type) {
  case "addToCart":
    return {
      ...state,
      cart: [...state.cart, action.book]
    };
  case "removeFromCart": {
    const book = state.cart.find(book => book.isbn === action.book.isbn)
    let newCart
    if (book) {
      const index = state.cart.indexOf(book)
      newCart = state.cart.filter((_book, index_) => index_ !== index)
    }
    return {
      ...state,
      cart: newCart || state.cart
    };
  }
  }
};
