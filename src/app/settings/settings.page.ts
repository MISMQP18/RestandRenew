import { Component } from '@angular/core';
//import { HomePage } from './home.page.html';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {

    btnClicked() {
        alert('This will open the "Edit Habits" page');
    }
}
