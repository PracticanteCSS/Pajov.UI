import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarArlRoutingModule } from './listar-arl-routing.module';
import { ListarArlComponent } from './listar-arl.component';
import { CrearArlComponent } from '../crear-arl/crear-arl.component';
import { share } from 'rxjs';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    ListarArlComponent,
    CrearArlComponent,
  ],
  imports: [
    CommonModule,
    ListarArlRoutingModule,
    SharedModule
    
  ]
})
export class ListarArlModule { }
