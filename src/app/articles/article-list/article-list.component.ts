import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';

import { ContentService } from '../../core/services/content.service';
import { MockAuthService } from '../../core/services/mock-auth.service';
import { Articulo } from '../../models/app.models';

@Component({
  selector: 'app-article-list',
  standalone: true,
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  imports: [CommonModule, IonGrid, IonRow, IonCol],
})
export class ArticleListComponent implements OnInit {
  articles: Articulo[] = [];
  heroArticle?: Articulo;
  secondaryArticles: Articulo[] = [];
  likeMessage = '';

  constructor(
    private readonly contentService: ContentService,
    private readonly authService: MockAuthService,
  ) {}

  ngOnInit(): void {
    const articles = this.contentService.getArticulos();
    this.articles = articles;
    [this.heroArticle, ...this.secondaryArticles] = articles;
  }

  onLike(article: Articulo): void {
    const user = this.authService.getCurrentUser();
    const isGuest = localStorage.getItem('guest') === 'true';

    if (!user || isGuest) {
      this.likeMessage = 'Inicia sesión como administrador para dar like.';
      return;
    }

    article.likesCount += 1;
    this.likeMessage = '';
  }
}
