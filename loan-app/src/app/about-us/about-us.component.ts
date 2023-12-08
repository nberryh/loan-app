import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
  aboutText: string = `Loan_App is a magical financial institution founded by wizards and witches from House Gryffindor.
  We are dedicated to providing you with the best loan payment estimates using our wizardry-powered calculator.`
}
