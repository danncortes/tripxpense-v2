import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design/material-design.module';
import {ChartsModule} from 'ng2-charts';

import {RoutesModule} from './routes/routes.module';

//Components
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { PaymethodListComponent } from './pay-method/paymethod-list/paymethod-list.component';
import { PaymethodItemComponent } from './pay-method/paymethod-item/paymethod-item.component';
import { PaymethodCreateComponent } from './pay-method/paymethod-create/paymethod-create.component';
import { PaymethodEditComponent } from './pay-method/paymethod-edit/paymethod-edit.component';
import { ToastComponent } from './toast/toast.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryItemComponent } from './category/category-item/category-item.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './services/auth-service/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AdminGuardService } from './services/admin-guard/admin-guard.service';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { TravelItemComponent } from './travel/travel-item/travel-item.component';
import { TravelCreateComponent } from './travel/travel-create/travel-create.component';
import { TravelDetailComponent } from './travel/travel-detail/travel-detail.component';

@NgModule({
  declarations: [
//Components
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    WelcomeComponent,
    MainComponent,
    PaymethodListComponent,
    PaymethodItemComponent,
    PaymethodCreateComponent,
    PaymethodEditComponent,
    ToastComponent,
    ConfirmDialogComponent,
    TravelListComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProfileComponent,
    CategoryCreateComponent,
    TravelItemComponent,
    TravelCreateComponent,
    TravelDetailComponent
  ],
  imports: [
//Modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialDesignModule,
    RoutesModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
  entryComponents:[
    PaymethodCreateComponent,
    CategoryCreateComponent,
    TravelCreateComponent,
    PaymethodEditComponent,
    ToastComponent,
    ConfirmDialogComponent
  ],
  providers: [AuthService, AuthGuardService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
