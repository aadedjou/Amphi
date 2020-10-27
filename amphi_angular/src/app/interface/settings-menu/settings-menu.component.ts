import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.scss']
})
export class SettingsMenuComponent implements OnInit {
  @Input() opened : boolean = false;
  @Output() closed = new EventEmitter<boolean>();
  @Output() toggled = new EventEmitter<boolean>();
  windowOpened : boolean = false; // debugs click on settings button
  model : boolean = false;

  constructor(private ref: ElementRef) { }

  ngOnInit(): void {
  }

  emit() {
    console.log(!this.model)
    this.toggled.emit(!this.model)
  }

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any; }) {
    if (!this.ref.nativeElement.contains(event.target)) {
      if (!this.windowOpened && this.opened) {
        this.windowOpened = true;
      } else if (this.windowOpened) {
        this.opened = false;
      }
      this.closed.emit(this.opened);
    }
  }
}
