export class TaskItemDto {
  public isDone = false;
  constructor(public title: string) {

  }

  toggleIsDone(){
    this.isDone = !this.isDone;
  }
}
