import { Component } from '@angular/core';
<<<<<<< HEAD
import {NavController } from 'ionic-angular';
=======
import {NavController} from "@ionic/angular";
>>>>>>> 917a20be52b26fc0f2a9f23e42e53ac4c87e54a6

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
<<<<<<< HEAD

    constructor(public navCtrl: NavController) {

    }

    btnClicked(){
        alert('Habit Completed');
    }
=======
  currentDate;
  constructor(public navCtrl: NavController){
    this.currentDate = new Date();
  }


>>>>>>> 917a20be52b26fc0f2a9f23e42e53ac4c87e54a6
}
