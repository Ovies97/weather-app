// src/app/services/weather.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:5109/api/Weather';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(`${this.apiUrl}/current?city=${city}`);
  }

  getForecastData(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/forecast?city=${city}`);
  }
}



