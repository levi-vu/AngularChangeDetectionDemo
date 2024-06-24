import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TwoComponent } from '../two/two.component';
import { ThreeComponent } from '../three/three.component';
import { FourComponent } from "../four/four.component";

@Component({
  selector: 'app-one',
  template: `
        <a [class]="{'red': renderCount  %  2 != 0}">Cmp1 
          
          <div>  <button (click)="triggerRender()">Trigger Render</button></div>
        </a>
         {{count()}}
  
        <ul>
          <li>
              <app-two></app-two>
          </li>
          <li>
              <app-three></app-three>
          </li>
          <li>
        <app-four></app-four>
    </li>
        </ul>
  `,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TwoComponent, ThreeComponent, FourComponent]
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
