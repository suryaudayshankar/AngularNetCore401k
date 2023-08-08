import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }


  getStates(country: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/states?country=${country}`);
  }

  getCounties(state: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/counties?state=${state}`);
  }
}
