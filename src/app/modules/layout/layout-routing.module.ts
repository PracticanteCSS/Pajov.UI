import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SharedModule } from 'primeng/api';

const routes: Routes = [
{
  path:'',
  component: LayoutComponent,
  children: [
    {
      path:'',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      loadChildren: () =>
        import('../home/home.module').then((m) => m.HomeModule),
    },
    {
      path: 'arl',
      loadChildren: () =>
        import('../arl/arl/arl.module').then((m) => m.ArlModule),
    },
  ]

}
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
