import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../book-data.service';
import { Book } from '../book';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BookDataService) {}

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }
}
