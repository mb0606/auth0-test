
import { RouterModule, Routes } from '@angular/router'
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";


const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'profile', component: ProfileComponent
  }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
