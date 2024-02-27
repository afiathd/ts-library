
import { Book } from "../models/book";
import { Borrower } from "../models/borrower";

export class Library {
  private books: Map<number, Book> = new Map();
  private borrowers: Map<number, Borrower> = new Map();

  addBook(book: Book): void {
    this.books.set(book.id, book);
  }

  removeBook(id: number): void {
    this.books.delete(id);
  }

  listBooks(): Book[] {
    return Array.from(this.books.values());
  }

  addBorrower(borrower: Borrower): void {
    this.borrowers.set(borrower.id, borrower);
  }

  removeBorrower(id: number): void {
    this.borrowers.delete(id);
  }

  listBorrowers(): Borrower[] {
    return Array.from(this.borrowers.values());
  }
}
