import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, {
    path: '',
    // canActivateChild: [SecurityGuard],
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      }, {
        path: 'dashboard',
        component: DashboardComponent
      },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
