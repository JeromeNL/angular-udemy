import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks = [
    "Visit Ann",
    "Call Dad",
    "Go to the gym",
    "Homework"
  ]

  add(newTask: string){
    alert(newTask);
  }
}
