import { Component, Input, OnInit } from '@angular/core';
import {StatService} from 'src/app/service/stat.service';

enum State {
  dead = 'dead',
  sus = 'sus',
  innocent = 'innocent',
  normal = 'normal'
}

@Component({
  selector: 'at-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() color;
  states = State;
  name: string;
  isEditing = false;

  state: State = State.normal;
  constructor(private statService: StatService) { }

  ngOnInit(): void {
    this.statService.resetSubject.subscribe(() => this.state = State.normal);
    this.name = 'name';
  }

  setState(state: State): void {
    this.state = state;
  }



}
