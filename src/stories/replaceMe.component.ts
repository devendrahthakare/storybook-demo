import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'storybook-replaceMe',
  standalone: true,
  imports: [CommonModule],
  template: `<button class="storybook-replaceMe-btn" [ngStyle]="{'backgroundColor':bgColor,'borderColor':borderColor}" (click)="onClick.emit()">
  <svg width="20" height="20" viewBox="0 0 24 24" 
     fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="4" width="6" height="6" [attr.stroke]="color" stroke-width="1.5"/>
  <rect x="14" y="14" width="6" height="6" [attr.stroke]="color" stroke-width="1.5"/>
  <path d="M10 6 H18 L16 4 M18 6 L16 8" 
        [attr.stroke]="color" stroke-width="1.5" fill="none"/>
  <path d="M14 18 H6 L8 20 M6 18 L8 16" 
        [attr.stroke]="color" stroke-width="1.5" fill="none"/>
</svg><span class="replaceMe-btn-label" [ngStyle]="{'color':color}">{{ label }}</span></button>`,
  styles: [`
    .storybook-replaceMe-btn {
      padding: 0.3em 2em;
      font-weight: 700;
      color: #000;
      background: #DDD1EB;
      border: 2px dashed #503A6A;
      border-radius: 0.5em;
      cursor:pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width:100%;
      box-sizing: border-box;
      margin: 0.4em 0;
      font-size: 0.7em;
    }
    .replaceMe-btn-label{margin-left: 0.5em;}
        
  `]
})
export class ReplaceMeComponent {
  /**
   * text
   *
   */
  @Input()
  label: string = 'Replace me';

  @Input()
  color: string = '#000';

  @Input()
  bgColor: string = '#DDD1EB';

  @Input()
  borderColor: string = '#503A6A';

  @Output()
  onClick = new EventEmitter<void>();

}
