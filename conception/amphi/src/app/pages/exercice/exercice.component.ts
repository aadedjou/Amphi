import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Exercice } from 'src/app/models/exercice.model';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnInit {
  @Input() exo: Exercice;

  constructor() { }

  ngOnInit(): void {
  }

}
