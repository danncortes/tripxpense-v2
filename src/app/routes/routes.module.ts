import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Components
import { WelcomeComponent } from '../welcome/welcome.component';
import { MainComponent } from '../main/main.component';

//Dashboard
import { DashboardComponent } from '../dashboard/dashboard.component';

//travel
import { TravelListComponent } from '../travel-list/travel-list.component';
import { PaymethodListComponent } from '../pay-method/paymethod-list/paymethod-list.component';

import { AuthGuard } from '../auth.guard';

const appRoutes: Routes = [
  //Dashboard
  { path: 'welcome', component:WelcomeComponent},
  { path: 'auth', component:MainComponent, canActivate: [AuthGuard], children:[
      { path: '', redirectTo: 'dashboard', pathMatch:'full'},
      { path: 'dashboard', component:DashboardComponent},
      { path: 'travels', component:TravelListComponent},
      { path: 'paymethods', component:PaymethodListComponent}
    ]},
  { path: '**', redirectTo: '/welcome', pathMatch:'full'},
  { path: '', redirectTo: '/welcome', pathMatch:'full'}
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers:[
    AuthGuard
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutesModule{ }
