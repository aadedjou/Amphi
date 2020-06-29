import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cours } from 'src/app/models/cours.model';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {
  @Input() cours: Cours[];
  @Output() coursChange = new EventEmitter();
  @Output() detail = new EventEmitter<Cours>();

  constructor() {}

  ngOnInit(): void {
  }

  onClick(item: Cours) {
    this.detail.emit(item);
  }
}
