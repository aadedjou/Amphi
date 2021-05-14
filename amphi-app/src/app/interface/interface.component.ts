import { Component, OnInit } from '@angular/core';
import {  interval } from 'rxjs';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.scss']
})

export class InterfaceComponent implements OnInit {
  current_seconds = new Date().toLocaleTimeString().split(":").pop();
  current_time : String = new Date().toLocaleTimeString().slice(0, -3);
  prof_name : String = "Champalle";

  update_time = interval(1000).subscribe(
    () => { this.current_time = new Date().toLocaleTimeString().slice(0, -3); }
  );

  update_seconds = interval(1000).subscribe(
    () => { this.current_seconds = new Date().toLocaleTimeString().split(":").pop(); }
  );

    constructor() { }

  ngOnInit(): void {
  }
}

