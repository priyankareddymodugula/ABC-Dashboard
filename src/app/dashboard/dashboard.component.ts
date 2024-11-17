import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { CustomerInsightsComponent } from './widgets/customer-insights/customer-insights.component';
import { InventoryManagementComponent } from './widgets/inventory-management/inventory-management.component';
import { RevenueAnalysisComponent } from './widgets/revenue-analysis/revenue-analysis.component';
import { SalesMetricsComponent } from './widgets/sales-metrics/sales-metrics.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HttpClient } from '@angular/common/http';
import { DashboardService } from './dashboard.service';

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
  
  originalDataSales: any = {};
  originalDataRevenue: any = {};
  originalDataCustomers: any = {};
  originalDataInventory: any = {};
  filteredDataSales: any = {};
  filteredDataRevenue: any = {};
  filteredDataCustomers: any = {};
  filteredDataInventory: any = {};

  constructor(private http: HttpClient,private dashboard :DashboardService) {}

  ngOnInit() {
    this.fetchData();
  }

  // Fetch data from the mock JSON server
  fetchData() {
      this.originalDataSales = [
        { "month": "January", "total": 5000 },
        { "month": "February", "total": 7000 },
        { "month": "March", "total": 8000 },
        { "month": "April", "total": 6000 },
        { "month": "May", "total": 9000 }
      ];
      this.filteredDataSales = [...this.originalDataSales];
  
      this.originalDataRevenue = [
        { "date": "2024-11-01", "revenue": 15000 },
        { "date": "2024-11-02", "revenue": 17000 },
        { "date": "2024-11-03", "revenue": 16000 },
        { "date": "2024-11-04", "revenue": 18000 }
      ];
      this.filteredDataRevenue = [...this.originalDataRevenue];
  
      this.originalDataCustomers = [
        { "region": "North", "count": 120 },
        { "region": "South", "count": 80 },
        { "region": "East", "count": 100 },
        { "region": "West", "count": 90 }
      ]
      this.filteredDataCustomers = [...this.originalDataCustomers];
  
      this.originalDataInventory =[
        { "product": "Product A", "quantity": 50, "status": "In Stock" },
        { "product": "Product B", "quantity": 0, "status": "Out of Stock" },
        { "product": "Product C", "quantity": 20, "status": "Low Stock" },
        { "product": "Product D", "quantity": 100, "status": "In Stock" }
      ];
      this.filteredDataInventory = [...this.originalDataInventory];
  
  }

  // Handle filter changes
  onFilterChanged(filters: any) {
    const { region, startDate, endDate } = filters;

    if ( !this.originalDataCustomers || !this.originalDataRevenue) {
      return;
    }

    // Filter customers by region
    this.filteredDataCustomers = region === 'All'
      ? this.originalDataCustomers
      : this.originalDataCustomers.filter((c: any) => c.region === region);

    // Filter revenue by date range
    this.filteredDataRevenue = this.originalDataRevenue.filter((r: any) => {
      const date = new Date(r.date);
      return (
        (!startDate || date >= new Date(startDate)) &&
        (!endDate || date <= new Date(endDate))
      );
    });

    // Sales and inventory remain unchanged but can be filtered if needed
    this.filteredDataSales = this.originalDataSales; // Placeholder: Add filtering if required
    this.filteredDataInventory = this.originalDataInventory; // Placeholder: Add filtering if required
  }
}
