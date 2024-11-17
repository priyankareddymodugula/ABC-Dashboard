import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { DashboardService } from '../../dashboard.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-inventory-management',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatTableModule],
  templateUrl: './inventory-management.component.html',
  styleUrl: './inventory-management.component.scss'
})
export class InventoryManagementComponent {
  inventoryData: any = [];
  public isBrowser: boolean;
  constructor(@Inject(PLATFORM_ID) platformId: Object, private renderer2: Renderer2,private dashboardService: DashboardService) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngOnInit(): void {
    this.initializeChartData();
  }

  initializeChartData() {
    // Mock data for sales
    this.dashboardService.getInventoryData().subscribe((data) => {
      this.inventoryData = data
    });
  }
}
