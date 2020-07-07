import { Injectable } from '@angular/core';
import { Exercice, Type } from '../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class ExerciceService {

  private exos: Exercice[] = [
    { name: 'ctrl',  type: Type.ControlledInput, question: 'qu\'est ce qui est jaune et qui attend ?' },
    { name: 'qcu',   type: Type.QCU,             question: 'combien de slides comporte la présentation ?' },
    { name: 'qcm',   type: Type.QCM,             question: 'un piéton traverse au rouge. que faire ?' },
    { name: 't/f',   type: Type.TrueFalse,       question: 'vas-tu répondre \'faux\' à cette question ?' },
    { name: 'code',  type: Type.Code,            question: 'écrivez la fonction add(a, b) qui additionne deux nombres.' },
    { name: 'links', type: Type.Links,           question: 'reliez chaque nom de professeur à son prénom.' },
    { name: 'list',  type: Type.OrderedList,     question: 'ordonnez chaque prof par date de naissance, du plus jeune au plus agé' },
    { name: 'free',  type: Type.FreeAnswer,      question: '...sinon ta journée ?' },
    { name: 'num',   type: Type.NumericAnswer,   question: 'âge de revuz?' },
  ];

  constructor() { }

  getExercice() {
    return this.exos;
  }

  add(name: string, type: Type, question: string) {
    this.exos.push({ name: name, type: type, question: question });
  }
}
