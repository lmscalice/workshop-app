import { Component, OnInit } from '@angular/core';
import { Video } from '../../app-types';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
})
export class VideoListComponent implements OnInit {
  videoList: Video[] = [
    {
      title: 'Tips from Angular Book Camp instructors',
      author: 'Kyle Cordes, Lance Finney, Zachary Kipping, and David Moore',
      id: 'JINJQk7ggoo',
      viewDetails: [
        { age: 36, region: 'North America', date: '2021-06-23' },
        { age: 30, region: 'North America', date: '2021-06-23' },
        { age: 54, region: 'North America', date: '2021-07-23' },
        { age: 43, region: 'Europe', date: '2021-0-24' },
        { age: 32, region: 'North America', date: '2021-08-24' },
        { age: 32, region: 'North America', date: '2021-08-25' },
      ],
    },
    {
      title: 'RxJS, the easy way to write correct Angular applications',
      author: 'Chris Hardin',
      id: 'DAGrVyKR_P4',
      viewDetails: [
        { age: 17, region: 'North America', date: '2021-03-23' },
        { age: 27, region: 'North America', date: '2021-03-23' },
        { age: 37, region: 'North America', date: '2021-03-23' },
        { age: 47, region: 'Europe', date: '2021-03-24' },
        { age: 37, region: 'North America', date: '2021-03-24' },
        { age: 17, region: 'North America', date: '2021-03-25' },
      ],
    },
    {
      title: 'The Dangerous Temptation of Customizing Angular Material',
      author: 'Paul Spears',
      id: 'gSvxYv2VgHc',
      viewDetails: [
        { age: 17, region: 'North America', date: '2021-03-23' },
        { age: 27, region: 'North America', date: '2021-03-23' },
        { age: 37, region: 'North America', date: '2021-03-23' },
        { age: 47, region: 'Europe', date: '2021-03-24' },
        { age: 37, region: 'North America', date: '2021-03-24' },
        { age: 17, region: 'North America', date: '2021-03-25' },
      ],
    },
    {
      title: 'NgRx Efficiency with Entity',
      author: 'Lance Finney',
      id: '2I-MPIOBJLQ',
      viewDetails: [
        { age: 36, region: 'North America', date: '2021-06-23' },
        { age: 30, region: 'North America', date: '2021-06-23' },
        { age: 54, region: 'North America', date: '2021-07-23' },
        { age: 43, region: 'Europe', date: '2021-0-24' },
        { age: 32, region: 'North America', date: '2021-08-24' },
        { age: 32, region: 'North America', date: '2021-08-25' },
      ],
    },
    {
      title: 'RxJS variable names or names$, a raging debate',
      author: 'Oasis Digital Developers',
      id: 'ynjQ5V7XiR4',
      viewDetails: [
        { age: 17, region: 'North America', date: '2021-03-23' },
        { age: 27, region: 'North America', date: '2021-03-23' },
        { age: 37, region: 'North America', date: '2021-03-23' },
        { age: 47, region: 'Europe', date: '2021-03-24' },
        { age: 37, region: 'North America', date: '2021-03-24' },
        { age: 17, region: 'North America', date: '2021-03-25' },
      ],
    },
    {
      title: 'Angular for Designers',
      author: 'Kyle Cordes, Lance Finney, Zachary Kipping, and Paul Spears',
      id: 'P6KfzvEnItY',
      viewDetails: [
        { age: 39, region: 'Europe', date: '2021-06-28' },
        { age: 31, region: 'Europe', date: '2021-06-21' },
        { age: 53, region: 'North America', date: '2021-07-23' },
        { age: 43, region: 'Europe', date: '2021-0-24' },
        { age: 38, region: 'North America', date: '2021-08-26' },
        { age: 31, region: 'North America', date: '2021-08-25' },
      ],
    },
    {
      title: 'Routing Patterns for Complex Angular Applications',
      author: 'Zachary Kipping',
      id: 'CpgV_my_Jvc',
      viewDetails: [
        { age: 29, region: 'Europe', date: '2021-06-28' },
        { age: 31, region: 'Europe', date: '2021-05-21' },
        { age: 54, region: 'North America', date: '2021-07-23' },
        { age: 43, region: 'North America', date: '2021-03-24' },
        { age: 58, region: 'North America', date: '2021-08-26' },
        { age: 21, region: 'North America', date: '2021-02-25' },
      ],
    },
    {
      title:
        'Storybook: an interactive component showcase for better collaboration',
      author: 'Nathan Kern',
      id: '10gd9DY8Bvw',
      viewDetails: [
        { age: 39, region: 'Europe', date: '2021-01-28' },
        { age: 71, region: 'Europe', date: '2021-05-25' },
        { age: 24, region: 'North America', date: '2021-04-23' },
        { age: 43, region: 'North America', date: '2021-03-24' },
        { age: 39, region: 'North America', date: '2021-03-26' },
        { age: 27, region: 'North America', date: '2021-02-25' },
      ],
    },
    {
      title: 'Angular component testing - Overcoming the hurdles',
      author: 'Lance Finney',
      id: 'xJ45MGDAi6c',
      viewDetails: [
        { age: 39, region: 'Europe', date: '2021-01-28' },
        { age: 71, region: 'Europe', date: '2021-05-25' },
        { age: 24, region: 'North America', date: '2021-04-23' },
        { age: 19, region: 'North America', date: '2021-02-24' },
        { age: 32, region: 'Europe', date: '2021-05-26' },
        { age: 47, region: 'Asia', date: '2021-01-25' },
      ],
    },
    {
      title: 'Automated A11y Testing with Cypress',
      author: 'Rachel Noccioli',
      id: '0IBprY9wfYI',
      viewDetails: [
        { age: 46, region: 'North America', date: '2021-01-28' },
        { age: 23, region: 'Europe', date: '2021-03-25' },
        { age: 34, region: 'Asia', date: '2021-04-22' },
        { age: 65, region: 'North America', date: '2021-02-24' },
        { age: 33, region: 'Europe', date: '2021-09-26' },
        { age: 36, region: 'Asia', date: '2021-11-25' },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
