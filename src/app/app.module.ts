import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/property-card/property-card.component';
import { PropertyListComponent } from './Property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './Property/add-property/add-property.component';
import { PropertyDetailComponent } from './Property/property-detail/property-detail.component';
import { UserLoginComponent } from './User/user-login/user-login.component';
import { UserRegistrationComponent } from './User/user-registration/user-registration.component';
import { UserService } from './services/user.service';


const appRoutes: Routes = [
  {path:'', component : PropertyListComponent},
  {path:'rent-property', component : PropertyListComponent},
  {path:'add-property', component : AddPropertyComponent},
  {path:'property-detail/:id', component : PropertyDetailComponent},
  {path:'user/login', component : UserLoginComponent},
  {path:'user/register', component : UserRegistrationComponent},
  {path:'**', component : PropertyListComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HousingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
