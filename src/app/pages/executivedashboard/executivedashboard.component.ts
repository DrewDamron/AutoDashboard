import { Component, OnInit } from '@angular/core';
import Chart from "chart.js";
import { ChartOptionsUtils } from "../utils/ChartOptionsUtil";

@Component({
  selector: 'app-executivedashboard',
  templateUrl: './executivedashboard.component.html',
  styleUrls: ['./executivedashboard.component.scss']
})
export class ExecutivedashboardComponent implements OnInit {

  private chartOptionsUtil: ChartOptionsUtils;

  constructor() { 
    this.chartOptionsUtil = new ChartOptionsUtils();
  }

  ngOnInit(): void {
    this.createNewChart("azDataChart", [55,35,10,3], true);
    this.createNewChart("flDataChart", [5,95,0,6]);
    this.createNewChart("nypdDataChart", [90,5,5,1]);
    this.createNewChart("nmDataChart", [10,40,50,15]);
    this.createclosedLineGraph();
    this.createAutomationsavingsChart();
    this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true),["Public Security", "Civil Identity", "Digital"],[40, 16, 31], [12, 8, 6]);
    this.createReleaseChart();
  }

  createNewChart(chartId, data, showLegend = false) {
    new Chart(chartId, {
      type: 'doughnut',
      data: {
        labels: ['Delivered','Not Started', 'Past Due', 'In Progress'],
        datasets: [
          { 
            data: data,
            backgroundColor: ['#00f2c3','#f4f5f7', '#fd5d93', '#8965e0'],
            fill: false
          },
        ]
      },
      options: {
        legend: {
          position: 'left',
          display: showLegend,
          labels: {
            fontColor: "white",
            fontSize: 14
        }
        },
        tooltips:{
          enabled:true
        }
      }
    });
  }

  createclosedLineGraph() {
    new Chart(document.getElementById("closedByDayTrendChart"), {
      type: 'bar',
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        datasets: [{
            label: "This Week",
            type: "line",
            borderColor: "#00f2c3",
            data: [37,29,33,52,71],
            fill: false
          }, {
            label: "Last Week",
            type: "line",
            borderColor: "#1d8cf8",
            data: [40,23,31,34,62],
            fill: false
          }, {
            label: "This Week",
            type: "bar",
            backgroundColor: "#00f2c3",
            data: [37,29,33,52,71],
          }, {
            label: "Last Week",
            type: "bar",
            backgroundColor: "#1d8cf8",
            backgroundColorHover: "#3e95cd",
            data: [40,23,31,34,62]
          }
        ]
      },
      options: {
        title: {
          display: false
        },
        legend: { display: false }
      }
    });
  }

  createAutomationsavingsChart() {  
    var canvas = <HTMLCanvasElement> document.getElementById("projDeliveryStateChart");
    var ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["MBIS TX", "LiveScan NY", "MBIS NM", "Digital Proj 1", "Project x"],
        datasets: [{
          label: "Complete",
          backgroundColor: "#2dce89",
          hoverBackgroundColor: "#00f2c3",
          data: [10, 15, 5, 81, 55],
        }, {
          label: "Remaining",
          backgroundColor: "#f4f5f7",
          hoverBackgroundColor: "#adb5bd",
          data: [90, 85, 95, 19, 45]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true,
            ticks: {
              fontColor: "white"
            },
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              fontColor: "white"
            },
          }]
        }
      }
    });
  }

  createReleaseChart() {
    var canvas = <HTMLCanvasElement> document.getElementById("projReleaseChart");
    var ctx = canvas.getContext("2d");
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020", "Jun 2020", "Jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020", "Dec 2020", "Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021"],
        datasets: [{
          label: "Alpha",
          backgroundColor: "#2dce89",
          hoverBackgroundColor: "#00f2c3",
          data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2 ],
        }, {
          label: "Beta",
          backgroundColor: "#5e72e4",
          hoverBackgroundColor: "#11cdef",
          data: [1, 16, 18, 12, 32, 61, 10, 21, 22, 35, 12, 23, 1, 7, 35, 44 ],
        }, {
          label: "Internal",
          backgroundColor: "#f4f5f7",
          hoverBackgroundColor: "#adb5bd",
          data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2 ],
        }, {
          label: "Official",
          backgroundColor: "#ff8d72",
          hoverBackgroundColor: "#fd5d93",
          data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2 ],
        }, {
          label: "Pro UAT",
          backgroundColor: "#326ecf",
          hoverBackgroundColor: "#67bfc7",
          data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2 ],
        }, {
          label: "Prod-Test",
          backgroundColor: "#d11b64",
          hoverBackgroundColor: "#fab4d0",
          data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2 ],
        }, {
          label: "UAT",
          backgroundColor: "#edde0c",
          hoverBackgroundColor: "#edde0c",
          data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2 ],
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true,
            ticks: {
              fontColor: "white"
            },
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              fontColor: "white"
            },
          }]
        }
      }
    });
  }

  createEscapedSystemDefectsBarGraph(chartOptions, labels, dataSet1, dataSet2) {
    var canvas = <HTMLCanvasElement> document.getElementById("SystemEscapedDefectsChart");
    var ctx = canvas.getContext("2d");
    var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
    gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
    gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

    var redGradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
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
    new Chart(ctx, {
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
    })
  }
}
