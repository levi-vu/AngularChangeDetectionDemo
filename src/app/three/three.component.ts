import { Component, } from '@angular/core';
import { SixComponent } from '../six/six.component';
import { SevenComponent } from '../seven/seven.component';

@Component({
  selector: 'app-three',
  imports: [SixComponent, SevenComponent],
  template: `
            <a [class]="{'red': renderCount  %  2 != 0}">Cmp3
            <h1>{{renderCount}} </h1>
            <button (click)="triggerRender()">Trigger Render</button>
            </a>
             {{count()}}
<ul>
    <li>
        <app-six></app-six>
    </li>
    <li>
        <app-seven></app-seven>
    </li>
</ul>
  `,
  styles: [
  ],
  standalone: true,

})
export class ThreeComponent {
  renderCount = 0;
  trigger = 0;
  stateCount = 0;

  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger++;
  }

}
