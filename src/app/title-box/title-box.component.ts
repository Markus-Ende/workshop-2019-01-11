import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'title-box',
  template: `
    <h3 (click)="sendPing()">
      {{ title }}
    </h3>
  `,
  styleUrls: ['./title-box.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TitleBoxComponent {
  @Input() title: string;
  @Output() titleClicked = new EventEmitter<string>();

  sendPing() {
    this.titleClicked.emit(`ping ${new Date()}`);
  }
}
