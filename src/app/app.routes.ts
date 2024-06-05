import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { DailyForecastComponent } from './components/daily-forecast/daily-forecast.component';

const routes: Routes = [
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: 'weather', component: WeatherDisplayComponent },
  { path: 'forecast/:date', component: DailyForecastComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




