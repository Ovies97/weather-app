import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-city-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule],
  templateUrl: './city-selector.component.html',
  styleUrls: ['./city-selector.component.css']
})
export class CitySelectorComponent {
  city: string = '';

  constructor(private weatherService: WeatherService) {}

  searchCity(): void {
    console.log(`Searching for city: ${this.city}`);
    this.weatherService.getWeatherData(this.city).subscribe(data => {
      console.log('Weather data:', data);
    });
  }
}
