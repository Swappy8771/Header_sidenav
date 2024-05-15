import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DataComponent } from './data/data.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { RememberComponent } from './remember/remember.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WeatherComponent,
    HeaderComponent,
    FooterComponent,
    DataComponent,
    MapComponent,
    ForgotComponent,
    SignupComponent,
    RememberComponent,
    SidenavComponent,
    ResetPasswordComponent,
    AlertComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    GoogleMapsModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
