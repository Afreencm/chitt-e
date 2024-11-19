import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const currentUser = this.authService.getCurrentUser();
    const requiredRoles = route.data['roles'] as Array<string>;

    if (currentUser && requiredRoles.includes(currentUser.role)) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}