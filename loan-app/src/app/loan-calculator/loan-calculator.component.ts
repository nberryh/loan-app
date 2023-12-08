import { Component } from '@angular/core';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrl: './loan-calculator.component.scss'
})
export class LoanCalculatorComponent {
  loanAmount: number;
  interestRate: number;
  numberOfYears: number;
  monthlyPayment: number;
  totalInterestPaid: number;

  calculateLoan() {
    const r = this.interestRate / 12 / 100;
    const n = this.numberOfYears * 12;

    this.monthlyPayment = (this.loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    this.totalInterestPaid = this.monthlyPayment * n - this.loanAmount;
  }
}
