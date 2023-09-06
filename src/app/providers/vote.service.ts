import { Injectable } from '@angular/core';
import { Vote } from '../models/vote';

@Injectable({
  providedIn: 'root',
})
export class VoteService {
  constructor() {}

  listVote = [
    {
      colleague: {
        pseudo: 'leo01',
        last: 'ZONGO MBOM',
        first: 'Leonnelle',
        photo: 'https://randomuser.me/api/portraits/women/75.jpg',
        score: 100,
      },
      like_hate: 'HATE',
      score: 100,
      created_date: '2023-09-06T00:07:19.544303Z',
    },
    {
      colleague: {
        pseudo: 'leo01',
        last: 'ZONGO MBOM',
        first: 'Leonnelle',
        photo: 'https://randomuser.me/api/portraits/women/75.jpg',
        score: 100,
      },
      like_hate: 'HATE',
      score: 100,
      created_date: '2023-09-06T00:07:19.54231Z',
    },
    {
      colleague: {
        pseudo: 'leo01',
        last: 'ZONGO MBOM',
        first: 'Leonnelle',
        photo: 'https://randomuser.me/api/portraits/women/75.jpg',
        score: 100,
      },
      like_hate: 'LIKE',
      score: 100,
      created_date: '2023-09-06T00:07:19.541061Z',
    },
    {
      colleague: {
        pseudo: 'seb01',
        last: 'THUIN',
        first: 'Sébastien',
        photo: 'https://randomuser.me/api/portraits/men/74.jpg',
        score: 100,
      },
      like_hate: 'LIKE',
      score: 100,
      created_date: '2023-09-06T00:07:19.538189Z',
    },
    {
      colleague: {
        pseudo: 'seb01',
        last: 'THUIN',
        first: 'Sébastien',
        photo: 'https://randomuser.me/api/portraits/men/74.jpg',
        score: 100,
      },
      like_hate: 'HATE',
      score: 100,
      created_date: '2023-09-06T00:07:19.534811Z',
    },
    {
      colleague: {
        pseudo: 'seb01',
        last: 'THUIN',
        first: 'Sébastien',
        photo: 'https://randomuser.me/api/portraits/men/74.jpg',
        score: 100,
      },
      like_hate: 'LIKE',
      score: 100,
      created_date: '2023-09-06T00:07:19.532586Z',
    },
    {
      colleague: {
        pseudo: 'antt01',
        last: 'TAVERA',
        first: 'Antoine',
        photo: 'https://randomuser.me/api/portraits/men/73.jpg',
        score: 100,
      },
      like_hate: 'LIKE',
      score: 100,
      created_date: '2023-09-06T00:07:19.531736Z',
    },
    {
      colleague: {
        pseudo: 'antt01',
        last: 'TAVERA',
        first: 'Antoine',
        photo: 'https://randomuser.me/api/portraits/men/73.jpg',
        score: 100,
      },
      like_hate: 'HATE',
      score: 100,
      created_date: '2023-09-06T00:07:19.530137Z',
    },
    {
      colleague: {
        pseudo: 'antt01',
        last: 'TAVERA',
        first: 'Antoine',
        photo: 'https://randomuser.me/api/portraits/men/73.jpg',
        score: 100,
      },
      like_hate: 'HATE',
      score: 100,
      created_date: '2023-09-06T00:07:19.529027Z',
    },
    {
      colleague: {
        pseudo: 'p01',
        last: 'ROGER',
        first: 'Paul',
        photo: 'https://randomuser.me/api/portraits/men/72.jpg',
        score: 100,
      },
      like_hate: 'LIKE',
      score: 100,
      created_date: '2023-09-06T00:07:19.522705Z',
    },
  ];
}
