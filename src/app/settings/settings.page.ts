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
        for (let x = 0; x < 5; x++) {
            this.items.push(x);
        }
    }

    reorderItems(indexes) {
        this.items = reorderArray(this.items, indexes);
    }

    btnClicked() {
        alert('This will open the "Edit Habits" page');
    }

}
