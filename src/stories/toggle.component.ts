import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'storybook-toggle',
  standalone: true,
  imports: [CommonModule],
  template: `<button
  type="button"
  class="toggle"
  [class.checked]="checked"
  (click)="toggle()"
>&nbsp; 
</button>
@if(checked){<label class="switch">
  <input type="checkbox" checked>
  <span class="slider round"></span>
</label>}
  @if(!checked){<label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label>}`,
  styleUrls: ['./toggle.css']
})
export class ToggleComponent {

  @Input() checked = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
