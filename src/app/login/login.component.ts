import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authService: AuthenticationService;

  constructor(
    authService: AuthenticationService,
    public dialogRef: MdDialogRef<LoginComponent>
  ) {
    this.authService = authService;
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.authService.login(form.email, form.password);
    this.dialogRef.close();
  }
}
