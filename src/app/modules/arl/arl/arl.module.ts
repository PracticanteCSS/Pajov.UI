import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { ArlRoutingModule } from './arl-routing.module';
import { CrearArlComponent } from './components/crear-arl/crear-arl.component';


@NgModule({
  declarations: [
    CrearArlComponent
  ],
  imports: [
    CommonModule,
    ArlRoutingModule,
    DialogModule,
    
  ]
})
export class ArlModule { }
