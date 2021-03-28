import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../service/films.service';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    CreateComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    FilmsService
  ]
})
export class PagesModule { }
