import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TaskComponent } from './pages/task/task.component';
import { PriorityComponent } from './pages/priority/priority.component';
import { LoginComponent } from './login/login.component';
import { DeletedTasksComponent } from './pages/deleted-tasks/deleted-tasks.component';

export const routes: Routes = [
     
    {
        path: '',
        pathMatch:'full',
        redirectTo: 'login'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'task',
        component: TaskComponent
    },
    {
        path: 'priority',
        component: PriorityComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'deleted',
        component: DeletedTasksComponent
    }
    
    
];
