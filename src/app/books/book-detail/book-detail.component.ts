import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../book';
import { BookDataService } from '../book-data.service';
import { map, switchMap, catchError, delay, startWith } from 'rxjs/operators';

@Component({
  selector: 'book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit, OnDestroy {
  book: Book;
  private subscription = Subscription.EMPTY;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookDataService
  ) {}

  ngOnInit() {
    console.log('ngOnInit');
    // this.subscription = this.route.params.subscribe(
    //   (params: { isbn: string }) => {
    //     this.bookService
    //       .getBookByIsbn(params.isbn)
    //       .subscribe(book => (this.book = book));
    //   }
    // );
    this.subscription = this.route.params
      .pipe(
        map((params: { isbn: string }) => params.isbn),
        switchMap(isbn => this.bookService.getBookByIsbn(isbn)),
        delay(1000)
      )
      .subscribe(book => (this.book = book), err => console.log(err));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('ngOnDestroy');
  }
}
