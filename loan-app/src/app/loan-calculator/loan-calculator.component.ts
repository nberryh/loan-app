// Name: Nolan Berryhill
// File: loan-calculator.component.ts
// Date: 12/17/2023
// Description: TS file for app

// Angular specific imports
import { Component } from '@angular/core';

// selector, templateUrl, styleUrl for Component
@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss'
})

// Export LoanCalculatorComponent
export class LoanCalculatorComponent {

  // Give variables their assignment of number value
  loanAmount!: number;
  interestRate!: number;
  numberOfYears!: number;
  monthlyPayment: number | undefined;
  totalInterestPaid: number | undefined;

  // calculate Loan with monthly payment and total interest
  calculateLoan() {
    const r = this.interestRate / 12 / 100;
    const n = this.numberOfYears * 12;

    this.monthlyPayment = (this.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    this.totalInterestPaid = this.monthlyPayment * n - this.loanAmount;
  }
}
