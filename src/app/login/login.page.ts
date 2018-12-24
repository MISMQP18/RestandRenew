import { AuthenticationService } from '../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    imgSrc = 'https://trello-attachments.s3.amazonaws.com/5be071b1dbe32d8252ae07bd/5c114a1a42e8df46da86acd3/25716ec329e1f409b50e70a1ada6d940/WPI_Inst_Prim_FulClr_PREVIEW.png';
    image = 'https://trello-attachments.s3.amazonaws.com/5be071b1dbe32d8252ae07bd/5c114a1a42e8df46da86acd3/9579d734e59aedfd8654f1095a024455/reliant-brand-2016-small.png';


    constructor(private authService: AuthenticationService) { }

    ngOnInit() {
    }

    login() {
        this.authService.login();
    }

}