import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Slide, Exercice, ChartKind } from '../models/amphi.models';
import { CloseDialogComponent } from './close-dialog/close-dialog.component';
import { ExerciceService } from './exercice/exercice.service';
import { ChartService } from './exercice/chart-ngx/chart-ngx.service';
import { SlideService } from './slide/slide.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: [
    './interface.component.scss',
    './interface.styles.scss'
  ],
  encapsulation: ViewEncapsulation.None,
})

export class InterfaceComponent implements OnInit {
  materialLayout : boolean = true;
  settingsMenu : boolean = false;
  displayStats : boolean = false;
  prof_name : string = "Prénom NOM";
  selection : Exercice = null;
  exercices : Exercice[];
  slides : Slide[];
  kinds : ChartKind[];
  index : number = 0;
  kind : ChartKind;

  constructor(
    public dialog: MatDialog,
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
    // this.chartService.resetChart(this.selection);
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

  openDialog() {
    this.dialog.open(CloseDialogComponent);
  }

  toggleSettingsMenu() {
    this.settingsMenu = !this.settingsMenu;
  }

  onToggle(pop : boolean) {
    this.materialLayout = pop;
  }
  onClose(open : boolean) {
    this.settingsMenu = open;
  }
}
