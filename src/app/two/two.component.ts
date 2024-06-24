import { Component, signal } from '@angular/core';
import { FourComponent } from '../four/four.component';
import { FiveComponent } from '../five/five.component';
import { StateService } from '../state.service';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [FourComponent, FiveComponent],
  template: `
          <a [class]="{'red': renderCount  %  2 != 0}">Cmp2
          <h1>{{renderCount}} </h1>
           {{count()}}
          <button (click)="triggerRender()">Trigger Render</button>
          <div> <button (click)="changeState()">Change State</button> </div>

          </a>

<ul>
    <li>
        <app-four></app-four>
    </li>
    <li>
        <app-five></app-five>
    </li>
</ul>
  `,

})
export class TwoComponent {
  renderCount = 0;
  trigger = signal(0);
  random = Math.random();

  constructor(private stateService: StateService) { }
  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger.update(trigger => trigger + 1);
  }

  changeState() {
    this.stateService.modifyState();
  }
}
