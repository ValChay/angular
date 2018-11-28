import {ArticleCreateComponent} from './article-create/article-create.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleThumbnailComponent} from './article-thumbnail/article-thumbnail.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleThumbnailComponent,
    ArticleDetailComponent,
    ArticleCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
