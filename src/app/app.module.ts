import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AuthenticateService } from './services/authentication.service';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Stripe } from '@ionic-native/stripe/ngx';
import { HttpClientModule } from '@angular/common/http';

import * as firebase from 'firebase';
import { DataService } from './data.service';

firebase.initializeApp(environment.firebase);

const firebaseConfig = {
  apiKey: 'AIzaSyA_c3AsUUPMq1hqDj47J-DVdhUHFw550GM',
  authDomain: 'ionic-4-firebase-crud-de-55a43.firebaseapp.com',
  databaseURL: 'https://ionic-4-firebase-crud-de-55a43.firebaseio.com',
  projectId: 'ionic-4-firebase-crud-de-55a43',
  storageBucket: 'ionic-4-firebase-crud-de-55a43.appspot.com',
  messagingSenderId: '677083149213',
  appId: '1:677083149213:web:cbbfd6d7d1b6df42187574',
  measurementId: 'G-P10TPRRX6J'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule, AngularFireAuthModule, HttpClientModule, ReactiveFormsModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule, AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    AuthenticateService,
    DataService,
    InAppBrowser,
    Stripe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
