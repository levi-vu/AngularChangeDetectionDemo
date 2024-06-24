import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StateService } from '../state.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-seven',
  template: `
     <a [class]="{'red': renderCount  %  2 != 0}">Cmp7
     
     <P> Listen state:  {{stateValue  | async}}<P>
       <div>  <button (click)="triggerRender()">Trigger Render</button></div>
     </a>
      {{count()}}
  `,
  styles: [
  ],
  imports: [AsyncPipe],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class SevenComponent {
  renderCount = 0;
  trigger = 0;
  stateValue = this.state.state;
  constructor(private state: StateService) { }

  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger++;
  }

}
