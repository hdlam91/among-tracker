import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatService {
  resetSubject: Subject<boolean> = new Subject();

  constructor() { }
}
