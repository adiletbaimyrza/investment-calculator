import { Component } from "@angular/core"
import { HeaderComponent } from "../components/header/header.component"

@Component({
  selector: "app-root",
  template: `<app-header />`,
  imports: [HeaderComponent],
})
export class AppComponent {}
