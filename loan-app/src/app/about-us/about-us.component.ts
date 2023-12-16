// Name: Nolan Berryhill
// File: about-us.component.ts
// Date: 12/10/2023
// Description: TS file for app

// Angular specific imports
import { Component } from '@angular/core';

// selector, templateUrl, styleUrl for Component
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})

// Export AboutUsComponent
export class AboutUsComponent {
  aboutText: string = `Introducing "Loaner," a cutting-edge loan company app managed and operated by graduates from the illustrious Ravenclaw house at Hogwarts School of Witchcraft and Wizardry. Born from a fusion of financial acumen and the wit and wisdom emblematic of Ravenclaw, this app combines magical innovation with a commitment to empowering users.
  Loaner leverages the keen intelligence of its Ravenclaw founders to create an application that simplifies the loan process and fosters a community of financially savvy individuals. The app boasts a user-friendly interface, enchantingly smooth transaction processes, and a personalized financial wizard to guide users through their borrowing journey.
  What sets Loaner apart is its commitment to educating borrowers. The Ravenclaw ethos of valuing knowledge is woven into the app's DNA. Borrowers are not merely customers but students on a financial learning adventure. The app offers interactive tutorials on responsible borrowing intelligent investment strategies and even incorporates magical elements for a delightful user experience.
  Loaner, orchestrated by Ravenclaw graduates, merges financial brilliance and magical finesse. With tailored financial guides, seamless transactions, and enchanting security measures, it's more than an app; it's a wizarding academy for wise borrowing.
  Powered by Ravenclaw graduates' meticulous attention to detail, Loaner employs state-of-the-art security spells to safeguard user information. Privacy is paramount, ensuring users can confidently navigate their financial endeavors without fear of prying eyes.
  In the world of magical finance, Loaner, run by Ravenclaw alumni, stands as a beacon of wisdom, offering not just loans but a comprehensive financial education. It's where the magic of knowledge meets the practicality of economic empowerment.`
}
