import { Habit, HabitService } from '../../services/habit.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
    selector: 'app-habit-details',
    templateUrl: './habit-details.page.html',
    styleUrls: ['./habit-details.page.scss'],
})

export class HabitDetailsPage implements OnInit {

    habit: Habit = {
        task: 'test',
        createdAt: new Date().getTime(),
        priority: 2
    };

    habitId = null;

    constructor(private route: ActivatedRoute, private nav: NavController, private habitService: HabitService, private loadingController: LoadingController) { }

    ngOnInit() {
        this.habitId = this.route.snapshot.params['id'];
        if (this.habitId)  {
            this.loadHabit();
        }
    }

    async loadHabit() {
        const loading = await this.loadingController.create({
            message: 'Loading Habit..'
        });
        await loading.present();

        this.habitService.getHabit(this.habitId).subscribe(res => {
            loading.dismiss();
            this.habit = res;
        });
    }

    async saveHabit() {

        const loading = await this.loadingController.create({
            message: 'Saving Habit..'
        });
        await loading.present();

        if (this.habitId) {
            this.habitService.updateHabit(this.habit, this.habitId).then(() => {
                loading.dismiss();
                this.nav.goBack(true);
            });
        } else {
            this.habitService.addHabit(this.habit).then(() => {
                loading.dismiss();
                this.nav.goBack(true);
            });
        }
    }

}