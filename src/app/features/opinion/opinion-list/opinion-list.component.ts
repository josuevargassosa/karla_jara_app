import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';

@Component({
    selector: 'app-opinion-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './opinion-list.component.html',
    styleUrls: ['./opinion-list.component.scss'],
})
export class OpinionListComponent implements OnInit {
    opiniones: any[] = [];
    private readonly contentService = inject(ContentService);

    ngOnInit(): void {
        this.opiniones = this.contentService.getOpiniones();
    }
}
