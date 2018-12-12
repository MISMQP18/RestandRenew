import { Component } from '@angular/core';
import { reorderArray } from 'ionic-angular';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
//import { HomePage } from './home.page.html';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage {
    items1: any[];
    items2: any[];
    public water = false;
    public meditate = false;
    public breathe = false;
    public walk = false;
    public getup = false;

    public water2 = false;
    public meditate2 = false;
    public breathe2 = false;
    public walk2 = false;
    public getup2 = false;

    constructor(private router: Router, private authService: AuthenticationService) {
        this.items1 = [
            {
                habit: 'Drink Water'
            },
            {
                habit: 'Meditate at lunchtime'
            }];

        this.items2 = [
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

    openFeedback(){
        alert('This will bring you to the feedback survey');
    }

    logout() {
        this.authService.logout();
    }

    /* * THIS IS NOT A GOOD IMPLEMENTATION OF HIDE() --> NEED TO FIND A WAY TO USE ONE FUNCTION FOR ANY HABIT * */
    hidewater() {
        if (this.water2) {
            this.water2 = false;
            this.water = true;
            return this.water;
        } else {
            return false;
        }
    }

    hidemeditate() {
        if (this.meditate2) {
            this.meditate2 = false;
            this.meditate = true;
            return this.meditate;
        } else {
            return false;
        }
    }

    hidebreathe() {
        if (this.breathe2) {
            this.breathe2 = false;
            this.breathe = true;
            return this.breathe;
        } else {
            return false;
        }
    }

    hidewalk() {
        if (this.walk2) {
            this.walk2 = false;
            this.walk = true;
            return this.walk;
        } else {
            return false;
        }
    }

    hidegetup() {
        if (this.getup2) {
            this.getup2 = false;
            this.getup = true;
            return this.getup;
        } else {
            return false;
        }
    }

    reorderItems(indexes: any) {
        this.items1 = reorderArray(this.items1, indexes);
        this.items2 = reorderArray(this.items2, indexes);
    }

    openAddHabitPage(){
        this.router.navigate(['/edit']);
    }

    openEditHabitPage(){
        this.router.navigate(['edit']);
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