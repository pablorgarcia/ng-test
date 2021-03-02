import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [{
  path: '',
  //loadChildren: () => import('./components/layout/layout.module').then(m => m.LayoutModule),
  loadChildren: './components/layout/layout.module#LayoutModule',
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}