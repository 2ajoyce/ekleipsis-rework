import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { DataRepoService } from '../../services/data-repo.service';

@Component({
  selector: 'app-team-feedback-form',
  templateUrl: './team-feedback-form.component.html',
  styleUrls: ['./team-feedback-form.component.css']
})
export class TeamFeedbackFormComponent implements OnInit {

  constructor(
    public dialogRef: MdDialogRef<TeamFeedbackFormComponent>,
    public dataRepoService: DataRepoService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.dialogRef.close();
  }
}
