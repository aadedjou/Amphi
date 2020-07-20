import { Component, OnInit } from '@angular/core';
import { Slide, Exercice, Chart } from '../models/amphi.models';
import { ExerciceService } from './exercice/exercice.service';
import { ChartService } from './exercice/chart-ngx/chart-ngx.service'
import { SlideService } from './slide/slide.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})

export class InterfaceComponent implements OnInit {
  index = 0;
  chart: Chart;
  slides: Slide[];
  exercices: Exercice[];
  selection: Exercice = null;

  constructor(
    private readonly slideService: SlideService,
    private readonly chartService: ChartService,
    private readonly exoService: ExerciceService
  ) {};

  ngOnInit() {
    this.slides = this.slideService.getSlide();
    this.exercices = this.exoService.getExercices();
    this.selection = this.exercices[this.exercices.length-2];
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
