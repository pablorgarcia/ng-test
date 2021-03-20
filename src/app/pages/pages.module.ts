import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../service/films.service';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    FilmsService
  ]
})
export class PagesModule { }
