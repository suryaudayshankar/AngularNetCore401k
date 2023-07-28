import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './datasource';
import { L10n, setCulture } from '@syncfusion/ej2-base';


L10n.load({
  'en-US': {
    'pager': {
      'currentPageInfo': '',
      'totalItemsInfo': '{1} to {2} of {0}',
    }
  }
});



@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['../../../src/styles.css', './hours.component.css'],
  providers: [{ provide: 'BASE_URL', useFactory: getBaseUrl }]
})



export class HoursComponent implements OnInit {

  public forecasts?: IWeatherForecast[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<IWeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
  


  public data!: object[];
  public initialPage!: Object;

  ngOnInit(): void {
    this.data = data;
    this.initialPage = { pageSizes: true, pageCount: 14 };
  }

 

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



