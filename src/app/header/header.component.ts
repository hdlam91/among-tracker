import { Component, OnInit } from '@angular/core';
import {StatService} from 'src/app/service/stat.service';

@Component({
  selector: 'at-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private statService: StatService) { }

  ngOnInit(): void {
  }

  reset() {
    this.statService.resetSubject.next();
  }

  mapDialog() {

  }


}
