import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipoListaComponent } from './components/tipoLista.component';
import { TypeListModule } from '../../shared/components/typeList/typeList.module';
import { TipoListaRoutingModule } from './tipoLista-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TypeListModule,
    TipoListaRoutingModule
  ],
  declarations: [
    TipoListaComponent
  ],
  exports:[
    TipoListaComponent
  ],
  entryComponents:[
    TipoListaComponent
  ]
})
export class TipoListaModule { }
