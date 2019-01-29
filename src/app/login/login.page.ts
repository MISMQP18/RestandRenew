import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {IdService} from '../services/id.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingController, NavController} from '@ionic/angular';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    imgSrc = 'https://trello-attachments.s3.amazonaws.com/5be071b1dbe32d8252ae07bd/5c114a1a42e8df46da86acd3/25716ec329e1f409b50e70a1ada6d940/WPI_Inst_Prim_FulClr_PREVIEW.png';
    image = 'https://trello-attachments.s3.amazonaws.com/5be071b1dbe32d8252ae07bd/5c114a1a42e8df46da86acd3/9579d734e59aedfd8654f1095a024455/reliant-brand-2016-small.png';

    /*id: UserID = {
        userID: null
    };*/

    constructor(public globalID: IdService, private authService: AuthenticationService, private route: ActivatedRoute, private router: Router,  private nav: NavController, private loadingController: LoadingController) { }

    ngOnInit() {
    }

    login() {
        this.authService.login();
    }

    async saveUserID() {
        // this.globalID.userID;
    }

    /*async login() {

        const loading = await this.loadingController.create({
            message: 'Saving ID..'
        });
        await loading.present();

        if (this.userid) {
            this.idService.updateID(this.id, this.userid).then(() => {
                loading.dismiss();
                this.authService.login();
            });
        } else {
            this.idService.addID(this.id).then(() => {
                loading.dismiss();
                this.authService.login();
            });
        }
    }*/

}