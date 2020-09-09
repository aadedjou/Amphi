import { Injectable } from '@angular/core';
import { ChartKind, Type, Exercice } from '../../../models/amphi.models';
import { ExerciceService } from '../exercice.service';

@Injectable({ providedIn: 'root' })

export class ChartService {
  step : number = 5;
  kind : ChartKind = ChartKind.Percents;
  exercice : Exercice = { name: "", type: Type.FREE_ANSWER, question: "", rightAnswer: "", choices: {} }; // cleaner initializer;

  grader: any[] = [];
  answers: any[] = [];
  percents: any[] = [];
  customColors : any[] = [];

  constructor() {
    this.resetChart(this.exercice);
    this.updateOthers();
    this.updateCustomColors();
  }

  intToKind(serial: number) : ChartKind {
    switch (serial) {
      case 0:
        return ChartKind.Answers;
      case 1:
        return ChartKind.Grader;
      case 2:
        return ChartKind.Percents;
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
      case ChartKind.Percents:
        return this.percents;
    }
  }

  private getRightAnswer() : any {
    return this.exercice.rightAnswer;
  }

  private wantedResult() {
    switch (this.kind) {
      case ChartKind.Answers:
        return String(this.getRightAnswer());
      case ChartKind.Grader:
        return "100";
      case ChartKind.Percents:
        return "bonnes réponses";
    }
  }

  private randint(min, max) : number {
    return min + Math.round(Math.random() * (max - min))
  }

  // setters
  public setKind(kind : ChartKind) {
    this.kind = kind;
    this.updateCustomColors();
  }

  public setStep(step : number) {
    if (100 / step == Math.floor(100/step)) {
      this.step = step;
      this.updateOthers();
    }
  }

  public resetChart(exercice : Exercice) {
    this.grader = [];
    this.answers = [];
    this.percents = [];
    this.exercice = exercice;
    this.addRandomData();
  }

  // modify
  private addAnswer(answer : any) {
    var quit = false;

    // if exists, add 1
    this.answers.forEach((data: {name, value}) => {
      if (data.name == answer) {
        data.value += 1;
        quit = true;
      }
    });
    // if not, add a bar
    if (!quit) this.answers.push( { name: answer, value: 1 } );
  }

  public addRandomData() {
    // adds 1000 random value with 30% chance of good answer
    for (let i = 0; i < 100; i++) {
      // 30% odd
      if (this.randint(0,2) == 0) {
        this.addAnswer(this.getRightAnswer());
      } else {
        var randomValue : number;

        switch (this.exercice.type) {
          case Type.TRUE_FALSE:
            randomValue = this.randint(0, 1) == 1 ? this.getRightAnswer() : "non";
            break;
          case Type.QCU:
          case Type.NUMERCIC_ANSWER:
          default:
            randomValue = this.getRightAnswer() + this.randint(-25, 25);
        }

        this.addAnswer(randomValue);
      }
    }
  };

  // update
  private updateOthers() : void {
    this.updateGrader();
    this.updatePercents();
  }

  private updateGrader() : void {
    var quit = false;

    this.grader = [];
    // set values to 0
    for (let grade = 100; grade >= 0; grade -= this.step) {
      this.grader.push( { name: grade, value: 0 } );
    }

    this.answers.forEach((data: {name, value}) => {
      var newGrade : number;
      switch (this.exercice.type) {
        case Type.TRUE_FALSE:
          newGrade = data.name == this.getRightAnswer() ? 100 : 0;
          break;
        case Type.QCU:
        case Type.NUMERCIC_ANSWER:
        default:
          newGrade = Math.floor((100 - Math.abs(this.getRightAnswer() - data.name)) / this.step) * this.step;
      }

      // if grade exists, add value, else create new {}
      this.grader.forEach((grade: {name, value}) => {
        if (grade.name == newGrade) {
          grade.value += data.value;
          quit = true;
        }
      });
      if (!quit) this.grader.push( { name: newGrade, value: data.value } );
    });
  }

  private updatePercents() : void {
    this.percents = [ { name: "autres réponses", value: 0 } ];

    this.answers.forEach((data: {name, value}) => {
      if (data.name != this.getRightAnswer()) {
        this.percents[0].value += data.value;
      } else {
        this.percents.push( { name: "bonnes réponses", value: data.value } );
      }
    });
  }

  private updateCustomColors() : void {
    this.customColors = [{
        name: this.wantedResult(),
        value: 'rgb(200, 150, 250)'
    }];
  }

  public reload() : void {
    this.answers = [...this.answers];
    this.updateOthers();
  }
}
