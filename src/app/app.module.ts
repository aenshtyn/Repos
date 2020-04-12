import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FindComponent } from './find/find.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    FindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule,
    NgProgressModule.forRoot(),
   NgProgressHttpClientModule

  ],
  providers: [GithubRequestService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
