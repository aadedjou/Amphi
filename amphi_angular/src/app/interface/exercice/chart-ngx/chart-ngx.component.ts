import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Input } from '@angular/core';
import { Exercice } from '../../../models/amphi.models';
import { HostListener } from "@angular/core";
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chart-ngx',
  templateUrl: './chart-ngx.component.html',
  styleUrls: ['./chart-ngx.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() exercice : Exercice;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }
  screenWidth : number;
  screenHeight : number;
  update$: Subject<any> = new Subject();

  grader: any[] = [];
  data: any[] = [
    { "name": 51, "value": 5 },
    { "name": 61, "value": 6 },
    { "name": 72, "value": 8 },
    { "name": 56, "value": 2 },
  ];
  customColors = [
    {
      name: '61',
      value: 'rgb(200, 150, 250)'
    }
  ];
  axisFormat(val) {
    return val %5 == 0 ? String(val) : "";
  }

  customColorsGrader = [
    {
      name: '100',
      value: 'rgb(200, 150, 250)'
    }
  ];
  size: any[] = [700, 400];

  // options
  gradient = false;
  showXAxis = true;
  showYAxis = true;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = false;
  xAxisLabel = 'Réponses';
  yAxisLabel = 'Nombre de réponses';

  colorScheme = {
    domain: [ 'rgba(250, 250, 250, 1)' , 'rgba(250, 250, 250, 0.8)' ]
  };

  constructor(private cdr: ChangeDetectorRef) {
    Object.assign(this, this.data);
    this.updateGrader();
    this.onResize();
  }

  // Update function
  updateChart(){
    this.update$.next(true);
  }

  ngOnInit() {
    this.data = [...this.data].sort(this.sortData);
  }
  onSelect(event) {
    console.log(event);
  }

  private sortData(data1 : {name, value}, data2 : {name, value}) {
    var a : number = + data1.name;
    var b : number = + data2.name;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  private addAnswer(answer : number) {
    var quit = false;

    this.data.forEach((data: {name, value}) => {
      if (data.name == answer) {
        data.value += 1;
        quit = true;
      }
    });
    if (!quit) this.data.push( {name: answer, value: 1} );
  }

  private addRandomData() {
    for (let i = 0; i < 10; i++) {
      var randomValue = 61 + (-100 +  Math.round(Math.random() * 200));
      this.addAnswer((randomValue));
    }
    this.reloadChart();
  };

  private updateGrader() {
    var quit = false;

    this.grader = [];
    for (let grade = 100; grade >= 0; grade--) {
      this.grader.push( {name: grade, value: 0} );
    }

    this.data.forEach((data: {name, value}) => {
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

  private reloadChart() {
    this.data = [...this.data];
    this.data.sort(this.sortData);
  }

  public refresh() {
    this.addRandomData();
    this.updateGrader();
    this.cdr.detectChanges();
  }
}
