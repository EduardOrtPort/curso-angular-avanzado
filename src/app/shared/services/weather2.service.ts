import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
// import { Coord } from '@app/shared/interface/weather.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WeatherData } from '../interfaces/weather.interface';

@Injectable({providedIn: 'root'})
export class WeatherService{
  private readonly API_URL = environment.openWeather.Url;
  private readonly http = inject(HttpClient);

  public getWeatherByName(city: string):Observable<WeatherData>{
    const params = new HttpParams()
    .set('q',city)
    return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params});
  }

  // public getWeatherByCoords(coord: Coord):Observable<WeatherData>{
  //   const params = new HttpParams()
  //   .set('lat', coord.latitude)
  //   .set('lon', coord.longitude)
  //   return this.http.get<WeatherData>(`${this.API_URL}/weather`, {params});
  // }

}
