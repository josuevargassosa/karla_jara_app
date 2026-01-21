import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

import { ContentService } from '../../../core/services/content.service';
import { Book } from '../../../models/app.models';

@Component({
  selector: 'app-book-list',
  standalone: true,
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  imports: [
    CommonModule,
    IonButton,
    IonButtons,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonModal,
    IonRow,
    IonTitle,
    IonToolbar,
  ],
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  isModalOpen = false;
  selectedBook?: Book;

  constructor(private readonly contentService: ContentService) {
    addIcons({ close });
  }

  ngOnInit(): void {
    this.books = this.contentService.getBooks();
  }

  openBook(book: Book): void {
    this.selectedBook = book;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedBook = undefined;
  }

  openExternal(url: string): void {
    window.open(url, '_system');
  }
}
