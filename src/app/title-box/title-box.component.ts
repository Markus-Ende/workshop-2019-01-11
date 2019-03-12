import { Component, Input } from '@angular/core';

@Component({
  selector: 'title-box',
  template: `
    <h3>
      {{ title }}
    </h3>
  `,
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent {
  @Input() title: string;
}
