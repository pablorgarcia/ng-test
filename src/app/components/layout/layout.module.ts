import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout.component';
import { PagesModule } from '../../pages/pages.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PagesModule
  ],
})
export class LayoutModule { }
