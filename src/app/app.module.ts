import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DashboardComponent // Add HttpClientModule here
  ],

  providers: [provideHttpClient()], 
  bootstrap: [AppComponent],
})
export class AppModule {}
