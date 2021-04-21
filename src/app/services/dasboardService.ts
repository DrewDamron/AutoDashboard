import { Injectable } from '@angular/core';
import { BaselineException } from '../models/baselineException';
import { DatabaseHost } from '../models/databaseHosts';
import { HttpClient } from '@angular/common/http';
import { Test } from '../models/test';
import { ExecutionMetric } from '../models/executionMetric';
import { TestSystem } from '../models/testSystem';
import { TestExecution } from '../models/testExecution';
import { TestMetric } from '../models/testMetric';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

    constructor(private httpClient: HttpClient) { }
      
    databaseHosts = [
          {
              "host": "uatdb95w92m7:6010",
              "dbType": "MySql",
              "environmentType": "non-prod",
              "testCount": 25,
              'lastExecutionDate': 'Jan 20, 2021'
          },
          {
              "host": "devdb3w106m7:6000",
              "dbType": "MySql",
              "environmentType": "dev",
              "testCount": 25,
              'lastExecutionDate': 'Jan 20, 2021'
          },
          {
              "host": "ATL1L-D64H353",
              "dbType": "MySql",
              "environmentType": "localhost",
              "testCount": 25,
              'lastExecutionDate': 'Jan 20, 2021'
          },
          {
              "host": "ATL1L-D64H353",
              "dbType": "MSSql",
              "environmentType": "localhost",
              "testCount": 25,
              'lastExecutionDate': 'Jan 20, 2021' 
          }
    ]
  
    testExecutions = [
      {
        "test": "Section Header 2.13 Ensure sa Login Account is set to Disabled",
        "executionDate": "03/08/2021 11:02pm",
        "host": "dev000001",
        "id": "1",
        "remediationNeeded": false,
        "remediationTook": "",
        "result": "pass",
        "steps": [
          {
            "duration": "0.005667209625244141",
            "name": "Then the \"sa\" account is removed on \"dev000001\"",
            "status": "pass"
          }
        ],
        "system": "mssql",
        "testDuration": "0.005877209625244141",
        "testId": "5"
      },
      {
        "test": "Section Header 2.11 Ensure Ensure non-standard ports are not used",
        "executionDate": "03/08/2021 11:02pm",
        "host": "dev000001",
        "id": "1",
        "remediationNeeded": false,
        "remediationTook": "",
        "result": "pass",
        "steps": [
          {
            "duration": "0.005667209625244141",
            "name": "Then SQL Server is configured to use non-standard ports",
            "status": "pass"
          }
        ],
        "system": "mssql",
        "testDuration": "0.005877209625244141",
        "testId": "6"
      }
    ]

    getTestAllExecutionMetrics(){
        let allMetrics = this.httpClient.get<ExecutionMetric[]>("https://kf460t61l8.execute-api.us-west-1.amazonaws.com/dev/get");
        return allMetrics;
    }
    
    getTestResults() {
        return this.httpClient.get<TestExecution[]>("https://irjzeor466.execute-api.us-west-1.amazonaws.com/dev/get");
    }

    getAllTestMetrics() {
        //return this.httpClient.get<Test[]>("https://vp4fjvs6vb.execute-api.us-west-1.amazonaws.com/dev/get");
        let testMetrics: TestMetric[] = [];
        
        let tm1: TestMetric = new TestMetric();
        tm1.system = "Public Security";
        tm1.testCount = 254
        testMetrics.push(tm1);

        let tm2: TestMetric = new TestMetric();
        tm2.system = "Civil Identity";
        tm2.testCount = 198
        testMetrics.push(tm2);

        let tm3: TestMetric = new TestMetric();
        tm3.system = "Digital";
        tm3.testCount = 140
        testMetrics.push(tm3);
        return testMetrics;
    }

    getPSTestMetrics() {
      let testMetrics: TestMetric[] = [];
      
      let tm1: TestMetric = new TestMetric();
      tm1.system = "MBIS";
      tm1.testCount = 121
      testMetrics.push(tm1);

      let tm2: TestMetric = new TestMetric();
      tm2.system = "TPE/LiveScan";
      tm2.testCount = 59
      testMetrics.push(tm2);

      let tm3: TestMetric = new TestMetric();
      tm3.system = "M-Face";
      tm3.testCount = 50
      testMetrics.push(tm3);

      let tm4: TestMetric = new TestMetric();
      tm4.system = "UES";
      tm4.testCount = 24
      testMetrics.push(tm4);
      return testMetrics;
    }

    getCITestMetrics() {
      let testMetrics: TestMetric[] = [];
      
      let tm1: TestMetric = new TestMetric();
      tm1.system = "Web Enrollment";
      tm1.testCount = 121
      testMetrics.push(tm1);

      let tm2: TestMetric = new TestMetric();
      tm2.system = "Back Office";
      tm2.testCount = 200
      testMetrics.push(tm2);

      let tm3: TestMetric = new TestMetric();
      tm3.system = "Testing";
      tm3.testCount = 50
      testMetrics.push(tm3);
      return testMetrics;
    }

    getDGTestMetrics() {
      let testMetrics: TestMetric[] = [];
      
      let tm1: TestMetric = new TestMetric();
      tm1.system = "MID";
      tm1.testCount = 41
      testMetrics.push(tm1);

      let tm2: TestMetric = new TestMetric();
      tm2.system = "Proofing";
      tm2.testCount = 58
      testMetrics.push(tm2);

      return testMetrics;
    }

    getSystems() {
      //return this.httpClient.get<TestSystem[]>("https://tff01d8t22.execute-api.us-west-1.amazonaws.com/dev/get");
      let testSystems: TestSystem[] = [];
      
      let ts1: TestSystem = new TestSystem();
      ts1.id = "1";
      ts1.name = "Public Security";
      ts1.shortName = "PS";
      testSystems.push(ts1);

      let ts2: TestSystem = new TestSystem();
      ts2.id = "2";
      ts2.name = "Civil Identity";
      ts2.shortName = "CI";
      testSystems.push(ts2);

      let ts3: TestSystem = new TestSystem();
      ts3.id = "3";
      ts3.name = "Digital";
      ts3.shortName = "DG";
      testSystems.push(ts3);
      
      return testSystems;
    }
  
    getDatabaseHosts() {
      let jsonObject: any = JSON.parse(JSON.stringify(this.databaseHosts));
      let results: DatabaseHost[] = <DatabaseHost[]>jsonObject;
      return results;
    }
  
    getJiraBaselineExceptions() {
      var exceptions: BaselineException[] = []; 
      return exceptions
    }

    getTestExecutionData() {
      let jsonObject: any = JSON.parse(JSON.stringify(this.testExecutions));
      let results: TestExecution[] = <TestExecution[]>jsonObject;
      return results;
    }
  }