import { Component, OnInit } from '@angular/core';
import Chart from "chart.js";
import { Fields, GenericCustomField, IssueType, JiraIssue, JiraProject, JiraUser } from 'src/app/models/jiraIssue';
import { JiraService } from 'src/app/services/jiraService';
import { ChartOptionsUtils } from "../utils/ChartOptionsUtil";

@Component({
  selector: 'app-jiradefects',
  templateUrl: 'jiradefects.component.html',
  styleUrls: ["jiradefects.component.scss"]
})
export class JiraDefectsComponent implements OnInit {
  public systemDefectsChartData: any;
  public systemDefectsChartCanvas: any;
  public systemDefectsChartCTX: any;
  public jiraDefects: JiraIssue[] = [];

  public systemEscapedDefectsChartData: any;
  public systemEscapedDefectsChartCanvas: any;
  public systemEscapedDefectsChartCTX: any;

  private chartOptionsUtil: ChartOptionsUtils;
  public systemTestsBarLabels: string[] = [];

  public escapedFromChartData: any;
  public escapedFromCanvas: any;
  public escapedFromCTX: any;

  public systemDefectsPieChartData: any;
  public systemDefectsPieCanvas: any;
  public systemDefectsPieCTX: any;

  public projectDefectsPieChartData: any;
  public projectDefectsPieCanvas: any;
  public projectDefectsPieCTX: any;

  public allClicked: boolean = true;
  public psClicked: boolean = false;
  public ciClicked: boolean = false;
  public dgClicked: boolean = false;

  constructor(private jiraService: JiraService) {
    this.chartOptionsUtil = new ChartOptionsUtils();
   }

