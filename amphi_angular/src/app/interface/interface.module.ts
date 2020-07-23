import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideComponent } from './slide/slide.component';
import { ChartComponent } from './exercice/chart-ngx/chart-ngx.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { ExerciceComponent } from './exercice/exercice.component';
import { InterfaceComponent } from './interface.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    Ng2GoogleChartsModule,
    NgxChartsModule,
    MatButtonModule,
    MatTabsModule
  ],
  declarations: [
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent,
    ChartComponent
  ],
  providers: [],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule {}
