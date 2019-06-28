import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MapComponent } from './components/map/map.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';

import { AgmCoreModule } from '@agm/core';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path:'register', component: RegisterComponent },
  { path:'login', component: LoginComponent },
  { path:'map', component: MapComponent, canActivate:[AuthGuard] },
  { path:'profile', component: ProfileComponent, canActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    JwtModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyADLjN9aL_ULlr66MKed64HbxR5bC7i-cw'
    })
  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
