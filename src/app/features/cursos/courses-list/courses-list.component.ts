import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { notificationsOutline } from 'ionicons/icons';

@Component({
    selector: 'app-courses-list',
    standalone: true,
    imports: [CommonModule, IonIcon],
    templateUrl: './courses-list.component.html',
    styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
    constructor() {
        addIcons({ notificationsOutline });
    }

    onNotifyRequested(): void {
        console.log('Notificación solicitada');
    }
}
