import { Component, OnInit } from '@angular/core';
import Chart from "chart.js";

@Component({
  selector: 'app-executivedashboard',
  templateUrl: './executivedashboard.component.html',
  styleUrls: ['./executivedashboard.component.scss']
})
export class ExecutivedashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var ctx = document.getElementById('projectOverviewChart');

    var config = {
      type: 'bar',
      data: {
        labels: ["MBIS NM", "MBIS AZ", "MBIS FL", "MBIS NYPD"],
        datasets: [{
          type: 'line',
          label: 'Delivery Trend',
          data: [-10, 0, -40, -20],
          borderColor: 'black',
          fill: false
        }, {
          type: 'bar',
          label: 'Original Estimate',
          backgroundColor: "#00c09d",
          data: [65, 40, 80, 81],
        }, {
          type: 'bar',
          label: 'Over Estimate',
          backgroundColor: "#fd5d93",
          data: [-20, -5, -80, -40]
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    };

    new Chart(ctx, config);
    
  }

}
