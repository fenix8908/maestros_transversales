import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './components/lista.component';
import { ListaRoutingModule } from './lista-routing.module';
import { ListModule } from '../../shared/components/list/list.module';

@NgModule({
  imports: [
    CommonModule,
    ListaRoutingModule,
    ListModule
  ],
  declarations: [ListaComponent]
})
export class ListaModule { }
