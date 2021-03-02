import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FilmsService } from '../service/films.service';



@NgModule({
  declarations: [
    ListComponent
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
