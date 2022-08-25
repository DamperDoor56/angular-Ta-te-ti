import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  styleUrls:['./square.component.scss'],
  template: `
<button>{{ value }}</button>
  `,
  styles: []
})
export class SquareComponent {

  @Input() value: 'X' | 'O';

}

