import { Component, OnInit, Input } from '@angular/core';
import { Exercice, EndType } from 'src/app/models/exercices';

@Component({
  selector: 'platon-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnInit {
  @Input() exercice!: Exercice;

  constructor() {}

  ngOnInit(): void {
  }

  exerciceIcon() : string {
    switch(this.exercice.endType) {
      case EndType.NONE:
        return '';
      case EndType.GOOD_ANSWERS:
        return 'done';
        case EndType.ANSWERS:
        return 'supervisor_account';
      case EndType.LIMITED_TIME:
        return 'timer';
    }
  }

  exericeIsNone() : boolean {
    return this.exercice.endType == EndType.NONE;
  }
}
