import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherData } from './shared/interfaces/weather.interface';
import { DataResolverService } from './shared/services/weather.service';
import { WeatherService } from './shared/services/weather2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ejercicio1';
  public weather$!: Observable<WeatherData>;
  private readonly weatherResolve = inject(DataResolverService);
  private readonly weatherService = inject(WeatherService);

  public onSearch(city: string): void {
    this.weather$ = this.weatherService.getWeatherByName(city);
    console.log(this.weather$)
  }
}
