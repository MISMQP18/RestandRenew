import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Journal } from './journal.service';
import {Habit} from './habit.service';

export interface Journal {
    id?: string;
    date: string;
    title: string;
    entry: string;
    archive: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class JournalService {
    private journalCollection: AngularFirestoreCollection<Journal>;

    private journals: Observable<Journal[]>;

    constructor(private db: AngularFirestore) {
        this.journalCollection = this.db.collection<Journal>('journals');

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

    getJournals() {
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
