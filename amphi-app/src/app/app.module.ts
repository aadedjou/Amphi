import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExerciceComponent } from './interface/exercice/exercice.component';
import { InterfaceComponent } from './interface/interface.component';
import { ExitDialogComponent } from './interface/exit-dialog/exit-dialog.component';

// MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    InterfaceComponent,
    ExitDialogComponent,
    ExerciceComponent
  ],
  imports: [
    MatIconModule,
    MatTabsModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
