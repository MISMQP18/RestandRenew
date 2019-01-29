import {Component, OnInit, ViewChild} from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import {LoadingController, NavController, List} from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Journal, JournalService} from '../services/journal.service';
import { reorderArray } from 'ionic-angular';
import {Habit} from '../services/habit.service';
import {IdService} from '../services/id.service';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.page.html',
  styleUrls: ['./journals.page.scss'],
})

export class JournalsPage implements OnInit {

    journal: Journal = {
        createdAt: new Date().getTime(),
        date: this.getFormattedDate(),
        title: null,
        entry: null,
        archive: false,
        userID: "'" + this.globalID.userID + "'"
    }

    journalId = null;

    journals: Journal[];

    public userID = "'" + this.globalID.userID + "'";

    @ViewChild('slidingList') slidingList: List;

    constructor(public globalID: IdService, private router: Router, private authService: AuthenticationService, private journalService: JournalService, private loadingController: LoadingController) {
    }

    ngOnInit() {
        this.journalService.getJournals(this.userID).subscribe(res => {
            this.journals = res;
        });
    }

    remove(item) {
        this.journalService.removeJournal(item.id);
    }

    logout() {
        this.authService.logout();
    }

    async archiveJournal(item) {
        item.archive = true;

        this.journalService.updateJournal(item, item.id).then(() => {
        });

        await this.slidingList.closeSlidingItems();
    }

    openAddJournalPage(){
        this.router.navigate(['/add-journal']);
    }

    openEditJournalPage(){
        this.router.navigate(['/edit-journal']);
    }

    currentDate;
    formattedDate;
    shortDate;
    matchDate;

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

        return this.formattedDate;
    }

}
