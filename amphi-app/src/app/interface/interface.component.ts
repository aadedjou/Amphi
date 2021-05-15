import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { ExitDialogComponent } from './exit-dialog/exit-dialog.component';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  controlPanelHidden : boolean = false;
  currentSeconds = new Date().toLocaleTimeString().split(":").pop();
  currentTime : String = new Date().toLocaleTimeString().slice(0, -3);
  profName : String = "Champalle";

  updateTime = interval(1000).subscribe(
    () => { this.currentTime = new Date().toLocaleTimeString().slice(0, -3); }
  );

  updateSeconds = interval(1000).subscribe(
    () => { this.currentSeconds = new Date().toLocaleTimeString().split(":").pop(); }
  );

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ExitDialogComponent, { width: '350px' });
  }

  onKeypressEvent(event: any){
    console.log(event.target.value);
  }

  toggleControlPanel() {
    this.controlPanelHidden = !this.controlPanelHidden;
    console.log(this.controlPanelHidden);
  }
}
