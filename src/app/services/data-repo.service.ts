import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TeamFeedback } from '../models/team-feedback';
import { AuthenticationService } from './authentication.service';
import { async } from 'rxjs/scheduler/async';

@Injectable()
export class DataRepoService {
  userList: FirebaseListObservable<any[]>;
  teamFeedbackNotes: FirebaseListObservable<any[]>;
  userDetails: FirebaseListObservable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    public authService: AuthenticationService
  ) {
    authService.user.subscribe(user => {
      this.userList = this.db.list('/users');
      if (user) {
        this.userDetails = this.db.list('/users/' + user.uid.toString());
        this.teamFeedbackNotes = this.db.list('/teamFeedbackNotes/' + user.uid.toString());
        // this.teamFeedbackNotes = this.db.list('/teamFeedbackNotes/teamFeedbackNotes/5PhbGyIEXYc8kamEHgrYzOZrWTx1');
      }
    });
  }
}
