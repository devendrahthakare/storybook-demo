import { Component } from '@angular/core';
import { TitleComponent } from '../../stories/title.component';
import { LinkComponent } from '../../stories/link.component';
import { BriefcaseIconComponent } from '../../stories/briefcaseIcon.component';
import { WarningComponent } from '../../stories/warning.component';
import { MapComponent } from '../../stories/map.component';
import { RightArrowComponent } from '../../stories/rightArrow.component';
import { DropdownComponent } from '../../stories/dropdown.component';
import { ButtonComponent } from '../../stories/button.component';
import { PlaceholderComponent } from '../../stories/placeholder.component';
import { LabelComponent } from '../../stories/label.component';
import { ReplaceMeComponent } from '../../stories/replaceMe.component';
import { ToggleComponent } from '../../stories/toggle.component';


@Component({
  selector: 'app-category',
  imports: [TitleComponent,
    LinkComponent,
    BriefcaseIconComponent,
    WarningComponent,
    MapComponent,
    RightArrowComponent,
    DropdownComponent,
    ButtonComponent,
    PlaceholderComponent,
    LabelComponent,
    ReplaceMeComponent,
    ToggleComponent
  ],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  darkMode = false;

  categoryObj = [
    {
      "id": 1,
      "briefCaseIcon": true,
      "title": true,
      "subtitle": true,
      "warningIcon": true,
      "mapIcon": true,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 2,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": true,
      "warningIcon": true,
      "mapIcon": false,
      "rightArrow": true,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 3,
      "briefCaseIcon": true,
      "title": true,
      "subtitle": false,
      "warningIcon": false,
      "mapIcon": false,
      "rightArrow": false,
      "labelsShow": true,
      "labelsCount": 4,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 4,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": false,
      "warningIcon": false,
      "mapIcon": true,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 5,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": true,
      "warningIcon": true,
      "mapIcon": false,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": true,
      "placeholder": false
    },
    {
      "id": 6,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": false,
      "warningIcon": false,
      "mapIcon": false,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": true
    }

  ];

  categoryObjSingle = [
    {
      "id": 1,
      "briefCaseIcon": true,
      "title": true,
      "subtitle": true,
      "warningIcon": true,
      "mapIcon": true,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 2,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": true,
      "warningIcon": false,
      "mapIcon": false,
      "rightArrow": true,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 3,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": false,
      "warningIcon": false,
      "mapIcon": true,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": false
    },
    {
      "id": 4,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": true,
      "warningIcon": true,
      "mapIcon": false,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": true,
      "placeholder": false
    },
    {
      "id": 5,
      "briefCaseIcon": false,
      "title": true,
      "subtitle": true,
      "warningIcon": false,
      "mapIcon": false,
      "rightArrow": false,
      "labelsShow": false,
      "dropdown": false,
      "sampleBtn": false,
      "placeholder": true
    }

  ]

}
