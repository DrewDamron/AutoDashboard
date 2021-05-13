import { Component, OnInit } from '@angular/core';
import { Test, TestStep } from 'src/app/models/test';
import Chart from "chart.js";

@Component({
  selector: 'app-mbis',
  templateUrl: './mbis.component.html',
  styleUrls: ['./mbis.component.scss']
})
export class MbisComponent implements OnInit {

  private mbisTests: Test[] = [];
  public passFailChartData: any;
  public passFailPercentCanvas: any;
  public passFailPercentCTX: any;
  public testTypeChartData: any;
  public testTypePercentCanvas: any;
  public testTypePercentCTX: any;

  constructor() { }
  

  ngOnInit(): void {
    this.createTests();

    this.passFailPercentCanvas = document.getElementById("passfailperc");
    this.passFailPercentCTX = this.passFailPercentCanvas.getContext("2d");
    this.passFailChartData = new Chart(this.passFailPercentCTX, this.createPieChart());

    this.testTypePercentCanvas = document.getElementById("automationperc");
    this.testTypePercentCTX = this.testTypePercentCanvas.getContext("2d");
    this.testTypeChartData = new Chart(this.testTypePercentCTX, this.createAutomationPieChart());
  }

  private createTests() {
    let t1: Test = new Test();
    t1.collapseSteps = true;
    t1.description = "Verify Latent 1000 DPI";
    t1.lastResult = "Passed";
    t1.lastExecution = "03/30/2021 11:57pm"
    t1.steps = [];
    let t1s1: TestStep = new TestStep();
    t1s1.lastExecution = "03/30/2021 11:57pm";
    t1s1.lastResult = "Passed";
    t1s1.name = "When dossier '10F-1000dpi-001' is selected from tenprint";
    t1s1.collapseImage = true;
    t1.steps.push(t1s1);

    let t1s2: TestStep = new TestStep();
    t1s2.lastExecution = "03/30/2021 11:57pm";
    t1s2.lastResult = "Passed";
    t1s2.name = "When Two Fingers is selected";
    t1s2.collapseImage = true;
    t1.steps.push(t1s2);

    let t1s3: TestStep = new TestStep();
    t1s3.lastExecution = "03/30/2021 11:57pm";
    t1s3.lastResult = "Passed";
    t1s3.name = "Then all images are displayed";
    t1s3.collapseImage = true;
    t1.steps.push(t1s3);

    let t1s4: TestStep = new TestStep();
    t1s4.lastExecution = "03/30/2021 11:57pm";
    t1s4.lastResult = "Passed";
    t1s4.name = "When Five Fingers is selected";
    t1s4.collapseImage = true;
    t1.steps.push(t1s4);

    let t1s5: TestStep = new TestStep();
    t1s5.lastExecution = "03/30/2021 11:57pm";
    t1s5.lastResult = "Passed";
    t1s5.name = "Then all images are displayed";
    t1s5.collapseImage = true;
    t1.steps.push(t1s5);

    this.mbisTests.push(t1);


    let t2: Test = new Test();
    t2.collapseSteps = true;
    t2.description = "Update Preferences";
    t2.lastResult = "Passed"; 
    t2.lastExecution = "03/30/2021 11:57pm"
    t2.steps = [];
    let t2s1: TestStep = new TestStep();
    t2s1.lastExecution = "03/30/2021 11:57pm";
    t2s1.lastResult = "Passed";
    t2s1.name = "When dossier '10F-1000dpi-001' is selected from tenprint";
    t2s1.collapseImage = true;
    t2.steps.push(t2s1);

    let t2s2: TestStep = new TestStep();
    t2s2.lastExecution = "03/30/2021 11:57pm";
    t2s2.lastResult = "Passed";
    t2s2.name = "When Two Fingers is selected";
    t2s2.collapseImage = true;
    t2.steps.push(t2s2);

    let t2s3: TestStep = new TestStep();
    t2s3.lastExecution = "03/30/2021 11:57pm";
    t2s3.lastResult = "Passed";
    t2s3.name = "Then all images are displayed";
    t2s3.collapseImage = true;
    t2.steps.push(t2s3);

    let t2s4: TestStep = new TestStep();
    t2s4.lastExecution = "03/30/2021 11:57pm";
    t2s4.lastResult = "Passed";
    t2s4.name = "When Five Fingers is selected";
    t2s4.collapseImage = true;
    t2.steps.push(t2s4);

    let t2s5: TestStep = new TestStep();
    t2s5.lastExecution = "03/30/2021 11:57pm";
    t2s5.lastResult = "Passed";
    t2s5.name = "Then all images are displayed";
    t2s5.collapseImage = true;
    t2.steps.push(t2s5);

    this.mbisTests.push(t2);



    let t3: Test = new Test();
    t3.collapseSteps = true;
    t3.description = "Add new Case";
    t3.lastResult = "Failed"; 
    t3.lastExecution = "03/30/2021 11:57pm"
    t3.steps = [];
    let t3s1: TestStep = new TestStep();
    t3s1.lastExecution = "03/30/2021 11:57pm";
    t3s1.lastResult = "Passed";
    t3s1.name = "When dossier '10F-1000dpi-001' is selected from tenprint";
    t3s1.collapseImage = true;
    t3.steps.push(t3s1);

    let t3s2: TestStep = new TestStep();
    t3s2.lastExecution = "03/30/2021 11:57pm";
    t3s2.lastResult = "Passed";
    t3s2.name = "When Two Fingers is selected";
    t3s2.collapseImage = true;
    t3.steps.push(t3s2);

    let t3s3: TestStep = new TestStep();
    t3s3.lastExecution = "03/30/2021 11:57pm";
    t3s3.lastResult = "Passed";
    t3s3.name = "Then all images are displayed";
    t3s3.collapseImage = true;
    t3.steps.push(t3s3);

    let t3s4: TestStep = new TestStep();
    t3s4.lastExecution = "03/30/2021 11:57pm";
    t3s4.lastResult = "Failed";
    t3s4.name = "When Five Fingers is selected";
    t3s4.screenshotURL = "./assets/img/exampleFailureSceenshot.jpg"
    t3s4.collapseImage = true;
    t3.steps.push(t3s4);

    let t3s5: TestStep = new TestStep();
    t3s5.lastExecution = "03/30/2021 11:57pm";
    t3s5.lastResult = "Skipped";
    t3s5.name = "Then all images are displayed";
    t3s5.collapseImage = true;
    t3.steps.push(t3s5);

    this.mbisTests.push(t3);


    console.log(this.mbisTests);
  }

  public showCollapseSteps(test: Test) {
    test.collapseSteps = !test.collapseSteps;
  }

  public createPieChart() {
    var config = {
      type: "pie",
      data: {
        labels: ["Pass", "Fail"],
        datasets: [
          {
            label: "Executions",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#00c09d", "#fb6340"],
            borderWidth: 0,
            data: [96,4]
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        legend: {
          display: false
        },

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
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: "rgba(255,255,255,0.05)"
              }
            }
          ],

          xAxes: [
            {
              display: 0,
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    };
    return config;
  }

  public createAutomationPieChart() {
    var config = {
      type: "pie",
      data: {
        labels: ["Manual", "Automated"],
        datasets: [
          {
            label: "Test Types",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#00c09d", "#e2e2e2"],
            borderWidth: 0,
            data: [38,62]
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        legend: {
          display: false
        },

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
              display: 0,
              ticks: {
                display: false
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "transparent",
                color: "rgba(255,255,255,0.05)"
              }
            }
          ],

          xAxes: [
            {
              display: 0,
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(255,255,255,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                display: false
              }
            }
          ]
        }
      }
    };
    return config;
  }
}
