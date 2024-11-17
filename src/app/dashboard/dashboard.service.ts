import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'https://abc-dashboard-ariallabs.netlify.app/.netlify/functions'; // Base URL for the mock API

  constructor(private http: HttpClient) {}

  // Fetch sales metrics data
  getSalesData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-sales`);
  }

  // Fetch customer insights
  getCustomerInsights(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-customers`);
  }

  // Fetch revenue data
  getRevenueData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-revenue`);
  }

  // Fetch inventory management data
  getInventoryData(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get-inventory`);
  }
}
