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
  styles: [
    `
      header {
        text-align: center;
        margin: 3rem auto;
      }

      header img {
        width: 5rem;
        height: 5rem;
        object-fit: contain;
        background-color: transparent;
      }

      header h1 {
        font-size: 1.5rem;
      }
    `,
  ],
})
export class HeaderComponent {}
