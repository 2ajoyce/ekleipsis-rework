import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class DataRepoService {
  db: AngularFireDatabase;
  userList: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.userList = this.db.list('/users');
  }
}
