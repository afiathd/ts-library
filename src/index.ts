
import { Book } from "./models/book";
import { Borrower } from "./models/borrower";
import { LoanManager } from "./services/loanManager";
import { Fiction } from "./models/category";

const book1: Book = { id: 1, title: "Harry Potter", author: "J.K. Rowling" };
const book2: Book = { id: 2, title: "A Gyűrűk Ura", author: "J.R.R. Tolkien" };
const book3: Book = { id: 3, title: "1984", author: "George Orwell" };
const borrower1: Borrower = { id: 1, name: "John Doe" };
const borrower2: Borrower = { id: 1, name: "Jane Down" };

const bookLoanManager = new LoanManager<Book>();

bookLoanManager.borrow(book1, borrower1);
bookLoanManager.borrow(book2, borrower1);
bookLoanManager.borrow(book3, borrower2);
//bookLoanManager.returnItem(1);

console.log("Kölcsönzött könyvek:");
console.log(bookLoanManager.listLoans());


const fctbok = new Fiction("orwell", 'nemtom');

console.log(fctbok);
