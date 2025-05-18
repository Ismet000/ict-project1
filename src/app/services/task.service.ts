import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = 'http://localhost:8080/tasks';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getTasks(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get(this.baseUrl, {
      params: new HttpParams().set('userId', userId)
    });
  }

  getCompletedTasks(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get(`${this.baseUrl}/completed`, {
      params: new HttpParams().set('userId', userId)
    });
  }

  getPriorityTasks(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get(`${this.baseUrl}/priority`, {
      params: new HttpParams().set('userId', userId)
    });
  }

  getDeletedTasks(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get(`${this.baseUrl}/archived`, {
      params: new HttpParams().set('userId', userId)
    });
  }

  restoreTask(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/restore`, {});
  }

  createTask(task: any): Observable<any> {
    return this.http.post(this.baseUrl, task);
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  markComplete(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/complete`, {});
  }

  getStats(): Observable<any> {
    const userId = this.authService.getUserId();
    return this.http.get(`${this.baseUrl}/stats`, {
      params: new HttpParams().set('userId', userId)
    });
  }
}
