import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  } from '../../../constants';

@Injectable()
export class SharedService {
    
    constructor(private http: HttpClient) {   
        
    }
}