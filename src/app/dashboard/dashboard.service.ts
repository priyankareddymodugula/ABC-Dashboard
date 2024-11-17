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
  getSalesData(): Observable<{ month: string; total: number }[]> {
    return this.http.get<{ month: string; total: number }[]>(`${this.baseUrl}/get-sales`);
  }

  // Fetch customer insights
  getCustomerInsights(): Observable<{ region: string; count: number }[]> {
    return this.http.get<{ region: string; count: number }[]>(`${this.baseUrl}/get-customers`);
  }

  // Fetch revenue data
  getRevenueData(): Observable<{ date: string; revenue: number }[]> {
    return this.http.get<{ date: string; revenue: number }[]>(`${this.baseUrl}/get-revenue`);
  }

  // Fetch inventory management data
  getInventoryData(): Observable<{ product: string; quantity: number; status: string }[]> {
    return this.http.get<{ product: string; quantity: number; status: string }[]>(`${this.baseUrl}/get-inventory`);
  }
}
