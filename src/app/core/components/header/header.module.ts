import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';

import { CartModule } from 'src/app/shared/components/cart/cart.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CartModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
