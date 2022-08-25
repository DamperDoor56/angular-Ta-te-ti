import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls:['./square.component.scss'],
  template: `
<button nbButton *ngIf="!value">{{ value }}</button>
<button nbButton *ngIf="value === 'X'">{{ value }}</button>
<button [ngClass]="statusClass" (click)="setActiveClass()" nbButton *ngIf="value === 'O'">{{ value }}</button>
  `,
  styles: ['']
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

  statusClass = 'not-active';

  setActiveClass(){
      this.statusClass = 'active';
  }

}

