import { Component } from '@angular/core';

@Component({
  selector: 'tc-colleague-list',
  templateUrl: './colleague-list.component.html',
  styleUrls: ['./colleague-list.component.scss'],
})
export class ColleagueListComponent {
  collegues = [
    {
      pseudo: 'gio01',
      photo: 'https://randomuser.me/api/portraits/men/81.jpg',
      score: 400,
    },
    {
      pseudo: 'jor01',
      photo: 'https://randomuser.me/api/portraits/men/82.jpg',
      score: 100,
    },
    {
      pseudo: 'matt01',
      photo: 'https://randomuser.me/api/portraits/men/83.jpg',
      score: 100,
    },
    {
      pseudo: 'ab01',
      photo: 'https://randomuser.me/api/portraits/men/84.jpg',
      score: 100,
    },
    {
      pseudo: 'syl01',
      photo: 'https://randomuser.me/api/portraits/men/85.jpg',
      score: 100,
    },
  ];
}
