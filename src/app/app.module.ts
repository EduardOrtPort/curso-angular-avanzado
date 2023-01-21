import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherModule } from './pages/weather/weather.module';
import { SearchComponent } from './shared/components/search/search.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    WeatherModule,
    SearchComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
