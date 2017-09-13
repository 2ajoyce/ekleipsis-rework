import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataRepoService } from './data-repo.service';
import { AuthenticationService } from './authentication.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IterateOverObjectPipe } from './iterate-over-object.pipe';
import { LoginComponent } from './login/login.component';
import {
  MdButton, MdButtonModule, MdCardModule, MdDialogModule, MdInputModule, MdListModule, MdMenuModule,
  MdToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    IterateOverObjectPipe,
    LoginComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ekleipsis'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    MdInputModule,
    FormsModule,
    MdDialogModule,
    MdToolbarModule,
    MdButtonModule,
    MdListModule,
    MdCardModule,
  ],
  providers: [
    AuthenticationService,
    DataRepoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
