import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import Query = firebase.database.Query;

@Injectable()
export class DataRepoService {
  db: AngularFireDatabase;
  users: FirebaseObjectObservable<any[]>;
  userList: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.db = db;
    this.users = this.db.object('/users');
    this.userList = this.db.list('/users');
  }
}
