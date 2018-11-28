import {Component} from '@angular/core';
import {Article} from './article';
import {ArticlesService} from './articles.service';
import {LogerService} from './loger.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'i-shop';
  articles: Article[];
  loger: LogerService;
  currentArticle: Article;
  constructor(articlesService: ArticlesService) {
    this.articles = articlesService.articles;
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
