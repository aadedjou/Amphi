import { Slide, Exercice, ChartKind } from '../models/amphi.models';
import { Component, OnInit } from '@angular/core';
import { ExerciceService } from './exercice/exercice.service';
import { ChartService } from './exercice/chart-ngx/chart-ngx.service';
import { SlideService } from './slide/slide.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})

export class InterfaceComponent implements OnInit {
  selection : Exercice = null;
  exercices : Exercice[];
  kind : ChartKind = ChartKind.Answers;
  index : number = 0;
  slides : Slide[];

  constructor(
    private readonly chartService: ChartService,
    private readonly slideService: SlideService,
    private readonly exoService: ExerciceService
  ) {};


  ngOnInit() {
    this.slides = this.slideService.getSlide();
    this.exercices = this.exoService.getExercices();
    this.selection = this.exercices[this.exercices.length-2];
  }

  setKind(serial : number) {
    var kind = this.chartService.intToKind(serial);
    console.log(kind);
    this.chartService.setKind(kind);
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
