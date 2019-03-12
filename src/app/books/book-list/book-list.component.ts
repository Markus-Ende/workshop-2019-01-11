import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  books: Book[];
  private subscription = Subscription.EMPTY;

  constructor(private booksService: BookDataService) {}

  ngOnInit() {
    this.subscription = this.booksService
      .getBooks()
      .pipe(
        map(books => {
          const newBooks = [...books];
          return newBooks;
        })
      )
      .subscribe(booksFromService => (this.books = booksFromService));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
