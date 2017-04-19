import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule, MdToolbarModule} from '@angular/material';

let modules = [
  CommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule
];

@NgModule({
  imports: [
    modules
  ],
  exports:[
    modules
  ],
  declarations: []
})
export class MaterialDesignModule { }
