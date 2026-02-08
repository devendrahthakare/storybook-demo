import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-link',
  standalone: true,
  imports: [CommonModule],
  template: `<a href="{{hrefURL}}" target="_blank" class="storybook-link">{{linkText}}</a>`,
  styleUrls: ['./link.css'],
})
export class LinkComponent {
  /**
   * href link
   *
   */
  @Input()
  hrefURL: string = '#';

  /**
   * link text
   *
   */
  @Input()
  linkText: string = 'Link';
}
