import { Component, Input, OnInit, ChangeDetectorRef, HostListener } from '@angular/core';
import { Exercice, Data } from '../../../models/amphi.models';
import { ChartService } from './chart-ngx.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chart-ngx',
  templateUrl: './chart-ngx.component.html',
  styleUrls: ['./chart-ngx.component.scss']
})

export class ChartComponent implements OnInit {
  @Input() exercice : Exercice;

  @HostListener('window:resize', ['$event']) onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
  }

  screenWidth : number;
  screenHeight : number;
  update$: Subject<any> = new Subject();

  colorScheme = {
    domain: [ 'rgba(250, 250, 250, 0.85)' , 'rgba(250, 250, 250, 0.9)' ]
  };

  constructor(
    // private cdr: ChangeDetectorRef,
    public readonly chartService: ChartService
  ) {
    Object.assign(this, this.chartService.getAnswers());
    // this.chartService.setAnswers(chartService.getAnswers());
    this.onResize();
  }

  // update function
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

  private sortData(data1 : Data, data2 : Data) {
    var a : number = + data1.name;
    var b : number = + data2.name;

    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  private reloadChart() {
    this.chartService.reload();
    this.chartService.getAnswers().sort(this.sortData);
  }

  public refresh() {
    this.chartService.addRandomData();
    this.reloadChart();
    // this.cdr.detectChanges();
  }

  public data() {
    return this.chartService.getChartData();
  }

  public customColors() {
    return this.chartService.customColors;
  }
}
