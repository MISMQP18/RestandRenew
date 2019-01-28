import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Habit, HabitService } from '../services/habit.service';
import {IdService} from '../services/id.service';
//import {UserID, IdService} from '../services/id.service';

@Component({
    selector: 'app-add',
    templateUrl: './add.page.html',
    styleUrls: ['./add.page.scss'],
})

export class AddPage implements OnInit {

    public notifications = false;

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
        archive: false,
        incomplete: true,
        userID: this.globalID.userID
    };

    habitId = null;

    constructor(public globalID: IdService, private route: ActivatedRoute, private router: Router,  private nav: NavController, private habitService: HabitService, private loadingController: LoadingController) { }

    ngOnInit() {
    }

    /*async loadHabit() {
        const loading = await this.loadingController.create({
            message: 'Loading Habit..'
        });
        await loading.present();

        this.habitService.getHabit(this.habitId).subscribe(res => {
            loading.dismiss();
            this.habit = res;
        });
    }*/

    async saveHabit() {

        const loading = await this.loadingController.create({
            message: 'Saving Habit..'
        });
        await loading.present();

        if (this.habitId) {
            this.habitService.updateHabit(this.habit, this.habitId).then(() => {
                loading.dismiss();
                this.router.navigateByUrl('/tabs/(settings:settings)');
            });
        } else {
            this.habitService.addHabit(this.habit).then(() => {
                loading.dismiss();
                this.router.navigateByUrl('/tabs/(settings:settings)');
            });
        }
    }

    hide() {
        if (this.notifications) {
            return true;
        } else {
            return false;
        }
    }

    openHabitSettingsPage(){
        this.router.navigateByUrl('/tabs/(settings:settings)');
    }

}

