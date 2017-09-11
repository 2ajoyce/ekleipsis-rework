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

@NgModule({
  declarations: [
    AppComponent,
    IterateOverObjectPipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'ekleipsis'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
  ],
  providers: [
    AuthenticationService,
    DataRepoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
