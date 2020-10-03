import { Injectable } from '@angular/core';
import { Slide } from '../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class SlideService {
  private items: Slide[] = [
    { title: 'Partie 1',
      contenu: 'Lorem ipsum dolor sit amet, consectetur adipiscing' +
        'elit, sed do eiusmod tempor incididunt ut labore et dolore' +
        'magna aliqua. Ut enim ad minim veniam, quis nostrud' },
    { title: 'Sous-titre 1',
      contenu: 'exercitation ullamco laboris nisi ut aliquip ex ea commodo' +
        'consequat. Duis aute irure dolor in reprehenderit in' +
        'voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { title: 'Sous-titre 2',
      contenu: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa' +
        'qui officia deserunt mollit anim id est laborum.' },
    { title: 'Conclusion',
      contenu: 'je ne sais toujours pas lire le latin' },

    { title: 'Fin',
      contenu: 'vous pouvez partir' },
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
