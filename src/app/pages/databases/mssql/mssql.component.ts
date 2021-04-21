import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { StringLengthRule } from "devextreme/ui/validation_engine";
import { TestService } from "src/app/services/test.service";

class Test{
  Description: string;
  LastExecutionDate: string;
  Passed: boolean;
  Result: string;
  Steps: Step[];
  ExecutionTime: string;
}
class Step{
  Name: string;
  Result: string;
  ExecutionTime: string;
}

@Component({
  selector: "app-mssql",
  templateUrl: "mssql.component.html"
})
export class MsSqlComponent implements OnInit {  
  constructor(private testService: TestService) {}
  public tests: any;

  ngOnInit() {
    this.tests = this.testService.GetTests();
    console.log(this.tests);
  }
}
