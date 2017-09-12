import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { LoginComponent } from './login/login.component';
import { MdDialog } from '@angular/material';

@Injectable()
export class AuthenticationService {
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
    public dialog: MdDialog
  ) {
    this.user = afAuth.authState;
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  openLoginDialog(): void {
    let email = '';
    let password = '';
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
