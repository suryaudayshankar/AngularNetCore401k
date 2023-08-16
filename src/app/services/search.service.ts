import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:5095/api/search';
  private httpsUrl = 'http://localhost:7095/api/search';

  constructor(private http: HttpClient) { }


  getStates(country: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/states/${country}`);
  }

  getCounties(state: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/counties/${state}`);
  }

  getResults(criteria: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, criteria);
  }
}
