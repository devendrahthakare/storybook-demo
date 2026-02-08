import { Component, signal } from '@angular/core';
import { Category } from './category/category';

@Component({
  selector: 'app-root',
  imports: [Category],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularWithStorybook');

}
