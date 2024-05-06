import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';


import { SharedModule } from '../../shared/shared.module';

import { ListarCajaCompensacionComponent } from './listarcajacompensacion/listarcajacompensacion.component';
import { CrearCajaCompensacionComponent } from './crearcajacompensacion/crearcajacompensacion.component';
import { CajaCompensacionRoutingModule } from './cajacompensacion-routing.module';


@NgModule({
  declarations: [
    CrearCajaCompensacionComponent,
    ListarCajaCompensacionComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    SharedModule,
    CajaCompensacionRoutingModule
    
  ]
})
export class CajaCompensacionModule { }