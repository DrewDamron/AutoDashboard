import { AfterViewInit, Component, OnInit } from "@angular/core";
import Chart from "chart.js";
import { DashboardDataObjects } from "src/app/models/dashboardDataObjects";
import { DashboardService } from "src/app/services/dasboardService";
import { ChartOptionsUtils } from "../utils/ChartOptionsUtil";

class ActiveFailedTest{
  Description: string;
  FailingFor: string;
  System: string;
  FirstFailureDate: string;
  LastFailureDate: string;
  JiraID: string;
}

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, AfterViewInit {

  private chartOptionsUtil: ChartOptionsUtils;
  private dashBoardDataObjects: DashboardDataObjects = new DashboardDataObjects();
  
  constructor(private dashboardService: DashboardService) {
    this.chartOptionsUtil = new ChartOptionsUtils();
  }

  ngOnInit() {
    //Get all tests so we can map systems to number of tests for those systems
    this.dashBoardDataObjects.executionChartText = "All Test Executions";
    let testMetrics = this.dashboardService.getAllTestMetrics();
    testMetrics.forEach(testMetric => {
      this.dashBoardDataObjects.systemAllTestsBarLabels.push(testMetric.system);
      this.dashBoardDataObjects.systemTestsBarAllData.push(testMetric.testCount);
      this.dashBoardDataObjects.testCount += testMetric.testCount;
    });
    this.dashBoardDataObjects.orgTestsText = "All Tests (" + this.dashBoardDataObjects.testCount + ")";
    this.dashBoardDataObjects.systemTestsChartCanvas = document.getElementById("SystemTestsChart");
    this.dashBoardDataObjects.systemTestsChartCTX = this.dashBoardDataObjects.systemTestsChartCanvas.getContext("2d");
    this.dashBoardDataObjects.systemTestsChartData = new Chart(this.dashBoardDataObjects.systemTestsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), this.dashBoardDataObjects.systemTestsBarAllData, this.dashBoardDataObjects.systemAllTestsBarLabels));

    this.dashboardService.getTestAllExecutionMetrics().subscribe(
      metrics => {
        metrics.sort(function (a, b) { return Number(a.id) - Number(b.id); });
        this.dashBoardDataObjects.allExecutionData = metrics;
        this.dashBoardDataObjects.passFailFailed = 0;
        this.dashBoardDataObjects.passFailTotal = 0;
        metrics.forEach(metric => {
          this.dashBoardDataObjects.allTestExecutions.push(Number(metric.totalExecutions));
          this.dashBoardDataObjects.psTestExecutions.push(Number(metric.dbExecutions));
          this.dashBoardDataObjects.osTestExecutions.push(Number(metric.osExecutions));
          this.dashBoardDataObjects.wsTestExecutions.push(Number(metric.wsExecutions));
          this.dashBoardDataObjects.executionLineChartLabels.push(metric.exeuctionRange)
          this.dashBoardDataObjects.passFailFailed += (Number(metric.dbFails) + Number(metric.osFails) + Number(metric.wsFails));
          this.dashBoardDataObjects.passFailTotal += Number(metric.totalExecutions);
          this.dashBoardDataObjects.passFailPassed = this.dashBoardDataObjects.passFailTotal - this.dashBoardDataObjects.passFailFailed;
          this.calculatePercent();
          this.dashBoardDataObjects.pieChartDataSet = [this.dashBoardDataObjects.passFailPassed, this.dashBoardDataObjects.passFailFailed]
          this.dashBoardDataObjects.executionCount += Number(metric.totalExecutions);
        });
        
        let totalExecutionsCanvas: any = document.getElementById("totalExecutionsChart");
        let totalExecutionsCTX: any = totalExecutionsCanvas.getContext("2d");
        this.dashBoardDataObjects.totalExecutionsChartData = new Chart(totalExecutionsCTX, this.createLineGraph(this.chartOptionsUtil.getGradientChartOptionsConfigurationWithTooltipRed()));
        
        let passFailPercentCanvas: any = document.getElementById("passfailperc");
        let passFailPercentCTX: any = passFailPercentCanvas.getContext("2d");
        this.dashBoardDataObjects.passFailChartData = new Chart(passFailPercentCTX, this.chartOptionsUtil.createPieChart(["Pass", "Fail"], this.dashBoardDataObjects.pieChartDataSet, "Executions", ["#00c09d", "#e2e2e2"], false));
    });
    
    this.updateActiveFailedTests();
  }

  ngAfterViewInit() {
    let ciTestMetrics = this.dashboardService.getCITestMetrics();
    ciTestMetrics.forEach(metric => {
      this.dashBoardDataObjects.systemCITestsBarLabels.push(metric.system)
      this.dashBoardDataObjects.systemTestsBarCIData.push(metric.testCount);
    });

    let psTestMetrics = this.dashboardService.getPSTestMetrics();
    psTestMetrics.forEach(metric => {
      this.dashBoardDataObjects.systemPSTestsBarLabels.push(metric.system)
      this.dashBoardDataObjects.systemTestsBarPSData.push(metric.testCount);
    });

    let dgTestMetrics = this.dashboardService.getDGTestMetrics();
    dgTestMetrics.forEach(metric => {
      this.dashBoardDataObjects.systemDGTestsBarLabels.push(metric.system)
      this.dashBoardDataObjects.systemTestsBarDGData.push(metric.testCount);
    });
  }
