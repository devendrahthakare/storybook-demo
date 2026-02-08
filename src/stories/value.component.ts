import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-value',
  standalone: true,
  imports: [CommonModule],
  template: ` <span class="storybook-value">{{value}}</span>`,
  styleUrls: ['./value.css'],
})
export class ValueComponent {
  /**
   * value
   *
   */
  @Input()
  value: string = 'Value';
}
