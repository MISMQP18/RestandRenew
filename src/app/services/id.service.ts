import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Journal} from './journal.service';

export interface UserID {
    id?: string;
    userID: number;
}

@Injectable({
  providedIn: 'root'
})
export class IdService {

    private idCollection: AngularFirestoreCollection<UserID>;

    private ids: Observable<UserID[]>;

    constructor(private db: AngularFirestore) {
        this.idCollection = this.db.collection('ids', ref => ref.orderBy('createdAt', 'desc'));

        this.ids = this.idCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getIDs() {
        this.ids = this.idCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.ids;
    }

    getID(id) {
        return this.idCollection.doc<UserID>(id).valueChanges();
    }

    addID(id: UserID) {
        return this.idCollection.add(id);
    }

    removeID(id) {
        return this.idCollection.doc(id).delete();
    }
}
