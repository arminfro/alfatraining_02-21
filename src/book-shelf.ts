import Book from './book'

type BooksPagesInfo = {read: number, unread: number}

export default class BookShelf {
   constructor(
      private books: Book[]
   ) {}

   toString(): string {
      return `Gesamt Lesefortschritt: ${this.progress()}%
      ${this.startedBooks().length} Buecher angefangen (${this.progress(this.startedBooks())}%).
      ${this.unStartedBooks().length} Buecher noch anzufangen`
   }

   unStartedBooks(): Book[] {
      return this.books.filter(
         (book: Book) => book.pageCurrent === 0
      )
   }

   startedBooks(): Book[] {
      return this.books.filter(
         (book: Book) => book.pageCurrent > 0
      )
   }

   progress(books = this.books): number {
      const pagesInfo = BookShelf.booksPagesInfo(books)
      return Math.round(
         100 * pagesInfo.read / (pagesInfo.read + pagesInfo.unread)
      )
   }

   static booksPagesInfo(books: Book[]): BooksPagesInfo {
      return books.reduce(
         (acc: BooksPagesInfo, book: Book) => {
            acc.read += book.pageCurrent
            acc.unread += book.unreadPages()
            return acc
         },
         {read: 0, unread: 0}
      )
   }
}
