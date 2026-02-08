import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-button',
  standalone: true,
  imports: [CommonModule],
  template: ` <button
  type="button"
  class="storybook-button"
  [ngStyle]="{ 'background-color': backgroundColor, 'color': color, 'borderColor': bColor }"
>
  {{ label }}
</button>`,
  styleUrls: ['./button.css'],
})
export class ButtonComponent {

  /** What background color to use */
  @Input()
  backgroundColor?: string;

  /** What text color to use */
  @Input()
  color?: string;

  /**
   * Button contents
   *
   */
  @Input()
  label = 'Sample button';

  /**
   * Button border color
   *
   */
  @Input()
  bColor = '';

}
