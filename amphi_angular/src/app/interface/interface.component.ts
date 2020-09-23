import { Slide, Exercice, ChartKind, Type } from '../models/amphi.models';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ExerciceService } from './exercice/exercice.service';
import { ChartService } from './exercice/chart-ngx/chart-ngx.service';
import { SlideService } from './slide/slide.service';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class InterfaceComponent implements OnInit {
  prof_name : string = "Coumes";
  displayStats : boolean = false;
  selection : Exercice = null;
  exercices : Exercice[];
  slides : Slide[];
  kinds : ChartKind[];
  kind : ChartKind;
  index : number = 0;

  constructor(
    public readonly chartService: ChartService,
    private readonly slideService: SlideService,
    private readonly exoService: ExerciceService
  ) {};

  ngOnInit() {
    this.kind = this.chartService.kind;
    this.kinds = Object.keys(ChartKind)
      .filter(k => typeof ChartKind[k as any] != "number")
      .map(k => +k);
    this.slides = this.slideService.getSlide();
    this.exercices = this.exoService.getExercices();
    this.selection = null; //this.exercices[Type.CODE];
    this.chartService.resetChart(this.selection);
  }

  nextSlide() {
    if (this.index < this.slides.length) this.index++;
  }
  prevSlide() {
    if (this.index >= 0) this.index--;
  }
  navigateSlides($event: KeyboardEvent) {
    console.log($event.code);
    if ($event.code === "Left") {
      this.prevSlide();
    } else if ($event.code === "Right") {
      this.nextSlide();
    }
  }

  displayExercice(exercice : Exercice) {
    this.selection = exercice;
    this.chartService.resetChart(exercice);
  }

  refreshStats() {
    this.chartService.reload();
  }

  updateKind(kind : ChartKind) {
    this.chartService.setKind(kind);
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

  kindName(kind : number) : string {
    switch (kind) {
      case ChartKind.ANSWERS:
        return "Réponses";
      case ChartKind.GRADER:
        return "Grader";
      case ChartKind.PERCENTS:
        return "Pourcentages";
    }
  }
}
