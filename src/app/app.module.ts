import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { CitySelectorComponent } from './components/city-selector/city-selector.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    CitySelectorComponent,
    HourlyForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

