import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
/*
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC-_TjGZ3Sl_JYWSg3uag4IyiQHhIH8Yds",
    authDomain: "rest-and-renew.firebaseapp.com",
    databaseURL: "https://rest-and-renew.firebaseio.com",
    projectId: "rest-and-renew",
    storageBucket: "rest-and-renew.appspot.com",
    messagingSenderId: "888747261921"
};
*/
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      IonicStorageModule.forRoot(),
      //HttpModule,
      //AngularFireDatabaseModule,
      //AngularFireModule.initializeApp(firebaseConfig),],
  providers: [
    StatusBar,
    SplashScreen,
    //  FirebaseProvider,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
