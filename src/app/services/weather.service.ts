// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class WeatherService {
//   private apiUrl = 'http://localhost:5109/api/Weather';

//   constructor(private http: HttpClient) {}

//   getWeatherData(city: string): Observable<any> {
//    // const apiUrlWithParams = `${this.apiUrl}?city=${encodeURIComponent(city)}`;
//    // return this.http.get(apiUrlWithParams);
//    return this.http.get(`${this.apiUrl}/current?city=${city}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:5109/api/Weather';

  constructor(private http: HttpClient) {}

  getWeatherData(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/current?city=${city}`);
  }

  getForecastData(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/forecast?city=${city}`);
  }
}


