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

    private habits: Observable<Habit[]>;
    private sundayHabits: Observable<Habit[]>;
    private mondayHabits: Observable<Habit[]>;
    private tuesdayHabits: Observable<Habit[]>;
    private wednesdayHabits: Observable<Habit[]>;
    private thursdayHabits: Observable<Habit[]>;
    private fridayHabits: Observable<Habit[]>;
    private saturdayHabits: Observable<Habit[]>;

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

    getBySunday() {
        this.habitsCollection = this.db.collection('habits', ref => ref.where('sunday', '==', true));

        this.sundayHabits = this.habitsCollection.snapshotChanges().pipe(
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
        this.habitsCollection = this.db.collection('habits', ref => ref.where('monday', '==', true));

        this.mondayHabits = this.habitsCollection.snapshotChanges().pipe(
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
        this.habitsCollection = this.db.collection('habits', ref => ref.where('tuesday', '==', true));

        this.tuesdayHabits = this.habitsCollection.snapshotChanges().pipe(
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
        this.habitsCollection = this.db.collection('habits', ref => ref.where('wednesday', '==', true));

        this.wednesdayHabits = this.habitsCollection.snapshotChanges().pipe(
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
        this.habitsCollection = this.db.collection('habits', ref => ref.where('thursday', '==', true));

        this.thursdayHabits = this.habitsCollection.snapshotChanges().pipe(
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
        this.habitsCollection = this.db.collection('habits', ref => ref.where('friday', '==', true));

        this.fridayHabits = this.habitsCollection.snapshotChanges().pipe(
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
        this.habitsCollection = this.db.collection('habits', ref => ref.where('saturday', '==', true));

        this.saturdayHabits = this.habitsCollection.snapshotChanges().pipe(
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