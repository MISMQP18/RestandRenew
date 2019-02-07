import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FcmService } from './services/fcm1.service';
import { ToastService } from './services/toast.service';
import { Habit, HabitService } from './services/habit.service';
import { Journal, JournalService } from './services/journal.service';
import { IdService } from './services/id.service';

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
        private toastController: ToastController,
        private habitService: HabitService,
        private journalService: JournalService,
        public globalID: IdService
    ) {
        this.initializeApp();
    }

    public habits: Habit[];
    public journals: Journal[];
    public userID = "'" + this.globalID.userID + "'";

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

        this.habitService.getHabits(this.userID).subscribe(res => {
            this.habits = res;
        });

        this.journalService.getJournals(this.userID).subscribe(res => {
            this.journals = res;
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