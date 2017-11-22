import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';

import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';
import { ShoppingComponent } from './shopping/shopping.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import {CanActivateService} from "./services/can-activate.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe,
    ShoppingComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    CribsService,
    UtilService,
    CanActivateService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
