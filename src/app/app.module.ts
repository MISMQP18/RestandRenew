import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { FcmService } from "./fcm1.service";
import { ToastService } from './toast.service';


/*const config = {
    apiKey: "AIzaSyC-_TjGZ3Sl_JYWSg3uag4IyiQHhIH8Yds",
    authDomain: "rest-and-renew.firebaseapp.com",
    databaseURL: "https://rest-and-renew.firebaseio.com",
    projectId: "rest-and-renew",
    storageBucket: "rest-and-renew.appspot.com",
    messagingSenderId: "888747261921"
};*/

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(environment.firebase),
      AngularFirestoreModule],

  providers: [
    StatusBar,
    SplashScreen,
      Firebase,
      FcmService,
      ToastService,
      ToastController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})

export class AppModule {}

