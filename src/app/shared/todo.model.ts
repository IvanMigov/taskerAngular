export class Todo {
  public id: number;
  public date: string;
  public label: string;
  public status: string;
  public priority: string;
  public toDoStatus: string;
  public title: string;
  public description: string;

  constructor(
     label: string = '',
     title: string = '',
     description: string = ''
  ) {
    const thisDate = new Date();

    this.date = `${(thisDate.getMonth() + 1)}/${thisDate.getDate()}/${thisDate.getFullYear()}`;
    this.label = label;
    this.status = 'ToDo';
    this.priority = 'normal';
    this.toDoStatus = 'ToDo';
    this.title = title;
    this.description = description;
  }
}
