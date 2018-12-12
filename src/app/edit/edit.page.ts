import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
//import { WheelSelector } from '@ionic-native/wheel-selector';
//import { ToastController } from 'ionic-angular/components/toast/toast-controller';
//import { HttpClient } from '@angular/common/http/src/client';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss']

})

export class EditPage {

    public pepperoni:boolean = true;
    constructor(private router: Router){}

    change(){
        console.log(this.pepperoni);
    }

   /* openHabitSettingsPage(){
        this.router.navigate(['/tabs/(settings:settings)']);
    }*/

        /*
            jsonData = {
            hours: [
                {description: '12'},
                {description: '1'},
                {description: '2'},
                {description: '3'},
                {description: '4'},
                {description: '5'},
                {description: '6'},
                {description: '7'},
                {description: '8'},
                {description: '9'},
                {description: '10'},
                {description: '11'},
            ],
            minutes: [
                {description: '00'},
                {description: '15'},
                {description: '30'},
                {description: '45'},

            ],
            meridiem: [
                {description: 'AM'},
                {description: 'PM'},
            ]
            }

            constructor(public navCtrl: NavController, private selector: WheelSelector, private toastCtrl: ToastController) {

            }

            timePicker() {
               this.selector.show({
                   title:'Select Time',
                   positiveButtonText: 'Set',
                   negativeButtonText: 'Cancel',
                   items: [
                       this.jsonData.hours,
                       this.jsonData.minutes,
                       this.jsonData.meridiem
                   ],
                   defaultItems: [
                       { index: 0, value: this.jsonData.hours[9].description },
                       { index: 1, value: this.jsonData.minutes[1].description },
                       { index: 2, value: this.jsonData.meridiem[1].description },
                   ]
               }).then(result => {
                   const msg = `Selected ${result[0].description} with ${result[1].description} with ${result[2].description}`;
                   const toast = this.toastCtrl.create({
                       message: msg,
                       duration: 4000
                   });
                   toast.present();
               });
            }
            */
}
