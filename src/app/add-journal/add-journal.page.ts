import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Journal, JournalService } from '../services/journal.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-add-journal',
  templateUrl: './add-journal.page.html',
  styleUrls: ['./add-journal.page.scss'],
})
export class AddJournalPage implements OnInit {

    formattedDate;
    shortDate;
    matchDate;

    journal: Journal = {
        date: this.getFormattedDate(),
        title: null,
        entry: null,
        archive: false
    }

    journalId = null;

    journals: Journal[];

    constructor(private router: Router, private authService: AuthenticationService, private journalService: JournalService, private loadingController: LoadingController) {
    }

    ngOnInit() {
    }

    async saveJournal() {

        const loading = await this.loadingController.create({
            message: 'Saving Journal Entry..'
        });
        await loading.present();

        if (this.journalId) {
            this.journalService.updateJournal(this.journal, this.journalId).then(() => {
                loading.dismiss();
                this.router.navigateByUrl('/tabs/(journals:journals)');
            });
        } else {
            this.journalService.addJournal(this.journal).then(() => {
                loading.dismiss();
                this.router.navigateByUrl('/tabs/(journals:journals)');
            });
        }
    }

    openJournalPage(){
        this.router.navigateByUrl('/tabs/(journals:journals)');
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

        return this.formattedDate;
    }

}
