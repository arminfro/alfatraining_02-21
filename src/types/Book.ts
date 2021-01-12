export default interface Book extends BookBase {
  published: Date;
}

export interface BookRaw extends BookBase {
  published: string;
}

interface BookBase {
  isbn: string;
  title: string;
  authors: string[];
  subtitle?: string;
  rating?: number;
  thumbnails?: Thumbnail[];
  description?: string;
}

export interface Thumbnail {
  url: string;
  title?: string;
}

function isBookBase(data: BookBase): data is BookBase {
  return data instanceof Object
    && (['isbn', 'title', 'authors', 'description'] as Array<keyof BookBase>)
      .every(attribute => (data as BookBase)[attribute])
}

export function isBookRaw(data: BookRaw): data is BookRaw {
  return data instanceof Object
    && isBookBase(data)
    && (['published'] as Array<keyof BookRaw>)
      .every(attribute => (data as BookRaw)[attribute])
}

export function isBookRawArray(data: BookRaw[]): data is BookRaw[] {
  return data instanceof Array
    && data.every(book => isBookRaw(book))
}

export function factoryRawToBook(book: BookRaw): Book {
  return {...book, published: new Date(book.published)}
}
