import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule, MdInputModule } from '@angular/material';

import {MdProgressSpinnerModule, MdDatepickerModule, MdSnackBarModule, MdNativeDateModule, MatSelectModule } from '@angular/material';

const modules = [
  BrowserAnimationsModule,
  CommonModule,
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  FlexLayoutModule,
  MdCardModule,
  MdInputModule,
  MdProgressSpinnerModule,
  MdDatepickerModule,
  MdSnackBarModule,
  MdNativeDateModule,
  MatSelectModule
];

@NgModule({
  imports: [
    modules
  ],
  exports: [
    modules
  ],
  declarations: []
})
export class MaterialDesignModule { }
