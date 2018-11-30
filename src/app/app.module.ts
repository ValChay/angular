import {ArticleCreateComponent} from './article-create/article-create.component';
import {BrowserModule} from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleThumbnailComponent} from './article-thumbnail/article-thumbnail.component';
import {ArticleDetailComponent} from './article-detail/article-detail.component';
import {LogerService} from './loger.service';
import {configFactory, SERVEUR_URL, SERVEUR_URL_TOKEN} from './app.config';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { ArticleIndexComponent } from './article-index/article-index.component';
import { MenuComponent } from './menu/menu.component';

const LOGGER_ALIAS = new InjectionToken('alias vers le loger');
const SECONDE_CONF = new InjectionToken('deuxième config');
@NgModule({
  declarations: [
    AppComponent,
    ArticleThumbnailComponent,
    ArticleDetailComponent,
    ArticleCreateComponent,
    ArticleIndexComponent,
    MenuComponent
  ],
  // gestion des fonctions du framework dispo dans l'app
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Chargement des configurations de routes, permet de navigué sur l'app changer le contenue daffichage
    RouterModule.forRoot([
      {path: 'article', component: ArticleIndexComponent },
      {path: 'article/:id', component: ArticleDetailComponent },
      {path: 'create', component: ArticleCreateComponent },
      {path: '', redirectTo: 'article', pathMatch: 'full'},
    ])
  ],
  providers: [
    LogerService,
    { provide: SERVEUR_URL_TOKEN, useValue: SERVEUR_URL},
    { provide: LOGGER_ALIAS, useExisting: LogerService},
    { provide: SECONDE_CONF, useFactory: configFactory, deps: ['Val']},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
/* use existing redistribue service qui existe deja avec un alias*!/*/
/* useCLass on creer une class le service sera une instance de la classe*/
/* useValue pas d'instance on fournit directement contenu d'une variable qui est définis dans la config et utilisé dans l'applicaiton*/
/* usefactory pour fabriquer un service avec traitement spécifique:  fonction deps est l'argument */
/* avec usefactory on peut l'utiliser avec une class et une méthode statique de la classe*/

