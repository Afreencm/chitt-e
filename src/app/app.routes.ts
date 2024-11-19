import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user/user-dashboard/user-dashboard.component';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['admin'] }
  },
  { 
    path: 'user', 
    component: UserDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: ['user'] }
  }
];