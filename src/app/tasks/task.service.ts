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

  getAllTasks(): ReadonlyArray<TaskItemDto>{
    return this.tasks;
  }

  addTask(newTask: NewTaskDto){
    this.tasks = this.tasks.concat(new TaskItemDto(newTask.title));
    // this.tasks.push(new TaskItemDto(newTask.title));
  }

  removeTask(existingTask: TaskItemDto){
    this.tasks = this.tasks.filter(task => task != existingTask);
  }
}
