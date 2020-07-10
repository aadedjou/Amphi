import { GoogleChartInterface } from "ng2-google-charts";

export enum Type {
  CONTROLLED_INPUT = "Saisie contrôlée",
  NUMERCIC_ANSWER = "Réponse numérique",
  ORDERED_LIST = "Liste à ordonner",
  FREE_ANSWER = "Réponse libre",
  TRUE_FALSE = "Vrai / Faux",
  LINKS = "Correspondances",
  CODE = "CODE",
  QCM = "QCM",
  QCU = "QCU"
}

export interface Slide {
  title: string;
  contenu: string;
}

export interface Exercice {
  type: Type;
  name: string;
  question: string;
  reps: {};
}

export interface Chart {
  exercice: Exercice;
  chart : GoogleChartInterface;
}

