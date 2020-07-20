import { Injectable } from '@angular/core';
import { Chart, Exercice, Type, Ng2Chart } from '../../../models/amphi.models';
import { GoogleChartInterface } from 'ng2-google-charts';

@Injectable({ providedIn: 'root' })

export class ChartService {
  constructor() { }

  private chartType(exo : Exercice) : string {
    switch(exo.type) {
      case Type.QCM:                // x: nb de reps, y: nb de bonnes reps
      case Type.LINKS:              // x: origine, y: bonne dest -> truc sur le coté!
        return "ScatterChart";         // ???

      case Type.CODE:               // -> de -1 à 100 (retour de grader)
      case Type.TRUE_FALSE:         // bah true / false quoi
        return "PieChart";

      case Type.QCU:                // x: rep, y: nb de rep
      case Type.CONTROLLED_INPUT:   // (mais.. mais c'est la même)
      case Type.NUMERCIC_ANSWER:    // x: rep, y: nb de rep
      case Type.FREE_ANSWER:        // x: nb de caractères, y: nb de rep
      case Type.ORDERED_LIST:       // LE BORDEL
        return "ColumnChart";
    }
  }
  private chartData(exo : Exercice) : string[] {
    var data = [];

    switch(exo.type) {
      case Type.QCM:
      case Type.QCU:
      case Type.CODE:
      case Type.LINKS:
      case Type.TRUE_FALSE:
      case Type.ORDERED_LIST:
      case Type.CONTROLLED_INPUT:
        for (let key in exo.reps) data[0].push(key);
        return data;
      case Type.NUMERCIC_ANSWER:
        return ["answer", "amount"];
    }
    return data;
  }

  public newChart(exo : Exercice) : GoogleChartInterface {
    return {
      chartType: this.chartType(exo),
      dataTable: [this.chartData(exo)],
      options: {
        title: exo.question,
        animation: {
          duration: 300,
          easing: 'out',
          startup: true
        }
      }
    }
  }

  public getChart(exo : Exercice) : Ng2Chart {
    return { exercice: exo, chart: this.newChart(exo)};
  }
}
