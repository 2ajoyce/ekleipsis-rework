import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DataRepoService } from '../../services/data-repo.service';
import { UserDetails } from '../../models/user-details';

@Component({
  selector: 'app-team-feedback-form',
  templateUrl: './team-feedback-form.component.html',
  styleUrls: ['./team-feedback-form.component.css']
})
export class TeamFeedbackFormComponent implements OnInit {

  constructor(public dialogRef: MdDialogRef<TeamFeedbackFormComponent>,
              public dataRepoService: DataRepoService) {
  }

  ngOnInit() {
  }

  displayName(userDetails: UserDetails): string {
    return userDetails ? userDetails.firstName + ' ' + userDetails.lastName : '';
  }

  onSubmit(form: any) {
    this.dialogRef.close();
  }
}
