import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {
  }


  login(loginObj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, loginObj,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  }

  register(registerObj: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, registerObj);
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }


  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }


  // isAuthenticated(): boolean {
  //   return !!localStorage.getItem('isLoggedIn');
  // }
  //
  // logout(): void {
  //   localStorage.removeItem('userId');
  //   localStorage.removeItem('isLoggedIn');
  //   localStorage.removeItem('angular18Local');
  // }
}
