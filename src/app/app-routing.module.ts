import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WeatherComponent } from './weather/weather.component';
import { DataComponent } from './data/data.component';
import { MapComponent } from './map/map.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';
import { RememberComponent } from './remember/remember.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AlertComponent } from './alert/alert.component';


const routes: Routes = [
  { path: '', component: LoginComponent,pathMatch:'full' },
  {path:'login',component:LoginComponent},
  { path: 'weather', component: WeatherComponent },
  {path:'data',component:DataComponent},
  {path:'map',component:MapComponent},
  {path:'forgot',component:ForgotComponent},

  {
    path : 'resetPassword',
    component : ResetPasswordComponent
  },
  
  {path:'remeb',component:RememberComponent},
  {path:'signup',component:SignupComponent},
  {path:'alert', component:AlertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }