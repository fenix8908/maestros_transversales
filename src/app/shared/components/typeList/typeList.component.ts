import { Component, OnInit } from '@angular/core';
import { TypeListServiceService } from '../../services/typeListService.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MasterTypeList } from '../../models/master.model';

@Component({
  selector: 'app-typeList',
  templateUrl: './typeList.component.html',
  styleUrls: ['./typeList.component.css'],
  providers:[
    MessageService,
    ConfirmationService
  ]
})
export class TypeListComponent implements OnInit {

  constructor(private typeListService: TypeListServiceService,
    private messageService: MessageService,
    private confirmation: ConfirmationService) {
  }


  public masterTypeListSelected: MasterTypeList = {
    id: '',
    name: '',
    description: ''
  };
  pageActual: number = 1;
  public filterTypeList = '';
  public masterTypeList: MasterTypeList[] = [];
  public listFiltersNotificationsHistory: any[];
  public filterNotificationsHistorySelected: string;


  ngOnInit(): void {

    this.loadTypeList();
  }

  loadTypeList(): void {
    this.typeListService.getAllMaster()
      .subscribe(result => { this.masterTypeList = result; console.log(this.masterTypeList) });
  }

  update(item: MasterTypeList) {
    this.masterTypeListSelected = item
  }

  createTypeList() {
    if (this.masterTypeListSelected.id == "") {
      this.typeListService.createMaster(this.masterTypeListSelected)
        .subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Bien hecho!!', detail: 'El tipo de lista ha sido creado' }),
            this.reset(),
            this.loadTypeList(),
            error => {
              this.messageService.add({ severity: 'error', summary: 'Uppss!!', detail: 'No se creo el tipo de lista' })
            }
        });
    } else {
      this.typeListService.updateTypeList(this.masterTypeListSelected)
        .subscribe(data => {
          this.messageService.add({ severity: 'success', summary: 'Bien hecho!!', detail: 'El tipo de lista ha sido actualizado' })
          this.reset(),
            this.loadTypeList(),
            error => {
              this.messageService.add({ severity: 'error', summary: 'Uppss!!', detail: 'No se actualizo el tipo de lista' })
            }
        });
    }
  }

  confirmDelete(id: string) {

    this.confirmation.confirm({
      message: '¿ Seguro deseas eliminar este registro?',
      header: 'Confirmar acción',
      accept: () => {
        this.typeListService.deleteTypeList(id)
          .subscribe(result => { console.log(result), this.loadTypeList() },
            error => console.error(error))
      }
    });
  }

  reset() {
    this.masterTypeListSelected = { id: '', name: '', description: '' };
  }


}
