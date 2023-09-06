import { Injectable } from '@angular/core';
import { Collegue } from '../models/collegue';
import axios from "axios";
const baseUrl =
  "https://app-6f6e9c23-7f63-4d86-975b-a0b1a1440f94.cleverapps.io/api/v2";

@Injectable({
  providedIn: 'root',
})
export class ColleagueService {
  constructor() {}

  async listerCollegues()  {
    try {
      const response = await axios.get(baseUrl + "/colleagues");
      if (response.status === 200) {
        const collegues = response.data;

        return collegues;
      } else {
        return "Erreur: la requête a échoué";
      }
    } catch (error) {
      return `Erreur: ${error}`;
    }
  }


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
