import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isLoginView = true;

  userLoginObj = {
    username: '',
    password: ''
  };

  userRegisterObj = {
    email: '',
    username: '',
    password: ''
  };

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
