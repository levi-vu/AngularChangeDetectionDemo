import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneComponent } from './one/one.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneComponent],
  template: `
  <div class="tree">
      <ul>
          <li>
              <app-one></app-one>
          </li>
      </ul>
  </div>
  <div style="margin-bottom: 5em; clear: both;"></div>
      
    `
})
export class AppComponent {
  active = 0;
  constructor() {

  }

  activeChange() {
    this.active++;
  }

}
