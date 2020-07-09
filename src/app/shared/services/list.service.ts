import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MasterTypeList, MasterList, MasterListParent } from '../models/master.model';
import { Observable } from 'rxjs';
import {URL_BASE_API_MASTER_TYPELIST_W,URL_BASE_API_MASTER_LIST_W} from '../../../constants';

@Injectable()
export class ListService{

    constructor(private http:HttpClient,){}

    public getParentList(idTypeList:string):Observable<MasterListParent[]>{
        return this.http.get<MasterListParent[]>(URL_BASE_API_MASTER_LIST_W + idTypeList + "/" +"TRANS");

    }

    public createList(list:MasterList):Observable<any>{
        return this.http.post<any>(URL_BASE_API_MASTER_LIST_W,list);
    }


}