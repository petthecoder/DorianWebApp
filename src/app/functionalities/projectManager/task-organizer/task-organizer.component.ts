import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-organizer',
  templateUrl: './task-organizer.component.html',
  styleUrls: ['./task-organizer.component.css']
})
export class TaskOrganizerComponent implements OnInit {

  currentOpen = "";

  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  openThis(id: string){
    if(this.currentOpen!=""){
      document.getElementById(this.currentOpen).classList.remove("open");
    }
    if(this.currentOpen!=id){
      document.getElementById(id).classList.add("open");
      this.currentOpen = id;
    } else{
      document.getElementById(id).classList.remove("open");
      this.currentOpen = "";
    }
      
  }

  
  todo = [
    { id: "1", color: 'red', title: 'Get to work'},
    { id: "2", color: 'blue', title: 'Pick up groceries'},
    { id: "3", color: 'orange', title: 'Go home'},
    { id: "4", color: 'orange', title: 'Fall asleep'}
  ];
  
  progress = [
    { id: "5", color: 'red', title: 'Coding'}
  ];
  
  done = [
    { id: "6", color: 'orange', title: 'Get up'},
    { id: "7", color: 'orange', title: 'Brush teeth'},
    { id: "8", color: 'orange', title: 'Take a shower'},
    { id: "9", color: 'red', title: 'Check e-mail'},
    { id: "10", color: 'blue', title: 'Walk dog'}
  ];

}
