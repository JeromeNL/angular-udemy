import { Injectable } from '@angular/core';
import {NewTaskDto} from "./new-task.dto";
import {TaskItemDto} from "./task-item.dto";
import {Observable, BehaviorSubject} from "rxjs";

// @Injectable({
//   providedIn: 'root'
// })
export class TaskService {

  constructor() { }

  private tasks = new  BehaviorSubject([
    new TaskItemDto("Visit Ann"),
    new TaskItemDto("Call Dad"),
    new TaskItemDto("Go to the gym"),
    new TaskItemDto("Homework")
  ])

  getAllTasks(): Observable<TaskItemDto[]>{
    return this.tasks;
  }

  addTask(newTask: NewTaskDto){
    var updatedTasks = this.tasks.value.concat(new TaskItemDto(newTask.title));
    this.tasks.next(updatedTasks);
  }

  removeTask(existingTask: TaskItemDto){
    var updatedTasks =  this.tasks.value.filter(task => task != existingTask);
    this.tasks.next(updatedTasks);
  }
}


