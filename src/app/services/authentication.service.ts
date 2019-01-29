import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { IdService } from './id.service'

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public userID = "'" + this.globalID.userID + "'";

    authenticationState = new BehaviorSubject(false);

    constructor(public globalID: IdService, private storage: Storage, private plt: Platform) {
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }

    checkToken() {
        this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        })
    }

    login() {
        return this.storage.set(TOKEN_KEY, this.userID).then(() => {
            this.authenticationState.next(true);
        });
    }

    logout() {
        return this.storage.remove(TOKEN_KEY).then(() => {
            this.authenticationState.next(false);
        });
    }

    isAuthenticated() {
        return this.authenticationState.value;
    }

}