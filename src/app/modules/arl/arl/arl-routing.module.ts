import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearArlComponent } from './components/crear-arl/crear-arl.component';
import { DialogModule } from 'primeng/dialog';

const routes: Routes = [
{
  path:'',
  component: CrearArlComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes),
  DialogModule],
  exports: [RouterModule]
  
})
export class ArlRoutingModule { }
