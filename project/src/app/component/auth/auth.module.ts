import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { OtpComponent } from './otp/otp.component';
import { SignupotpComponent } from './signupotp/signupotp.component';
import { CurrentOrgComponent } from './current-org/current-org.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    OtpComponent,
    SignupotpComponent,
    CurrentOrgComponent
  ],
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
  ],
  exports: [
    SignupComponent,
    LoginComponent,
    OtpComponent,
    SignupotpComponent,
    CurrentOrgComponent

  ]
})
export class AuthModule { }
