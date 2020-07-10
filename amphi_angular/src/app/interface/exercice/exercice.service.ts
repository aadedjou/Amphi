import { Injectable } from '@angular/core';
import { Exercice, Type } from '../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class ExerciceService {
  constructor() {}

  private exos: Exercice[] = [
    { name: 'qcu',   type: Type.QCU,              question: 'combien de slides comporte la présentation ?',                           reps: {'2': 0, '3': 0, '4': 0, '5': 0 }},
    { name: 'qcm',   type: Type.QCM,              question: 'un piéton traverse au rouge. que faire ?',                               reps: { 'j\'accélère': 0, 'je peins le feu en vert': 0, 'j\'ai pas le permis': 0 } },
    { name: 'code',  type: Type.CODE,             question: 'écrivez la fonction add(a, b) qui additionne deux nombres.',             reps: {'error': 0, 'warning': 0, 'bad_return': 0, 'good_return': 0 } },
    { name: 'links', type: Type.LINKS,            question: 'reliez chaque nom de professeur à son prénom.',                          reps: {'Meyer': {'Antoine': 0, 'Claire': 0, 'Samuele': 0 }, 'David': {'Antoine': 0, 'Claire': 0, 'Samuele': 0 }, 'Giraudo': {'Antoine': 0, 'Claire': 0, 'Samuele': 0 }} },
    { name: 't/f',   type: Type.TRUE_FALSE,       question: 'vas-tu répondre \'faux\' à cette question ?' ,                           reps: { 'true': 0, 'false': 0 } },
    { name: 'free',  type: Type.FREE_ANSWER,      question: '...sinon ta journée ?',                                                  reps: null },   // AnnotationChart
    { name: 'list',  type: Type.ORDERED_LIST,     question: 'ordonnez chaque prof par date de naissance, du plus jeune au plus âgé',  reps: { '0': { 'Revuz': 0, 'Borie': 0, 'Zip': 0 }, '1': { 'Revuz': 0, 'Borie': 0, 'Zip': 0 }, '2': { 'Revuz': 0, 'Borie': 0, 'Zip': 0 }  } },
    { name: 'num',   type: Type.NUMERCIC_ANSWER,  question: 'âge de revuz?',                                                          reps: null },
    { name: 'ctrl',  type: Type.CONTROLLED_INPUT, question: 'qu\'est ce qui est jaune et qui attend ?',                               reps: {'jonhattan': 0, 'un chinois patient': 0, 'un citron pas mûr': 0, 'serge': 0 }},   // A SUPP PCQ C'EST UN QCU
  ];

  getExercices() {
    return this.exos;
  }

  add(name: string, type: Type, question: string) {
    this.exos.push({ name: name, type: type, question: question, reps: null });
  }
}
