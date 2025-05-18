import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getUserId(): string {
    return localStorage.getItem('userId') || '';
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('isLoggedIn');
  }

  logout(): void {
    localStorage.removeItem('userId');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('angular18Local');
  }
}
