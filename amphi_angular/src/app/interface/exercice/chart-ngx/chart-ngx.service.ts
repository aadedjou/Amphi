import { Injectable } from '@angular/core';
import { ChartKind, Type, Exercice, Data } from '../../../models/amphi.models';

@Injectable({ providedIn: 'root' })

export class ChartService {
  step : number = 5;
  kind : ChartKind = ChartKind.GRADER;
  exercice : Exercice = { name: "", type: Type.FREE_ANSWER, question: "", rightAnswer: "", choices: {} }; // cleaner initializer;

  grader: Data[] = [];
  answers: Data[] = [];
  percents: Data[] = [];
  database : any[] = [];
  customColors : { name: string, value : string }[] = [];

  constructor() {
    this.resetChart(this.exercice);
    this.updateOthers();
    this.updateCustomColors();
  }

  intToKind(serial: number) : ChartKind {
    switch (serial) {
      case 0:
        return ChartKind.ANSWERS;
      case 1:
        return ChartKind.GRADER;
      case 2:
        return ChartKind.PERCENTS;
    }
  }

  // getters
  public getAnswers() : any[] {
    return this.database;
  }

  public getChartData() : any[] {
    switch (this.kind) {
      case ChartKind.ANSWERS:
        return this.answers;
      case ChartKind.GRADER:
        return this.grader;
      case ChartKind.PERCENTS:
        return this.percents;
    }
  }

  private getRightAnswer() : string {
    return this.exercice.rightAnswer;
  }

  private wantedResult() {
    switch (this.kind) {
      case ChartKind.ANSWERS:
        return String(this.getRightAnswer());
      case ChartKind.GRADER:
        return "100";
      case ChartKind.PERCENTS:
        return "bonnes réponses";
    }
  }

  // setters
  public setKind(kind : ChartKind) {
    this.kind = kind;
    this.updateCustomColors();
  }

  public setStep(step : number) {
    if (100 / step == Math.floor(100 / step)) {
      this.step = step;
      this.updateOthers();
    }
  }

  public resetChart(exercice : Exercice) {
    this.grader = [];
    this.answers = [];
    this.percents = [];
    this.database = [];
    this.exercice = exercice;
    this.addRandomData();
  }

  // utils
  private randint(min : number, max : number) : number {
    return min + Math.round(Math.random() * (max - min))
  }

  private formatString(string : string) {
    if (string.length > 10) return string.substring(0,10) + '...';
    return string;
  }

