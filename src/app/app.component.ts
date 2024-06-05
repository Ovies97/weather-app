import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CitySelectorComponent, CommonModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'weather-app';
}


