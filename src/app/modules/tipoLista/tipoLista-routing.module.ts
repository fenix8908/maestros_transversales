import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { TipoListaComponent } from './components/tipoLista.component';



const routes: Routes = [
  {
    path: '',
    component: TipoListaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TipoListaRoutingModule { }