import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule} from '@angular/material';

let modules = [
  CommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdCardModule,
  MdInputModule
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
