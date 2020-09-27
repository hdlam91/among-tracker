import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'at-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  players = Array.from(Array(10).keys());

  constructor() { }

  ngOnInit(): void {
  }

}
