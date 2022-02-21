import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowsePgComponent } from './components/browse-pg/browse-pg.component';
import { CreatePollComponent } from './components/create-poll/create-poll.component';
import { CreditsComponent } from './components/credits/credits.component';
import { LandingComponent } from './components/landing/landing.component';
import { VPollResultComponent } from './components/v-poll-result/v-poll-result.component';
import { VPollComponent } from './components/v-poll/v-poll.component';

const routes: Routes = [
  {path:"",component:LandingComponent},
  {path:"create",component: CreatePollComponent},
  {path:"poll/:id", component: VPollComponent},
  {path:"poll/:id/r", component:VPollResultComponent},
  {path:"credit", component:CreditsComponent},
  {path:"browse", component: BrowsePgComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
