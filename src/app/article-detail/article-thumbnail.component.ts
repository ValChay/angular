import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.css']
})
export class ArticleThumbnailComponent implements OnInit {

  @Input()
  article: Article;

  // décorateur output pour transmettre des données
  @Output()
    // il va capturer dans le template parent
  articleSelected = new EventEmitter<Article>();

  constructor() {
  }

  ngOnInit() {
  }

  select(): void {
    // on va transmettre des données
    this.articleSelected.emit(this.article);
  }
}
