import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
/*import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC-_TjGZ3Sl_JYWSg3uag4IyiQHhIH8Yds",
    authDomain: "rest-and-renew.firebaseapp.com",
    databaseURL: "https://rest-and-renew.firebaseio.com",
    projectId: "rest-and-renew",
    storageBucket: "rest-and-renew.appspot.com",
    messagingSenderId: "888747261921"
};*/

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private authenticationService: AuthenticationService,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.authenticationService.authenticationState.subscribe(state => {
                if (state) {
                    this.router.navigateByUrl('/tabs/(home:home)');
                } else {
                    this.router.navigate(['login']);
                }
            });

        });
        //firebase.initializeApp(config);
    }
}