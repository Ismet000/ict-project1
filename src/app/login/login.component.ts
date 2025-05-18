import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userLoginObj = {
    userName: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    const isLocalData = localStorage.getItem("angular18Local");
    
    if (isLocalData != null) {
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m: any) =>
        m.userName === this.userLoginObj.userName &&
        m.password === this.userLoginObj.password
      );

      if (isUserFound !== undefined) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userId', isUserFound.id || isUserFound.userName);
        this.router.navigateByUrl('dashboard');
      } else {
        alert("User name or password is wrong");
      }
    } else {
      alert("No user found");
    }
  }
}
