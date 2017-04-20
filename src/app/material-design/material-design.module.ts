import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule} from '@angular/material';

let modules = [
  CommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  FlexLayoutModule
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
