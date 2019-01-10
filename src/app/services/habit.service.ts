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
    incomplete: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class HabitService {
    private habitsCollection: AngularFirestoreCollection<Habit>;

    private habits: Observable<Habit[]>;

    constructor(db: AngularFirestore) {
        this.habitsCollection = db.collection<Habit>('habits');

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
}