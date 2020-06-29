import { Component, OnInit } from '@angular/core';
import { Cours } from './models/cours.model';
import { CoursService } from './services/cours.service';
import { Exercice } from './models/exercice.model';
import { ExerciceService } from './services/exercice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  index = 0;
  editMode : boolean = false;
  saisie = '';
  saisieDesc = '';
  slides: Cours[];
  selection: Exercice = null;
  exercices: Exercice[];

  constructor(
    private readonly coursService: CoursService,
    private readonly exoService: ExerciceService
  ) {}

  ngOnInit() {
    this.slides = this.coursService.getCours();
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
