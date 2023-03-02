import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoReadComponent } from './views/components/tecnico/tecnico-read/tecnico-read.component';
import { TecnicoUpdateComponent } from './views/components/tecnico/tecnico-update/tecnico-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },{
    path: 'tecnicos',
    component: TecnicoReadComponent
  },{
    path: 'tecnicos/create',
    component: TecnicoCreateComponent
  },{
    path: 'tecnicos/update/:id',
    component: TecnicoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
