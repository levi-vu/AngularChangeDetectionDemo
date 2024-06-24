import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-five',
  template: `
     <a [class]="{'red': renderCount  %  2 != 0}">Cmp5
     <h1>{{renderCount}} </h1>
     <button (click)="triggerRender()">Trigger Render</button>
     </a>
      {{count()}}

  `,
  styles: [
  ],
  standalone: true,

})
export class FiveComponent {
  renderCount = 0;
  trigger = 0;
  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger++;
  }


}
