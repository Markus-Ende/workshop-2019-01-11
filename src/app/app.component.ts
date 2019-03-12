import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Book Management';

  onTitleClick(e: string) {
    console.log(e);
    this.appTitle = e;
  }
}
