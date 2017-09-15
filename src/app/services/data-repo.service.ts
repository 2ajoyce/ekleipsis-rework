import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TeamFeedback } from '../models/team-feedback';
import { AuthenticationService } from './authentication.service';
import { async } from 'rxjs/scheduler/async';
import { Observable } from 'rxjs/Observable';
import { UserDetails } from '../models/user-details';

@Injectable()
export class DataRepoService {
  userList: FirebaseListObservable<any[]>;
  teamFeedbackNotes: FirebaseListObservable<any[]>;
  userDetails: UserDetails;

  constructor(public db: AngularFireDatabase,
              public authService: AuthenticationService) {
    authService.user.subscribe(user => {
      this.userList = this.db.list('/users');
      if (user) {
        this.db.object('/users/' + user.uid.toString()).subscribe(x => {
          if (x) {
            this.userDetails = new UserDetails(x.email, x.firstName, x.lastName);
          }
        });

        this.teamFeedbackNotes = this.db.list('/teamFeedbackNotes/' + user.uid.toString());
      }
    });
  }
}
