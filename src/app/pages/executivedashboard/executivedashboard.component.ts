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
    var config = {
      type: 'horizontalBar',
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
    };

    var canvas = <HTMLCanvasElement> document.getElementById("projDeliveryStateChart");
    var ctx = canvas.getContext("2d");
    new Chart(ctx, config);
  }
}
