import {Component, Inject} from '@angular/core';
import {Article} from './article';
import {ArticlesService} from './articles.service';
import {LogerService} from './loger.service';
import {SERVEUR_URL_TOKEN} from './app.config';


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
  constructor(articlesService: ArticlesService,
              @Inject(SERVEUR_URL_TOKEN) serverUrl: string) {
    this.articles = articlesService.articles;
    this.currentArticle = this.articles[0];
  }
  // ajouter un article courant passe un objet en argument
  add(article: Article): void {
    this.articles.push(article);
    this.currentArticle = article;
  }
  remove(article: Article) {
    this.loger.log('new article');
    const pos = this.articles.indexOf(article);
    this.articles.splice(pos, 1);
  }

  setCurrent(article: Article): void {
    this.currentArticle = article;

  }
}
