import { Input, Component, OnInit } from '@angular/core';
import { Exercice } from '../../models/amphi.models';

@Component({
  selector: 'app-exercice-button',
  templateUrl: './exercice-button.component.html',
  styleUrls: ['./exercice-button.component.scss']
})

export class ExerciceButtonComponent implements OnInit {
  @Input() lined : boolean;
  @Input() exercice : Exercice;
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
