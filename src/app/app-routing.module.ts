import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'loginpage', component: LoginpageComponent },
  { path: 'registrationpage', component: RegistrationpageComponent },
  { path: 'employee-registration', component: EmployeeRegistrationComponent },
  { path: 'employee-listing', component: EmployeeListingComponent },
  { path: '**', redirectTo: 'employee-registration', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
