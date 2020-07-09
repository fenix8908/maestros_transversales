import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { ListService } from '../../services/list.service';
import { TypeListService } from '../../services/typeListService.service';
import {MultiSelectModule} from 'primeng/multiselect';
import { SelectDropDownModule } from 'ngx-select-dropdown'
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  imports: [
    MessagesModule,
    ToastModule,
    SelectDropDownModule,
    MultiSelectModule,
    FormsModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
 
  ],
  exports:[
    ListComponent
  ],
  declarations: [
    ListComponent
  ],
  providers:[
    ListService,
    TypeListService
  ]
})
export class ListModule { }
