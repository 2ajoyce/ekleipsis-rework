import { Component, Injectable } from '@angular/core';
import { DataRepoService } from './services/data-repo.service';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  dataRepoService: DataRepoService;
  authenticationService: AuthenticationService;

  constructor(
    dataRepoService: DataRepoService,
    authenticationService: AuthenticationService,
  ) {
    this.dataRepoService = dataRepoService;
    this.authenticationService = authenticationService;
  }
}
