import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialDesignModule} from './material-design/material-design.module';

import {AuthModule} from './auth/auth.module';
import {RoutesModule} from './routes/routes.module';

//Components
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { PaymethodListComponent } from './pay-method/paymethod-list/paymethod-list.component';
import { PaymethodItemComponent } from './pay-method/paymethod-item/paymethod-item.component';
import { PaymethodCreateComponent } from './pay-method/paymethod-create/paymethod-create.component';
import { PaymethodEditComponent } from './pay-method/paymethod-edit/paymethod-edit.component';

@NgModule({
  declarations: [
//Components
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    WelcomeComponent,
    MainComponent,
    TravelListComponent,
    PaymethodListComponent,
    PaymethodItemComponent,
    PaymethodCreateComponent,
    PaymethodEditComponent
  ],
  imports: [
//Modules
    AuthModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialDesignModule,
    RoutesModule,
    BrowserAnimationsModule
  ],
  entryComponents:[
    PaymethodCreateComponent,
    PaymethodEditComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
