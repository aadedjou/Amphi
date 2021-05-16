import { Injectable } from '@angular/core';
import { Exercice, EndType } from 'src/app/models/exercices';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  exercices : Exercice[] = [
    { 'title': '1', 'endType': EndType.NONE },
    { 'title': '2', 'endType': EndType.ANSWERS },
    { 'title': '3', 'endType': EndType.GOOD_ANSWERS },
    { 'title': '4', 'endType': EndType.LIMITED_TIME },
  ];

  constructor() {
    this.exercices.forEach(exo => {
      exo.title = "Titre de l'activité " + exo.title;
    });
  }

  public getExercices() : Exercice[] {
    return this.exercices;
  }

  public addExercice() {
  }
}
