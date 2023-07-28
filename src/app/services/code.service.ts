import { Injectable, Inject  } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
//import { RasCode} from "src/models/RasCode";
import {BacInterface } from '../shared/shared-interfaces'

@Injectable({
  providedIn: 'root'
})
export class CodeService {
  myAppUrl = "";
  constructor(private readonly httpClient: HttpClient, @Inject("BASE_URL") baseUrl: string) {

    this.myAppUrl = baseUrl + "code/";
  }
  
  getCodeList(codeType: string ) {
    
    return this.httpClient.get<BacInterface.ISelectRasItemCode[]>(this.myAppUrl  + "Get/" + codeType).pipe(map(
      response => {
        return response;

      }));
  }

 


}
