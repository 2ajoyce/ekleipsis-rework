import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    public dialogRef: MdDialogRef<LoginFormComponent>
  ) {
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    this.authService.login(form.email, form.password);
    this.dialogRef.close();
  }
}
