import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import {UserComponent} from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
  ],
  imports: [
    AuthModule,
    RouterModule.forRoot(rootRouterConfig, {useHash: false}),
    BrowserModule,
    ReactiveFormsModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
