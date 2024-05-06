import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCajaCompensacionComponent } from './listarcajacompensacion/listarcajacompensacion.component';

const routes: Routes = [
  {
    path:'',
    component:ListarCajaCompensacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CajaCompensacionRoutingModule { }