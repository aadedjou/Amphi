import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Slide } from '../../models/amphi.models';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {
  @Input() slide : Slide;
  @Input() class : string = "";
  @Output() slideController = new EventEmitter();
  @Output() contenu = new EventEmitter<Slide>();

  constructor() {}

  ngOnInit(): void {
  }

  onClick(item: Slide) {
    this.contenu.emit(item)
  }
}
