import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './component/auth/signup/signup.component';
import { LoginComponent } from './component/auth/login/login.component';
import { HomeComponent } from './component/pages/home/home.component';
import { WanttoswitchComponent } from './component/pages/wanttoswitch/wanttoswitch.component';
import { SurveyComponent } from './component/pages/survey/survey.component';
import { OtpComponent } from './component/auth/otp/otp.component';
import { SignupotpComponent } from './component/auth/signupotp/signupotp.component';
import { CurrentOrgComponent } from './component/auth/current-org/current-org.component';
import { SMhomeComponent } from './component/pages/smhome/smhome.component';
import { SkillssetComponent } from './component/pages/skillsset/skillsset.component';
import { SwitchComponent } from './component/pages/switch/switch.component';
import { StartjourneyComponent } from './component/pages/startjourney/startjourney.component';
import { ScheduleinterviewComponent } from './component/pages/scheduleinterview/scheduleinterview.component';
import { InterviewerformComponent } from './component/pages/interviewerform/interviewerform.component';
import { ReferralformComponent } from './component/pages/referralform/referralform.component';

const routes: Routes = [
  { path: '', redirectTo: 'want-to-switch', pathMatch: 'full' },
  { path: 'want-to-switch', component: WanttoswitchComponent },
  { path: 'home', component: HomeComponent },
  { path: 'survey', component: SurveyComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'login', component: LoginComponent,
    // children: [
      //   {
        //     path: 'otp',
        //     component: OtpComponent,
        //   },
        //   { path: '', redirectTo: 'otp', pathMatch: 'full' }
        // ]
  },
  { path: 'otp', component: OtpComponent },
  { path: 'verify-otp', component: SignupotpComponent },
  { path: 'current-org', component: CurrentOrgComponent },
  { path: 'smhome', component: SMhomeComponent },
  { path: 'skills-set', component: SkillssetComponent },
  { path: 'switch', component: SwitchComponent },
  { path: 'start-journey', component: StartjourneyComponent },
  { path: 'schedule-interview', component: ScheduleinterviewComponent },
  { path: 'interview-request', component: InterviewerformComponent },
  { path: 'referral-request', component: ReferralformComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
