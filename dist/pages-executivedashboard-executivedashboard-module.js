(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-executivedashboard-executivedashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/executivedashboard/executivedashboard.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/executivedashboard/executivedashboard.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\r\n  <div class=\" row\">\r\n    \r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart card-chart-pie\">\r\n        <div class=\" card-header\">\r\n          <h2 class=\" card-title\">Project Status % Complete</h2>\r\n          <h5 class=\" card-category\">Current project delivery state</h5>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div class=\" row\">\r\n            <div class=\" col-12\">\r\n              <div class=\"chart-area\"><canvas id=\"projDeliveryStateChart\"> </canvas></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>    \r\n\r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart card-chart-pie\">\r\n        <div class=\" card-header\">\r\n          <h2 class=\" card-title\">Issues Closed</h2>\r\n          <h5 class=\" card-category\">Jira Issues Closed By Day Trend Analysis</h5>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div class=\" row\">\r\n            <div class=\" col-12\">\r\n              <div class=\"chart-area\"><canvas id=\"closedByDayTrendChart\"> </canvas></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart\">\r\n        <div class=\" card-header\">\r\n          <h4 class=\"\">Escaped Defects by Year</h4>\r\n          <h3 class=\" card-title\">\r\n            <i class=\" et-icons icon-single-copy-04 text-info\"> </i>\r\n          </h3>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div class=\"chart-area\"><canvas id=\"SystemEscapedDefectsChart\"> </canvas></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\" col-lg-6\">\r\n      <div class=\" card card-chart card-chart-pie\">\r\n        <div class=\" card-header\">\r\n          <h2 class=\" card-title\">Releases</h2>\r\n          <h5 class=\" card-category\">Releases by month</h5>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div class=\" row\">\r\n            <div class=\" col-12\">\r\n              <div class=\"chart-area\"><canvas id=\"projReleaseChart\"> </canvas></div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\" col-lg-12\">\r\n      <div class=\" card card-chart card-chart-pie\">\r\n        <div class=\" card-header\">\r\n          <h2 class=\" card-title\">Project Deliverables</h2>\r\n          <h5 class=\" card-category\">A breakdown of project deliverables that are closed, past due or yet to be started</h5>\r\n        </div>\r\n        <div class=\" card-body\">\r\n          <div class=\" row\">\r\n            <div class=\" col-4\">\r\n              <div class=\"chart-area\"><canvas id=\"azDataChart\"> </canvas></div>\r\n              <div class=\"text-center text-white\" style=\"font-size: 1.2em;\">MBIS AZ</div>\r\n            </div>\r\n            <div class=\" col-4\">\r\n              <div class=\"chart-area\"><canvas id=\"flDataChart\"> </canvas></div>\r\n              <div class=\"text-center text-white\" style=\"font-size: 1.2em;\">MBIS FL</div>\r\n            </div>\r\n            <div class=\" col-4\">\r\n              <div class=\"chart-area\"><canvas id=\"nypdDataChart\"> </canvas></div>\r\n              <div class=\"text-center text-white\" style=\"font-size: 1.2em;\">MBIS NYPD</div>\r\n            </div>\r\n            <div class=\" col-4\">\r\n              <div class=\"chart-area\"><canvas id=\"nmDataChart\"> </canvas></div>\r\n              <div class=\"text-center text-white\" style=\"font-size: 1.2em;\">MBIS NM</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/executivedashboard/executivedashboard.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/executivedashboard/executivedashboard.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4ZWN1dGl2ZWRhc2hib2FyZC9leGVjdXRpdmVkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/executivedashboard/executivedashboard.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/executivedashboard/executivedashboard.component.ts ***!
  \**************************************************************************/
/*! exports provided: ExecutivedashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutivedashboardComponent", function() { return ExecutivedashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ChartOptionsUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ChartOptionsUtil */ "./src/app/pages/utils/ChartOptionsUtil.ts");




