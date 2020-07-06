import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';
import { CryptoModule } from 'ps.crypto';

import { HomeComponent } from './home.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CryptoModule 
    ],    
    providers: [
        
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent
    ],
})

export class HomemModule {}