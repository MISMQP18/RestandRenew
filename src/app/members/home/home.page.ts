import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    currentDate;
    formattedDate;
    ionicNamedColor: string = 'light';
    ionicNamedColor2: string = 'light';
    ionicNamedColor3: string = 'light';
    date: any;
    daysInThisMonth: any;
    daysInLastMonth: any;
    daysInNextMonth: any;
    monthNames: string[];
    currentMonth: any;
    currentYear: any;
    //infos = [];
    //ref = firebase.database().ref('infos/');

    constructor(private router: Router, public navCtrl: NavController, private authService: AuthenticationService, private alertCtrl: AlertController) {
        this.currentDate = new Date();
        this.getFormattedDate();
        //this.ref.on('value', resp => {
        //  this.infos = [];
        //this.infos = snapshotToArray(resp);
        // });
    }

    openAddHabitPage() {
        this.router.navigate(['/add']);
    }

    openEditHabitPage() {
        this.router.navigate(['/edit']);
    }

    btnClicked() {
        alert('Habit Completed');
    }

    goPreviousWeek() {
        alert('This will show the previous week');
    }

    goNextWeek() {
        alert('This will show the next week');
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
    }

    getFormattedDate() {
        var dateObj = new Date()

        var year = dateObj.getFullYear().toString()
        var month = dateObj.getMonth().toString()
        var date = dateObj.getDate().toString()

        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        this.formattedDate = monthArray[month] + " " + date + ", " + year;
    }

    public toggleNamedColor(): void {
        if (this.ionicNamedColor === 'medium') {
            this.ionicNamedColor = 'light'
        } else {
            this.ionicNamedColor = 'medium'
        }
    }

    public toggleNamedColor2(): void {
        if (this.ionicNamedColor2 === 'medium') {
            this.ionicNamedColor2 = 'light'
        } else {
            this.ionicNamedColor2 = 'medium'
        }
    }

    public toggleNamedColor3(): void {
        if (this.ionicNamedColor3 === 'medium') {
            this.ionicNamedColor3 = 'light'
        } else {
            this.ionicNamedColor3 = 'medium'
        }
    }

}
/*
    addInfo() {
        this.router.navigate(['/add-info']);
    }

    edit(key) {
        this.router.navigate(['/edit/'+key]);
    }

    async delete(key) {
        const alert = await this.alertCtrl.create({
            header: 'Confirm!',
            message: 'Are you sure want to delete this info?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('cancel');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        firebase.database().ref('infos/'+key).remove();
                    }
                }
            ]
        });

        await alert.present();
    }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

*/
