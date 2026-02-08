import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-label',
  standalone: true,
  imports: [CommonModule],
  template: ` <span
  class="storybook-label"
  [ngStyle]="{ 'background-color': backgroundColor, 'color': color, 'border-color': borderColor }"
>{{ label }}</span>`,
  styleUrls: ['./label.css'],
})
export class LabelComponent {

  /** What background color to use */
  @Input()
  backgroundColor: string = "#F1F1F1";

  /** What label color to use */
  @Input()
  color: string = "#000";

  /** What label border color to use */
  @Input()
  borderColor: string = "#D5D5D5";

  /**
   * Label contents
   *
   */
  @Input()
  label: string = 'Label';
}
