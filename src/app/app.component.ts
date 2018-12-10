import { Component } from '@angular/core';

import { PeopleService } from './people.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo1 = [
    '"id": "F01"',
    '"caption": "Sighting"',
    '"type": "date"'
  ];
  todo2 = [
    '"id": "F02"',
    '"caption": "Ship Name"',
    '"type": "text"'
  ];
  todo3 = [
    '"id": "F03"',
    '"caption": "Aliens Count"',
    '"type": "number"'
  ];
  todo4 = [
    '"id": "F04"',
    '"caption": "Friendliness"',
    '"type": "number"'
  ];
  todo5 = [
    '"id": "F05"',
    '"caption": "Smartness"',
    '"type": "number"'
  ];
  todo6 = [
    '"id": "F06"',
    '"caption": "Description"',
    '"type": "text"'
  ];

  done = [
    
  ];

  people$;

  constructor(private peopleService: PeopleService){}
  fetchPeople() {
    this.people$ = this.peopleService.fetchPeople();
  }
  

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}