export enum Type {
  ControlledInput = "Saisie contrôlée",
  NumericAnswer = "Réponse numérique",
  OrderedList = "Liste à ordonner",
  FreeAnswer = "Réponse libre",
  TrueFalse = "Vrai / Faux",
  Links = "Correspondances",
  Code = "Code",
  QCM = "QCM",
  QCU = "QCU"
}

export interface Slide {
  title: string;
  contenu: string;
}

export interface Exercice {
  name: string;
  type: Type;
  question: string;
}

