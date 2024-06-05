import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  forecastData: any;
  date!: string; // Definite assignment assertion

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.date = this.route.snapshot.paramMap.get('date')!;
    if (this.date) {
      this.getForecastData();
    } else {
      console.error('Date parameter is missing');
    }
  }

  getForecastData(): void {
    this.weatherService.getForecastData(this.date.split(' ')[0]).subscribe(data => {
      this.forecastData = data.list.filter((forecast: any) =>
        forecast.dt_txt.startsWith(this.date.split(' ')[0])
      );
    });
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


