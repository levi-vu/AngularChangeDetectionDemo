import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public state: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }

  modifyState() {
    this.state.next(this.state.value + 1);
  }
}
