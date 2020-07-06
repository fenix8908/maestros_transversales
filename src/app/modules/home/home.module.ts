import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home.component';
import { HomemModule } from '../../shared/components/home/home.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
    HomemModule
  ],
  declarations: [ 
    HomeComponent,
  ],
  exports: [
    HomeComponent
  ],
  entryComponents: [
    HomeComponent
  ],
  providers: [
    
  ]
})

export class HomeModule { 
  constructor() {
    
  }
}