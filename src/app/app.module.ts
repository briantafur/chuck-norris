import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JokeBannerComponent } from './joke-banner/joke-banner.component';
import { PostService } from './joke-banner/post.service';


@NgModule({
  declarations: [
    AppComponent,
    JokeBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
