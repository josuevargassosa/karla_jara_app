import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { playCircleOutline } from 'ionicons/icons';
import { ContentService } from '../../../core/services/content.service';
import { Video } from '../../../models/app.models';

@Component({
    selector: 'app-video-list',
    standalone: true,
    imports: [CommonModule, IonIcon],
    templateUrl: './video-list.component.html',
    styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
    videos: any[] = [];

    constructor(private contentService: ContentService) {
        addIcons({ playCircleOutline });
    }

    ngOnInit(): void {
        this.videos = this.contentService.getVideos();
    }

    openVideo(video: any): void {
        window.open(`https://www.youtube.com/watch?v=${video.youtubeId}`, '_system');
    }
}
