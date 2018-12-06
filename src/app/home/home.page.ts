import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';
//import { SettingsPage } from './settings.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
    currentDate;

    constructor(public navCtrl: NavController, private router: Router){
        this.currentDate = new Date();
    }

    /*openEditHabitPage(){
        this.router.navigate(['/tabs/(edit:edit)']);
    }*/

    btnClicked(){
        alert('Habit Completed');
    }

    /*btnClicked2(){
        alert('This would bring you to the habit settings page!');
    }*/

}

/* ADD TO BOTTOM OF HOME PAGE HTML
  <ion-calendar #calendar></ion-calendar>
  <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
  */