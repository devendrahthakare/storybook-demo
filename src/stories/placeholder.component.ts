import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: ` <input type="text" placeholder="{{pholder}}"
  class="storybook-placeholder" [ngStyle]="{'background-color': bgColor}" />`,
  styleUrls: ['./placeholder.css'],
})
export class PlaceholderComponent {

  /**
   * Placeholder text
   *
   */
  @Input() pholder: string = 'Placeholder';


  /**
   * Placeholder text
   *
   */
  @Input() bgColor: string = '';
}
