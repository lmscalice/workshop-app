import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from './app-types';
import { map } from 'rxjs/operators';

const apiUrl = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root',
})
export class VideoDataService {
  constructor(private http: HttpClient) {}

  loadVideoData(): Observable<Video[]> {
    return this.http.get<Video[]>(apiUrl + '/videos').pipe(
      map((videos: Video[]) => [
        ...videos,
        {
          title: 'Added from map!',
          author: 'map',
          id: 'aa',
          viewDetails: [],
        },
      ]),
      map((videos: Video[]) =>
        videos.map((video) => ({ ...video, title: video.title.toUpperCase() }))
      )
    );
  }
}
