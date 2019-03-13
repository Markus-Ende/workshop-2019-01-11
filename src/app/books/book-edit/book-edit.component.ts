import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book = { title: 'My Test Book', abstract: 'A book.', author: 'Markus Ende' };

  constructor() {}

  ngOnInit() {}

  onSubmit(value: { title: string; abstract: string; author: string }) {
    console.log(value);
  }
}
