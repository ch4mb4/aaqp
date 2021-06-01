import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequerimientoListComponent } from './requerimiento-list/requerimiento-list.component';
import { AddRequerimientoComponent } from './add-requerimiento/add-requerimiento.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: RequerimientoListComponent },
  { path: 'insert', component: AddRequerimientoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
