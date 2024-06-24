import { Component, inject } from '@angular/core';
import { FourComponent } from '../four/four.component';
import { FiveComponent } from '../five/five.component';
import { StateService } from '../state.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [FourComponent, FiveComponent, FormsModule],
  template: `
          <a [class]="{'red': renderCount  %  2 == 0}">Cmp2
           {{count()}}
          <div>  <button (click)="triggerRender()">Trigger Render</button></div>
          <!-- <div> <button (click)="changeState()">Change State</button> </div> -->
          </a>
     <ul>
    <li>
        <app-five></app-five>
    </li>
</ul>
  `,
})
export class TwoComponent {
  renderCount = 0;
  trigger = 0;
  stateService = inject(StateService);

  count() {
    this.renderCount++;
  }
  triggerRender() {
    this.trigger = this.trigger++;
  }

  changeState() {
    this.stateService.modifyState();
  }
}
