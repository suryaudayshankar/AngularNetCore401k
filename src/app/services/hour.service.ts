import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Hour} from "src/models/hour";


@Injectable({
  providedIn: "root"
})
export class HourService {

  myAppUrl = "";
  
  constructor(private readonly httpClient: HttpClient, @Inject("BASE_URL") baseUrl: string ) {
    
    this.myAppUrl = baseUrl + "hour/";
  }


  getHours(employerAccount: string, workMonth: string) {

    
    //ByAccountWorkMonth
    //[queryParams]="{ date: lastAppointment?.startDate }"
    //const url = this.myAppUrl + "Get/";
    //let queryParams = new HttpParams();
    //queryParams = queryParams.append("employerAccount",employerAccount);
    //queryParams = queryParams.append("workMonth",workMonth.toString());
    ////return this.http.get<UserInformation>(url,{params:queryParams});

    //return this.httpClient.get<Hour[]>(url + {params:queryParams}).pipe(map(
    //  response => {
    //    return response;

    //  }));


   
    return this.httpClient.get<Hour[]>(this.myAppUrl + "Get/" + employerAccount + "/" + workMonth).pipe(map(
      response => {
      return response;

      }));
   
  }

  getHoursByReportId(reportId: number) {

   
    return this.httpClient.get<Hour[]>(this.myAppUrl + "Get/" + reportId).pipe(map(
      response => {
        return response;

      }));
   
  }



  getHourById(id: number) {
    return this.httpClient.get(this.myAppUrl + "Details/" + id)
      .pipe(map(
        response => {
          return response;
        }));
  }

  saveHour(hour: Hour) {
    return this.httpClient.post(this.myAppUrl + "Create", hour)
      .pipe(map(
        response => {
          return response;
        }));
  }

  updateHour(hour: Hour) {
    return this.httpClient.put(this.myAppUrl + "Edit", hour)
      .pipe(map(
        response => {
          return response;
        }));
  }

  deleteHour(id: number) {
    return this.httpClient.delete(this.myAppUrl + "Delete/" + id)
      .pipe(map(
        response => {
          return response;
        }));
  }
}


