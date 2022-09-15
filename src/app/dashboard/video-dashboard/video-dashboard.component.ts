import { Component, OnInit } from '@angular/core';
import { VideoDataService } from 'src/app/video-data.service';
import { Video } from '../../app-types';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videos: Observable<Video[]>;

  constructor(svc: VideoDataService) {
    this.videos = svc
      .loadVideoData()
      .pipe(tap((videos) => this.setSelectedVideo(videos[0])));
  }

  ngOnInit(): void {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
