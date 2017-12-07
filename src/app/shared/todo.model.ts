export class Todo {
  constructor(
    public id: number,
    public date: string,
    public label: string,
    public status: string,
    public priority: string,
    public toDoStatus: string,
    public title: string,
    public description: string
  ) {}
}
