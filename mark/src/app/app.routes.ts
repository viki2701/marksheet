import { Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'creatuser',
        component:CreateuserComponent,
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
      },
      {
        path:'**',
        redirectTo:'home',
        pathMatch:'full'
      }
];
