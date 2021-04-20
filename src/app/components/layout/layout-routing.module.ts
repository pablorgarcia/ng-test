import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from '../../pages/list/list.component';
import { DetailComponent } from '../../pages/detail/detail.component';
import { LayoutComponent } from './layout.component';
import { CreateComponent } from '../../pages/create/create.component';
import { FormulariosComponent } from '../../pages/formularios/formularios.component';

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
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'forms',
        component: FormulariosComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
