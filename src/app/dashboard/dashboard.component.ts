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
    this.dashboard.getSalesData().subscribe((data)=>{
      this.originalDataSales = data.sales;
      this.filteredDataSales = [...this.originalDataSales];
    });
    this.dashboard.getRevenueData().subscribe((data)=>{
      this.originalDataRevenue = data.revenue;
      this.filteredDataRevenue = [...this.originalDataRevenue];
    });
    this.dashboard.getCustomerInsights().subscribe((data)=>{
      this.originalDataCustomers = data.customers;
      this.filteredDataCustomers = [...this.originalDataCustomers];
    });
    this.dashboard.getInventoryData().subscribe((data)=>{
      this.originalDataInventory = data.inventory;
      this.filteredDataInventory = [...this.originalDataInventory];
    });
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
