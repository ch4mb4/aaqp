import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {DataTablesModule} from 'angular-datatables';

import { AddRequerimientoComponent } from './add-requerimiento/add-requerimiento.component';
import { RequerimientoListComponent } from './requerimiento-list/requerimiento-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRequerimientoComponent,
    RequerimientoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
