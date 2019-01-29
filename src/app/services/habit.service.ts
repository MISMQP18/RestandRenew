import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IdService} from './id.service';
import {LoadingController, NavController} from '@ionic/angular';

export interface Habit {
    id?: string;
    task: string;
    priority: number;
    createdAt: number;
    name: string;
    notifications: boolean;
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    time: number;
    on: boolean;
    archive: boolean;
    incomplete: boolean;
    userID: string;
}

@Injectable({
    providedIn: 'root'
})
export class HabitService {

    private habitsCollection: AngularFirestoreCollection<Habit>;
    private habits: Observable<Habit[]>;

    private sundayCollection: AngularFirestoreCollection<Habit>;
    private mondayCollection: AngularFirestoreCollection<Habit>;
    private tuesdayCollection: AngularFirestoreCollection<Habit>;
    private wednesdayCollection: AngularFirestoreCollection<Habit>;
    private thursdayCollection: AngularFirestoreCollection<Habit>;
    private fridayCollection: AngularFirestoreCollection<Habit>;
    private saturdayCollection: AngularFirestoreCollection<Habit>;

    private sundayIncompleteCollection: AngularFirestoreCollection<Habit>;
    private mondayIncompleteCollection: AngularFirestoreCollection<Habit>;
    private tuesdayIncompleteCollection: AngularFirestoreCollection<Habit>;
    private wednesdayIncompleteCollection: AngularFirestoreCollection<Habit>;
    private thursdayIncompleteCollection: AngularFirestoreCollection<Habit>;
    private fridayIncompleteCollection: AngularFirestoreCollection<Habit>;
    private saturdayIncompleteCollection: AngularFirestoreCollection<Habit>;

    private sundayHabits: Observable<Habit[]>;
    private mondayHabits: Observable<Habit[]>;
    private tuesdayHabits: Observable<Habit[]>;
    private wednesdayHabits: Observable<Habit[]>;
    private thursdayHabits: Observable<Habit[]>;
    private fridayHabits: Observable<Habit[]>;
    private saturdayHabits: Observable<Habit[]>;

    private sundayIncompleteHabits: Observable<Habit[]>;
    private mondayIncompleteHabits: Observable<Habit[]>;
    private tuesdayIncompleteHabits: Observable<Habit[]>;
    private wednesdayIncompleteHabits: Observable<Habit[]>;
    private thursdayIncompleteHabits: Observable<Habit[]>;
    private fridayIncompleteHabits: Observable<Habit[]>;
    private saturdayIncompleteHabits: Observable<Habit[]>;

    constructor(public globalID: IdService, private db: AngularFirestore, private loadingController: LoadingController) {

        this.habitsCollection = this.db.collection('habits');

        this.habits = this.habitsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );
    }

    getHabits(globalID) {
        this.habitsCollection = this.db.collection('habits', ref => ref.where('userID', '==', globalID));

        return this.habits = this.habitsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

    }

    getHabit(id) {
        return this.habitsCollection.doc<Habit>(id).valueChanges();
    }

    updateHabit(habit: Habit, id: string) {
        return this.habitsCollection.doc(id).update(habit);
    }

    addHabit(habit: Habit) {
        return this.habitsCollection.add(habit);
    }

    removeHabit(id) {
        return this.habitsCollection.doc(id).delete();
    }

    /*
    QUERIES
     */
    getBySunday(globalID) {
        this.sundayCollection = this.db.collection('habits', ref =>
            ref
                .where('sunday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.sundayHabits = this.sundayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.sundayHabits;
    }

    getByMonday(globalID) {
        this.mondayCollection = this.db.collection('habits', ref =>
            ref
                .where('monday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.mondayHabits = this.mondayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.mondayHabits;
    }

    getByTuesday(globalID) {
        this.tuesdayCollection = this.db.collection('habits', ref =>
            ref
                .where('tuesday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.tuesdayHabits = this.tuesdayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.tuesdayHabits;
    }

    getByWednesday(globalID) {
        this.wednesdayCollection = this.db.collection('habits', ref =>
            ref
                .where('wednesday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.wednesdayHabits = this.wednesdayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.wednesdayHabits;
    }

    getByThursday(globalID) {
        this.thursdayCollection = this.db.collection('habits', ref =>
            ref
                .where('thursday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.thursdayHabits = this.thursdayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.thursdayHabits;
    }

    getByFriday(globalID) {
        this.fridayCollection = this.db.collection('habits', ref =>
            ref
                .where('friday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.fridayHabits = this.fridayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.fridayHabits;
    }

    getBySaturday(globalID) {
        this.saturdayCollection = this.db.collection('habits', ref =>
            ref
                .where('saturday', '==', true)
                .where('userID', '==', globalID)
                .orderBy('time', 'desc')
                .orderBy('name', 'asc'));

        this.saturdayHabits = this.saturdayCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.saturdayHabits;
    }

    sundayIncomplete(globalID) {
        this.sundayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('sunday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.sundayIncompleteHabits = this.sundayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.sundayIncompleteHabits;
    }

    mondayIncomplete(globalID) {
        this.mondayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('monday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.mondayIncompleteHabits = this.mondayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.mondayIncompleteHabits;
    }

    tuesdayIncomplete(globalID) {
        this.tuesdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('tuesday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.tuesdayIncompleteHabits = this.tuesdayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.tuesdayIncompleteHabits;
    }

    wednesdayIncomplete(globalID) {
        this.wednesdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('wednesday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.wednesdayIncompleteHabits = this.wednesdayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.wednesdayIncompleteHabits;
    }

    thursdayIncomplete(globalID) {
        this.thursdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('thursday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.thursdayIncompleteHabits = this.thursdayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.thursdayIncompleteHabits;
    }

    fridayIncomplete(globalID) {
        this.fridayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('friday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.fridayIncompleteHabits = this.fridayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.fridayIncompleteHabits;
    }

    saturdayIncomplete(globalID) {
        this.saturdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('saturday', '==', true)
                .where('incomplete','==',true)
                .where('on','==',true)
                .where('userID', '==', globalID));

        this.saturdayIncompleteHabits = this.saturdayIncompleteCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.saturdayIncompleteHabits;
    }

    /**
     * getByFilters void function.
     * Get books collections by filter params
     * @param {string} size
     * @param {string} category
     * @param {string} author
     * @param {number} minPrice
     * @param {number} maxPrice
     * @memberof BookService

    getByFilters(size: string, category: string, author: string, minPrice: number, maxPrice: number) {
        return this.booksCollection = this.afs.collection<Book>('bookings', ref => {
            // Compose a query using multiple .where() methods
            return ref
                .where('size', '==', size)
                .where('category', '==', category)
                .where('author', '==', author)
                .where('price', '>', minPrice)
                .where('price', '<', maxPrice);
        });
    }
     */
}