import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
    ],
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'greeting',
        loadChildren: () =>
          import('./pages/greeting/greeting.module').then((m) => m.GreetingModule),
      },
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'fidelizaciongt',
        loadChildren: () =>
          import('./pages/fidelizaciongt/fidelizaciongt.module').then((m) => m.FidelizaciongtModule),
      },
    ]
  },
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: 'fidelizacionprospectogt',
        loadChildren: () =>
          import('./pages/fidelizacionprospectogt/fidelizacionprospectogt.module').then((m) => m.FidelizacionprospectogtModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
