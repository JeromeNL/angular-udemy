import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Homework")
  ]

  add(newTask: string){
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask: Task){
    var userConfirmed = confirm(`Weet je zeker dat je het volgende item wilt verwijderen? \n "${existingTask.title}"`)
    if(userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }


}

class Task {
  public isDone = false;
  constructor(public title: string) {

  }

  toggleIsDone(){
    this.isDone = !this.isDone;
  }
}


















