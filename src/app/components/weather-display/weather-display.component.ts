
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  templateUrl: './weather-display.component.html',
  imports: [CommonModule, FlexLayoutModule, FormsModule],
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit, OnDestroy {
  weatherData: any;
  forecastData: any[] = [];
  city: string = 'Johannesburg';
  selectedDay: any = null;
  errorMessage: string = '';
  private citySubject: Subject<string> = new Subject();
  private subscriptions: Subscription = new Subscription();

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.subscriptions.add(
      this.citySubject.pipe(debounceTime(300)).subscribe(city => {
        this.getWeatherData(city);
        this.getForecastData(city);
      })
    );

    this.citySubject.next(this.city);

    setInterval(() => {
      this.citySubject.next(this.city);
    }, 300000); // 5 minutes
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Could not fetch weather data. Please check the city name.';
        this.weatherData = null;
      }
    });
  }

  getForecastData(city: string): void {
    this.weatherService.getForecastData(city).subscribe({
      next: (data) => {
        this.forecastData = data.list.filter((forecast: any, index: number) => index % 8 === 0).map((forecast: any) => ({
          ...forecast,
          dt: this.convertToDate(forecast.dt_txt)
        }));
        this.errorMessage = '';
      },
      error: (err) => {
        this.errorMessage = 'Could not fetch forecast data. Please check the city name.';
        this.forecastData = [];
      }
    });
  }

  convertToDate(dateString: string): Date {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date() : date;
  }

  selectDay(forecast: any): void {
    this.selectedDay = forecast;
  }

  clearSelection(): void {
    this.selectedDay = null;
  }

  onCityChange(city: string): void {
    this.citySubject.next(city);
  }

  onSubmit(): void {
    if (this.city.trim() !== '') {
      this.citySubject.next(this.city);
    }
  }

  getWeatherIcon(description: string): string {
    switch (description.toLowerCase()) {
      case 'clear sky':
        return 'assets/sunny.png';
      case 'few clouds':
      case 'scattered clouds':
      case 'broken clouds':
      case 'overcast clouds':
        return 'assets/cloudy.png';
      case 'light rain':  
      case 'shower rain':
      case 'rain':
      case 'thunderstorm':
        return 'assets/rainy.png';
      case 'snow':
      case 'light snow':
      case 'heavy6 snow':  
        return 'assets/snowy.png';
      default:
        return 'assets/default.png';
    }
  }
}