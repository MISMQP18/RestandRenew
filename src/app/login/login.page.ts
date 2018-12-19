import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    imgSrc = 'https://www.wpi.edu/sites/default/files/inline-image/Offices/Marketing-Communications/WPI_Inst_Prim_FulClr.png';
    image = 'https://reliantmedicalgroup.org/wp-content/themes/premise/img/reliant-brand-2016-small.png?x20341';


    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
    }

    login() {
        this.authService.login();
    }

}