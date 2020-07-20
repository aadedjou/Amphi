import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Chart, Exercice } from '../../../models/amphi.models';
import { ChartService } from './chart-ngx.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chart-ngx',
  templateUrl: './chart-ngx.component.html',
  styleUrls: ['./chart-ngx.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() exercice : Exercice;
  update$: Subject<any> = new Subject();
  data: any[] = [
    { "name": 51, "value": 5 },
    { "name": 61, "value": 6 },
    { "name": 71, "value": 8 },
    { "name": 56, "value": 2 },
  ];
  customColors = [
    {
      name: '61',
      value: 'rgb(200, 150, 250)'
    }
  ];

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
    domain: [ 'rgba(250, 250, 250, 1)' , 'rgba(250, 250, 250, 0.8)']
  };

  constructor() {
    Object.assign(this, this.data )
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

  public sortData(data1 : {name, value}, data2 : {name, value}) {
    var a : number = + data1.name;
    var b : number = + data2.name;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  public addAnswer(answer : string) {
    var quit = false;

    this.data.forEach((data: {name, value}) => {
      if (data.name == answer) {
        data.value += 1;
        quit = true;
      }
    });
    if (quit) return;

    this.data.push( {name: answer, value: 1} );
    this.data = [...this.data].sort(this.sortData);
  }

  public addRandomData() {
    for (let i = 0; i < 10; i++) {
      var randomValue = 61 + (-10 +  Math.round(Math.random() * 20));
      this.addAnswer(String(randomValue));
    }
  };

  public refresh() {
    this.addRandomData();
  }
}
