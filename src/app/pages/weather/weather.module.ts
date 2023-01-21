// import { NgModule } from '@angular/core';
import { WeatherInterceptor } from './interceptor/weather.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule
  ],
  declarations: [WeatherComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: WeatherInterceptor, multi: true}
  ], 
  exports: [WeatherComponent]
})
export class WeatherModule {}
