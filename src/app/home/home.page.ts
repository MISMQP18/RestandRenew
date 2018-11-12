import { Component } from '@angular/core';
import {navController} from 'ionic-angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  eventSource = [];
  viewTtile: string;
  selectedDay = new Date();

  calendar = {
    mode: 'month',
    currentDate: this.selectedDay
}
    constructor(public navCtrl: navController) {

  }
  onViewTitleChanged(title){
  this.viewTitle = title;
  }

  }
  onTimeSelected(event){
  this.selectedDay = ev.selectedTime;

  }
  onEventSelected(event){
}



