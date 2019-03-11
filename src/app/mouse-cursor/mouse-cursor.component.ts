import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-cursor',
  templateUrl: './mouse-cursor.component.html',
  styleUrls: ['./mouse-cursor.component.scss']
})
export class MouseCursorComponent {
  x = 0;
  y = 0;

  constructor() {}

  onMouseMove(e: MouseEvent) {
    this.x = e.clientX;
    this.y = e.clientY;
  }
}
