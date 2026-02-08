import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-map',
  standalone: true,
  imports: [CommonModule],
  template: `<a href="{{hrefURL}}" target="_blank">
    <svg [attr.width]="size" [attr.height]="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_5515)">
    <path d="M17.6485 13.8417C18.285 12.5448 18.7102 11.2389 18.7102 10.0615C18.7102 5.64086 15.1354 3 11.6793 3C8.22318 3 4.64844 5.64086 4.64844 10.0615C4.64844 13.5879 8.44347 18.2538 10.3733 20.398C10.8952 20.9826 12.1711 21.4078 13.0161 20.3629C14.3314 18.7364 16.2899 16.6099 17.6485 13.8417ZM11.6793 12.4764C11.1956 12.4764 10.7229 12.333 10.3207 12.0643C9.91849 11.7955 9.60504 11.4136 9.41994 10.9668C9.23485 10.5199 9.18642 10.0282 9.28078 9.55378C9.37514 9.0794 9.60806 8.64364 9.95007 8.30163C10.2921 7.95962 10.7279 7.7267 11.2022 7.63234C11.6766 7.53799 12.1683 7.58642 12.6152 7.77151C13.062 7.9566 13.444 8.27005 13.7127 8.67221C13.9814 9.07439 14.1248 9.5472 14.1248 10.0309C14.1248 10.6795 13.8672 11.3015 13.4085 11.7601C12.9499 12.2188 12.3279 12.4764 11.6793 12.4764Z" 
    [attr.fill]="color" 
    fill-opacity="0.87"/>
    </g>
    <defs>
    <clipPath id="clip0_1_5515">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
  </a>`
})
export class MapComponent {
  /**
   * size
   *
   */
  @Input()
  size: number = 24;
  /**
   * color
   *
   */
  @Input()
  color: string = '#000';
  /**
   * href link
   *
   */
  @Input()
  hrefURL: string = '#';
}
