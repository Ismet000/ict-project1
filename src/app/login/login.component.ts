import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoginView: boolean = true;

  userLoginObj = {
    username: '',
    password: ''
  };

  userRegisterObj = {
    username: '',
    email: '',
    password: ''
  };
  //
  // constructor(private auth: AuthService, private router: Router) {
  // }
  //
  // login() {
  //   this.auth.login(this.userLoginObj).subscribe({
  //     next: (res) => {
  //       this.auth.setToken(res.token);
  //       this.router.navigate(['/dashboard']);
  //     },
  //     error: () => alert('Login failed')
  //   })
  // }
  //
  // onLogin() {
  //   const isLocalData = localStorage.getItem("angular18Local");
  //
  //   if (isLocalData != null) {
  //     const users = JSON.parse(isLocalData);
  //
  //     const isUserFound = users.find((m: any) =>
  //       m.userName === this.userLoginObj.username &&
  //       m.password === this.userLoginObj.password
  //     );
  //
  //     if (isUserFound !== undefined) {
  //       localStorage.setItem('isLoggedIn', 'true');
  //       localStorage.setItem('userId', isUserFound.id || isUserFound.userName);
  //       this.router.navigateByUrl('dashboard');
  //     } else {
  //       alert("User name or password is wrong");
  //     }
  //   } else {
  //     alert("No user found");
  //   }
  // }

  constructor(private authService: AuthService, private router: Router) {
  }

  onLogin() {
    if (!this.userLoginObj.username || !this.userLoginObj.password) {
      alert('Please fill in both username and password');
      return;
    }

    this.authService.login(this.userLoginObj).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        alert('Login successful');
        this.router.navigate(['/dashboard']); // change as needed
      },
      error: err => {
        alert('Login failed: ' + err.error.message || err.message);
      }
    });
  }

  onRegister() {
    if (!this.userRegisterObj.email || !this.userRegisterObj.password || !this.userRegisterObj.username) {
      alert('Please fill all fields');
      return;
    }

    this.authService.register(this.userRegisterObj).subscribe({
      next: () => {
        alert('Registration successful');
        this.isLoginView = true;
      },
      error: err => {
        alert('Registration failed: ' + err.error.message || err.message);
      }
    });
  }
}
