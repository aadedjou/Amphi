import { Injectable } from '@angular/core';
import { ChartKind } from '../../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class ChartService {
  step : number = 1;
  kind : ChartKind = ChartKind.Answers;

  grader: any[] = [];
  answers: any[] = [
    { "name": 51, "value": 5 },
    { "name": 61, "value": 6 },
    { "name": 72, "value": 8 },
    { "name": 56, "value": 2 },
  ];

  customColors : any[] = [];

  constructor() {
    this.updateGrader();
    this.updateCustomColors();
  }

  intToKind(serial: number): ChartKind {
    switch (serial) {
      case 0:
        return ChartKind.Answers;
      case 1:
        return ChartKind.Grader;
    }
  }

  // getters
  public getAnswers() : any[] {
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

  public getRightAnswer() : number {
    switch (this.kind) {
      case ChartKind.Answers:
        return 61;
      case ChartKind.Grader:
        return 100;
    }
  }

  // setters
  public setKind(kind : ChartKind) {
    this.kind = kind;
    this.updateCustomColors();
  }

  public setStep(step : number) {
    if (100 / step == Math.floor(100/step)) {
      this.step = step;
      this.updateGrader();
    }
  }

  private updateGrader() : void {
    var quit = false;

    this.grader = [];
    for (let grade = 100; grade >= 0; grade -= this.step) {
      this.grader.push( {name: grade, value: 0} );
    }

    this.answers.forEach((data: {name, value}) => {
      var newGrade = Math.floor((100 - Math.abs(61 - data.name)) / this.step) * this.step;

      this.grader.forEach((grade: {name, value}) => {
        if (grade.name == newGrade) {
          grade.value += data.value;
          quit = true;
        }
      });
      if (!quit) this.grader.push( {name: newGrade, value: data.value} );
    });
  }

  private updateCustomColors() : void {
    this.customColors = [
      {
        name: String(this.getRightAnswer()),
        value: 'rgb(200, 150, 250)'
      }
    ];
  }

  public reload() : void {
    this.answers = [...this.answers];
    this.updateGrader();
  }
}
