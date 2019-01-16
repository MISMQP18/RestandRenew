
import { Injectable } from '@angular/core';
import { Toast, ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

    toast: Toast;
    constructor(private toastCtrl: ToastController) { }

    /*create(message, ok = false, duration = 2000) {
        if (this.toast) {
            this.toast.dismiss();
        }

        let toast = this.toastCtrl.create({
            message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    }*/

    presentToast() {
        let toast = this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });

        toast.present();
    }
}