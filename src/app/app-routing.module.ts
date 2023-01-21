import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { DataResolverService } from './shared/services/weather.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch:'full'
  },
  {
    path: 'weather',
    loadChildren: ()=>   import('./pages/weather/weather.module').then((m) => m.WeatherModule),

  },
];

// component: WeatherComponent,
// resolve: {
//   weatherData: DataResolverService,
// },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
