import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataRepoService } from './services/data-repo.service';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginFormComponent } from './components/login-form/login-form.component';
import {
  MdButtonModule,
  MdCardModule, MdCheckboxModule,
  MdDialogModule,
  MdInputModule,
  MdListModule,
  MdToolbarModule,
  MdAutocompleteModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { CallbackPipe } from './pipes/callback.pipe';
import { TeamFeedbackFormComponent } from './components/team-feedback-form/team-feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    ListComponent,
    RegistrationFormComponent,
    CallbackPipe,
    TeamFeedbackFormComponent
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
    MdCheckboxModule,
    MdAutocompleteModule,
  ],
  providers: [
    AuthenticationService,
    DataRepoService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginFormComponent,
    RegistrationFormComponent,
    TeamFeedbackFormComponent
  ]
})
export class AppModule {
}
