import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';

@Component({
  selector: 'app-one',
  imports: [TwoComponent, ThreeComponent],
  template: `
        <a [class]="{'red': renderCount  %  2 != 0}">Cmp1 
          <h1>{{renderCount}} </h1>
          <button (click)="triggerRender()">Trigger Render</button>
        </a>
         {{count()}}
  
        <ul>
          <li>
              <app-two></app-two>
          </li>
          <li>
              <app-three></app-three>
          </li>
        </ul>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class OneComponent {
  renderCount = 0;
  trigger = 0;
  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger++;
  }


}
