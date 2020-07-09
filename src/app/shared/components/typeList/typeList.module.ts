import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeListComponent } from './typeList.component';
import { FormsModule } from '@angular/forms'


// PrimeNg
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

//Extras
import { NgxPaginationModule } from 'ngx-pagination';
import { TypeListService } from '../../services/typeListService.service';
import { FilterPipe } from './pipes/filter.pipe';
import { NameValidationDirective } from './validations/name-validation.directive';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free




@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    SweetAlert2Module,
    FormsModule,
    CommonModule,
    MessagesModule,
    ConfirmDialogModule,
    ToastModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    PanelModule,
    DropdownModule,
    NgxPaginationModule
  ],
  exports:[
    TypeListComponent
  ],
  declarations: [
    TypeListComponent,
    FilterPipe,
    NameValidationDirective
  ],
  providers:[
    TypeListService
  ]
})
export class TypeListModule { }
