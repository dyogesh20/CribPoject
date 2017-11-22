import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {Routes, RouterModule} from "@angular/router";
import {CribListingComponent} from "./crib-listing/crib-listing.component";
import {LoginComponent} from "./login/login.component";
import {CanActivateService} from "./services/can-activate.service";


const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'crib',component:CribListingComponent,canActivate: [CanActivateService]},
  {path:'login',component:LoginComponent},
];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
