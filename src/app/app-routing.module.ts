import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'tecnicos',
    component: TecnicoReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
