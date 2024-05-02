import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
// import { ArlRoutingModule } from './arl-routing.module';
import { CrearArlComponent } from './components/crear-arl/crear-arl.component';
import { ListarArlComponent } from './components/listar-arl/listar-arl.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CrearArlComponent,
    ListarArlComponent
  ],
  imports: [
    CommonModule,
    // ArlRoutingModule,
    DialogModule,
    SharedModule
    
  ]
})
export class ArlModule { }
