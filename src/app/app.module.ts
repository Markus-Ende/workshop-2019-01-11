import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDataService } from './books/book-data.service';
import { InfoBoxComponent } from './info-box/info-box.component';
import { MouseCursorComponent } from './mouse-cursor/mouse-cursor.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ShoutPipe } from './shared/shout.pipe';
import { TitleBoxComponent } from './title-box/title-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent,
    ShoutPipe
  ],
  imports: [BrowserModule, AppRoutingModule, AboutModule, HttpClientModule],
  providers: [BookDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
