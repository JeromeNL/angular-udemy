import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route} from "@angular/router";
import {NgForm} from "@angular/forms";
import {NewTaskDto} from './new-task.dto';
import {TaskItemDto} from './task-item.dto';


@Component({
  selector: 'app-tasks',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  date: Date = new Date();
  newTask: NewTaskDto = new NewTaskDto;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    var strDate = this.route.snapshot.params['date'];
    this.newTask = new NewTaskDto(this.newTask.title, strDate);

  }
  tasks: TaskItemDto[] = [
    new TaskItemDto("Visit Ann"),
    new TaskItemDto("Call Dad"),
    new TaskItemDto("Go to the gym"),
    new TaskItemDto("Homework")
  ]

  add(taskNgForm: NgForm){
    if(!taskNgForm.touched)
      return;

    if(!taskNgForm.valid)
      return;

    this.tasks.push(new TaskItemDto(this.newTask.title));
    taskNgForm.reset({date: this.newTask.date});
  }

  remove(existingTask: TaskItemDto){
    var userConfirmed = confirm(`Weet je zeker dat je het volgende item wilt verwijderen? \n "${existingTask.title}"`)
    if(userConfirmed) {
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
  }
}















