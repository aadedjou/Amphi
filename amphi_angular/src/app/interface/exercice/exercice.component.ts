import { Input, Component, OnInit } from '@angular/core';
import { Exercice, Type } from '../../models/amphi.models';

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

  entitled(type : Type) : string {
    switch (type) {
      case Type.CONTROLLED_INPUT:
        return "Saisie contrôlée";
      case Type.NUMERCIC_ANSWER:
        return "Réponse numérique";
      case Type.ORDERED_LIST:
        return "Liste à ordonner";
      case Type.FREE_ANSWER:
        return "Réponse libre";
      case Type.TRUE_FALSE:
        return "Vrai / Faux";
      case Type.LINKS:
        return "Correspondances";
      case Type.CODE:
        return "CODE";
      case Type.QCM:
        return "QCM";
      case Type.QCU:
        return "QCU";
    }
  }
}