  ngOnInit(): void {
    this.jiraDefects = this.createJiraDefects();

    this.systemTestsBarLabels = ["Public Security", "Civil Identity", "Digital"]
    this.systemDefectsChartCanvas = document.getElementById("SystemDefectsChart");
    this.systemDefectsChartCTX = this.systemDefectsChartCanvas.getContext("2d");
    this.systemDefectsChartData = new Chart(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), this.systemTestsBarLabels, [14, 6, 9, 13]));

    this.systemEscapedDefectsChartCanvas = document.getElementById("SystemEscapedDefectsChart");
    this.systemEscapedDefectsChartCTX = this.systemEscapedDefectsChartCanvas.getContext("2d");
    this.systemEscapedDefectsChartData = new Chart(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), this.systemTestsBarLabels ,[40, 16, 31], [12, 8, 6]));

    this.systemDefectsPieCanvas = document.getElementById("systemDefectsPieChart");
    this.systemDefectsPieCTX = this.systemDefectsPieCanvas.getContext("2d");
    this.systemDefectsPieChartData = new Chart(this.systemDefectsPieCTX, this.createLateDetectionPieChart([14,7,2]));

    this.projectDefectsPieCanvas = document.getElementById("projectDefectsPieChart");
    this.projectDefectsPieCTX = this.projectDefectsPieCanvas.getContext("2d");
    this.projectDefectsPieChartData = new Chart(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MBIS", "Back Office", "TPE/LiveScan", "MFace", "UES", "Testing", "Web Enrollment", "Civil Identity", "MID", "Proofing"], [10,7,2,5,7,1,12,6,8,9]));
  }


  public createSystemTestsBarGraph(chartOptions, labels, data) {
    var gradientStroke = this.systemDefectsChartCTX.createLinearGradient(0, 230, 0, 50);
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
            data: data
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

  public createEscapedSystemDefectsBarGraph(chartOptions, labels, dataSet1, dataSet2) {
    var gradientStroke = this.systemEscapedDefectsChartCTX.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    var redGradientStroke = this.systemEscapedDefectsChartCTX.createLinearGradient(0, 230, 0, 50);
    redGradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
    redGradientStroke.addColorStop(1, "rgba(233,32,16,0.0)");
    redGradientStroke.addColorStop(1, "rgba(66,134,121,0)"); //red colors

    var data = {
      labels: labels,
      datasets: [{
        label: "2020",
        fill: true,
        backgroundColor: redGradientStroke,
        hoverBackgroundColor: redGradientStroke,
        borderColor: "#1f8ef1",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: dataSet1
      }, {
        label: "2021",
        fill: true,
        backgroundColor: gradientStroke,
        hoverBackgroundColor: gradientStroke,
        borderColor: "#1f8ef1",
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        data: dataSet2
      },]
    };

    //System Tests Config
    var config: any = {
      type: "bar",
      responsive: true,
      options: chartOptions,
      legend: {
        position: "top",
        display: true
      },
      data: data,
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

  createJiraDefects() {
    let jiraDefects: JiraIssue[] = [];
    let jd1: JiraIssue = new JiraIssue();
    jd1.id = "BDDEX-91";
    jd1.self = "https://jira.corp.morphotrak.com/browse/BDDEX-91";
    jd1.key = "BDDEX-91";

    jd1.fields = new Fields()
    jd1.fields.created = "03/24/2021";
    jd1.fields.customfield_11703 = "Stuff to work"; //Expected Behavior
    jd1.fields.summary = "Test Dashboard defect";

    jd1.fields.issuetype = new IssueType()
    jd1.fields.issuetype.description = "Bug issuetype with simpler workflow";
    jd1.fields.issuetype.id = "10400";
    jd1.fields.issuetype.name = "Defect";
    jd1.fields.issuetype.subtask = false;
    
    jd1.fields.assignee = new JiraUser();
    jd1.fields.assignee.displayname = "DAMRON Drew";
    jd1.fields.assignee.name = "GT911066";

    jd1.fields.creator = new JiraUser();
    jd1.fields.creator.displayname = "DAMRON Drew";
    jd1.fields.creator.name = "GT911066";

    jd1.fields.customfield_11701 = new GenericCustomField();
    jd1.fields.customfield_11701.value = "MORPHO: MMGS"; //Escaped From

    jd1.fields.customfield_11704 = new GenericCustomField();
    jd1.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
    jd1.fields.project = new JiraProject();
    jd1.fields.project.name = "MBIS";
    jd1.businessLine = "Public Security";

    let jd2: JiraIssue = new JiraIssue();
    jd2.id = "BDDEX-99";
    jd2.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
    jd2.key = "BDDEX-99";

    jd2.fields = new Fields()
    jd2.fields.created = "03/29/2021";
    jd2.fields.customfield_11703 = "Not have an unexpected result"; //Expected Behavior
    jd2.fields.summary = "Test Dashboard TPE defect";

    jd2.fields.issuetype = new IssueType()
    jd2.fields.issuetype.description = "Bug issuetype with simpler workflow";
    jd2.fields.issuetype.id = "10400";
    jd2.fields.issuetype.name = "Defect";
    jd2.fields.issuetype.subtask = false;
    
    jd2.fields.assignee = new JiraUser();
    jd2.fields.assignee.displayname = "DAMRON Drew";
    jd2.fields.assignee.name = "GT911066";

    jd2.fields.creator = new JiraUser();
    jd2.fields.creator.displayname = "DAMRON Drew";
    jd2.fields.creator.name = "GT911066";

    jd2.fields.customfield_11701 = new GenericCustomField();
    jd2.fields.customfield_11701.value = "MORPHO: TPE"; //Escaped From

    jd2.fields.customfield_11704 = new GenericCustomField();
    jd2.fields.customfield_11704.value = "Missing Requirement"; //Late Detection Cause
    jd2.fields.project = new JiraProject();
    jd2.fields.project.name = "TPE";
    jd2.businessLine = "Public Security";

    let jd3: JiraIssue = new JiraIssue();
    jd3.id = "MTPS-99";
    jd3.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
    jd3.key = "MTPS-99";

    jd3.fields = new Fields()
    jd3.fields.created = "02/28/2021";
    jd3.fields.customfield_11703 = "Save button should be disabled"; //Expected Behavior
    jd3.fields.summary = "Test Dashboard M-Face defect";

    jd3.fields.issuetype = new IssueType()
    jd3.fields.issuetype.description = "Bug issuetype with simpler workflow";
    jd3.fields.issuetype.id = "10400";
    jd3.fields.issuetype.name = "Defect";
    jd3.fields.issuetype.subtask = false;
    
    jd3.fields.assignee = new JiraUser();
    jd3.fields.assignee.displayname = "DAMRON Drew";
    jd3.fields.assignee.name = "GT911066";

    jd3.fields.creator = new JiraUser();
    jd3.fields.creator.displayname = "DAMRON Drew";
    jd3.fields.creator.name = "GT911066";

    jd3.fields.customfield_11701 = new GenericCustomField();
    jd3.fields.customfield_11701.value = "MORPHO: M-Face"; //Escaped From

    jd3.fields.customfield_11704 = new GenericCustomField();
    jd3.fields.customfield_11704.value = "Missing Requirement"; //Late Detection Cause
    jd3.fields.project = new JiraProject();
    jd3.fields.project.name = "MFACE";
    jd3.businessLine = "Public Security";
    
    let jd4: JiraIssue = new JiraIssue();
    jd4.id = "CIVID-477";
    jd4.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
    jd4.key = "CIVID-477";

    jd4.fields = new Fields()
    jd4.fields.created = "03/28/2021";
    jd4.fields.customfield_11703 = "Preferences Saved"; //Expected Behavior
    jd4.fields.summary = "Test Dashboard Back Office defect";

    jd4.fields.issuetype = new IssueType()
    jd4.fields.issuetype.description = "Bug issuetype with simpler workflow";
    jd4.fields.issuetype.id = "10400";
    jd4.fields.issuetype.name = "Defect";
    jd4.fields.issuetype.subtask = false;
    
    jd4.fields.assignee = new JiraUser();
    jd4.fields.assignee.displayname = "DAMRON Drew";
    jd4.fields.assignee.name = "GT911066";

    jd4.fields.creator = new JiraUser();
    jd4.fields.creator.displayname = "DAMRON Drew";
    jd4.fields.creator.name = "GT911066";

    jd4.fields.customfield_11701 = new GenericCustomField();
    jd4.fields.customfield_11701.value = "Back Office Prod"; //Escaped From

    jd4.fields.customfield_11704 = new GenericCustomField();
    jd4.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
    jd4.fields.project = new JiraProject();
    jd4.fields.project.name = "Back Office";
    jd4.businessLine = "Civil Identity";

    let jd5: JiraIssue = new JiraIssue();
    jd5.id = "CIVID-447";
    jd5.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
    jd5.key = "CIVID-447";

    jd5.fields = new Fields()
    jd5.fields.created = "03/25/2021";
    jd5.fields.customfield_11703 = "Enrollment Saved"; //Expected Behavior
    jd5.fields.summary = "Test Dashboard Web Enrollment defect";

    jd5.fields.issuetype = new IssueType()
    jd5.fields.issuetype.description = "Bug issuetype with simpler workflow";
    jd5.fields.issuetype.id = "10400";
    jd5.fields.issuetype.name = "Defect";
    jd5.fields.issuetype.subtask = false;
    
    jd5.fields.assignee = new JiraUser();
    jd5.fields.assignee.displayname = "DAMRON Drew";
    jd5.fields.assignee.name = "GT911066";

    jd5.fields.creator = new JiraUser();
    jd5.fields.creator.displayname = "DAMRON Drew";
    jd5.fields.creator.name = "GT911066";

    jd5.fields.customfield_11701 = new GenericCustomField();
    jd5.fields.customfield_11701.value = "Web Enrollment Prod"; //Escaped From

    jd5.fields.customfield_11704 = new GenericCustomField();
    jd5.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
    jd5.fields.project = new JiraProject();
    jd5.fields.project.name = "Web Enrollment";
    jd5.businessLine = "Civil Identity";    
    
    jiraDefects.push(jd1);
    jiraDefects.push(jd2);
    jiraDefects.push(jd3);
    jiraDefects.push(jd4);
    jiraDefects.push(jd5);

    return jiraDefects;
  }

  public createLateDetectionPieChart(data) {
    var config = {
      type: "pie",
      data: {
        labels: ["Missing Requirement", "Missing Test", "Ambigious Requirement"],
        datasets: [
          {
            label: "System",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["#00c09d", "#e2e2e2", "#fd5d93"],
            borderWidth: 0,
            data: data
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        legend: {
          display: true
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

  public createProjectDefectsPieChart(labels: string[], data) {
    var config = {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Project",
            pointRadius: 0,
            pointHoverRadius: 0,
            backgroundColor: ["red", "blue", "yellow", "pink", "purple", "black", "white", "brown", "green", "orange"],
            borderWidth: 0,
            data: data
          }
        ]
      },
      options: {
        cutoutPercentage: 70,
        legend: {
          display: true
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
        }
      }
    };
    return config;
  }

  public updateOptions(selectedOption: string){
    this.allClicked = false;
    this.psClicked = false;
    this.ciClicked = false;
    this.dgClicked = false;

    if (selectedOption.toLowerCase() == "allclicked"){
      this.allClicked = true;
      this.systemDefectsChartData = new Chart(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["Public Security", "Civil Identity", "Digital"], [14, 6, 9, 13]));
      this.systemEscapedDefectsChartData = new Chart(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), this.systemTestsBarLabels, [40, 16, 31], [12, 8, 6]));
      this.systemDefectsPieChartData = new Chart(this.systemDefectsPieCTX, this.createLateDetectionPieChart([14,7,2]));
      this.projectDefectsPieChartData = new Chart(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MBIS", "Back Office", "TPE/LiveScan", "MFace", "UES", "Testing", "Web Enrollment", "Civil Identity", "MID", "Proofing"], [10,7,2,5,7,1,12,6,8,9]));
    }
    
    if (selectedOption.toLowerCase() == "psclicked"){
      this.psClicked = true;
      this.systemDefectsChartData = new Chart(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["MBIS", "TPE/LiveScan", "M-Face", "UES"], [8, 2, 4, 1]));
      this.systemEscapedDefectsChartData = new Chart(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["MBIS", "TPE/LiveScan", "M-Face", "UES"], [12, 8, 15, 4], [6, 2, 7, 1]));
      this.systemDefectsPieChartData = new Chart(this.systemDefectsPieCTX, this.createLateDetectionPieChart([4,2,2]));
      this.projectDefectsPieChartData = new Chart(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MBIS", "TPE/LiveScan", "MFace", "UES"], [5,7,2]));
    }

    if (selectedOption.toLowerCase() == "ciclicked"){
      this.ciClicked = true;
      this.systemDefectsChartData = new Chart(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["Web Enrollment", "Back Office", "Testing"], [6, 4, 3]));
      this.systemEscapedDefectsChartData = new Chart(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["Web Enrollment", "Back Office", "Testing"], [9, 8, 10, 4], [4, 3, 5, 2]));
      this.systemDefectsPieChartData = new Chart(this.systemDefectsPieCTX, this.createLateDetectionPieChart([6,1,2]));
      this.projectDefectsPieChartData = new Chart(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["Web Enrollment", "Back Office", "Testing"], [7,2,6]));
    }

    if (selectedOption.toLowerCase() == "dgclicked"){
      this.dgClicked = true;
      this.systemDefectsChartData = new Chart(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["MID", "Proofing"], [2, 1]));
      this.systemEscapedDefectsChartData = new Chart(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["MID", "Proofing"], [4, 7], [2, 1]));
      this.systemDefectsPieChartData = new Chart(this.systemDefectsPieCTX, this.createLateDetectionPieChart([2,2]));
      this.projectDefectsPieChartData = new Chart(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MID", "Proofing"], [2,1]));
    }
  }

}
