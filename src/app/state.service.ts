import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public state: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor() { }

  modifyState() {
    this.state.next(!this.state.value);
  }
}
