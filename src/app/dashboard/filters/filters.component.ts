import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [MatSelectModule, CommonModule,MatDatepickerModule,FormsModule,MatNativeDateModule,MatFormFieldModule,MatInputModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {
  @Output() filterChanged = new EventEmitter<any>();

  // Local state for filter values
  selectedRegion: string = 'All';
  startDate: string | null = null;
  endDate: string | null = null;

  regions = ['All', 'North', 'South', 'East', 'West'];

  // Method to emit filter values
  applyFilters() {
    this.filterChanged.emit({
      region: this.selectedRegion,
      startDate: this.startDate,
      endDate: this.endDate
    });
  }
}
