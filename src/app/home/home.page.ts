import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';
//import { SettingsPage } from './settings.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

    currentDate;

    btnClicked(){
        alert('Habit Completed');
    }

    btnClicked2(){
        alert('This would bring you to the habit settings page!');
    }


  constructor(public navCtrl: NavController){
    this.currentDate = new Date();
  }

}

/* ADD TO BOTTOM OF HOME PAGE HTML
  <ion-calendar #calendar></ion-calendar>
  <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
  */