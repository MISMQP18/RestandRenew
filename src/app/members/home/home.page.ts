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

    constructor(private router: Router, public navCtrl: NavController, private authService: AuthenticationService){
        this.currentDate = new Date();
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

    /*btnClicked2(){
        alert('This would bring you to the habit settings page!');
    }*/

}

/* ADD TO BOTTOM OF HOME PAGE HTML
  <ion-calendar #calendar></ion-calendar>
  <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
  */