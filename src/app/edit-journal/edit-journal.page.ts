import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Journal, JournalService } from '../services/journal.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-edit-journal',
  templateUrl: './edit-journal.page.html',
  styleUrls: ['./edit-journal.page.scss'],
})
export class EditJournalPage implements OnInit {

    formattedDate;
    shortDate;
    matchDate;

    journal: Journal = {
        createdAt: new Date().getTime(),
        date: this.getFormattedDate(),
        title: null,
        entry: null,
        archive: false
    }

    journalId = null;

    constructor(private route: ActivatedRoute, private router: Router,  private nav: NavController, private journalService: JournalService, private loadingController: LoadingController) { }

    ngOnInit() {
        this.journalId = this.route.snapshot.params['id'];
        if (this.journalId)  {
            this.loadJournal();
        }
    }

    async loadJournal() {
        const loading = await this.loadingController.create({
            message: 'Loading Journal Entry..'
        });
        await loading.present();

        this.journalService.getJournal(this.journalId).subscribe(res => {
            loading.dismiss();
            this.journal = res;
        });
    }

    async saveJournal() {

        const loading = await this.loadingController.create({
            message: 'Saving Habit..'
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
