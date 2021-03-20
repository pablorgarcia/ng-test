import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from './components/layout/layout.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