  private sortData(data1 : Data, data2 : Data) {
    var a : number = +data1.name;
    var b : number = +data2.name;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }
  private sortCode(data1 : Data, data2 : Data) {
    var a : number = +data1.name.split(" ")[0];
    var b : number = +data2.name.split(" ")[0];

    if (Number.isNaN(a)) return -1;
    if (Number.isNaN(b)) return 1;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  private stepped(grade : number) : number {
    return grade == 100 ? 100 : Math.floor(grade / this.step) * this.step;
  }

  // modify
  private addValue(answer : any, array : any[]) {
    var quit = false;

    // format answer
    switch (this.exercice.type) {
      case Type.QCM:
      case Type.CONTROLLED_INPUT:
        answer = this.formatString(answer);
    }

    // if exists, add 1
    array.forEach((data: Data) => {
      if (data.name == answer) {
        data.value += 1;
        quit = true;
      }
    });

    // if not, add a bar
    if (!quit) array.push( { name: answer, value: 1 } );
  }

  public addRandomData() {
    // adds 1000 random value with 30% chance of good answer
    for (let i = 0; i < 100; i++) {
      // 30% odd
      if (this.randint(0, 100) == 0) {
        this.addValue(this.getRightAnswer(), this.database);
      } else {
        var randomAnswer : any;

        switch (this.exercice.type) {
          case Type.TRUE_FALSE:
            randomAnswer = this.randint(0, 1) == 1 ? this.getRightAnswer() : "non";
            break;

          case Type.CONTROLLED_INPUT:
          case Type.QCU:
            randomAnswer = Object.keys(this.exercice.choices)[this.randint(0, Object.keys(this.exercice.choices).length -1)];
            break;

          case Type.QCM:
            randomAnswer = [];
            Object.keys(this.exercice.choices).forEach((key : string) => {
              if (this.randint(0, 1) == 0) randomAnswer.push(key);
            });
            break;

          case Type.CODE:
            var compile : boolean = this.randint(1, 25) != 1;
            randomAnswer = {
              'compile': compile,
              'warnings': this.randint(1, 5) == 1 ? 0 : this.randint(1, 10),
              'return': !compile ? false : this.randint(1, 2) == 1
            };
            break;

          case Type.NUMERCIC_ANSWER:
          default:
            randomAnswer = this.getRightAnswer() + this.randint(-25, 25);
            break;
        }
        this.addValue(randomAnswer, this.database);
      }
    }
  };

  // update
  private updateOthers() {
    this.updateAnswers();
    this.updateGrader();
    this.updatePercents();
  }

  private updateAnswers() {
    this.answers = [];

    switch (this.exercice.type) {
      case Type.QCM:
        this.database.forEach((data: any) => {
          data.name.forEach((answer: string) => {
            this.addValue(answer, this.answers);
          });
        });
        break;

      case Type.CODE:
        this.database.forEach((data: any) => {
          var answer = data.name;
          if (answer.compile) {
            this.addValue(
              answer.return ? 'Bon return' : answer.warnings + ' warning' + (answer.warnings == 1 ? '' : 's'),
              this.answers
            );
          } else {
            this.addValue('Ne compile pas', this.answers);
          }
        });
        this.answers.sort(this.sortCode);
        break;

      default:
        this.answers = this.database;
    }
  }

  private updateGrader() {
    var quit = false;

    this.grader = [];
    // set values to 0
    for (let grade = 100; grade >= 0; grade -= this.step) {
      this.grader.push( { name: String(grade), value: 0 } );
    }

    this.database.forEach((data: any) => {
      var newGrade : number;
      switch (this.exercice.type) {
        case Type.NUMERCIC_ANSWER:
          newGrade = this.stepped(100 - Math.abs( (+this.getRightAnswer()) - (+data.name) ));
          break;

        case Type.QCM:
          var nbChoices = Object.keys(this.exercice.choices).length
          var nbRightAnswers = Object.keys(this.exercice.rightAnswer).length
          newGrade = 0;

          // among given answers
          data.name.forEach((answer : string) => {
            var points : number;
            // check if answer is part of the right answers
            points = (this.exercice.rightAnswer.includes(answer))
            ? (100 / nbRightAnswers)
            : - (100 / nbChoices);

            newGrade += points;
          });

          // if negative grade, set to 0
          if (newGrade < 0) newGrade = 0;
          else newGrade = this.stepped(newGrade);
          break;

        case Type.CODE:
          var answer = data.name;

          newGrade = answer.return ? 100 : (answer.compile ? 25 : 0);
          newGrade -= answer.warnings * 10;


          // if negative grade, set to 0
          if (newGrade < 0) newGrade = 0;
          else newGrade = this.stepped(newGrade);
          break;

        default:
          newGrade = data.name == this.getRightAnswer() ? 100 : 0;
      }

      // if grade exists, add value, else create new {}
      for (let i = 0; i < data.value; i++) {
        this.addValue(newGrade, this.grader);
      }
    });
  }

  private updatePercents() {
    this.percents = [ { name: "autres réponses", value: 0 } ];

    this.database.forEach((data: Data) => {
      if (data.name != this.getRightAnswer()) {
        this.percents[0].value += data.value;
      } else {
        this.percents.push( { name: "bonnes réponses", value: data.value } );
      }
    });
    // QCM : 1 percentage for each answer
  }

  private updateCustomColors() {
    this.customColors = [];

    if (this.kind == ChartKind.ANSWERS) {
      switch (this.exercice.type) {
        case Type.QCM:
          this.exercice.rightAnswer.forEach((answer : string) => {
            this.customColors.push({
              name: this.formatString(answer),
              value: 'rgb(175, 150, 250)'
            })
          });
          break;

        case Type.CODE:
          this.customColors.push({
            name: 'Bon return',
            value: 'rgb(175, 150, 250)'
          });
          break;

        default:
          this.customColors.push({
            name: this.wantedResult(),
            value: 'rgb(175, 150, 250)'
          });
      }
    } else {
      this.customColors.push({
        name: this.wantedResult(),
        value: 'rgb(175, 150, 250)'
      });
    }
  }

  public reload() {
    this.addRandomData();
    this.database = [...this.database];
    this.database.sort(this.sortData);
    this.updateOthers();
    this.updateCustomColors();
  }
}
