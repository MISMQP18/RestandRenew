import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Habit, HabitService } from '../services/habit.service';
import { reorderArray } from 'ionic-angular';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
})
export class SettingsPage implements OnInit {

    habit: Habit = {
        task: '',
        priority: null,
        name: '',
        createdAt: new Date().getTime(),
        notifications: null,
        sunday: null,
        monday: null,
        tuesday: null,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        time: null,
        on: null,
        incomplete: true
    };

    habitId = null;

    habits: Habit[];


    constructor(private router: Router, private authService: AuthenticationService, private habitService: HabitService, private loadingController: LoadingController) {
    }

    ngOnInit() {
        this.habitService.getHabits().subscribe(res => {
            this.habits = res;
        });
    }

    remove(item) {
        this.habitService.removeHabit(item.id);
    }

    logout() {
        this.authService.logout();
    }


    habitOn(item) {
        item.on = true;
        item.incomplete = true;

        this.habitService.updateHabit(item, item.id).then(() => {
            this.router.navigateByUrl('/tabs/(settings:settings)');
        });
    }

    habitOff(item) {
        item.on = false;

        this.habitService.updateHabit(item, item.id).then(() => {
            this.router.navigateByUrl('/tabs/(settings:settings)');
        });
    }

    /*
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

    * THIS IS NOT A GOOD IMPLEMENTATION OF HIDE() --> NEED TO FIND A WAY TO USE ONE FUNCTION FOR ANY HABIT *

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
    */

    openAddHabitPage(){
        this.router.navigate(['/add']);
    }

    openEditHabitPage(){
        this.router.navigate(['/edit']);
    }

    /*reorderGroup.addEventListener('ionItemReorder', (ev) => {
    console.log(`Moving item from ${ev.detail.from} to ${ev.detail.to}`);

    this.dataList = reorderArray(this.dataList, ev.detail.from, ev.detail.to);
    ev.detail.complete();
    });

    this.dataList = reorderGroup.complete(this.dataList);*/

    /*reorderItems(indexes: any) {
        this.items1 = reorderArray(this.items1, indexes);
        this.items2 = reorderArray(this.items2, indexes);
    }*/

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