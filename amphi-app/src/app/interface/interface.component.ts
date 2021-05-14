import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { interval } from 'rxjs';
import { ExitDialogComponent } from './exit-dialog/exit-dialog.component';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})
export class InterfaceComponent implements OnInit {
  current_seconds = new Date().toLocaleTimeString().split(":").pop();
  current_time : String = new Date().toLocaleTimeString().slice(0, -3);
  prof_name : String = "Champalle";

  update_time = interval(1000).subscribe(
    () => { this.current_time = new Date().toLocaleTimeString().slice(0, -3); }
  );

  update_seconds = interval(1000).subscribe(
    () => { this.current_seconds = new Date().toLocaleTimeString().split(":").pop(); }
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
}
