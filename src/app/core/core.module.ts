import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './components/header/header.module';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
