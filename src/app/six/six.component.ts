import { Component } from '@angular/core';

@Component({
  selector: 'app-six',
  template: `
     <a [class]="{'red': renderCount  %  2 != 0}">Cmp6
     <h1>{{renderCount}} </h1>
       <button (click)="triggerRender()">Trigger Render</button>
     </a>
      {{count()}}
  `,
  styles: [
  ],
  standalone: true,

})
export class SixComponent {
  renderCount = 0;
  trigger = 0;

  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger++;
  }

}
