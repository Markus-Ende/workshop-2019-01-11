import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  book = { title: 'My Test Book' };

  constructor() {}

  ngOnInit() {}
}
