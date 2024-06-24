import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public state = signal(true);
  constructor() { }

  modifyState() {
    this.state.update(state => !state)
  }
}
