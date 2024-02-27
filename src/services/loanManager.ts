import { Book } from "../models/book";
import { Borrower } from "../models/borrower";

export class LoanManager<T extends Book> {
  private loans: Map<number, { item: T; borrower: Borrower }> = new Map();

  borrow(item: T, borrower: Borrower): void {
    this.loans.set(item.id, { item, borrower });
  }

  returnItem(id: number): void {
    if (this.loans.has(id)) {
      this.loans.delete(id);
    }
  }

  listLoans(): { item: T; borrower: Borrower }[] {
    return Array.from(this.loans.values());
  }
}
