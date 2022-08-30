import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls:['./square.component.scss'],
  template: `
<button nbButton *ngIf="!value">{{ value }}</button>
<button class="xclass" nbButton *ngIf="value === 'X'">{{ value }}</button>
<button class="statusClass" nbButton *ngIf="value === 'O'">{{ value }}</button>
  `,
  styles: ['']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

  xclass = 'x-notactive'
  statusClass = 'not-active';

}

