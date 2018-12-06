import { Component } from '@angular/core';
import { reorderArray } from 'ionic-angular';
//import { HomePage } from './home.page.html';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
    items = [];

    constructor() {
        this.items = [
            {
                habit: 'Drink Water'
            },
            {
                habit: 'Meditate at lunchtime'
            },
            {
                habit: 'Take 3 deep breaths'
            },
            {
                habit: 'Take a walk'
            },
            {
                habit: 'Get up from your desk'
            }];
    }

    reorderItems(indexes) {
        this.items = reorderArray(this.items, indexes);
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