import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-warning',
  standalone: true,
  imports: [CommonModule],
  template: ` <span
  class="storybook-warning-icon"
  [ngStyle]="{ 'border-bottom-color': color, 'fontSize': fontSize }"><span class="exl-mark">!</span></span>`,
  styleUrls: ['./warning.css'],
})
export class WarningComponent {

  @Input()
  color?: string = '#236FBC';

  @Input()
  fontSize?: string = '';
}
