import { Injectable } from '@angular/core';
import { Exercice, Type } from '../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class ExerciceService {
  constructor() {}

  private exos: Exercice[] = [
    { name: 'ctrl',  type: Type.CONTROLLED_INPUT, rightAnswer: "jonhattan",         question: 'qu\'est ce qui est jaune et qui attend ?',                   choices: {'jonhattan': 0, 'un chinois patient': 0, 'un citron pas mûr': 0, 'serge': 0 }},   // A SUPP PCQ C'EST UN QCU
    { name: 'num',   type: Type.NUMERCIC_ANSWER,  rightAnswer: 61,                  question: '27 + 34 ?',                                                  choices: null },
    { name: 'list',  type: Type.ORDERED_LIST,     rightAnswer: [20,21,22,23],       question: 'ordonnez les nombres de 20 à 23',                            choices: { } },
    { name: 'free',  type: Type.FREE_ANSWER,      rightAnswer: "",                  question: '...sinon ta journée ?',                                      choices: null },   // AnnotationChart
    { name: 't/f',   type: Type.TRUE_FALSE,       rightAnswer: "oui",               question: 'vas-tu répondre \'non\' à cette question ?' ,                choices: { 'true': 0, 'false': 0 } },
    { name: 'links', type: Type.LINKS,            rightAnswer: [{0:2},{1:0},{2:1}], question: 'reliez chaque langage à sa syntaxe.',                        choices: { } },
    { name: 'code',  type: Type.CODE,             rightAnswer: 0,                   question: 'écrivez la fonction add(a, b) qui additionne deux nombres.', choices: { 'error': 0, 'warning': 0, 'bad_return': 0, 'good_return': 0 } },
    { name: 'qcm',   type: Type.QCM,              rightAnswer: 3,                   question: 'un piéton traverse au rouge. que faire ?',                   choices: { 'j\'accélère': 0, 'je peins le feu en vert': 0, 'j\'ai pas le permis': 0 } },
    { name: 'qcu',   type: Type.QCU,              rightAnswer: 5,                   question: 'combien de slides comporte la présentation ?',               choices: { '2': 0, '3': 0, '4': 0, '5': 0 }},
  ];

  getExercices() {
    return this.exos;
  }
}
