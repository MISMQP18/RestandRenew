import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Habit, HabitService } from '../services/habit.service';
//import {ifTrue} from 'codelyzer/util/function';
//import { WheelSelector } from '@ionic-native/wheel-selector';
//import { ToastController } from 'ionic-angular/components/toast/toast-controller';
//import { HttpClient } from '@angular/common/http/src/client';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']

})

export class EditPage implements OnInit {

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
        incomplete: true
    };

    habitId = null;

    constructor(private route: ActivatedRoute, private router: Router,  private nav: NavController, private habitService: HabitService, private loadingController: LoadingController) { }

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

    /*
public pepperoni:boolean = true;
change(){
    console.log(this.pepperoni);
}
*/

        /*
            jsonData = {
            hours: [
                {description: '12'},
                {description: '1'},
                {description: '2'},
                {description: '3'},
                {description: '4'},
                {description: '5'},
                {description: '6'},
                {description: '7'},
                {description: '8'},
                {description: '9'},
                {description: '10'},
                {description: '11'},
            ],
            minutes: [
                {description: '00'},
                {description: '15'},
                {description: '30'},
                {description: '45'},

            ],
            meridiem: [
                {description: 'AM'},
                {description: 'PM'},
            ]
            }

            constructor(public navCtrl: NavController, private selector: WheelSelector, private toastCtrl: ToastController) {

            }

            timePicker() {
               this.selector.show({
                   title:'Select Time',
                   positiveButtonText: 'Set',
                   negativeButtonText: 'Cancel',
                   items: [
                       this.jsonData.hours,
                       this.jsonData.minutes,
                       this.jsonData.meridiem
                   ],
                   defaultItems: [
                       { index: 0, value: this.jsonData.hours[9].description },
                       { index: 1, value: this.jsonData.minutes[1].description },
                       { index: 2, value: this.jsonData.meridiem[1].description },
                   ]
               }).then(result => {
                   const msg = `Selected ${result[0].description} with ${result[1].description} with ${result[2].description}`;
                   const toast = this.toastCtrl.create({
                       message: msg,
                       duration: 4000
                   });
                   toast.present();
               });
            }
            */
}
