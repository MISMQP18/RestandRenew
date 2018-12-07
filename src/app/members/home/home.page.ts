import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
//import { SettingsPage } from './settings.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    currentDate;
    formattedDate;

    constructor(private router: Router, public navCtrl: NavController, private authService: AuthenticationService){
        this.currentDate = new Date();
        this.getFormattedDate()
    }

    openEditHabitPage(){
        this.router.navigate(["/edit"]);
    }

    btnClicked(){
        alert('Habit Completed');
    }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
    }

    getFormattedDate(){
        var dateObj = new Date()

        var year = dateObj.getFullYear().toString()
        var month = dateObj.getMonth().toString()
        var date = dateObj.getDate().toString()

        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        this.formattedDate = year +" "+ monthArray[month] +" "+ date;
    }


    /*btnClicked2(){
        alert('This would bring you to the habit settings page!');
    }*/

}

/* ADD TO BOTTOM OF HOME PAGE HTML
  <ion-calendar #calendar></ion-calendar>
  <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
  */