import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routes';
import {UserComponent} from './user/user.component';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {UserResolver} from "./user/user.resolver";

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
  providers: [
    UserResolver,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
