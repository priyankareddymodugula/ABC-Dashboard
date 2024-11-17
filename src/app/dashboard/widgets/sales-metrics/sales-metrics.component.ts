import { Component, OnInit, Renderer2 } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { DashboardService } from '../../dashboard.service';
import {MatCardModule} from '@angular/material/card';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);
@Component({
  selector: 'app-sales-metrics',
  standalone: true,
  imports: [BaseChartDirective, CommonModule, MatCardModule],
  templateUrl: './sales-metrics.component.html',
  styleUrl: './sales-metrics.component.scss'
})

export class SalesMetricsComponent implements OnInit {
  salesChartData: any[] = [];
  salesChartLabels: string[] = [];
  chartOptions = {};
  public isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2,private dashboardService: DashboardService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.initializeChartData();
  }

  initializeChartData() {
    // Mock data for sales
    this.dashboardService.getSalesData().subscribe((data) => {
      this.salesChartLabels = data.map((item) => item.month);
      this.salesChartData = [
        {
          data: data.map((item) => item.total),
          label: 'Sales ($)',
          backgroundColor: '#42A5F5',
        },
      ];

      this.chartOptions = {
        responsive: true,
        plugins: {
          legend: { display: true, position: 'top' },
        },
        scales: {
          x: { beginAtZero: true },
          y: { beginAtZero: true },
        },
      };
    });
  }
}