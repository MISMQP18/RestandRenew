import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface UserID {
    userID: number;
}

@Injectable({
  providedIn: 'root'
})
export class IdService {

  userID: string;

  private userCollection: AngularFirestoreCollection<UserID>;

  private users: Observable<UserID[]>;

  constructor(private db: AngularFirestore) {
      this.userCollection = this.db.collection('ids');

      this.users = this.userCollection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(a => {
                  const data = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return { id, ...data };
              });
          })
      );
  }

  getIDs(globalID) {
      this.userCollection = this.db.collection('habits', ref => ref.where('userID', '==', globalID));

      this.users = this.userCollection.snapshotChanges().pipe(
          map(actions => {
              return actions.map(a => {
                  const data = a.payload.doc.data();
                  const id = a.payload.doc.id;
                  return { id, ...data };
              });
          })
      );

      return this.users;
  }

  getID(id) {
      return this.userCollection.doc<UserID>(id).valueChanges();
  }

  updateID(userid: UserID, id: string) {
      return this.userCollection.doc(id).update(userid);
  }

  addID(userid: UserID) {
      return this.userCollection.add(userid);
  }

  removeID(id) {
      return this.userCollection.doc(id).delete();
  }
}
