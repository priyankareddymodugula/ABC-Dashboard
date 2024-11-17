import { Component, Inject, Input, PLATFORM_ID, Renderer2 } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from '../../dashboard.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-revenue-analysis',
  standalone: true,
  imports: [ NgxChartsModule,CommonModule, MatCardModule],
  templateUrl: './revenue-analysis.component.html',
  styleUrl: './revenue-analysis.component.scss'
})
export class RevenueAnalysisComponent {

  @Input() set data(values: any) {
    if(values) this.initializeChartData(values);
  }
  revenueChartData: any = [];
  revenueChartLabels: string[] = [];
  lineChartOptions = {};
  public lineChartLegend = false;
  constructor() {

  }
  ngOnInit(): void {
  }

  initializeChartData(data:any[]) {
      this.revenueChartData = [{name: 'revenue',series :  data?.map((data:any) => ({name:data.date, value:data.revenue}))}]
       
  }
}
