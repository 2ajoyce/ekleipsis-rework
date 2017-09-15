import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../../services/authentication.service';
import { DataRepoService } from '../../services/data-repo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public dataRepoService: DataRepoService,
    public dialog: MdDialog
  ) { }

  ngOnInit() {
  }

  openLoginDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The login dialog was closed');
    });
  }
}
