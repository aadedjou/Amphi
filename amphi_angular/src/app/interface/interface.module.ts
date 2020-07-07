import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterfaceComponent } from './interface.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { SlideComponent } from './slide/slide.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatButtonModule } from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
    MatButtonModule
  ],
  declarations: [
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent
  ],
  providers: [],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule { }
