import { Injectable } from '@angular/core';
import {NewTaskDto} from "./new-task.dto";
import {TaskItemDto} from "./task-item.dto";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getAllTasks(): TaskItemDto[]{
    throw new Error("Not implemented");
  }

  addTask(newTask: NewTaskDto){

  }

  removeTask(existingTask: TaskItemDto){

  }
}
