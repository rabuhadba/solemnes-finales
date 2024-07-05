import { Routes } from '@angular/router';
import { AppFidelizacionprospectogtComponent } from './app-fidelizacionprospectogt/app-fidelizacionprospectogt.component';
import { AppFidelizacionprospectoComponent } from './app-fidelizacionprospecto/app-fidelizacionprospecto.component';

export const FidelizacionprospectogtRoutes: Routes = [
  {
    path: '',
    component: AppFidelizacionprospectogtComponent,
  },
  {
    path: 'people',
    component: AppFidelizacionprospectoComponent,
  },
];
