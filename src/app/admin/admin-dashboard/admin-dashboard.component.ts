import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule, 
    MatCardModule, 
    MatButtonModule, 
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule
  ],
  template: `
    <div class="container">
      <div class="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button mat-raised-button color="primary">
          <mat-icon>person_add</mat-icon>
          Add New Member
        </button>
      </div>

      <div class="dashboard-stats">
        <mat-card>
          <mat-card-content>
            <div class="stat-icon total-collection">
              <mat-icon>account_balance</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Total Collection</h3>
              <p class="stat-value">₹50,000</p>
              <p class="stat-change positive">
                <mat-icon>trending_up</mat-icon> +12.5% from last month
              </p>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-content>
            <div class="stat-icon outstanding-dues">
              <mat-icon>payment</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Outstanding Dues</h3>
              <p class="stat-value">₹10,000</p>
              <p class="stat-change negative">
                <mat-icon>trending_down</mat-icon> -5.2% from last month
              </p>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-content>
            <div class="stat-icon active-members">
              <mat-icon>groups</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Active Members</h3>
              <p class="stat-value">25</p>
              <p class="stat-change positive">
                <mat-icon>trending_up</mat-icon> +2 this month
              </p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-card class="table-card">
        <mat-card-header>
          <mat-card-title>Recent Payments</mat-card-title>
          <mat-card-subtitle>Track all member payments</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <table mat-table [dataSource]="payments">
            <ng-container matColumnDef="user">
              <th mat-header-cell *matHeaderCellDef>User</th>
              <td mat-cell *matCellDef="let payment">
                <div class="user-info">
                  <div class="user-avatar">{{payment.user[0]}}</div>
                  <span>{{payment.user}}</span>
                </div>
              </td>
            </ng-container>

            <ng-container matColumnDef="amount">
              <th mat-header-cell *matHeaderCellDef>Amount</th>
              <td mat-cell *matCellDef="let payment">₹{{payment.amount}}</td>
            </ng-container>

            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let payment">{{payment.date}}</td>
            </ng-container>

            <ng-container matColumnDef="status">
              <th mat-header-cell *matHeaderCellDef>Status</th>
              <td mat-cell *matCellDef="let payment">
                <span class="status-chip" [class]="'status-' + payment.status.toLowerCase()">
                  {{payment.status}}
                </span>
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef></th>
              <td mat-cell *matCellDef="let payment">
                <button mat-icon-button [matMenuTriggerFor]="menu">
                  <mat-icon>more_vert</mat-icon>
                </button>
                <mat-menu #menu="matMenu">
                  <button mat-menu-item>
                    <mat-icon>edit</mat-icon>
                    <span>Edit</span>
                  </button>
                  <button mat-menu-item>
                    <mat-icon>delete</mat-icon>
                    <span>Delete</span>
                  </button>
                </mat-menu>
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
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }
    .dashboard-header h1 {
      font-size: 24px;
      margin: 0;
      color: #1f2937;
    }
    .dashboard-stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 24px;
      margin-bottom: 24px;
    }
    .dashboard-stats mat-card-content {
      display: flex;
      align-items: center;
      padding: 24px;
    }
    .stat-icon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
    }
    .stat-icon mat-icon {
      font-size: 24px;
      color: white;
    }
    .total-collection {
      background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);
    }
    .outstanding-dues {
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    .active-members {
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    }
    .stat-info h3 {
      margin: 0 0 8px;
      color: #4b5563;
      font-size: 14px;
    }
    .stat-value {
      font-size: 24px;
      font-weight: 600;
      margin: 0 0 4px;
      color: #1f2937;
    }
    .stat-change {
      display: flex;
      align-items: center;
      font-size: 12px;
      margin: 0;
    }
    .stat-change mat-icon {
      font-size: 16px;
      height: 16px;
      width: 16px;
      margin-right: 4px;
    }
    .positive {
      color: #16a34a;
    }
    .negative {
      color: #dc2626;
    }
    .table-card {
      margin-top: 24px;
    }
    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .user-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #e5e7eb;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 500;
      color: #4b5563;
    }
    table {
      width: 100%;
    }
    .mat-mdc-row {
      height: 64px;
    }
  `]
})
export class AdminDashboardComponent {
  displayedColumns: string[] = ['user', 'amount', 'date', 'status', 'actions'];
  payments = [
    { user: 'John Doe', amount: 2000, date: '2024-01-15', status: 'Paid' },
    { user: 'Jane Smith', amount: 2000, date: '2024-01-14', status: 'Pending' },
    { user: 'Bob Johnson', amount: 2000, date: '2024-01-13', status: 'Paid' },
  ];
}