import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private baseUrl = 'http://localhost:3000'; // Base URL for the mock API

  constructor(private http: HttpClient) {}

  // Fetch sales metrics data
  getSalesData(): Observable<{ month: string; total: number }[]> {
    return this.http.get<{ month: string; total: number }[]>(`${this.baseUrl}/sales`);
  }

  // Fetch customer insights
  getCustomerInsights(): Observable<{ region: string; count: number }[]> {
    return this.http.get<{ region: string; count: number }[]>(`${this.baseUrl}/customers`);
  }

  // Fetch revenue data
  getRevenueData(): Observable<{ date: string; revenue: number }[]> {
    return this.http.get<{ date: string; revenue: number }[]>(`${this.baseUrl}/revenue`);
  }

  // Fetch inventory management data
  getInventoryData(): Observable<{ product: string; quantity: number; status: string }[]> {
    return this.http.get<{ product: string; quantity: number; status: string }[]>(`${this.baseUrl}/inventory`);
  }
}
