import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonLabel,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonTabBar,
  IonTabButton,
  IonToolbar,
} from '@ionic/angular/standalone';

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
    IonLabel,
    IonSearchbar,
    IonSegment,
    IonSegmentButton,
    IonTabBar,
    IonTabButton,
    IonToolbar,
  ],
})
export class HomePage {
  currentSection = 'articles';
}
