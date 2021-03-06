import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  book = {
    url: '...',
    title: '...'
  };

  color = '#FF00FF';
  constructor() {}

  onClick(e: MouseEvent) {
    console.log(e);
  }
  ngOnInit() {}
}
