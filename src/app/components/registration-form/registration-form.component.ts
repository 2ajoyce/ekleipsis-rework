import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    public dialogRef: MdDialogRef<RegistrationFormComponent>
  ) { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    if (form.password === form.passworVerify) {
      this.authService.register(form.email, form.password);
    }
    this.dialogRef.close();
  }
}
