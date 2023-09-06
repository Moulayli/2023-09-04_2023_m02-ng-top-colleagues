import { Injectable } from '@angular/core';
import { Collegue } from '../models/collegue';

@Injectable({
  providedIn: 'root',
})
export class ColleagueService {
  constructor() {}

  listCollegues: Collegue[] = [
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
