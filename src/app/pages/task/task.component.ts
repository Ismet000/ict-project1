import { Component } from '@angular/core';
import { TaskListMyComponent } from "../../components/task-list-my/task-list-my.component";

@Component({
  selector: 'app-task',
  imports: [TaskListMyComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
