import { Injectable } from '@angular/core';
import { Cours } from '../models/cours.model';

@Injectable({ providedIn: 'root' })
export class CoursService {
  private items: Cours[] = [
    { title: 'slide', contenu: 'langage pref de bruce' },
    { title: 'slide', contenu: 'le meilleur des langages tout simplement' },
    { title: 'slide', contenu: 'qui ??' },
    { title: 'slide', contenu: 'noah ??' },
    { title: 'slide', contenu: 'FIN' },
  ];

  constructor() { }

  getCours() {
    return this.items;
  }

  add(title: string) {
      this.items.push({
        title,
        contenu: '',
      });
  }
}
