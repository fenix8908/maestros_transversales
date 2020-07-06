import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    NavbarModule,
    WavesModule,
    ButtonsModule
  ],
  exports:[
    ListComponent
  ],
  declarations: [ListComponent]
})
export class ListModule { }
