import { GoogleChartInterface } from 'ng2-google-charts';

export enum Type {
  CONTROLLED_INPUT = 0,
  NUMERCIC_ANSWER = 1,
  ORDERED_LIST = 2,
  FREE_ANSWER = 3,
  TRUE_FALSE = 4,
  LINKS = 5,
  CODE = 6,
  QCM = 7,
  QCU = 8,
}

export enum ChartKind {
  ANSWERS = 0,
  GRADER = 1,
  PERCENTS = 2
}

export interface Slide {
  title: string;
  contenu: string;
}

export interface NgxChart {
  data: any[],
  view: number[],
  gradient : boolean,
  showXAxis : boolean,
  showYAxis : boolean,
  showLegend : boolean,
  showXAxisLabel : boolean,
  showYAxisLabel : boolean,
  xAxisLabel : string,
  yAxisLabel : string,
  colorScheme : {}
}

export interface Exercice {
  type: Type;
  name: string;
  question: string;
  rightAnswer: any;
  choices: {};
}

export interface Ng2Chart {
  exercice: Exercice;
  chart : GoogleChartInterface;
}

export interface Chart {
  exercice: Exercice;
  chart : NgxChart;
}

export interface Data {
  name: string;
  value: number;
}

