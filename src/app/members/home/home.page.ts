import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

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

        this.formattedDate = monthArray[month] +" "+ date +", "+ year;
    }

    public toggleNamedColor(): void {
        if(this.ionicNamedColor === 'medium') {
            this.ionicNamedColor = 'light'
        } else {
            this.ionicNamedColor = 'medium'
        }
    }

    public toggleNamedColor2(): void {
        if(this.ionicNamedColor2 === 'medium') {
            this.ionicNamedColor2 = 'light'
        } else {
            this.ionicNamedColor2 = 'medium'
        }
    }

    public toggleNamedColor3(): void {
        if(this.ionicNamedColor3 === 'medium') {
            this.ionicNamedColor3 = 'light'
        } else {
            this.ionicNamedColor3 = 'medium'
        }
    }

    getDaysOfMonth() {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if(this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        } else {
            this.currentDate = 999;
        }

        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }

        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i+1);
        }

        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0).getDate();
        for (var i = 0; i < (6-lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i+1);
        }
        var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
        if(totalDays<36) {
            for(var i = (7-lastDayThisMonth); i < ((7-lastDayThisMonth)+7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    }

    goToLastMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    }

    goToNextMonth() {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0);
        this.getDaysOfMonth();
    }


}

/* ADD TO BOTTOM OF HOME PAGE HTML
  <ion-calendar #calendar></ion-calendar>
  <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
  */