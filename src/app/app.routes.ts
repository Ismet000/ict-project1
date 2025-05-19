import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {TaskComponent} from './pages/task/task.component';
import {PriorityComponent} from './pages/priority/priority.component';
import {LoginComponent} from './login/login.component';
import {DeletedTasksComponent} from './pages/deleted-tasks/deleted-tasks.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'task', component: TaskComponent},
      {path: 'priority', component: PriorityComponent},
      {path: 'deleted', component: DeletedTasksComponent}
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
