import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Journal } from './journal.service';
import {IdService} from './id.service';

export interface Journal {
    id?: string;
    createdAt: number;
    date: string;
    title: string;
    entry: string;
    archive: boolean;
    userID: string;
}

@Injectable({
  providedIn: 'root'
})

export class JournalService {
    private journalCollection: AngularFirestoreCollection<Journal>;

    private journals: Observable<Journal[]>;

    constructor(public globalID: IdService, private db: AngularFirestore) {
        this.journalCollection = this.db.collection('journals');

        this.journals = this.journalCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getJournals(globalID) {
        this.journalCollection = this.db.collection('journals', ref =>
            ref
                .where('userID', '==', globalID));
                // .orderBy('createdAt', 'desc'));

        this.journals = this.journalCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.journals;
    }

    getJournal(id) {
        return this.journalCollection.doc<Journal>(id).valueChanges();
    }

    updateJournal(journal: Journal, id: string) {
        return this.journalCollection.doc(id).update(journal);
    }

    addJournal(journal: Journal) {
        return this.journalCollection.add(journal);
    }

    removeJournal(id) {
        return this.journalCollection.doc(id).delete();
    }
}
