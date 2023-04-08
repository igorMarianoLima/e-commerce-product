import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmountInputComponent } from './amount-input.component';



@NgModule({
  declarations: [
    AmountInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AmountInputComponent
  ]
})
export class AmountInputModule { }
