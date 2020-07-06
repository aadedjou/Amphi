import { Component, OnInit } from '@angular/core';
import { Slide, Exercice } from '../models/amphi.models';
import { SlideService } from './slide/slide.service';
import { ExerciceService } from './exercice/exercice.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})

export class InterfaceComponent implements OnInit {
  index = 0;
  editMode : boolean = false;
  saisie = '';
  saisieDesc = '';
  slides: Slide[];
  selection: Exercice = null;
  exercices: Exercice[];

  constructor(
    private readonly coursService: SlideService,
    private readonly exoService: ExerciceService
  ) {}

  ngOnInit() {
    this.slides = this.coursService.getSlide();
    this.exercices = this.exoService.getExercice();
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
