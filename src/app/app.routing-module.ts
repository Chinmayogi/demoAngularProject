import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
 import {FixedcontentComponent} from '../app/modules/allmodules/fixedcontent/fixedcontent/fixedcontent.component';
 import {AppguardGuard} from '../app/modules/guards/appguard.guard';
 import {LoginComponent} from '../app/modules/login/login.component';
 export const route: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
   
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Login Page'
      }
    },
    {
      path: '',
      component: FixedcontentComponent,
      canActivate: [AppguardGuard],
      data: {
        title: ''
      },
      children: [
        {
          path: 'dashboard',
          loadChildren: () => import('./modules/allmodules/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
       
      ]
    },
  
    //{ path: '**', component: P404Component }
  ];

@NgModule({
    imports:[RouterModule.forRoot(route)],
    exports:[RouterModule]
})
export class ApproutingModue{}