import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-hourly-forecast',
  templateUrl: './hourly-forecast.component.html',
  styleUrls: ['./hourly-forecast.component.css']
})
export class HourlyForecastComponent implements OnInit {
  hourlyForecast: any[] = [];
  //remove the exclanation mark
  selectedDate!: string;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedDate = params['date'];
      this.getHourlyForecast(this.selectedDate);
    });
  }

  getHourlyForecast(date: string): void {
    // Fetch hourly forecast data from the API
  }
}
