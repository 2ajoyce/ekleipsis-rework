import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    public dialogRef: MdDialogRef<RegisterComponent>
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
