
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";

import {AuthGuard} from "./auth.guard";


const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
