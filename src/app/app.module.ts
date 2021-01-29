import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostComponentComponent } from './cost-component/cost-component.component';
import { ServiceBreakdownComponentComponent } from './service-breakdown-component/service-breakdown-component.component';
import { ReservationComponentComponent } from './instance/reservation-component.component';
import {HttpClientModule} from "@angular/common/http";
import { ChartsModule } from 'ng2-charts';

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "./auth.guard";
import { AccountComponent } from './account/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    CostComponentComponent,
    ServiceBreakdownComponentComponent,
    ReservationComponentComponent,
    DoughnutChartComponent,
    BarChartComponent,
    AuthComponent,
    DashboardComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
