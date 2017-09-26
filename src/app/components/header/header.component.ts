import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginFormComponent } from '../login-form/login-form.component';
import { AuthenticationService } from '../../services/authentication.service';
import { DataRepoService } from '../../services/data-repo.service';
import { RegistrationFormComponent } from '../registration-form/registration-form.component';
import { TeamFeedbackFormComponent } from '../team-feedback-form/team-feedback-form.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authService: AuthenticationService,
              public dataRepoService: DataRepoService,
              public dialog: MdDialog) {
  }

  ngOnInit() {
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginFormComponent, {
      width: '250px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    // console.log('The login-form dialog was closed');
    // });
  }

  openRegisterDialog(): void {
    let dialogRef = this.dialog.open(RegistrationFormComponent, {
      width: '250px'
    });
  }

  openTeamFeedbackFormDialog(): void {
    let dialogRef = this.dialog.open(TeamFeedbackFormComponent, {
      width: '250px'
    });
  }
}
