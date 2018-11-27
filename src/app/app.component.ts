import {Component} from '@angular/core';
import {Article} from './article';
import * as https from 'https';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'i-shop';
  article: Article;
  img = 'https://lerayonfrais.fr/fr/19691-slct-han-avid-white-safari--2900100103039.html';

  constructor() {

    this.article = new Article();
    this.article.title = 'Puma';
    this.article.price = 150;

  }
}
