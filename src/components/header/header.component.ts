import { Component } from "@angular/core"

@Component({
  selector: "app-header",
  imports: [],
  template: `
    <header>
      <img src="investment-calculator-logo.png" alt="Green money bag" />
      <h1>Investment Calculator</h1>
    </header>
  `,
  styleUrl: "./header.component.css",
})
export class HeaderComponent {}
