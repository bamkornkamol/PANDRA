import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { NavBarComponent } from './view/nav-bar/nav-bar.component';
import { HomeComponent } from './view/home/home.component';
import { DayhalloweenComponent } from './view/dayhalloween/dayhalloween.component';
import { DayallComponent } from './view/dayall/dayall.component';
import { DaychristmasComponent } from './view/daychristmas/daychristmas.component';
import { BraceletallComponent } from './view/braceletall/braceletall.component';
import { BraceletdisComponent } from './view/braceletdis/braceletdis.component';
import { BraceletmarComponent } from './view/braceletmar/braceletmar.component';
import { RingallComponent } from './view/ringall/ringall.component';
import { RingdisComponent } from './view/ringdis/ringdis.component';
import { RingmarComponent } from './view/ringmar/ringmar.component';
import { NeckallComponent } from './view/neckall/neckall.component';
import { NeckdisComponent } from './view/neckdis/neckdis.component';
import { NeckmarComponent } from './view/neckmar/neckmar.component';
import { EarallComponent } from './view/earall/earall.component';
import { EardisComponent } from './view/eardis/eardis.component';
import { EarmarComponent } from './view/earmar/earmar.component';
import { SigninComponent } from './view/signin/signin.component';
import { SignupComponent } from './view/signup/signup.component';
import { HistoryComponent } from './view/history/history.component';
import { FooterComponent } from './view/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    DayhalloweenComponent,
    DayallComponent,
    DaychristmasComponent,
    BraceletallComponent,
    BraceletdisComponent,
    BraceletmarComponent,
    RingallComponent,
    RingdisComponent,
    RingmarComponent,
    NeckallComponent,
    NeckdisComponent,
    NeckmarComponent,
    EarallComponent,
    EardisComponent,
    EarmarComponent,
    SigninComponent,
    SignupComponent,
    HistoryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
