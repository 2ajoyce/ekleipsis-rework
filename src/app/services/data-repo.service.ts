import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { TeamFeedback } from '../models/team-feedback';
import { AuthenticationService } from './authentication.service';
import { async } from 'rxjs/scheduler/async';
import { Observable } from 'rxjs/Observable';
import { UserDetails } from '../models/user-details';

@Injectable()
export class DataRepoService {
  userList: FirebaseListObservable<any[]>;
  teamFeedbackNotes: FirebaseListObservable<any[]>;
  managers: UserDetails[] = Array<UserDetails>();
  subordinates: FirebaseListObservable<any[]>;
  teamMembers: UserDetails[] = Array<UserDetails>();
  userDetails: UserDetails;

  constructor(public db: AngularFireDatabase,
              public authService: AuthenticationService) {
    this.userList = this.db.list('/users');
    authService.user.subscribe(user => {
      const userId = user ? user.uid.toString() : '';

      this.teamFeedbackNotes = this.getTeamFeedbackNotes(userId);
      this.subordinates = this.getSubordinates(userId);

      this.getManagers(userId).subscribe(managers => {
        managers.forEach(manager => {
          this.getSubordinates(manager.$value).subscribe(subordinates => {
            subordinates.forEach(subordinate => {
              this.getUserDetails(subordinate.$value).subscribe(teamMember => {
                this.teamMembers.push(teamMember);
              });
            });
          });
        });
      });

      this.getUserDetails(userId).subscribe(userDetails => {
        this.userDetails = new UserDetails(userDetails.$key, userDetails.email, userDetails.firstName, userDetails.lastName);
      });
    });
  }

  public getUserDetails(userId: string): FirebaseObjectObservable<any> {
    return this.db.object('/users/' + userId);
  }

  public getSubordinates(userId: string): FirebaseListObservable<any[]> {
    return this.db.list('/subordinates/' + userId);
  }

  public getTeamFeedbackNotes(userId: string): FirebaseListObservable<any[]> {
    return this.db.list('/teamFeedbackNotes/' + userId);
  }

  public getManagers(userId: string): FirebaseListObservable<any> {
    return this.db.list('/managers/' + userId);
  }
}
