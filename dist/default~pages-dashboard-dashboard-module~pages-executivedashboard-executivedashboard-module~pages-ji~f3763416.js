(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-dashboard-dashboard-module~pages-executivedashboard-executivedashboard-module~pages-ji~f3763416"],{

/***/ "./src/app/pages/utils/ChartOptionsUtil.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/utils/ChartOptionsUtil.ts ***!
  \*************************************************/
/*! exports provided: ChartOptionsUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartOptionsUtils", function() { return ChartOptionsUtils; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ChartOptionsUtils = /** @class */ (function () {
    function ChartOptionsUtils() {
    }
    ChartOptionsUtils.prototype.getGradientChartOptionsConfigurationWithTooltipBlue = function () {
        var gradientChartOptionsConfigurationWithTooltipBlue = {
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
    };
    ChartOptionsUtils.prototype.getGradientChartOptionsConfigurationWithTooltipPurple = function () {
        var gradientChartOptionsConfigurationWithTooltipPurple = {
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
    };
    ChartOptionsUtils.prototype.getGradientChartOptionsConfigurationWithTooltipRed = function (suggestedMax, suggestedMin) {
        if (suggestedMax === void 0) { suggestedMax = 125; }
        if (suggestedMin === void 0) { suggestedMin = 60; }
        var gradientChartOptionsConfigurationWithTooltipRed = {
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
                            suggestedMin: suggestedMin,
                            suggestedMax: suggestedMax,
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
    };
    ChartOptionsUtils.prototype.getGradientChartOptionsConfigurationWithTooltipOrange = function () {
        var gradientChartOptionsConfigurationWithTooltipOrange = {
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
    };
    ChartOptionsUtils.prototype.getBarChartOptionsConfig = function (displayLegend) {
        if (displayLegend === void 0) { displayLegend = false; }
        var gradientBarChartConfiguration = {
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
    };
    ChartOptionsUtils.prototype.createPieChart = function (labels, dataSet, dataSetLabel, backgroundColors, displayLegend) {
        if (displayLegend === void 0) { displayLegend = true; }
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
    };
    return ChartOptionsUtils;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-dashboard-dashboard-module~pages-executivedashboard-executivedashboard-module~pages-ji~f3763416.js.map