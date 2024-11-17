import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-sales-metrics',
  standalone: true,
  imports: [NgxChartsModule, CommonModule, MatCardModule],
  templateUrl: './sales-metrics.component.html',
  styleUrl: './sales-metrics.component.scss'
})

export class SalesMetricsComponent implements OnInit {
  @Input() set data(values: any) {
    if(values) this.initializeChartData(values);
  }
  salesChartData: any[] = [];
  salesChartLabels: string[] = [];
  chartOptions = {};

  view: [number, number] = [700, 300];
  gradient: boolean = false;
  colorScheme = { domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] };
  public isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
  }

  initializeChartData(data:any[]) {
    this.salesChartData = data.map((item:any) =>({
      
        name: item.month,
        value: item.total,
      
    }));
      // this.salesChartLabels = data?.map((item:any) => item.month);
      // this.salesChartData = [
      //   {
      //     data: data?.map((item:any) => item.total),
      //     label: 'Sales ($)',
      //     backgroundColor: '#42A5F5',
      //   },
      // ];

      // this.chartOptions = {
      //   responsive: true,
      //   plugins: {
      //     legend: { display: true, position: 'top' },
      //   },
      //   scales: {
      //     x: { beginAtZero: true },
      //     y: { beginAtZero: true },
      //   },
      // };

  }
}