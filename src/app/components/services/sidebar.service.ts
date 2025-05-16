import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../custom-sidenav/custom-sidenav.component';
import { Task } from '../task-card/task-card.component';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  http = inject(HttpClient);

  constructor() { }

  getMenuItem():Observable<MenuItem[]>{
    return this.http.get<MenuItem[]>('/data/menuItem.json');
  }

  getCompletedTask():Observable<Task[]>{
    return this.http.get<Task[]>('/data/complitedTask.json')
  }

  getTaskList():Observable<Task[]>{
    return this.http.get<Task[]>('data/taskListData.json')
  }

  // In task.service.ts

  


}
