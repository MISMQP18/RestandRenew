import { Component } from '@angular/core';
import {NavController} from '@ionic/angular';

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

  constructor(public navCtrl: NavController){
    this.currentDate = new Date();
  }

}

/* ADD TO BOTTOM OF HOME PAGE HTML
  <ion-calendar #calendar></ion-calendar>
  <ion-calendar #calendar (onDaySelect)="onDaySelect($event)"></ion-calendar>
  */