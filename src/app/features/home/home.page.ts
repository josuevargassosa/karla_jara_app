import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonLabel,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cashOutline, home, person } from 'ionicons/icons';

import { Router } from '@angular/router';
import { ArticleListComponent } from '../articulos/article-list/article-list.component';
import { BookListComponent } from '../libros/book-list/book-list.component';
import { VideoListComponent } from '../videos/video-list/video-list.component';
import { OpinionListComponent } from '../opinion/opinion-list/opinion-list.component';
import { CoursesListComponent } from '../cursos/courses-list/courses-list.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonFooter,
    IonHeader,
    IonIcon,
    IonLabel,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonTabBar,
    IonTabButton,
    IonToolbar,
    ArticleListComponent,
    BookListComponent,
    VideoListComponent,
    OpinionListComponent,
    CoursesListComponent,
  ],
})
export class HomePage {
  currentSection = 'articles';

  constructor(private router: Router) {
    addIcons({ cashOutline, home, person });
  }

  navigateToDonations() {
    this.router.navigate(['/donaciones']);
  }
}
