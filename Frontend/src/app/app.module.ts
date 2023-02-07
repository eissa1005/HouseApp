import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {DatePipe} from '@angular/common'
import { AS } from './services/AS'

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { RegisterComponent } from './user/register/register.component'
import { LoginComponent  } from './user/login/login.component';
import { Houseservice } from './services/Houseservice';
import { AlertifyService } from './services/AlertifyService';
import { AuthService } from './services/AuthService';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyCardComponent,
    PropertyListComponent,
    PropertyDetailComponent,
    RentPropertyComponent,
    RegisterComponent,
    LoginComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
  ],
  providers: [AS,DatePipe,Houseservice,AuthService,AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
