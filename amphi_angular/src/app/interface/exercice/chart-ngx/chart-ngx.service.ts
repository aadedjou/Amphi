import { Injectable } from '@angular/core';
import { ChartKind } from '../../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class ChartService {
  kind : ChartKind = ChartKind.Answers;

  grader: any[] = [];
  answers: any[] = [
    { "name": 51, "value": 5 },
    { "name": 61, "value": 6 },
    { "name": 72, "value": 8 },
    { "name": 56, "value": 2 },
  ];

  constructor() {
    this.updateGrader();
  }

  intToKind(serial: number): ChartKind {
    switch (serial) {
      case 0:
        return ChartKind.Answers;
      case 1:
        return ChartKind.Grader;
    }
  }

  public setKind(kind : ChartKind) {
    this.kind = kind;
  }

  private updateGrader() {
    var quit = false;

    this.grader = [];
    for (let grade = 100; grade >= 0; grade--) {
      this.grader.push( {name: grade, value: 0} );
    }

    this.answers.forEach((data: {name, value}) => {
      var newGrade = 100 - Math.abs(61 - data.name);

      this.grader.forEach((grade: {name, value}) => {
        if (grade.name == newGrade) {
          grade.value += data.value;
          quit = true;
        }
      });
      if (!quit) this.grader.push( {name: newGrade, value: data.value} );
    });
  }

  public setAnswers(newAnswers : any[]) {
    this.answers = [...newAnswers];
    this.updateGrader();
  }

  public getAnswers(): any[] {
    return this.answers;
  }

  public getChartData() : any[] {
    switch (this.kind) {
      case ChartKind.Answers:
        return this.answers;
      case ChartKind.Grader:
        return this.grader;
    }
  }
}
