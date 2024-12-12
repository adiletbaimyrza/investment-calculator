import { Component, Input } from "@angular/core"
import { AnnualData } from "../user-input/annual-data.model"

@Component({
  selector: "app-investment-result",
  imports: [],
  template: `
    <table>
      @if (annualDataArray.length > 0) {

      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        @for (data of annualDataArray; track data.year) {
        <tr>
          <td>
            {{ data.year }}
          </td>
          <td>
            {{ data.valueEndOfYear }}
          </td>
          <td>
            {{ data.interest }}
          </td>
          <td>
            {{ data.totalInterest }}
          </td>
          <td>
            {{ data.totalAmountInvested }}
          </td>
        </tr>
        }
      </tbody>

      } @else { Please enter some values and press "Calculate" }
    </table>
  `,
  styleUrl: "./investment-result.component.css",
})
export class InvestmentResultComponent {
  @Input() annualDataArray!: AnnualData[]
}
