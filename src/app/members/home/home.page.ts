import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {LoadingController, NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Habit, HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

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

    currentDate;
    formattedDate;
    ionicNamedColor: string = 'light';
    ionicNamedColor2: string = 'light';
    ionicNamedColor3: string = 'light';
    matchDate;


    constructor(private router: Router, public navCtrl: NavController, private authService: AuthenticationService, private habitService: HabitService, private loadingController: LoadingController) {
        this.currentDate = new Date();
        this.getFormattedDate();

    }

    hideHabit(item) {
        item.incomplete = false;

        this.habitService.updateHabit(item, item.id).then(() => {
                this.router.navigateByUrl('/tabs/(home:home)');
        });
    }

    openAddHabitPage() {
        this.router.navigate(['/add']);
    }

    openEditHabitPage() {
        this.router.navigate(['/edit']);
    }

    btnClicked() {
        alert('Habit Completed');
    }

    goPreviousWeek() {
        alert('This will show the previous week');
    }

    goNextWeek() {
        alert('This will show the next week');
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

    getFormattedDate() {
        var dateObj = new Date()

        var year = dateObj.getFullYear().toString()
        var month = dateObj.getMonth().toString()
        var date = dateObj.getDate().toString()
        var day = dateObj.getDay()
        var dayText

        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        if (day == 0) {
            dayText = 'Sunday';
        } else if (day == 1) {
            dayText = 'Monday';
        } else if (day == 2) {
            dayText = 'Tuesday';
        } else if (day == 3) {
            dayText = 'Wednesday';
        } else if (day == 4) {
            dayText = 'Thursday';
        } else if (day == 5 ) {
            dayText = 'Friday';
        } else {
            dayText = 'Saturday';
        }

        this.matchDate = day;

        this.formattedDate = dayText + ", " + monthArray[month] + " " + date + ", " + year;
    }

    checkDay(item) {
        if (this.matchDate == 0) {
            return item.sunday;
        } else if (this.matchDate == 1) {
            return item.monday;
        } else if (this.matchDate == 2) {
            return item.tuesday;
        } else if (this.matchDate == 3) {
            return item.wednesday;
        } else if (this.matchDate == 4) {
            return item.thursday;
        } else if (this.matchDate == 5 ) {
            return item.friday;
        } else {
            return item.saturday;
        }
    }

    public toggleNamedColor(): void {
        if (this.ionicNamedColor === 'medium') {
            this.ionicNamedColor = 'light'
        } else {
            this.ionicNamedColor = 'medium'
        }
    }

    public toggleNamedColor2(): void {
        if (this.ionicNamedColor2 === 'medium') {
            this.ionicNamedColor2 = 'light'
        } else {
            this.ionicNamedColor2 = 'medium'
        }
    }

    public toggleNamedColor3(): void {
        if (this.ionicNamedColor3 === 'medium') {
            this.ionicNamedColor3 = 'light'
        } else {
            this.ionicNamedColor3 = 'medium'
        }
    }

}

