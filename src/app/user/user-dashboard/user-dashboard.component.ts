import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatTableModule,
    MatIconModule,
    MatProgressBarModule
  ],
  template: `
    <div class="container">
      <div class="welcome-card">
        <div class="welcome-content">
          <h1>Welcome back, Afreen C M!</h1>
          <p>Your next payment is due in 5 days</p>
        </div>
        <button mat-raised-button color="primary">
          <mat-icon>payment</mat-icon>
          Make Payment
        </button>
      </div>

      <div class="dashboard-stats">
        <mat-card class="payment-card">
          <mat-card-content>
            <div class="payment-header">
              <div>
                <h3>Next Payment Due</h3>
                <p class="amount">₹2,000</p>
                <p class="date">Due on: Jan 20, 2024</p>
              </div>
              <div class="payment-icon">
                <mat-icon>calendar_today</mat-icon>
              </div>
            </div>
            <div class="payment-progress">
              <div class="progress-text">
                <span>Payment Progress</span>
                <span>75%</span>
              </div>
              <mat-progress-bar mode="determinate" value="75"></mat-progress-bar>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="contribution-card">
          <mat-card-content>
            <div class="contribution-header">
              <div>
                <h3>Total Contribution</h3>
                <p class="amount">₹10,000</p>
                <p class="subtitle">Out of ₹24,000</p>
              </div>
              <div class="contribution-icon">
                <mat-icon>savings</mat-icon>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card class="lucky-draw-card">
        <mat-card-content>
          <div class="lucky-draw-header">
            <mat-icon>emoji_events</mat-icon>
            <div>
              <h3>Next Lucky Draw</h3>
              <p class="countdown">5 days : 12 hours : 30 minutes</p>
            </div>
          </div>
          <p class="prize-pool">Prize Pool: ₹50,000</p>
        </mat-card-content>
      </mat-card>

      <mat-card class="history-card">
        <mat-card-header>
          <mat-card-title>Payment History</mat-card-title>
          <mat-card-subtitle>Track all your payments</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <table mat-table [dataSource]="payments">
            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let payment">{{payment.date}}</td>
            </ng-container>

            <ng-container matColumnDef="amount">
              <th mat-header-cell *matHeaderCellDef>Amount</th>
              <td mat-cell *matCellDef="let payment">₹{{payment.amount}}</td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let payment">
                <span class="status-chip" [class]="'status-' + payment.status.toLowerCase()">
                  {{payment.status}}
                </span>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      padding: 24px;
      max-width: 1200px;
      margin: 0 auto;
    }
    .welcome-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 24px;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .welcome-content h1 {
      margin: 0 0 8px;
      font-size: 24px;
    }
    .welcome-content p {
      margin: 0;
      opacity: 0.9;
    }
    .dashboard-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 24px;
    }
    .payment-card, .contribution-card {
      height: 100%;
    }
    .payment-header, .contribution-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }
    .payment-icon, .contribution-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f4f6;
    }
    .payment-icon mat-icon, .contribution-icon mat-icon {
      font-size: 24px;
      color: #4f46e5;
    }
    h3 {
      margin: 0 0 8px;
      color: #4b5563;
      font-size: 14px;
    }
    .amount {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 4px;
      color: #1f2937;
    }
    .date, .subtitle {
      color: #6b7280;
      margin: 0;
      font-size: 14px;
    }
    .payment-progress {
      margin-top: 16px;
    }
    .progress-text {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      color: #6b7280;
      font-size: 14px;
    }
    .lucky-draw-card {
      margin-bottom: 24px;
    }
    .lucky-draw-header {
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .lucky-draw-header mat-icon {
      font-size: 32px;
      color: #4f46e5;
    }
    .countdown {
      font-size: 20px;
      color: #4f46e5;
      margin: 8px 0;
    }
    .prize-pool {
      color: #6b7280;
      margin: 8px 0 0;
    }
    .history-card {
      margin-bottom: 24px;
    }
    table {
      width: 100%;
    }
  `]
})
export class UserDashboardComponent {
  displayedColumns: string[] = ['date', 'amount', 'status'];
  payments = [
    { date: '2024-01-15', amount: 2000, status: 'Paid' },
    { date: '2024-01-01', amount: 2000, status: 'Paid' },
    { date: '2023-12-15', amount: 2000, status: 'Paid' },
  ];
}