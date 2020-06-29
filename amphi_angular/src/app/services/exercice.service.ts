import { Injectable } from '@angular/core';
import { Exercice } from '../models/exercice.model';

@Injectable({ providedIn: 'root' })

export class ExerciceService {

  private exos: Exercice[] = [
    { name: 'exo1', type: 'saisie contrôlée',  question: 'qu\'est ce qui est jaune et qui attend ?' },
    { name: 'exo2', type: 'QCU',               question: 'combien de slides comporte la présentation ?' },
    { name: 'exo3', type: 'QCM',               question: 'un piéton traverse au rouge. que faire ?' },
    { name: 'exo4', type: 'vrai/faux',         question: 'vas-tu répondre \'faux\' à cette question ?' },
    { name: 'exo5', type: 'code',              question: 'écrivez la fonction add(a, b) qui additionne deux nombres.' },
    { name: 'exo6', type: 'correspondances',   question: 'reliez chaque nom de professeur à son prénom.' },
    { name: 'exo7', type: 'liste à ordonner',  question: 'ordonnez chaque prof par date de naissance, du plus jeune au plus agé' },
    { name: 'exo8', type: 'réponse textuelle', question: '...sinon ta journée ?' },
  ];

  constructor() { }

  getExercice() {
    return this.exos;
  }

  add(name: string, type: string, question: string) {
    this.exos.push({ name: name, type: type, question: question });
  }
}