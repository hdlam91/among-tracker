import { Component, OnInit } from '@angular/core';
import { version } from '../../../package.json';
import { environment } from '../../environments/environment';


@Component({
  selector: 'at-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  version: string = version;
  github_url: string = environment.github_url;

  constructor() { }

  ngOnInit(): void {
  }

}
