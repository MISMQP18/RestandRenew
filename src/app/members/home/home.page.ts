import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Habit, HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

    currentDate;
    formattedDate;
    ionicNamedColor: string = 'light';
    ionicNamedColor2: string = 'light';
    ionicNamedColor3: string = 'light';
    habits: Habit[];


    constructor(private router: Router, public navCtrl: NavController, private authService: AuthenticationService, private habitService: HabitService) {
        this.currentDate = new Date();
        this.getFormattedDate();

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

        var monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        this.formattedDate = monthArray[month] + " " + date + ", " + year;
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


/*test test test 12/20 will clean when positive i dont need this
    date: any;
    daysInThisMonth: any;
    daysInLastMonth: any;
    daysInNextMonth: any;
    monthNames: string[];
    currentMonth: any;
    currentYear: any;


    //infos = [];
    //ref = firebase.database().ref('infos/');

 //this.ref.on('value', resp => {
        //  this.infos = [];
        //this.infos = snapshotToArray(resp);
        // });

    addInfo() {
        this.router.navigate(['/add-info']);
    }

    edit(key) {
        this.router.navigate(['/edit/'+key]);
    }

    async delete(key) {
        const alert = await this.alertCtrl.create({
            header: 'Confirm!',
            message: 'Are you sure want to delete this info?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: (blah) => {
                        console.log('cancel');
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        firebase.database().ref('infos/'+key).remove();
                    }
                }
            ]
        });

        await alert.present();
    }
}

export const snapshotToArray = snapshot => {
    let returnArr = [];

    snapshot.forEach(childSnapshot => {
        let item = childSnapshot.val();
        item.key = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

*/
