import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  @Input() videoList: Video[] = [];
  @Input() selectedId: String | undefined;
  @Output() videoSelected = new EventEmitter<Video>();

  constructor() {}

  ngOnInit(): void {}

  selectVideo(video: Video) {
    this.videoSelected.emit(video);
  }
}
