import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

    public notifications = false;

    constructor(private router: Router){

    }

    ngOnInit() {

    }

    hide() {
        if (this.notifications) {
            return true;
        } else {
            return false;
        }
    }

    /*
    public pepperoni:boolean = true;
    change(){
        console.log(this.pepperoni);
    }
    */
}


