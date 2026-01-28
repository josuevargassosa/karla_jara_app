import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, cashOutline, chevronBack } from 'ionicons/icons';

@Component({
    selector: 'app-donaciones',
    templateUrl: './donaciones.page.html',
    styleUrls: ['./donaciones.page.scss'],
    imports: [
        CommonModule,
        FormsModule,
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
        IonButtons,
        IonBackButton,
        IonIcon,
    ],
})
export class DonacionesPage {
    constructor() {
        addIcons({ arrowBack, cashOutline, chevronBack });
    }
}
