export class ChartOptionsUtils {

    public getGradientChartOptionsConfigurationWithTooltipBlue(){
        var gradientChartOptionsConfigurationWithTooltipBlue: any = {
            maintainAspectRatio: false,
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
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#2380f7"
                  }
                }
              ],
      
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#2380f7"
                  }
                }
              ]
            }
        };
        return gradientChartOptionsConfigurationWithTooltipBlue;
    }

    public getGradientChartOptionsConfigurationWithTooltipPurple() {
        var gradientChartOptionsConfigurationWithTooltipPurple: any = {
            maintainAspectRatio: false,
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
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ],
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(225,78,202,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ]
            }
        };
        return gradientChartOptionsConfigurationWithTooltipPurple;
    }

    public getGradientChartOptionsConfigurationWithTooltipRed() {
        var gradientChartOptionsConfigurationWithTooltipRed: any = {
            maintainAspectRatio: false,
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
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ],
      
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(233,32,16,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
              ]
            }
        };
        return gradientChartOptionsConfigurationWithTooltipRed;
    }

    public getGradientChartOptionsConfigurationWithTooltipOrange() {
        var gradientChartOptionsConfigurationWithTooltipOrange: any = {
            maintainAspectRatio: false,
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
            responsive: true,
            scales: {
              yAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(29,140,248,0.0)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    suggestedMin: 50,
                    suggestedMax: 110,
                    padding: 20,
                    fontColor: "#ff8a76"
                  }
                }
              ],
      
              xAxes: [
                {
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: "rgba(220,53,69,0.1)",
                    zeroLineColor: "transparent"
                  },
                  ticks: {
                    padding: 20,
                    fontColor: "#ff8a76"
                  }
                }
              ]
            }
        };
        return gradientChartOptionsConfigurationWithTooltipOrange;
    }

    public getBarChartOptionsConfig(displayLegend: boolean = false) {
      var gradientBarChartConfiguration: any = {
        maintainAspectRatio: false,
        legend: {
        display: displayLegend
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
        responsive: true,
        scales: {
        yAxes: [
          {
          gridLines: {
            drawBorder: false,
            color: "rgba(29,140,248,0.1)",
            zeroLineColor: "transparent"
          },
          ticks: {
            suggestedMin: 1,
            suggestedMax: 20,
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
      return gradientBarChartConfiguration;
    }

    public createPieChart(labels: string[], dataSet, dataSetLabel: string, backgroundColors: string [], displayLegend: boolean = true) {
      var config = {
        type: "pie",
        data: {
          labels: labels,
          datasets: [
            {
              label: dataSetLabel,
              pointRadius: 0,
              pointHoverRadius: 0,
              backgroundColor: backgroundColors,
              borderWidth: 0,
              data: dataSet
            }
          ]
        },
        options: {
          cutoutPercentage: 70,
          legend: {
            display: displayLegend
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