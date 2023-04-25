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
    this.tasks.push(newTask);
  }

  remove(existingTask: string){
    var userConfirmed = confirm(`Weet je zeker dat je het volgende item wilt verwijderen? \n "${existingTask}"`)
    if(userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }

  done(existingTask: string){

  }
}
