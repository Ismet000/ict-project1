import { Component, inject, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Add this import
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isLoginView: boolean = true;

  userRegisterObj: any = {
    userName: '',
    password: '',
    emailId: ''
  }

  userLoginObj: any = {
    emailId: '',
    password: ''
  }

  router = inject(Router)

  onRegister() {
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData)
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray))
    } else {
      const localArray = [];
      localArray.push(this.userRegisterObj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray))
    }
  }

  onLogin(){
    debugger
    const isLocalData = localStorage.getItem("angular18Local");
    if(isLocalData != null){
      const users = JSON.parse(isLocalData);

      const isUserFound = users.find((m:any) => m.userName == this.userLoginObj.userName && m.password == this.userLoginObj.password)
      if(isUserFound != undefined){
        localStorage.setItem('isLoggedIn', 'true'); // Add this line
        this.router.navigateByUrl('dashboard')
      } else {
        alert("User name or password is Wrong")
      }
    } else {
      alert("No User Found")
    }
  } 
}
