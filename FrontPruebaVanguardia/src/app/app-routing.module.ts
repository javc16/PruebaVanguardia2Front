import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './Components/cliente/cliente.component';
import { CrearClienteComponent } from './Components/cliente/crear-cliente/crear-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
  },
  {
    path: 'crearcliente',
    component: CrearClienteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
