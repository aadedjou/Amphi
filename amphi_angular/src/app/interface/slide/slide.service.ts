import { Injectable } from '@angular/core';
import { Slide } from '../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class SlideService {
  private items: Slide[] = [
    { title: 'slide', contenu: 'langage pref de bruce' },
    { title: 'slide', contenu: 'le meilleur des langages tout simplement' },
    { title: 'slide', contenu: 'qui ??' },
    { title: 'slide', contenu: 'noah ??' },
    { title: 'slide', contenu: 'FIN' },
  ];

  constructor() { }

  getSlide() {
    return this.items;
  }

  add(title: string) {
      this.items.push({
        title,
        contenu: '',
      });
  }
}
