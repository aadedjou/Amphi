import { ExerciceButtonComponent } from './exercice-button/exercice-button.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { CloseDialogComponent } from './close-dialog/close-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InterfaceComponent } from './interface.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartComponent } from './exercice/chart-ngx/chart-ngx.component';
import { SlideComponent } from './slide/slide.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule,
    Ng2GoogleChartsModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatSliderModule,
    MatRadioModule,
    MatTableModule,
    MatTabsModule,
    FormsModule,
  ],
  declarations: [
    ExerciceButtonComponent,
    InterfaceComponent,
    ExerciceComponent,
    SlideComponent,
    ChartComponent,
    CloseDialogComponent,
  ],
  providers: [
  ],
  exports: [
    InterfaceComponent
  ],
})
export class InterfaceModule {}
