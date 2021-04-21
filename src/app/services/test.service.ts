import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class TestService {

  constructor() { }
  tests: any;
  public GetTests(): any{
    this.tests = [];
    var test1 = {
      Description: "Section Header: 1.1 Ensure Latest SQL Server Service Packs and Hotfixes are Installed",
      LastExecutionDate: "02/10/2021",
      Passed: true,
      Result: "Passed",
      ExecutionTime: "316 ms",
      Steps: [
        {
          Name: "Then the installed servicepack 'RTM' is installed on ATL1L-D64H353",
          Result: "Passed",
          ExecutionTime: "112 ms"
        },
        {
          Name: "And the installed hotfix '15.0.2000.5' is installed on ATL1L-D64H353",
          Result: "Passed",
          ExecutionTime: "204 ms"
        }
      ]
    };
    this.tests.push(test1);

    var test2 = {
      Description: "Section Header: 2.2 Ensure CLR Enabled Server Configuration Option is set to 0",
      LastExecutionDate: "02/10/2021",
      Passed: true,
      Result: "Passed",
      ExecutionTime: "15 ms",
      Steps: [
        {
          Name: "Then the 'clr enabled' configuration is set to '0' on ATL1L-D64H353",
          Result: "Passed",
          ExecutionTime: "15 ms"
        }
      ]
    };
    this.tests.push(test2);

    var test3 = {
      Description: "Section Header: 2.3 Ensure Cross DB Ownership Chaining Server Configuration Option is set to 0",
      LastExecutionDate: "02/10/2021",
      Passed: false,
      Result: "Failed",
      ExecutionTime: "236 ms",
      Steps: [
        {
          Name: "Then the 'Cross db ownership chaining' configuration is set to '0' on ATL1L-D64H353",
          Result: "Failed",
          ExecutionTime: "105 ms"
        }
      ]
    };
    this.tests.push(test3);

    var test4 = {
      Description: "Section Header: 3.3 Ensure Cross DB Ownership Chaining Server Configuration Option is set to 0",
      LastExecutionDate: "02/10/2021",
      Passed: true,
      Result: "Passed",
      ExecutionTime: "236 ms",
      Steps: [
        {
          Name: "Then the 'Cross db ownership chaining' configuration is set to '0' on ATL1L-D64H353",
          Result: "Passed",
          ExecutionTime: "105 ms"
        }
      ]
    };
    this.tests.push(test4);
    return this.tests;
  }
}