var ExecutivedashboardComponent = /** @class */ (function () {
    function ExecutivedashboardComponent() {
        this.chartOptionsUtil = new _utils_ChartOptionsUtil__WEBPACK_IMPORTED_MODULE_3__["ChartOptionsUtils"]();
    }
    ExecutivedashboardComponent.prototype.ngOnInit = function () {
        this.createNewChart("azDataChart", [55, 35, 10, 3], true);
        this.createNewChart("flDataChart", [5, 95, 0, 6]);
        this.createNewChart("nypdDataChart", [90, 5, 5, 1]);
        this.createNewChart("nmDataChart", [10, 40, 50, 15]);
        this.createclosedLineGraph();
        this.createAutomationsavingsChart();
        this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["Public Security", "Civil Identity", "Digital"], [40, 16, 31], [12, 8, 6]);
        this.createReleaseChart();
    };
    ExecutivedashboardComponent.prototype.createNewChart = function (chartId, data, showLegend) {
        if (showLegend === void 0) { showLegend = false; }
        new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(chartId, {
            type: 'doughnut',
            data: {
                labels: ['Delivered', 'Not Started', 'Past Due', 'In Progress'],
                datasets: [
                    {
                        data: data,
                        backgroundColor: ['#00f2c3', '#f4f5f7', '#fd5d93', '#8965e0'],
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
                tooltips: {
                    enabled: true
                }
            }
        });
    };
    ExecutivedashboardComponent.prototype.createclosedLineGraph = function () {
        new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.getElementById("closedByDayTrendChart"), {
            type: 'bar',
            data: {
                labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                datasets: [{
                        label: "This Week",
                        type: "line",
                        borderColor: "#00f2c3",
                        data: [37, 29, 33, 52, 71],
                        fill: false
                    }, {
                        label: "Last Week",
                        type: "line",
                        borderColor: "#1d8cf8",
                        data: [40, 23, 31, 34, 62],
                        fill: false
                    }, {
                        label: "This Week",
                        type: "bar",
                        backgroundColor: "#00f2c3",
                        data: [37, 29, 33, 52, 71],
                    }, {
                        label: "Last Week",
                        type: "bar",
                        backgroundColor: "#1d8cf8",
                        backgroundColorHover: "#3e95cd",
                        data: [40, 23, 31, 34, 62]
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
    };
    ExecutivedashboardComponent.prototype.createAutomationsavingsChart = function () {
        var canvas = document.getElementById("projDeliveryStateChart");
        var ctx = canvas.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {
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
    };
    ExecutivedashboardComponent.prototype.createReleaseChart = function () {
        var canvas = document.getElementById("projReleaseChart");
        var ctx = canvas.getContext("2d");
        new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {
            type: 'bar',
            data: {
                labels: ["Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020", "Jun 2020", "Jul 2020", "Aug 2020", "Sep 2020", "Oct 2020", "Nov 2020", "Dec 2020", "Jan 2021", "Feb 2021", "Mar 2021", "Apr 2021"],
                datasets: [{
                        label: "Alpha",
                        backgroundColor: "#2dce89",
                        hoverBackgroundColor: "#00f2c3",
                        data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2],
                    }, {
                        label: "Beta",
                        backgroundColor: "#5e72e4",
                        hoverBackgroundColor: "#11cdef",
                        data: [1, 16, 18, 12, 32, 61, 10, 21, 22, 35, 12, 23, 1, 7, 35, 44],
                    }, {
                        label: "Internal",
                        backgroundColor: "#f4f5f7",
                        hoverBackgroundColor: "#adb5bd",
                        data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2],
                    }, {
                        label: "Official",
                        backgroundColor: "#ff8d72",
                        hoverBackgroundColor: "#fd5d93",
                        data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2],
                    }, {
                        label: "Pro UAT",
                        backgroundColor: "#326ecf",
                        hoverBackgroundColor: "#67bfc7",
                        data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2],
                    }, {
                        label: "Prod-Test",
                        backgroundColor: "#d11b64",
                        hoverBackgroundColor: "#fab4d0",
                        data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2],
                    }, {
                        label: "UAT",
                        backgroundColor: "#edde0c",
                        hoverBackgroundColor: "#edde0c",
                        data: [10, 15, 5, 81, 55, 12, 15, 18, 22, 10, 8, 45, 17, 59, 10, 2],
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
    };
    ExecutivedashboardComponent.prototype.createEscapedSystemDefectsBarGraph = function (chartOptions, labels, dataSet1, dataSet2) {
        var canvas = document.getElementById("SystemEscapedDefectsChart");
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
        new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(ctx, {
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
        });
    };
    ExecutivedashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-executivedashboard',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./executivedashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/executivedashboard/executivedashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./executivedashboard.component.scss */ "./src/app/pages/executivedashboard/executivedashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExecutivedashboardComponent);
    return ExecutivedashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/executivedashboard/executivedashboard.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/executivedashboard/executivedashboard.module.ts ***!
  \***********************************************************************/
/*! exports provided: ExecutivedashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutivedashboardModule", function() { return ExecutivedashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _executivedashboard_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./executivedashboard.routing */ "./src/app/pages/executivedashboard/executivedashboard.routing.ts");
/* harmony import */ var _executivedashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./executivedashboard.component */ "./src/app/pages/executivedashboard/executivedashboard.component.ts");










var ExecutivedashboardModule = /** @class */ (function () {
    function ExecutivedashboardModule() {
    }
    ExecutivedashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_executivedashboard_routing__WEBPACK_IMPORTED_MODULE_8__["ExecutivedashboardRoutes"]),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot()
            ],
            declarations: [_executivedashboard_component__WEBPACK_IMPORTED_MODULE_9__["ExecutivedashboardComponent"]],
            exports: [_executivedashboard_component__WEBPACK_IMPORTED_MODULE_9__["ExecutivedashboardComponent"]]
        })
    ], ExecutivedashboardModule);
    return ExecutivedashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/executivedashboard/executivedashboard.routing.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/executivedashboard/executivedashboard.routing.ts ***!
  \************************************************************************/
/*! exports provided: ExecutivedashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecutivedashboardRoutes", function() { return ExecutivedashboardRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _executivedashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./executivedashboard.component */ "./src/app/pages/executivedashboard/executivedashboard.component.ts");


var ExecutivedashboardRoutes = [
    {
        path: "",
        children: [
            {
                path: "executivedashboard",
                component: _executivedashboard_component__WEBPACK_IMPORTED_MODULE_1__["ExecutivedashboardComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-executivedashboard-executivedashboard-module.js.map