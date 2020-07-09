import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MasterTypeList, MasterList } from '../models/master.model';
import { Observable } from 'rxjs';
import {URL_BASE_API_MASTER_TYPELIST_W,URL_BASE_API_MASTER_LIST_W} from '../../../constants';

@Injectable()
export class ListService{

    constructor(private http:HttpClient,){}

    public getAllmaster():Observable<MasterTypeList[]>{
        return this.http.get<MasterTypeList[]>(URL_BASE_API_MASTER_TYPELIST_W);
    }

    public getParentList(idTypeList:string):Observable<MasterList[]>{
        return this.http.get<MasterList[]>(URL_BASE_API_MASTER_LIST_W + idTypeList + "/" +"TRANS");
    }


}