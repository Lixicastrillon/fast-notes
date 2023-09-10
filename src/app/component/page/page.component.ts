import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-page', // selector
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  toDoList!: ToDo[];
  inputHomework:String = "";
  constructor() {}
  ngOnInit(): void {
    this.toDoList = [
      {
        content: 'Read book at 8:00 am' ,
        completed: false,
      },
    ];
  }
  toggleDone(id: Number) {
    this.toDoList.map((a, i) => {
      if (i === id) {
        a.completed = !a.completed;
      }
      return a;
    });
  }
  addHomework(){
    console.log("soy add",this.addHomework)
    if(this.inputHomework !== ""){
      this.toDoList.push({
        content:this.inputHomework,
        completed:false
      })
      this.inputHomework = "";
    }
    else{
      alert ("write a homework")
    }
  }
  deleteHomework(id: Number) {
    this.toDoList = this.toDoList.filter((a, i) => i !== id);
  }

}
