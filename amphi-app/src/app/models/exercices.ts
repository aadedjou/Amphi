export enum EndType {
    NONE,
    LIMITED_TIME,
    ANSWERS,
    GOOD_ANSWERS,
}

export class Exercice {
    title: string;
    endType: EndType;

    constructor(label: string, end: EndType) {
        this.title = label;
        this.endType = end;
    }
}
