import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from '../../dashboard.service';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Title, PieController , ChartOptions} from 'chart.js';
Chart.register(
  PieController,
  ArcElement,
  Tooltip,
  Legend
);
@Component({
  selector: 'app-customer-insights',
  standalone: true,
  imports: [BaseChartDirective, CommonModule, MatCardModule],
  templateUrl: './customer-insights.component.html',
  styleUrl: './customer-insights.component.scss'
})
export class CustomerInsightsComponent {
  customerCounts: any = [];
  customerRegions: string[] = [];
  public isBrowser: boolean;
  pieChartOptions = {};
  public pieChartLegend = true;
  public pieChartPlugins :any = [];
  constructor(@Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2,private dashboardService: DashboardService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    this.initializeChartData();
  }

  initializeChartData() {
    // Mock data for sales
    this.dashboardService.getCustomerInsights().subscribe((data) => {
      this.customerCounts =[{
        data: data.map(data => data.count),
        backgroundColor: [      
          'lightyellow',
          'red',
          'pink',
          'lightblue'
          ]
      }]
      this.customerRegions = data.map((item) => item.region);
      this.pieChartPlugins = [this.customerRegions]
      this.pieChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
          plugins: {
              labels: {
                render: 'percentage',
                fontColor: ['black', 'black', 'black','black'],
                precision: 2
              }
          },
      };
    });
  }
}
