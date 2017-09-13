import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { TeamFeedback } from './team-feedback';
import { AuthenticationService } from './authentication.service';
import { async } from 'rxjs/scheduler/async';

@Injectable()
export class DataRepoService {
  userList: FirebaseListObservable<any[]>;

  constructor(
    public db: AngularFireDatabase,
    public authService: AuthenticationService
  ) {
    this.userList = this.db.list('/users');
  }

  public async getTeamFeedback() {
    const user = await this.authService.user;
    user.subscribe(result => {
      return this.db.list('/teamFeedbackNotes/' + result.uid);
    });
  }
}
