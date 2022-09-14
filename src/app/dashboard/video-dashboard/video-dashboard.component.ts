import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Video } from '../../app-types';

const apiUrl = 'https://api.angularbootcamp.com';

@Component({
  selector: 'app-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css'],
})
export class VideoDashboardComponent implements OnInit {
  selectedVideo: Video | undefined;
  videos: Video[] = [];

  constructor(http: HttpClient) {
    http.get<Video[]>(apiUrl + '/videos').subscribe((videos) => {
      this.videos = videos;
      this.setSelectedVideo(this.videos[0]);
    });
  }

  ngOnInit(): void {}

  setSelectedVideo(video: Video) {
    this.selectedVideo = video;
  }
}
