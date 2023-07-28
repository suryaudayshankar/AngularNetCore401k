//import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ]
})

export class AppComponent {
  public forecasts?: IWeatherForecast[];
   loadedFeature = 'home';

  onNavigate(feature: string) {
   this.loadedFeature = feature;
    
  }

 



  //constructor(http: HttpClient) {
  //  http.get<WeatherForecast[]>('/weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}



  title = 'AngularNetCore401k';
}
export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}
interface IWeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
