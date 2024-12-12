import { Component } from "@angular/core"
import { HeaderComponent } from "../components/header/header.component"
import { UserInputComponent } from "../components/user-input/user-input.component"
import { AnnualData } from "../components/user-input/annual-data.model"
import { InvestmentResultComponent } from "../components/investment-result/investment-result.component"

@Component({
  selector: "app-root",
  template: `
    <app-header />
    <app-user-input (calculated)="onCalculated($event)" />
    <app-investment-result [annualDataArray]="annualDataArray" />
  `,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  annualDataArray: AnnualData[] = []

  onCalculated(annualDataArray: AnnualData[]) {
    this.annualDataArray = annualDataArray
  }
}
