import { Injectable } from '@angular/core';
import {NewTaskDto} from "./new-task.dto";
import {TaskItemDto} from "./task-item.dto";

// @Injectable({
//   providedIn: 'root'
// })
export class TaskService {

  constructor() { }

  private tasks: TaskItemDto[] = [
    new TaskItemDto("Visit Ann"),
    new TaskItemDto("Call Dad"),
    new TaskItemDto("Go to the gym"),
    new TaskItemDto("Homework")
  ]

  getAllTasks(): TaskItemDto[]{
    return this.tasks;
  }

  addTask(newTask: NewTaskDto){
    this.tasks.push(new TaskItemDto(newTask.title));
    console.log(newTask);
  }

  removeTask(existingTask: TaskItemDto){
    this.tasks = this.tasks.filter(task => task != existingTask);
  }
}
