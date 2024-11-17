import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, Input, PLATFORM_ID, Renderer2 } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from '../../dashboard.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-customer-insights',
  standalone: true,
  imports: [NgxChartsModule, CommonModule, MatCardModule],
  templateUrl: './customer-insights.component.html',
  styleUrl: './customer-insights.component.scss'
})
export class CustomerInsightsComponent {
  @Input() set data(values: any) {
    if(values) this.initializeChartData(values);
  }

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
   
  }

  initializeChartData(data: any) {
      this.customerCounts =data?.map((item:any) => (
        {name: item.region,
          value:item.count}));
      // this.customerRegions = data?.map((item:any) => item.region);
      // this.pieChartPlugins = [this.customerRegions]
      // this.pieChartOptions = {
      //   responsive: true,
      //   maintainAspectRatio: true,
      //     plugins: {
      //         labels: {
      //           render: 'percentage',
      //           fontColor: ['black', 'black', 'black','black'],
      //           precision: 2
      //         }
      //     },
      // };
  
}
}