s
  public updateOptions(clicked) {
    var executionsDataSet = [];
    var testDataSet = [];
    var testDataLabels = [];
    this.dashBoardDataObjects.allClicked = false;
    this.dashBoardDataObjects.psClicked = false;
    this.dashBoardDataObjects.ciClicked = false;
    this.dashBoardDataObjects.dgClicked = false;
    this.dashBoardDataObjects.passFailFailed = 0;
    this.dashBoardDataObjects.passFailTotal = 0;
    if (clicked == "allClicked") {
      this.dashBoardDataObjects.executionChartText = "All Test Executions";
      this.dashBoardDataObjects.allClicked = true;
      testDataLabels = this.dashBoardDataObjects.systemAllTestsBarLabels;
      executionsDataSet = this.dashBoardDataObjects.allTestExecutions;
      testDataSet = this.dashBoardDataObjects.systemTestsBarAllData;
      this.dashBoardDataObjects.allExecutionData.forEach(execution => {
        this.dashBoardDataObjects.passFailFailed += (Number(execution.dbFails) + Number(execution.osFails) + Number(execution.wsFails));
        this.dashBoardDataObjects.passFailTotal += Number(execution.totalExecutions);
      })
      let totalTests = 0;
      this.dashBoardDataObjects.systemTestsBarAllData.forEach(test =>{
        totalTests += test
      });
      this.dashBoardDataObjects.orgTestsText = "All Tests (" + totalTests + ")";

      //this.updateActiveFailedTests();
    }
    if (clicked == "psClicked") {
      this.dashBoardDataObjects.psClicked = true;
      this.dashBoardDataObjects.executionChartText = "Public Security Test Executions";
      testDataLabels = this.dashBoardDataObjects.systemPSTestsBarLabels;
      executionsDataSet = this.dashBoardDataObjects.psTestExecutions;
      testDataSet = this.dashBoardDataObjects.systemTestsBarPSData;
      this.dashBoardDataObjects.allExecutionData.forEach(execution => {
        this.dashBoardDataObjects.passFailFailed += Number(execution.dbFails);
        this.dashBoardDataObjects.passFailTotal += Number(execution.dbExecutions);
      })
      let totalTests = 0;
      this.dashBoardDataObjects.systemTestsBarPSData.forEach(test =>{
        totalTests += test
      });
      this.dashBoardDataObjects.orgTestsText = "Public Security Tests (" + totalTests + ")";
      //this.updateActiveFailedTests();
    }
    if (clicked == "ciClicked") {
      this.dashBoardDataObjects.ciClicked = true;
      this.dashBoardDataObjects.executionChartText = "Civil Identity Test Executions";
      executionsDataSet = this.dashBoardDataObjects.osTestExecutions;
      testDataSet = this.dashBoardDataObjects.systemTestsBarCIData;
      testDataLabels = this.dashBoardDataObjects.systemCITestsBarLabels;
      this.dashBoardDataObjects.allExecutionData.forEach(execution => {
        this.dashBoardDataObjects.passFailFailed += Number(execution.osFails);
        this.dashBoardDataObjects.passFailTotal += Number(execution.osExecutions);
      })
      let totalTests = 0;
      this.dashBoardDataObjects.systemTestsBarCIData.forEach(test =>{
        totalTests += test
      });
      this.dashBoardDataObjects.orgTestsText = "Civil Identity Tests (" + totalTests + ")";
    }
    if (clicked == "dgClicked") {
      this.dashBoardDataObjects.dgClicked = true;
      this.dashBoardDataObjects.executionChartText = "Digital Test Executions";
      executionsDataSet = this.dashBoardDataObjects.wsTestExecutions;
      testDataSet = this.dashBoardDataObjects.systemTestsBarDGData;
      testDataLabels = this.dashBoardDataObjects.systemDGTestsBarLabels;
      this.dashBoardDataObjects.allExecutionData.forEach(execution => {
        this.dashBoardDataObjects.passFailFailed += Number(execution.wsFails);
        this.dashBoardDataObjects.passFailTotal += Number(execution.wsExecutions);
      })
      let totalTests = 0;
      this.dashBoardDataObjects.systemTestsBarDGData.forEach(test =>{
        totalTests += test
      });
      this.dashBoardDataObjects.orgTestsText = "Digital Tests (" + totalTests + ")";
    }
    this.dashBoardDataObjects.passFailPassed = this.dashBoardDataObjects.passFailFailed + this.dashBoardDataObjects.passFailTotal;
    this.calculatePercent();

    this.dashBoardDataObjects.pieChartDataSet = [this.dashBoardDataObjects.passFailPassed, this.dashBoardDataObjects.passFailFailed]
    this.dashBoardDataObjects.passFailChartData.data.datasets[0].data = this.dashBoardDataObjects.pieChartDataSet;
    this.dashBoardDataObjects.passFailChartData.update();
    
    this.dashBoardDataObjects.totalExecutionsChartData.data.datasets[0].data = executionsDataSet;
    this.dashBoardDataObjects.totalExecutionsChartData.update();

    this.dashBoardDataObjects.systemTestsChartData.data.datasets[0].data = testDataSet;
    this.dashBoardDataObjects.systemTestsChartData.data.labels = testDataLabels;
    this.dashBoardDataObjects.systemTestsChartData.update();
  }

  public updateActiveFailedTests() {
    var arr: ActiveFailedTest[] = []; 
    var fail1 = new ActiveFailedTest();
    fail1.Description = "DM View Registration";
    fail1.FailingFor = "3 days";
    fail1.FirstFailureDate = "03/12/2021";
    fail1.LastFailureDate = "03/15/2021";
    fail1.System = "MBIS";
    fail1.JiraID = "BBDEX-01";
    arr.push(fail1);

    var fail2 = new ActiveFailedTest();
    fail2.Description = "Reverse Verification";
    fail2.FailingFor = "2 days";
    fail2.FirstFailureDate = "03/14/2021";
    fail2.LastFailureDate = "03/15/2021";
    fail2.System = "MBIS";
    fail2.JiraID = "BBDEX-02";
    arr.push(fail2);

    var fail3 = new ActiveFailedTest();
    fail3.Description = "Login";
    fail3.FailingFor = "1 day";
    fail3.FirstFailureDate = "03/15/2021";
    fail3.LastFailureDate = "03/15/2021";
    fail3.System = "MFace";
    fail3.JiraID = "BBDEX-05";
    arr.push(fail3);

    var fail4 = new ActiveFailedTest();
    fail4.Description = "Update Record";
    fail4.FailingFor = "1 day";
    fail4.FirstFailureDate = "03/12/2021";
    fail4.LastFailureDate = "03/12/2021";
    fail4.System = "Back Office";
    fail4.JiraID = "BBDEX-48";
    arr.push(fail4);

    this.dashBoardDataObjects.activeFailedTests = arr;
  }

  private ConvertToCSV(objArray, headerList) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = 'S.No,';
    for (let index in headerList) {
     row += headerList[index] + ',';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
     let line = (i+1)+'';
     for (let index in headerList) {
      let head = headerList[index];
      line += ',' + array[i][head];
     }
     str += line + '\r\n';
    }
    return str;
  }

  public downloadFile(filename='Executions') {
    let csvData = this.ConvertToCSV(this.dashboardService.getTestExecutionData(), ['test','executionDate', 'host', 'id', 'remediationNeeded', "remediationTook", "result", "system", "testDuration", "testId"]);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
        dwldLink.setAttribute("target", "_blank");
    }
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", filename + ".csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  private calculatePercent(){
    var failingPercent = 100 / this.dashBoardDataObjects.passFailTotal * this.dashBoardDataObjects.passFailFailed;
    var PassingPercent = 100 - failingPercent;
    this.dashBoardDataObjects.passFailPercent = (Math.round(PassingPercent * 10) / 10);
  }

  private createLineGraph(chartOptions){
    let totalExecutionsCanvas: any = document.getElementById("totalExecutionsChart");
    let totalExecutionsCTX: any = totalExecutionsCanvas.getContext("2d");
    var gradientStroke = totalExecutionsCTX.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
    gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //red colors
    var config = {
      type: "line",
      data: {
        labels: this.dashBoardDataObjects.executionLineChartLabels,
        datasets: [
          {
            label: "Test Executions",
            fill: true,
            backgroundColor: gradientStroke,
            borderColor: "#ec250d",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: "#ec250d",
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: "#ec250d",
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.dashBoardDataObjects.allTestExecutions
          }
        ]
      },
      options: chartOptions
    };
    return config;
  }

  public createSystemTestsBarGraph(chartOptions, dataSet, labels) {
    var gradientStroke = this.dashBoardDataObjects.systemTestsChartCTX.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    //System Tests Config
    var config: any = {
      type: "bar",
      responsive: true,
      legend: {
        display: false
      },
      data: {
        labels: labels,
        datasets: [
          {
            label: "Systems",
            fill: true,
            backgroundColor: gradientStroke,
            hoverBackgroundColor: gradientStroke,
            borderColor: "#1f8ef1",
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            data: dataSet
          }
        ]
      },
      options: chartOptions,
      maintainAspectRatio: false,
      tooltips: {
        backgroundColor: "#f5f5f5",
        titleFontColor: "#333",
        bodyFontColor: "#666",
        bodySpacing: 4,
        xPadding: 12,
        mode: "nearest",
        intersect: 0,
        position: "nearest"
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              suggestedMin: 10,
              suggestedMax: 40,
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ],

        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              color: "rgba(29,140,248,0.1)",
              zeroLineColor: "transparent"
            },
            ticks: {
              padding: 20,
              fontColor: "#9e9e9e"
            }
          }
        ]
      }
    };
    return config;
  }
}
