import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { AuthGuard } from '../auth.guard';

//Components
import { WelcomeComponent } from '../welcome/welcome.component';
import { MainComponent } from '../main/main.component';

//Dashboard
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RegisterComponent } from '../register/register.component';


const appRoutes: Routes = [
  //Dashboard
  { path: 'welcome', component:WelcomeComponent},
  { path: '', component:MainComponent, canActivate: [ AuthGuard ], children:[
    { path: 'dashboard', component:DashboardComponent},
    { path: 'register', component:RegisterComponent}
  ]},
  { path: '**', redirectTo: '/welcome', pathMatch:'full'}
  
]

export const appRoutingProviders: any[] = [
  AuthGuard
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class RoutesModule{ }
