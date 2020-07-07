import { GoogleChartInterface } from 'ng2-google-charts';
import { Component, OnInit } from '@angular/core';
import { ExerciceService } from './exercice/exercice.service';
import { Slide, Exercice } from '../models/amphi.models';
import { SlideService } from './slide/slide.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})

export class InterfaceComponent implements OnInit {
  index = 0;
  slides: Slide[];
  selection: Exercice = null;
  exercices: Exercice[];

  columnChart: GoogleChartInterface = {
    chartType: 'ColumnChart',
    dataTable: [
      ['âge', 'reponses'],
      [ 60, 2 ],
      [ 59, 14 ],
      [ 58, 12 ],
      [ 57, 16 ],
      [ 56, 13 ],
      [ 55, 6 ],
      [ 54, 3 ],
      [ 53, 1 ],
      [ 52, 4 ],
      [ 51, 1 ],
      [ 50, 7 ],
    ],
    //firstRowIsData: true,
    options: {
      title: 'Réponses',
      animation: {
        duration: 500,
        easing: 'out',
        startup: true
      }
    },
  };


  public changeData(): void {
    const dataTable = this.columnChart.dataTable;
    var randomIndex = 1 + Math.round(Math.random() * dataTable.length - 1);

    dataTable[randomIndex][1] += 5;
    this.columnChart.component.draw();
  }

  constructor(
    private readonly coursService: SlideService,
    private readonly exoService: ExerciceService
  ) {}

  ngOnInit() {
    this.slides = this.coursService.getSlide();
    this.exercices = this.exoService.getExercice();
    this.selection = this.exercices[this.exercices.length-1];
  }

  nextSlide() {
    if (this.index < this.slides.length) this.index++;
  }

  prevSlide() {
    if (this.index >= 0) this.index--;
  }

  displayExercice(exercice : Exercice) {
    this.selection = exercice;
  }
}
