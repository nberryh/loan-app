// Name: Nolan Berryhill
// File: app-routing.module.ts
// Date: 12/10/2023
// Description: TS file for app-routing

// Angular specific imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components import
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Routes for routing paths
const routes: Routes = [
  {
    path:'',
    component: LoanCalculatorComponent
  },
  {
    path:'loan-calculator',
    component: LoanCalculatorComponent
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'contact-us',
    component: ContactUsComponent
  }
];

// Imports and exports for NgModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// Export the AppRoutingModule
export class AppRoutingModule { }
