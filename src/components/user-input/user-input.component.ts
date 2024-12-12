import { Component, EventEmitter, Output } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { AnnualData } from "./annual-data.model"

@Component({
  selector: "app-user-input",
  imports: [FormsModule],
  template: `
    <form (ngSubmit)="onSubmit()">
      <div class="input-group">
        <div>
          <label for="Initial investment">Initial investment</label
          ><input
            type="number"
            name="Initial investment"
            [(ngModel)]="initialInvestment"
          />
        </div>
        <div>
          <label for="Annual investment">Annual investment</label
          ><input
            type="number"
            name="Annual investment"
            [(ngModel)]="annualInvestment"
          />
        </div>
      </div>
      <div class="input-group">
        <div>
          <label for="Expected return">Expected return</label
          ><input
            type="number"
            name="Expected return"
            [(ngModel)]="expectedReturn"
          />
        </div>
        <div>
          <label for="Duration">Duration</label
          ><input type="number" name="Duration" [(ngModel)]="duration" />
        </div>
      </div>
      <button type="submit">Calculate</button>
    </form>
  `,
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  initialInvestment = 0
  annualInvestment = 0
  expectedReturn = 0
  duration = 0
  @Output() calculated = new EventEmitter<AnnualData[]>()

  onSubmit() {
    const annualDataArray = this.calculateInvestmentResults()
    this.calculated.emit(annualDataArray)
  }

  calculateInvestmentResults() {
    const annualDataArray = []
    let investmentValue = this.initialInvestment

    for (let i = 0; i < this.duration; i++) {
      const year = i + 1
      const interestEarnedInYear = investmentValue * (this.expectedReturn / 100)
      investmentValue += interestEarnedInYear + this.annualInvestment
      const totalInterest =
        investmentValue - this.annualInvestment * year - this.initialInvestment
      annualDataArray.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          this.initialInvestment + this.annualInvestment * year,
      })
    }

    return annualDataArray
  }
}
