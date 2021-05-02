import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../service/films.service';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../components/shared/shared.module';
import { FormulariosComponent } from './formularios/formularios.component';
import { Formulario1Component } from './formularios/formulario1/formulario1.component';
import { Formulario2Component } from './formularios/formulario2/formulario2.component';
import { Formulario3Component } from './formularios/formulario3/formulario3.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    CreateComponent,
    FormulariosComponent,
    Formulario1Component,
    Formulario2Component,
    Formulario3Component,
    LoginComponent,
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    FilmsService
  ]
})
export class PagesModule {}
