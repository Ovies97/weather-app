import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { HourlyForecastComponent } from './components/hourly-forecast/hourly-forecast.component';

export const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherDisplayComponent },
  { path: 'forecast/:date', component: HourlyForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }