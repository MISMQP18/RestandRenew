import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
}

@Injectable({
    providedIn: 'root'
})
export class HabitService {
    private habitsCollection: AngularFirestoreCollection<Habit>;

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

    private habits: Observable<Habit[]>;

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

    constructor(private db: AngularFirestore) {
        this.habitsCollection = this.db.collection<Habit>('habits');

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

    getHabits() {
        this.habits = this.habitsCollection.snapshotChanges().pipe(
            map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data();
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
            })
        );

        return this.habits;
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

    getBySunday() {
        this.sundayCollection = this.db.collection('habits', ref => ref.where('sunday', '==', true));

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

    getByMonday() {
        this.mondayCollection = this.db.collection('habits', ref => ref.where('monday', '==', true));

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

    getByTuesday() {
        this.tuesdayCollection = this.db.collection('habits', ref => ref.where('tuesday', '==', true));

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

    getByWednesday() {
        this.wednesdayCollection = this.db.collection('habits', ref => ref.where('wednesday', '==', true));

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

    getByThursday() {
        this.thursdayCollection = this.db.collection('habits', ref => ref.where('thursday', '==', true));

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

    getByFriday() {
        this.fridayCollection = this.db.collection('habits', ref => ref.where('friday', '==', true));

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

    getBySaturday() {
        this.saturdayCollection = this.db.collection('habits', ref => ref.where('saturday', '==', true));

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

    sundayIncomplete() {
        this.sundayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('sunday', '==', true)
                .where('incomplete','==',true));

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

    mondayIncomplete() {
        this.mondayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('monday', '==', true)
                .where('incomplete','==',true));

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

    tuesdayIncomplete() {
        this.tuesdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('tuesday', '==', true)
                .where('incomplete','==',true));

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

    wednesdayIncomplete() {
        this.wednesdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('wednesday', '==', true)
                .where('incomplete','==',true));

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

    thursdayIncomplete() {
        this.thursdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('thursday', '==', true)
                .where('incomplete','==',true));

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

    fridayIncomplete() {
        this.fridayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('friday', '==', true)
                .where('incomplete','==',true));

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

    saturdayIncomplete() {
        this.saturdayIncompleteCollection = this.db.collection('habits', ref =>
            ref
                .where('saturday', '==', true)
                .where('incomplete','==',true));

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