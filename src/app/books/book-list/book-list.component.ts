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
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  readonly books$: Observable<Book[]>;

  constructor(booksService: BookDataService) {
    this.books$ = booksService.getBooks();
  }
}
