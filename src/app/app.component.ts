import {Component} from '@angular/core';
import {Article} from './article';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'i-shop';
  articles: Article[] = [];
  currentArticle: Article;


  constructor() {

    this.articles.push(new Article());
    this.articles[0].title = 'Puma';
    this.articles[0].price = 150;
    this.articles[0].image = 'puma.jpg';

    this.articles.push(new Article());
    this.articles[1].title = 'Nike';
    this.articles[1].price = 130;
    this.articles[1].image = 'airmaxvapor.jpeg';

    this.articles.push(new Article());
    this.articles[2].title = 'Vans';
    this.articles[2].price = 99;
    this.articles[2].image = 'puma.jpg';

    this.currentArticle = this.articles[0];
  }
  // ajouter un article courant passe un objet en argument
  add(article: Article): void {
    this.articles.push(article);
    this.currentArticle = article;
  }

  setCurrent(article: Article): void {
    this.currentArticle = article;

  }
}
