import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <div class="login-page">
      <img src="assets/background.png" class="bg-image">
      <div class="login-container">
        <div class="logo">
        <img src="assets/logo11.png"class="logo-chit">
        </div>
        <h1 class="welcome-text">Welcome back!</h1>
        <p class="subtitle">Please enter your details</p>

        <form (ngSubmit)="onSubmit()" #loginForm="ngForm" class="login-form">
          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Email</mat-label>
            <input
              matInput
              [(ngModel)]="username"
              name="username"
              required
              #usernameInput="ngModel"
              type="email"
            />
            <mat-error *ngIf="usernameInput.invalid && usernameInput.touched">
              Email is required
            </mat-error>
          </mat-form-field>

          <mat-form-field appearance="outline" class="full-width">
            <mat-label>Password</mat-label>
            <input
              matInput
              [type]="hidePassword ? 'password' : 'text'"
              [(ngModel)]="password"
              name="password"
              required
              #passwordInput="ngModel"
            />
            <button
              mat-icon-button
              matSuffix
              (click)="hidePassword = !hidePassword"
              type="button"
            >
              <mat-icon>{{ hidePassword ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
            <mat-error *ngIf="passwordInput.invalid && passwordInput.touched">
              Password is required
            </mat-error>
          </mat-form-field>

          <div class="login-options">
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="#" class="forgot-password">Forgot password?</a>
          </div>

          <button
            mat-raised-button
          
            type="submit"
            [disabled]="!loginForm.form.valid"
            class="login-button"
          >
            Log In
          </button>
          <!-- <button mat-raised-button class="google-login" type="button">
            <img style="width:28px;height:28px"
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt="Google Icon"
            />
            Log in with Google
          </button> -->
        </form>

        <p class="signup-text">
          Don’t have an account?
          <a href="#">Contact Admin</a>
        </p>
      </div>
    </div>
  `,
  styles: [

    `
      .login-page {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        // background-color: #f4f4f4;
      }
      
      .login-container {
        background-color: white;
        position: relative;
        border-radius: 12px;
        padding: 32px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
        text-align: center;
        border:2px solid #ff7a01
      }
      .logo {
        margin-bottom: 16px;
      }
      .app-icon {
        font-size: 48px;
        color: black;
      }
      .welcome-text {
        font-size: 24px;
        font-weight: bold;
        margin: 16px 0 8px;
        color: black;
      }
      .subtitle {
        font-size: 14px;
        color: #7a7a7a;
        margin-bottom: 32px;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      .full-width {
        width: 100%;
      }
      .logo-chit{
      width:45px;
      height:45px;
      margin-top:10px;
      border-radius:5px;
      // color:white;
    }
      .login-options {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #7a7a7a;
        margin-top: 8px;
      }
      .forgot-password {
        color: black;
        text-decoration: none;
      }
      .login-button {
        background-color: black !important;
        color: white;
        height: 48px;
        font-size: 16px;
      }
      .google-login {
        background-color: white;
        color: black;
        height: 48px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e0e0e0;
        gap: 8px;
      }
      .signup-text {
        margin-top: 16px;
        font-size: 14px;
        color: #7a7a7a;
      }
      .signup-text a {
        color: black;
        text-decoration: none;
      }
      .bg-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      // z-index: -1;
      }
    `,
  ],
})
export class LoginComponent {
  username = '';
  password = '';
  hidePassword = true;

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.username && this.password) {
      this.authService.login(this.username, this.password).subscribe((user) => {
        if (user.role === 'admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }
      });
    }
  }
}
