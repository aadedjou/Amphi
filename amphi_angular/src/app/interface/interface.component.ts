import { Slide, Exercice, ChartKind, Type } from '../models/amphi.models';
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
  displayStats : boolean = false;
  selection : Exercice = null;
  exercices : Exercice[];
  slides : Slide[];
  kind : ChartKind = 0;
  index : number = 0;

  constructor(
    public readonly chartService: ChartService,
    private readonly slideService: SlideService,
    private readonly exoService: ExerciceService
  ) {};

  ngOnInit() {
    this.kind = this.chartService.kind;
    this.slides = this.slideService.getSlide();
    this.exercices = this.exoService.getExercices();
    this.selection = this.exercices[Type.QCM];
    this.chartService.resetChart(this.selection);
  }

  setKind(serial : number) {
    var kind = this.chartService.intToKind(serial);
    this.chartService.setKind(kind);
  }

  nextSlide() {
    if (this.index < this.slides.length) this.index++;
  }

  prevSlide() {
    if (this.index >= 0) this.index--;
  }

  displayExercice(exercice : Exercice) {
    this.displayStats = false;
    this.selection = exercice;
    this.chartService.resetChart(exercice);
  }

  refreshStats() {
    this.chartService.reload();
  }

  updateStep(event: any) {
    this.chartService.setStep(event.value);
  }

  entitled(type : Type) : string {
    switch (type) {
      case Type.CONTROLLED_INPUT:
        return "Saisie contrôlée";
      case Type.NUMERCIC_ANSWER:
        return "Réponse numérique";
      case Type.ORDERED_LIST:
        return "Liste à ordonner";
      case Type.FREE_ANSWER:
        return "Réponse libre";
      case Type.TRUE_FALSE:
        return "Vrai / Faux";
      case Type.LINKS:
        return "Correspondances";
      case Type.CODE:
        return "CODE";
      case Type.QCM:
        return "QCM";
      case Type.QCU:
        return "QCU";
    }
  }
}
