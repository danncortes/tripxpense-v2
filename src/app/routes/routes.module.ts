import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Components
import { WelcomeComponent } from '../welcome/welcome.component';
import { MainComponent } from '../main/main.component';

import { ProfileComponent } from '../profile/profile.component';

//Dashboard
import { DashboardComponent } from '../dashboard/dashboard.component';

//travel
import { TravelListComponent } from '../travel/travel-list/travel-list.component';
//Pay Methods
import { PaymethodListComponent } from '../pay-method/paymethod-list/paymethod-list.component';
//Categories
import { CategoryListComponent } from '../category/category-list/category-list.component';

import { AuthGuardService } from '../services/auth-guard/auth-guard.service';
import { AdminGuardService } from '../services/admin-guard/admin-guard.service';

const appRoutes: Routes = [
  //Dashboard
  { path: 'welcome', component:WelcomeComponent},
  //{ path: 'auth', component:MainComponent, children:[
  { path: 'auth', component:MainComponent, canActivate: [AuthGuardService], children:[
      { path: '', redirectTo: 'dashboard', pathMatch:'full'},
      { path: 'dashboard', component:DashboardComponent},
      { path: 'travels', component:TravelListComponent},
      { path: 'paymethods', component:PaymethodListComponent, canActivate: [AdminGuardService]},
      { path: 'categories', component:CategoryListComponent},
      { path: 'profile', component:ProfileComponent}
    ]},
  { path: '**', redirectTo: 'welcome', pathMatch:'full'},
  { path: '', redirectTo: 'welcome', pathMatch:'full'}
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    //AuthGuard
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutesModule{ }
