import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from "./app.routing";

import { AppComponent }  from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { NavbarComponent } from "./components/navbar.component";

import { AuthService } from "./services/auth.service";


@NgModule({
  imports:      [ BrowserModule,
                routing ],
  declarations: [ AppComponent,
                  HomeComponent,
                  ProfileComponent,
                  NavbarComponent ],
  providers:    [AuthService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
