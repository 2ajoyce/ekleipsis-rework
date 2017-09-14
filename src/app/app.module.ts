import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataRepoService } from './services/data-repo.service';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginComponent } from './components/login/login.component';
import {
  MdButtonModule,
  MdCardModule,
  MdDialogModule,
  MdInputModule,
  MdListModule,
  MdToolbarModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
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
export class AppModule {
}
