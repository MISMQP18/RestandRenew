import { Component } from '@angular/core';
import { reorderArray } from 'ionic-angular';
//import { HomePage } from './home.page.html';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
    items1 = ['Drink Water', 'Meditate at lunchtime'];
    items2 = ['Take 3 deep breaths', 'Take a walk', 'Get up from your desk'];

    constructor() {
        for (let x = 0; x < 5; x++) {
            this.items1.push(x);
        }

        for (let x = 0; x < 5; x++) {
            this.items2.push(x);
        }
    }

    reorderItems(indexes) {
        this.items1 = reorderArray(this.items1, indexes);
        this.items2 = reorderArray(this.items2, indexes);
    }

    btnClicked() {
        alert('This will open the "Edit Habits" page');
    }

}

/*

<ion-item>
        <ion-label>Drink Water</ion-label>
        <ion-toggle checked="true"></ion-toggle>
      </ion-item>
      <ion-item>
        <ion-label>Meditate at lunchtime</ion-label>
        <ion-toggle checked="true"></ion-toggle>
      </ion-item>
*/

/*
<ion-item>
      <ion-label>Take 3 deep breaths</ion-label>
      <ion-toggle></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>Take a walk</ion-label>
      <ion-toggle></ion-toggle>
    </ion-item>
    <ion-item>
      <ion-label>Get up from your desk</ion-label>
      <ion-toggle></ion-toggle>
    </ion-item>
 */