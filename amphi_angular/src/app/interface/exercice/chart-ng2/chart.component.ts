import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';
import { Chart, Exercice, Ng2Chart } from '../../../models/amphi.models';
import { ChartService } from './chart.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {
  @Input() exercice : Exercice;
  exoChart : Ng2Chart;

  constructor(
    private readonly chartService: ChartService,
  ) {}

  ngOnInit() {
    this.exoChart = this.chartService.getChart(this.exercice);
    // this.exoChart.chart = this.chartTemp;
  }

  public sortData(data1 : string[], data2 : string[]) {
    var a : number = + data1[0];
    var b : number = + data2[0];

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  public addAnswer(answer : string) {
    const dataTable = this.exoChart.chart.dataTable;
    var quit = false;

    dataTable.forEach((data: string[]) => {
      if (data[0] == answer) {
        data[1] += 1;
        quit = true;
      }
    });
    if (quit) return;
    dataTable.push([answer, 1]);
    var legends : string[] = dataTable.shift() ;
    dataTable.sort(this.sortData);
    dataTable.unshift(legends);
  }

  public addRandomData() {
    for (let i = 0; i < 10; i++) {
      var randomValue = 40 +  Math.round(Math.random() * 30);
      this.addAnswer(String(randomValue));
    }
  };

  public draw() {
    this.exoChart.chart.component.draw();
  }

  public refresh() {
    this.addRandomData();
    this.draw();
  }

  chartTemp: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['âge', 'reponses'],
      ['60', 2 ],
      ['59', 14 ],
      ['58', 12 ],
      ['57', 16 ],
      ['56', 13 ],
      ['55', 6 ],
      ['54', 3 ],
      ['53', 1 ],
      ['52', 4 ],
      ['51', 1 ],
      ['50', 7 ],
    ],
    //firstRowIsData: true,
    options: {
      title: 'Réponses',
      animation: {
        duration: 300,
        easing: 'out',
        startup: true
      }
    },
  };
}
