import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: RentPropertyComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'list-property', component: PropertyListComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: PropertyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
