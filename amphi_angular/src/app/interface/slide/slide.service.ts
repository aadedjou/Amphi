import { Injectable } from '@angular/core';
import { Slide } from '../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class SlideService {
  private items: Slide[] = [
    { title: 'slide',
      contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing' +
        'elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud' },
    { title: 'slide',
      contenu: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
        'consequat. Duis aute irure dolor in reprehenderit in' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'slide',
      contenu: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa' +
        'qui officia deserunt mollit anim id est laborum.' },
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
