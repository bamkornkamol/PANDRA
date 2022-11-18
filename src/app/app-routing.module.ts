import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BraceletallComponent } from './view/braceletall/braceletall.component';
import { BraceletdisComponent } from './view/braceletdis/braceletdis.component';
import { BraceletmarComponent } from './view/braceletmar/braceletmar.component';
import { DayallComponent } from './view/dayall/dayall.component';
import { DaychristmasComponent } from './view/daychristmas/daychristmas.component';
import { DayhalloweenComponent } from './view/dayhalloween/dayhalloween.component';
import { EarallComponent } from './view/earall/earall.component';
import { EardisComponent } from './view/eardis/eardis.component';
import { EarmarComponent } from './view/earmar/earmar.component';
import { HistoryComponent } from './view/history/history.component';
import { HomeComponent } from './view/home/home.component';
import { NeckallComponent } from './view/neckall/neckall.component';
import { NeckdisComponent } from './view/neckdis/neckdis.component';
import { NeckmarComponent } from './view/neckmar/neckmar.component';
import { RingallComponent } from './view/ringall/ringall.component';
import { RingdisComponent } from './view/ringdis/ringdis.component';
import { RingmarComponent } from './view/ringmar/ringmar.component';
import { SigninComponent } from './view/signin/signin.component';
import { SignupComponent } from './view/signup/signup.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'dayall',
    component: DayallComponent,
  },
  {
    path: 'dayhalloween',
    component: DayhalloweenComponent,
  },
  {
    path: 'daychristmas',
    component: DaychristmasComponent,
  },
  {
    path: 'braceletall',
    component: BraceletallComponent,
  },
  {
    path: 'braceletdis',
    component: BraceletdisComponent,
  },
  {
    path: 'braceletmar',
    component: BraceletmarComponent,
  },
  {
    path: 'ringall',
    component: RingallComponent,
  },
  {
    path: 'ringdis',
    component: RingdisComponent,
  },
  {
    path: 'ringmar',
    component: RingmarComponent,
  },
  {
    path: 'neckall',
    component: NeckallComponent,
  },
  {
    path: 'neckdis',
    component: NeckdisComponent,
  },
  {
    path: 'neckmar',
    component: NeckmarComponent,
  },
  {
    path: 'earall',
    component: EarallComponent,
  },
  {
    path: 'eardis',
    component: EardisComponent,
  },
  {
    path: 'earmar',
    component: EarmarComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
