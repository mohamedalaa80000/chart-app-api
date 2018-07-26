import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Chart1Component } from './component/chart1/chart1.component';
import { Chart2Component } from './component/chart2/chart2.component';
import { GetapisService } from './services/getapis.service';
import { HttpClientModule } from '@angular/common/http';
import { MorrisJsModule } from 'angular-morris-js';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Chart1Component,
    Chart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MorrisJsModule,
    FormsModule
  ],
  providers:
   [GetapisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
