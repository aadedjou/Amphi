import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-exit-dialog',
  templateUrl: './exit-dialog.component.html',
  styleUrls: ['./exit-dialog.component.scss']
})
export class ExitDialogComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor(public dialogRef: MatDialogRef<ExitDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


