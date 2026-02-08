import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-title',
  standalone: true,
  imports: [CommonModule],
  template: `<span class="storybook-title" [ngStyle]="{'fontSize':fontSize, 'fontWeight':fontWeight, 'color':color}">{{title}}</span>`,
  styles: [".storybook-title { font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; }"]
})
export class TitleComponent {
  /**
   * title
   *
   */
  @Input()
  title: string = '';
  /**
   * title
   *
   */
  @Input()
  fontSize: string = '';
  /**
   * title
   *
   */
  @Input()
  fontWeight: string = '';
  /**
   * title
   *
   */
  @Input()
  color: string = '';
}
