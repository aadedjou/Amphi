import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Exercice } from '../../models/amphi.models';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})

export class ExerciceComponent implements OnInit {
  @Input() exercice: Exercice;

  constructor() { }

  ngOnInit(): void {
  }
}
