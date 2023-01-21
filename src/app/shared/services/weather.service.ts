import { Injectable, inject } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class DataResolverService implements Resolve<unknown> {
  private readonly http = inject(HttpClient);
  
  resolve(): Observable<unknown> {
    const lat = '-11.9917';
    const lon = '-77.0706';

      return this.http.get(
        `${environment.openWeather.Url}/weather?lat=${lat}&lon=${lon}`
      );
  }
}
