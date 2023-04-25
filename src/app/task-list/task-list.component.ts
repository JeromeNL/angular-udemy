import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  date: Date = new Date();
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);

  }
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
