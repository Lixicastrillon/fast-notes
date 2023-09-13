import { Component, OnInit } from '@angular/core';
//importo modelo
import { ToDo } from '../models/ToDo';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  toDoList!: ToDo[];
  inputHomework: String = '';
  constructor() {}
  //inicio del todolist
  ngOnInit(): void {
    this.toDoList = [
      {
        content: 'Read book at 8:00 am',
        completed: false,
      },
    ];
  }
  // subrayar las tareas
  toggleDone(id: Number) {
    this.toDoList.map((a, i) => {
      if (i === id) {
        a.completed = !a.completed;
      }
      return a;
    });
  }
  //adicionar nueva tarea
  addHomework() {
    if (this.inputHomework !== '') {
      this.toDoList.push({
        content: this.inputHomework,
        completed: false,
      });
      this.inputHomework = '';
    } else {
      alert('write a homework');
    }
  }
  // eliminar tarea
  deleteHomework(id: Number) {
    this.toDoList = this.toDoList.filter((a, i) => i !== id);
  }
}
