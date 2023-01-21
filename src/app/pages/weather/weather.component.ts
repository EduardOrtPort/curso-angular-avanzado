import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { WeatherData } from 'src/app/shared/interfaces/weather.interface';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherComponent implements OnInit, OnChanges {

  public weather$!: Observable<WeatherData>;
  public BASE_URL = 'http://openweathermap.org/img/wn/';
  @Input() public weather!: WeatherData;

  toPictureImage = '';
  currentTime = new Date();

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes?.['weather']){
      this.getTime(this.weather.timezone)
    }
  }

  getTime(timezone: number){
    let d = new Date()
    let localTime = d.getTime()
    let localOffset = d.getTimezoneOffset() * 60000
    let utc = localTime + localOffset
    let atlanta = utc + (1000 * timezone)
    this.currentTime = new Date(atlanta)

    if(this.currentTime.getHours() > 5  && this.currentTime.getHours() <= 12){
      this.toPictureImage = 'isMorning'
    }else if(this.currentTime.getHours() > 12 && this.currentTime.getHours() <= 18){
      this.toPictureImage = 'isAfternoon' 
    }else if(this.currentTime.getHours() > 18 && this.currentTime.getHours() <= 22){
      this.toPictureImage = 'isEvening' 
    }else if(this.currentTime.getHours() > 22 || this.currentTime.getHours() <= 5){
      this.toPictureImage = 'isNight' 
    }
  }

}
