import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../../pages/list/list.component';
import { DetailComponent } from '../../pages/detail/detail.component';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'lista',
        component: ListComponent
      },
      {
        path: 'detail/:id',
        component: DetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
