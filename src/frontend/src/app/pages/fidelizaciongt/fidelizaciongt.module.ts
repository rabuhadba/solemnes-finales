import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { FidelizaciongtRoutes } from './fidelizaciongt.routing';
import { AppFidelizaciongtComponent } from './app-fidelizaciongt/app-fidelizaciongt.component';
import { AppFidelizacionComponent } from './app-fidelizacion/app-fidelizacion.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FidelizaciongtRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ],
  declarations: [
    AppFidelizaciongtComponent,
    AppFidelizacionComponent
  ],
})
export class FidelizaciongtModule {}
