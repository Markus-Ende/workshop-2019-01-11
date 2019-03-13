import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewChecked,
  AfterViewInit,
  OnChanges,
  DoCheck
} from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent
  implements
    OnInit,
    OnDestroy,
    DoCheck,
    OnChanges,
    AfterViewInit,
    AfterViewChecked {
  books: Book[];
  private subscription = Subscription.EMPTY;

  constructor(private booksService: BookDataService) {
    console.log('constructor');
  }

  ngDoCheck() {
    console.log('do check');
  }

  ngOnInit() {
    console.log('BookListComponent ngOnInit');

    this.subscription = this.booksService
      .getBooks()
      .subscribe(booksFromService => (this.books = booksFromService));
  }

  ngOnChanges() {
    console.log('BookListComponent ngOnCHanges');
  }

  ngOnDestroy() {
    console.log('BookListComponent ngOnDestroy');
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    console.log('BookListComponent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('BookListComponent ngAfterViewChecked');
  }
}
