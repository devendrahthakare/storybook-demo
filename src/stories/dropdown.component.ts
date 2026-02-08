import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'storybook-dropdown',
  standalone: true,
  imports: [CommonModule],
  template: `<select class="dropdown" [ngStyle]="{ 'color': color }">
      <option  value="" disabled selected>{{ label }}</option>
      @for(option of options; track option){
      <option [value]="option">
        {{ option }}
      </option>
      }      
    </select>
`,
  styleUrls: ['./dropdown.css'],
})
export class DropdownComponent {

  @Input()
  color: string = '#545454';

  @Input()
  label: string = 'Dropdown';

  @Input()
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

}
