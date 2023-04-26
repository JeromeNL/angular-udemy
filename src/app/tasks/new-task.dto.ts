export class NewTaskDto {
  constructor(
    public title: string = "",
    public date: Date = new Date())
  {

  }
}
