import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialDesignModule} from './material-design/material-design.module';
import {ChartsModule} from 'ng2-charts';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { OrderModule } from 'ngx-order-pipe';

import {RoutesModule} from './routes/routes.module';

//Components
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main/main.component';
import { PaymethodListComponent } from './pay-method/paymethod-list/paymethod-list.component';
import { PaymethodCreateComponent } from './pay-method/paymethod-create/paymethod-create.component';
import { PaymethodEditComponent } from './pay-method/paymethod-edit/paymethod-edit.component';
import { ToastComponent } from './toast/toast.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { TravelListComponent } from './travel/travel-list/travel-list.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthService } from './services/auth-service/auth.service';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';
import { AdminGuardService } from './services/admin-guard/admin-guard.service';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { TravelItemComponent } from './travel/travel-item/travel-item.component';
import { TravelCreateComponent } from './travel/travel-create/travel-create.component';
import { TravelDetailComponent } from './travel/travel-detail/travel-detail.component';
import { TravelEditComponent } from './travel/travel-edit/travel-edit.component';
import { TravelCardContentComponent } from './travel/travel-card-content/travel-card-content.component';
import { PaymethodStatsComponent } from './stats/paymethod-stats/paymethod-stats.component';
import { CategoryStatsComponent } from './stats/category-stats/category-stats.component';
import { TitleSectionComponent } from './ui/title-section/title-section.component';
import { CreateButtonComponent } from './ui/create-button/create-button.component';
import { TripMdCardComponent } from './ui/trip-md-card/trip-md-card.component';
import { DeleteButtonComponent } from './ui/buttons/delete-button/delete-button.component';
import { EditButtonComponent } from './ui/buttons/edit-button/edit-button.component';
import { OperationListComponent } from './operation/operation-list/operation-list.component';
import { OperationCreateComponent } from './operation/operation-create/operation-create.component';
import { ActionButtonComponent } from './ui/buttons/action-button/action-button.component';
import { ListItemTypeToggleComponent } from './ui/list-item-type-toggle/list-item-type-toggle.component';
import { ListItemSortToggleComponent } from './ui/list-item-sort-toggle/list-item-sort-toggle.component';
import { ListItemSortbyToggleComponent } from './ui/list-item-sortby-toggle/list-item-sortby-toggle.component';
import { OperationItemComponent } from './operation/operation-item/operation-item.component';
import { EmptyViewComponent } from './ui/empty-view/empty-view.component';


@NgModule({
  declarations: [
//Components
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    WelcomeComponent,
    MainComponent,
    PaymethodListComponent,
    PaymethodCreateComponent,
    PaymethodEditComponent,
    ToastComponent,
    ConfirmDialogComponent,
    TravelListComponent,
    CategoryListComponent,
    ProfileComponent,
    CategoryCreateComponent,
    TravelItemComponent,
    TravelCreateComponent,
    TravelDetailComponent,
    TravelEditComponent,
    TravelCardContentComponent,
    PaymethodStatsComponent,
    CategoryStatsComponent,
    TitleSectionComponent,
    CreateButtonComponent,
    TripMdCardComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    OperationListComponent,
    OperationCreateComponent,
    ActionButtonComponent,
    ListItemTypeToggleComponent,
    ListItemSortToggleComponent,
    ListItemSortbyToggleComponent,
    OperationItemComponent,
    EmptyViewComponent
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
    ChartsModule,
    FilterPipeModule,
    OrderModule
  ],
  entryComponents: [
    PaymethodCreateComponent,
    CategoryCreateComponent,
    TravelCreateComponent,
    PaymethodEditComponent,
    TravelEditComponent,
    ToastComponent,
    ConfirmDialogComponent,
    OperationCreateComponent
  ],
  providers: [AuthService, AuthGuardService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
