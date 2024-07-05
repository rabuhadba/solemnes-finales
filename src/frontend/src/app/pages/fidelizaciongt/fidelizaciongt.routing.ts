import { Routes } from '@angular/router';


// pages
import { AppFidelizaciongtComponent } from './app-fidelizaciongt/app-fidelizaciongt.component';
import { AppFidelizacionComponent } from './app-fidelizacion/app-fidelizacion.component';

export const FidelizaciongtRoutes: Routes = [
  {
    path: '',
    component: AppFidelizaciongtComponent,
  },
  {
    path: 'people',
    component: AppFidelizacionComponent,
  },
];