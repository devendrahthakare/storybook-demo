import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-badge',
  standalone: true,
  imports: [CommonModule],
  template: ` <span class="storybook-badge" [ngStyle]="{ 'background-color': backgroundColor }"></span>`,
  styleUrls: ['./badge.css'],
})
export class BadgeComponent {

  /** What background color to use */
  @Input()
  backgroundColor: string = 'brown';
}
