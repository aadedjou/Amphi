import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { SlideComponent } from './slide/slide.component';
import { ChartComponent } from './exercice/chart-ngx/chart-ngx.component';
import { MatRadioModule } from '@angular/material/radio';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ExerciceComponent } from './exercice/exercice.component';
import { InterfaceComponent } from './interface.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatButtonModule,
    MatSliderModule,
    MatRadioModule,
    MatTabsModule,
    FormsModule,
  ],
  declarations: [
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent,
    ChartComponent,
  ],
  providers: [
  ],
  exports: [
    InterfaceComponent
  ]
})
export class InterfaceModule {}
