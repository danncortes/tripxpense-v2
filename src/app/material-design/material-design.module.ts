import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule} from '@angular/material';

let modules = [
  CommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  FlexLayoutModule,
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
