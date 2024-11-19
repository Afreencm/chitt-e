import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar color="primary toolbar-class" *ngIf="authService.getCurrentUser()">
      <span>
        <img src="assets/logo.png"class="logo">
      </span>
      <span class="spacer"></span>
      <!-- <input class="form-control search-input"> -->
      <span class="spacer"></span>
      <button mat-button (click)="logout()" class="log-out">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .toolbar-class{
      height:55px;
      background: #1F1F1F
    }
    .logo{
      width:32px;
      height:32px;
      margin-top:10px;
      border-radius:5px;
      // color:white;
    }
    .log-out{
      border:2px solid #ff7a01;
      width:100px;
    }

  `]
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) { }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}