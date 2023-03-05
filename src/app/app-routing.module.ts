import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './views/components/cliente/cliente-read/cliente-read.component';
import { HomeComponent } from './views/components/home/home.component';
import { TecnicoCreateComponent } from './views/components/tecnico/tecnico-create/tecnico-create.component';
import { TecnicoDeleteComponent } from './views/components/tecnico/tecnico-delete/tecnico-delete.component';
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
  },{
    path: 'tecnicos/delete/:id',
    component: TecnicoDeleteComponent
  },{
    path: 'clientes',
    component: ClienteReadComponent
  },{
    path: 'clientes/create',
    component: ClienteCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
