import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { CommonnModule } from '../common/commonn.module';
import { SectionsModule } from '../sections/sections.module';
import { SurveyComponent } from './survey/survey.component';
import { DefaultComponent } from './default/default.component';
import { WanttoswitchComponent } from './wanttoswitch/wanttoswitch.component';
import { StartmyjourneyComponent } from './startmyjourney/startmyjourney.component';
import { SMhomeComponent } from './smhome/smhome.component';
import { SMdefaulthomeComponent } from './smdefaulthome/smdefaulthome.component';
import { SkillssetComponent } from './skillsset/skillsset.component';
import { SwitchComponent } from './switch/switch.component';
import { StartjourneyComponent } from './startjourney/startjourney.component';
import { ScheduleinterviewComponent } from './scheduleinterview/scheduleinterview.component';
import { InterviewerformComponent } from './interviewerform/interviewerform.component';
import { ReferralformComponent } from './referralform/referralform.component';



@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    SurveyComponent,
    DefaultComponent,
    WanttoswitchComponent,
    StartmyjourneyComponent,
    SMhomeComponent,
    SMdefaulthomeComponent,
    SkillssetComponent,
    SwitchComponent,
    StartjourneyComponent,
    ScheduleinterviewComponent,
    InterviewerformComponent,
    ReferralformComponent
  ],
  imports: [
    CommonModule, RouterOutlet, RouterLink, RouterLinkActive,
    CommonnModule,
    SectionsModule
  ],
  exports: [
    HomeComponent,
    MainComponent,
    SurveyComponent,
    DefaultComponent,
    WanttoswitchComponent,
    StartmyjourneyComponent,
    SMhomeComponent,
    SMdefaulthomeComponent,
    SkillssetComponent,
    SwitchComponent,
    StartjourneyComponent,
    ScheduleinterviewComponent,
    InterviewerformComponent,
    ReferralformComponent
  ]
})
export class PagesModule { }
