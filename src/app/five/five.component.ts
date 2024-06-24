import { ChangeDetectionStrategy, Component, } from '@angular/core';

@Component({
  selector: 'app-five',
  template: `
     <a [class]="{'red': renderCount  %  2 != 0}">Cmp5
     
     <div>  <button (click)="triggerRender()">Trigger Render</button></div>
     </a>
      {{count()}}

  `,
  styles: [
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush

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
