import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  date: Date = new Date();
  newTaskTitle: string = "";
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

  add(taskNgForm: NgForm){
    if(!taskNgForm.touched)
      return;

    if(!taskNgForm.valid)
      return;

    this.tasks.push(new Task(this.newTaskTitle));
    taskNgForm.reset({date: this.date});
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
