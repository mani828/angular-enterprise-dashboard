import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component';
import { HomeComponent } from './features/dashboard/home/home.component';
import { authGuard } from './core/guards/auth.guard';
import { ListComponent } from './features/employees/list/list.component';

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
    component: HomeComponent,
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
}
];
