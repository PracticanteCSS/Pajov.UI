import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCajaCompensacionComponent } from './listarcajacompensacion.component';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ListarCajaCompensacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  
  exports: [RouterModule]
})
export class ListarCajaCompensacionRoutingModule { }