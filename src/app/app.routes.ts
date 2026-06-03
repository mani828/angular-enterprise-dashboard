import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { ListComponent } from './features/employees/list/list.component';
import { AddComponent } from './features/employees/add/add.component';
import { EditComponent } from './features/employees/edit/edit.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
},
{
    path: 'login',
    component: LoginComponent,
},
{
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
},
{
    path: '***',
    redirectTo: 'login'
},
    {
        path: 'employees',
        component: ListComponent,
        canActivate: [authGuard]
    },
    {
  path: 'employees/add',
  component: AddComponent,
  canActivate: [authGuard]
},
{
  path: 'employees/edit/:id',
  component: EditComponent
}
];
