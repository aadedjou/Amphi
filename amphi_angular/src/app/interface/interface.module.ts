import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { SlideComponent } from './slide/slide.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent
  ],
  exports: [InterfaceComponent]
})
export class InterfaceModule { }
