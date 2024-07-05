import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

import { FidelizacionprospectogtRoutes } from './fidelizacionprospectogt.routing';
import { AppFidelizacionprospectogtComponent } from './app-fidelizacionprospectogt/app-fidelizacionprospectogt.component';
import { AppFidelizacionprospectoComponent } from './app-fidelizacionprospecto/app-fidelizacionprospecto.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FidelizacionprospectogtRoutes),
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module,
  ],
  declarations: [
    AppFidelizacionprospectogtComponent,
    AppFidelizacionprospectoComponent
  ],
})
export class FidelizacionprospectogtModule {}
