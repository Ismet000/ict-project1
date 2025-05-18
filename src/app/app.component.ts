import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CustomSidenavComponent } from "./components/custom-sidenav/custom-sidenav.component";
import { HeaderComponent } from "./header/header.component";
import { LoginComponent } from "./login/login.component";
import { TaskListMyComponent } from './components/task-list-my/task-list-my.component';
import { DeletedTasksComponent } from "./pages/deleted-tasks/deleted-tasks.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    CustomSidenavComponent,
    HeaderComponent,
    LoginComponent,
    DeletedTasksComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ict_project1';


  isAuthenticated = false;

  constructor(private router: Router) {
    // Watch for route changes
    this.router.events.subscribe(() => {
      this.checkAuthentication();
    });
  }

  checkAuthentication() {
    const isLocalData = localStorage.getItem("angular18Local");
    this.isAuthenticated = !!isLocalData && this.router.url !== '/login';
  }
}
