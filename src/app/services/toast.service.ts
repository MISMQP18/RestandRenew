
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
// import { Toast } from 'ionic-angular';

@Injectable({
    providedIn: 'root'
})

export class ToastService {

    // toast: Toast;
    constructor(private toastCtrl: ToastController) {

    }

    /* create(message, ok = false, duration = 2000) {
        if (this.toast) {
            this.toast.dismiss();
        }

        const toast = this.toastCtrl.create({
            message,
            duration: ok ? null : duration,
            position: 'bottom',
            showCloseButton: ok,
            closeButtonText: 'OK'
        });
        this.toast.present();
    } */

    async presentToast() {
        const toast = await this.toastCtrl.create({
            message: 'User was added successfully',
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
}