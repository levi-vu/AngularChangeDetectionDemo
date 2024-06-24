import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import { hightlight } from '../highlight';

@Component({
  selector: 'app-four',
  template: `
     <a [class]="{'red': renderCount  %  2 == 0}">Cmp4 
     
    <div>  <button (click)="triggerRender()">Trigger Render</button></div>
     </a> 
      {{count()}}
  `,
  styles: [
  ],
  standalone: true,

})
export class FourComponent {
  renderCount = 0;
  trigger = 0;

  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger++;
  }

}
