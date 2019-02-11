import { Platform } from '@ionic/angular';
import { Injectable, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import {IdService, UserID} from './id.service';

const TOKEN_KEY = 'auth-token';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService implements OnInit {

    user: UserID = {
        userID: null
    };

    users: UserID[];

    public userid = "'" + this.globalID.userID + "'";

    authenticationState = new BehaviorSubject(false);

    constructor(public globalID: IdService, private storage: Storage, private plt: Platform) {
        this.plt.ready().then(() => {
            this.checkToken();
        });
    }

    ngOnInit() {
        this.globalID.getIDs(this.userid).subscribe(res => {
            this.users = res;
        });
    }

    checkToken() {
        this.storage.get(TOKEN_KEY).then(res => {
            if (res) {
                this.authenticationState.next(true);
            }
        });
    }

    login() {
        /*if (!this.users || this.users.length == 0) {
            return this.storage.set(TOKEN_KEY, this.userid).then(() => {
                this.authenticationState.next(false);
            });
        } else {
            return this.storage.set(TOKEN_KEY, this.userid).then(() => {
                this.authenticationState.next(true);
            });
        }*/

        return this.storage.set(TOKEN_KEY, this.userid).then(() => {
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