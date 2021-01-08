import React, {ReactElement, useState} from 'react';

import BookList from './BookList'
import BookDetails from './BookDetails'
import Book from '../types/Book'

type ViewState = 'list' | 'details'

export default function App(): ReactElement {
  const [viewState, setViewState] = useState<ViewState>('list');
  const [book, setBook] = useState<Book>();

  const showList = () => {
    setViewState('list')
    setBook(undefined)
  };

  const showDetails = (book_: Book) => {
    setBook(book_)
    setViewState('details')
  };

  return (
    <div className="ui container">
      {
        viewState === 'details' && book
          ? <BookDetails showList={showList} book={book} />
          : <BookList showDetails={showDetails} />
      }
    </div>
  )
}
