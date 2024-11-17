import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from '../../dashboard.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { Chart, ArcElement, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale, Title, PieController, LineController } from 'chart.js';
Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);
@Component({
  selector: 'app-revenue-analysis',
  standalone: true,
  imports: [BaseChartDirective, CommonModule, MatCardModule],
  templateUrl: './revenue-analysis.component.html',
  styleUrl: './revenue-analysis.component.scss'
})
export class RevenueAnalysisComponent {
  revenueChartData: any = [];
  revenueChartLabels: string[] = [];
  lineChartOptions = {};
  public lineChartLegend = false;
  public isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2,private dashboardService: DashboardService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    this.initializeChartData();
  }

  initializeChartData() {
    // Mock data for sales
    this.dashboardService.getRevenueData().subscribe((data) => {
      this.revenueChartData =[{
        data: data.map(data => data.revenue),
        label: 'Daily Revenue',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }]
      this.revenueChartLabels = data.map((item) => item.date);
      this.lineChartOptions = {
        responsive: true,
      };
    });
  }
}
