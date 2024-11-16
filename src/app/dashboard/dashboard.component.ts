import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { CustomerInsightsComponent } from './widgets/customer-insights/customer-insights.component';
import { InventoryManagementComponent } from './widgets/inventory-management/inventory-management.component';
import { RevenueAnalysisComponent } from './widgets/revenue-analysis/revenue-analysis.component';
import { SalesMetricsComponent } from './widgets/sales-metrics/sales-metrics.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SalesMetricsComponent,
    CustomerInsightsComponent,
    RevenueAnalysisComponent,
    InventoryManagementComponent,
    FiltersComponent,MatCardModule,
    MatToolbarModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
