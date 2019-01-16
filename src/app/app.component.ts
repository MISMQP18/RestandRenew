import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { ToastController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FcmService } from './fcm1.service';
import { ToastService } from './toast.service';

import { App } from 'ionic-angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private fcm: FcmService,
        private toastr: ToastService,
        private authenticationService: AuthenticationService,
        private router: Router,
        private toastController: ToastController
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.notificationSetup();

            this.authenticationService.authenticationState.subscribe(state => {
                if (state) {
                    this.router.navigateByUrl('/tabs/(home:home)');
                } else {
                    this.router.navigate(['login']);
                }
            });

        });
    }

    private async presentToast(message){
        const toast = await this.toastController.create({
            message,
            duration: 300
        });
        toast.present();
    }

    private notificationSetup(){
        this.fcm.getToken();
        this.fcm.onNotifications().subscribe(
            (msg) => {
                if (this.platform.is('ios')) {
                    this.presentToast(msg.aps.alert);
                } else {
                    this.presentToast(msg.body);
                }
            });
    }
}