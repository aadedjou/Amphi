import { Input, Component, OnInit } from '@angular/core';
import { Exercice } from '../../models/amphi.models';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})

export class ExerciceComponent implements OnInit {
  @Input() exercice: Exercice;
  displayPlayButton : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mouseOver() {
    this.displayPlayButton = true;
  }

  mouseOut() {
    this.displayPlayButton = false;
  }
}
