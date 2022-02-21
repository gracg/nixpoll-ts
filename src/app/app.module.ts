import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { LpPollPromptComponent } from './components/lp-poll-prompt/lp-poll-prompt.component';
import { ButtonComponent } from './components/button/button.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { CreatePromptComponent } from './components/create-prompt/create-prompt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VPollComponent } from './components/v-poll/v-poll.component';
import { PollCompComponent } from './components/poll-comp/poll-comp.component';
import { VPollResultComponent } from './components/v-poll-result/v-poll-result.component';
import { PollResultComponent } from './components/poll-result/poll-result.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreditsComponent } from './components/credits/credits.component';
import { BrowsePgComponent } from './components/browse-pg/browse-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopbarComponent,
    LpPollPromptComponent,
    ButtonComponent,
    CreatePollComponent,
    CreatePromptComponent,
    VPollComponent,
    PollCompComponent,
    VPollResultComponent,
    PollResultComponent,
    CreditsComponent,
    BrowsePgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
