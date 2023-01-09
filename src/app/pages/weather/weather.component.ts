import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/shared/interfaces/weather.interface';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor(private readonly activateRoute: ActivatedRoute){}

  public weather!: WeatherData;
  public BaseUrl = 'http://openweathermap.org/img/wn/';

  ngOnInit() {
    this.activateRoute.data.subscribe(({ weatherData }) => {
      console.log(weatherData.weather[0].main);
      this.weather = weatherData;
    });
  }
}
