
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  templateUrl: './weather-display.component.html',
  imports: [CommonModule, FlexLayoutModule, FormsModule],
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit {
  weatherData: any;
  forecastData: any[]=[];
  city: string = 'Johannesburg';

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.getForecastData(this.city);
    setInterval(() => {
      this.getWeatherData(this.city);
      this.getForecastData(this.city);
    }, 300000); // 5 minutes
  }

  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.weatherData = data;
    });
  }

  getForecastData(city: string): void {
    this.weatherService.getForecastData(city).subscribe(data => {
      this.forecastData = data.list.filter((forecast: any, index: number) => index % 8 === 0);
      this.forecastData.forEach(forecast => console.log('Forecast Item:', forecast));
    });
  }
  

  selectDay(date: string): void {
    if (date) {
      this.router.navigate(['/forecast', date]);
    } else {
    }
  }

  onSubmit(): void {
    if (this.city.trim() !== '') {
      this.getWeatherData(this.city);
      this.getForecastData(this.city);
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
      case 'shower rain':
      case 'rain':
      case 'thunderstorm':
        return 'assets/rainy.png';
      case 'snow':
        return 'assets/snowy.png';
      default:
        return 'assets/default.png';
    }
  }
}
