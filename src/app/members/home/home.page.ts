import { AuthenticationService } from '../../services/authentication.service';
import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import {LoadingController, NavController, List, ToastController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Habit, HabitService } from '../../services/habit.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {IdService} from '../../services/id.service';

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
        archive: false,
        sundayIncomplete: null,
        mondayIncomplete: null,
        tuesdayIncomplete: null,
        wednesdayIncomplete: null,
        thursdayIncomplete: null,
        fridayIncomplete: null,
        saturdayIncomplete: null,
        userID: "'" + this.globalID.userID + "'"
    };

    habitId = null;

    habits: Habit[];

    sundayHabits: Habit[];
    mondayHabits: Habit[];
    tuesdayHabits: Habit[];
    wednesdayHabits: Habit[];
    thursdayHabits: Habit[];
    fridayHabits: Habit[];
    saturdayHabits: Habit[];

    sundayIncompleteHabits: Habit[];
    mondayIncompleteHabits: Habit[];
    tuesdayIncompleteHabits: Habit[];
    wednesdayIncompleteHabits: Habit[];
    thursdayIncompleteHabits: Habit[];
    fridayIncompleteHabits: Habit[];
    saturdayIncompleteHabits: Habit[];

    currentDate;
    formattedDate;
    shortDate;
    matchDate;

    showPage;

    public userID = "'" + this.globalID.userID + "'";


    @ViewChild('slidingList') slidingList: List;


    constructor(public globalID: IdService, private router: Router, public navCtrl: NavController, private authService: AuthenticationService, private habitService: HabitService, private loadingController: LoadingController, private toastController: ToastController) {
        this.currentDate = new Date();
        this.getFormattedDate();
        this.show();

    }

    show () {
        if (this.globalID.userID == null) {
            return this.showPage = false;
        } else {
            return this.showPage = true;
        }
    }

    ngOnInit() {
        this.habitService.getHabits(this.userID).subscribe(res => {
            this.habits = res;
        });

        this.habitService.getBySunday(this.userID).subscribe(res => {
            this.sundayHabits = res;
        });

        this.habitService.getByMonday(this.userID).subscribe(res => {
            this.mondayHabits = res;
        });

        this.habitService.getByTuesday(this.userID).subscribe(res => {
            this.tuesdayHabits = res;
        });

        this.habitService.getByWednesday(this.userID).subscribe(res => {
            this.wednesdayHabits = res;
        });

        this.habitService.getByThursday(this.userID).subscribe(res => {
            this.thursdayHabits = res;
        });

        this.habitService.getByFriday(this.userID).subscribe(res => {
            this.fridayHabits = res;
        });

        this.habitService.getBySaturday(this.userID).subscribe(res => {
            this.saturdayHabits = res;
        });

        this.habitService.sundayIncomplete(this.userID).subscribe(res => {
            this.sundayIncompleteHabits = res;
        });

        this.habitService.mondayIncomplete(this.userID).subscribe(res => {
            this.mondayIncompleteHabits = res;
        });

        this.habitService.tuesdayIncomplete(this.userID).subscribe(res => {
            this.tuesdayIncompleteHabits = res;
        });

        this.habitService.wednesdayIncomplete(this.userID).subscribe(res => {
            this.wednesdayIncompleteHabits = res;
        });

        this.habitService.thursdayIncomplete(this.userID).subscribe(res => {
            this.thursdayIncompleteHabits = res;
        });

        this.habitService.fridayIncomplete(this.userID).subscribe(res => {
            this.fridayIncompleteHabits = res;
        });

        this.habitService.saturdayIncomplete(this.userID).subscribe(res => {
            this.saturdayIncompleteHabits = res;
        });
    }

    async hideHabit(item) {
        if (this.matchDate == 0) {
            item.sundayIncomplete = false;
        } else if (this.matchDate == 1) {
            item.mondayIncomplete = false;
        } else if (this.matchDate == 2) {
            item.tuesdayIncomplete = false;
        } else if (this.matchDate == 3) {
            item.wednesdayIncomplete = false;
        } else if (this.matchDate == 4) {
            item.thursdayIncomplete = false;
        } else if (this.matchDate == 5 ) {
            item.fridayIncomplete = false;
        } else {
            item.saturdayIncomplete = false;
        }

        this.habitService.updateHabit(item, item.id).then(() => {
        });

        await this.slidingList.closeSlidingItems();
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

    remove(item) {
        this.habitService.removeHabit(item.id);
    }

    logout() {
        this.authService.logout();
    }

    getFormattedDate() {
        var dateObj = new Date();

        var year = dateObj.getFullYear().toString();
        var month = dateObj.getMonth().toString();
        var date = dateObj.getDate().toString();
        var day = dateObj.getDay();
        var dayText;

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

        var dayArray = ['Su', 'M', 'T', 'W', 'T', 'F', 'Sa'];

        this.matchDate = day;

        this.formattedDate = dayText + ", " + monthArray[month] + " " + date + ", " + year;
        this.shortDate = dayArray[day];
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

    checkDayIncomplete(item) {
        if (this.matchDate == 0) {
            return item.sundayIncomplete;
        } else if (this.matchDate == 1) {
            return item.mondayIncomplete;
        } else if (this.matchDate == 2) {
            return item.tuesdayIncomplete;
        } else if (this.matchDate == 3) {
            return item.wednesdayIncomplete;
        } else if (this.matchDate == 4) {
            return item.thursdayIncomplete;
        } else if (this.matchDate == 5 ) {
            return item.fridayIncomplete;
        } else {
            return item.saturday;
        }
    }

    habitListQuery() {
        if (this.matchDate == 0) {
            return this.sundayHabits;
        } else if (this.matchDate == 1) {
            return this.mondayHabits;
        } else if (this.matchDate == 2) {
            return this.tuesdayHabits;
        } else if (this.matchDate == 3) {
            return this.wednesdayHabits;
        } else if (this.matchDate == 4) {
            return this.thursdayHabits;
        } else if (this.matchDate == 5 ) {
            return this.fridayHabits;
        } else {
            return this.saturdayHabits;
        }
    }

    async presentToastNextWeek() {
        const toast = await this.toastController.create({
            message: 'Next Week',
            duration: 2000,
            showCloseButton: true,
            position: "middle"
        });
        toast.present();
    }

    async presentToastLastWeek() {
        const toast = await this.toastController.create({
            message: 'Previous Week',
            duration: 2000,
            showCloseButton: true,
            position: "middle"
        });
        toast.present();
    }

}

