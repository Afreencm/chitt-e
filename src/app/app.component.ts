import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { CommonModule } from "@angular/common";
import { AuthService } from "./auth/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatButtonModule],
  template: `
    <mat-toolbar
      color="primary toolbar-class"
      *ngIf="authService.getCurrentUser()"
    >
      <span>
        <img src="assets/logo.png" class="logo" />
      </span>
      <span class="spacer"></span>
      <!-- <input class="form-control search-input"> -->
      <span class="spacer"></span>

      <div class="search-container">
        <input class="search-input" />
        <img class="search-icon" src="assets/search.png" />
      </div>
      <img class="notification" src="assets/notification.png" />
      <img class="profile" src="assets/boy.png" />
      <div
        style="font-size: 14px;padding-left:10px;color:black;padding-right:15px;"
      >
        Afreen C M
      </div>
      <button mat-button (click)="logout()" class="log-out">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styles: [
    `
      .spacer {
        flex: 1 1 auto;
      }
      .toolbar-class {
        height: 55px;
        background: #ebf3fd;
        border-bottom: 1px solid lightgrey;
      }
      .logo {
        width: 32px;
        height: 32px;
        margin-top: 10px;
        border-radius: 5px;
      }
      .log-out {
        border: 2px solid #3f9cea;
        width: 100px;
        color: black !important;
      }
      .profile {
        width: 35px;
        height: 35px;
        border-radius: 25px;
        // border:1px solid #ff7a01;
      }
      .notification {
        width: 35px;
        height: 35px;
        padding-right: 20px;
      }
      .search-input {
        width: 250px;
        height: 33px;
        border: 2px solid #3f9cea;
        border-radius: 5px;
      }
      .search-icon {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
      }
      .search-container {
        position: relative;
        padding-right: 20px;
      }
    `,
  ],
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
  }
}
