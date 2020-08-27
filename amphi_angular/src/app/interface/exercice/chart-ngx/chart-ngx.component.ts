import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Input } from '@angular/core';
import { ChartService } from './chart-ngx.service';
import { HostListener } from "@angular/core";
import { Subject } from 'rxjs';
import { stringify } from 'querystring';

@Component({
  selector: 'app-chart-ngx',
  templateUrl: './chart-ngx.component.html',
  styleUrls: ['./chart-ngx.component.scss']
})

export class ChartComponent implements OnInit {
  @HostListener('window:resize', ['$event'])

  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  screenWidth : number;
  screenHeight : number;
  update$: Subject<any> = new Subject();

  axisFormat(val) {
    return val %5 == 0 ? String(val) : "";
  }
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

  constructor(
    private cdr: ChangeDetectorRef,
    private readonly chartService: ChartService
  ) {
    Object.assign(this, this.chartService.getAnswers());
    //this.chartService.setAnswers(chartService.getAnswers());
    this.onResize();
  }

  // Update function
  updateChart() {
    this.update$.next(true);
  }

  ngOnInit() {
    this.chartService.reload();
    this.chartService.getAnswers().sort(this.sortData)
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

    this.chartService.getAnswers().forEach((data: {name, value}) => {
      if (data.name == answer) {
        data.value += 1;
        quit = true;
      }
    });
    if (!quit) this.chartService.getAnswers().push( {name: answer, value: 1} );
  }

  private addRandomData() {
    for (let i = 0; i < 10; i++) {
      var randomValue = 61 + (-25 +  Math.round(Math.random() * 50));
      this.addAnswer(randomValue);
    }
  };

  private reloadChart() {
    this.chartService.reload();
    this.chartService.getAnswers().sort(this.sortData);
  }

  public refresh() {
    this.addRandomData();
    this.reloadChart();
    //this.cdr.detectChanges();
  }

  public data() {
    return this.chartService.getChartData();
  }

  public customColors() {
    return this.chartService.customColors;
  }
}
