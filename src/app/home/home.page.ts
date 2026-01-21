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

import { ArticleListComponent } from '../articles/article-list/article-list.component';

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
  ],
})
export class HomePage {
  currentSection = 'articles';

  constructor() {
    addIcons({ cashOutline, home, person });
  }
}
