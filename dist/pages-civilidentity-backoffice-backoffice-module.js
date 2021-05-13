(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-civilidentity-backoffice-backoffice-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civilidentity/backoffice/backoffice.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civilidentity/backoffice/backoffice.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div class=\"row\">\n        <div class=\" col-lg-6\">\n            <div class=\" card card-chart card-chart-pie\">\n              <div class=\" card-header\">\n                <h5 class=\" card-category\">Test Executions</h5>\n                <h2 class=\" card-title\">Pass/Fail %</h2>\n              </div>\n              <div class=\" card-body\">\n                <div class=\" row\">\n                  <div class=\" col-6\">\n                    <div class=\"chart-area\"><canvas id=\"backofficePassfailperc\"> </canvas></div>\n                  </div>\n                  <div class=\" col-6\">\n                    <h4 class=\" card-title\">\n                      <i class=\" tim-icons icon-trophy text-success\"> </i> Executions: 124\n                    </h4>\n                    <p class=\" category\">A pass rate of 96%</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n        <div class=\" col-lg-6\">\n            <div class=\" card card-chart card-chart-pie\">\n              <div class=\" card-header\">\n                <h5 class=\" card-category\">Test Type</h5>\n                <h2 class=\" card-title\">Manual/Automated %</h2>\n              </div>\n              <div class=\" card-body\">\n                <div class=\" row\">\n                  <div class=\" col-6\">\n                    <div class=\"chart-area\"><canvas id=\"backofficeAutomationperc\"> </canvas></div>\n                  </div>\n                  <div class=\" col-6\">\n                    <p class=\" category\">An automation rate of 62%</p>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\" col-lg-12\">\n            <div class=\" card card-tasks\">\n                <div class=\" card-header\">\n                    <h3 class=\"title d-inline\">Back Office Tests(3)</h3>\n                </div>\n                <div class=\" card-body\">\n                <div class=\" table-full-width table-responsive\">\n                    <table class=\"table\">\n                    <tbody>\n                      <tr *ngFor=\"let test of mbisTests\">\n                          <td>\n                            <div class=\"card\">\n                              <div class=\" card-header\">\n                                <div class=\" row\">\n                                  <div class=\" col-sm-8 text-left\">\n                                    <h4 class=\" card-title\">\n                                      <i (click)=\"showCollapseSteps(test)\" style=\"cursor: pointer;\" class=\"et-icons pad-right10\" [ngClass]=\"{'icon-minimal-up ' : test.collapseSteps, 'icon-minimal-down ' : !test.collapseSteps}\"> </i>\n                                      Feature: {{test.description}}\n                                    </h4>\n                                    <h4 class=\" card-title\"></h4>\n                                  </div>\n                                  <div class=\" col-sm-2 text-right\">\n                                    <p class=\"title\" style=\"min-width: 100px;\">Last Execution Date: </p>\n                                    <p class=\"title\">{{test.lastExecution}}</p>      \n                                  </div>\n                                  <div class=\" col-sm-2 text-right\">\n                                    <p class=\"title\" style=\"min-width: 100px;\">Last Execution Result: </p>\n                                    <p class=\"title\" [ngClass]=\"{'text-danger' : test.lastResult == 'Failed', 'text-success' : test.lastResult == 'Passed'}\">{{test.lastResult}}</p>      \n                                  </div>\n                                </div>\n                              </div>\n                              <div [hidden]=\"test.collapseSteps\" class=\"card-body\">\n                                <div *ngFor=\"let step of test.steps\">\n                                  <p [ngClass]=\"{'text-danger' : step.lastResult == 'Failed', 'text-success' : step.lastResult == 'Passed'}\">{{step.name}}\n                                    <i *ngIf=\"step.screenshotURL != null\" (click)=\"step.collapseImage = !step.collapseImage\" style=\"cursor: pointer;\" class=\"et-icons pad-right10\" [ngClass]=\"{'icon-minimal-up' : step.collapseImage, 'icon-minimal-down' : !step.collapseImage}\"> </i>\n                                  </p>\n                                  <img [hidden]=\"step.collapseImage\" *ngIf=\"step.screenshotURL != null\" [src]=\"step.screenshotURL\">\n                                </div>\n                              </div>\n                            </div>\n                          </td>\n                      </tr>\n                    </tbody>\n                    </table>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/civilidentity/backoffice/backoffice.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/civilidentity/backoffice/backoffice.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NpdmlsaWRlbnRpdHkvYmFja29mZmljZS9iYWNrb2ZmaWNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/civilidentity/backoffice/backoffice.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/civilidentity/backoffice/backoffice.component.ts ***!
  \************************************************************************/
/*! exports provided: BackofficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackofficeComponent", function() { return BackofficeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/test */ "./src/app/models/test.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var BackofficeComponent = /** @class */ (function () {
    function BackofficeComponent() {
        this.mbisTests = [];
    }
    BackofficeComponent.prototype.ngOnInit = function () {
        this.createTests();
        this.passFailPercentCanvas = document.getElementById("backofficePassfailperc");
        this.passFailPercentCTX = this.passFailPercentCanvas.getContext("2d");
        this.passFailChartData = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.passFailPercentCTX, this.createPieChart());
        this.testTypePercentCanvas = document.getElementById("backofficeAutomationperc");
        this.testTypePercentCTX = this.testTypePercentCanvas.getContext("2d");
        this.testTypeChartData = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.testTypePercentCTX, this.createAutomationPieChart());
    };
    BackofficeComponent.prototype.createTests = function () {
        var t1 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["Test"]();
        t1.collapseSteps = true;
        t1.description = "Verify Latent 1000 DPI";
        t1.lastResult = "Passed";
        t1.lastExecution = "03/30/2021 11:57pm";
        t1.steps = [];
        var t1s1 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t1s1.lastExecution = "03/30/2021 11:57pm";
        t1s1.lastResult = "Passed";
        t1s1.name = "When dossier '10F-1000dpi-001' is selected from tenprint";
        t1s1.collapseImage = true;
        t1.steps.push(t1s1);
        var t1s2 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t1s2.lastExecution = "03/30/2021 11:57pm";
        t1s2.lastResult = "Passed";
        t1s2.name = "When Two Fingers is selected";
        t1s2.collapseImage = true;
        t1.steps.push(t1s2);
        var t1s3 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t1s3.lastExecution = "03/30/2021 11:57pm";
        t1s3.lastResult = "Passed";
        t1s3.name = "Then all images are displayed";
        t1s3.collapseImage = true;
        t1.steps.push(t1s3);
        var t1s4 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t1s4.lastExecution = "03/30/2021 11:57pm";
        t1s4.lastResult = "Passed";
        t1s4.name = "When Five Fingers is selected";
        t1s4.collapseImage = true;
        t1.steps.push(t1s4);
        var t1s5 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t1s5.lastExecution = "03/30/2021 11:57pm";
        t1s5.lastResult = "Passed";
        t1s5.name = "Then all images are displayed";
        t1s5.collapseImage = true;
        t1.steps.push(t1s5);
        this.mbisTests.push(t1);
        var t2 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["Test"]();
        t2.collapseSteps = true;
        t2.description = "Update Preferences";
        t2.lastResult = "Passed";
        t2.lastExecution = "03/30/2021 11:57pm";
        t2.steps = [];
        var t2s1 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t2s1.lastExecution = "03/30/2021 11:57pm";
        t2s1.lastResult = "Passed";
        t2s1.name = "When dossier '10F-1000dpi-001' is selected from tenprint";
        t2s1.collapseImage = true;
        t2.steps.push(t2s1);
        var t2s2 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t2s2.lastExecution = "03/30/2021 11:57pm";
        t2s2.lastResult = "Passed";
        t2s2.name = "When Two Fingers is selected";
        t2s2.collapseImage = true;
        t2.steps.push(t2s2);
        var t2s3 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t2s3.lastExecution = "03/30/2021 11:57pm";
        t2s3.lastResult = "Passed";
        t2s3.name = "Then all images are displayed";
        t2s3.collapseImage = true;
        t2.steps.push(t2s3);
        var t2s4 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t2s4.lastExecution = "03/30/2021 11:57pm";
        t2s4.lastResult = "Passed";
        t2s4.name = "When Five Fingers is selected";
        t2s4.collapseImage = true;
        t2.steps.push(t2s4);
        var t2s5 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t2s5.lastExecution = "03/30/2021 11:57pm";
        t2s5.lastResult = "Passed";
        t2s5.name = "Then all images are displayed";
        t2s5.collapseImage = true;
        t2.steps.push(t2s5);
        this.mbisTests.push(t2);
        var t3 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["Test"]();
        t3.collapseSteps = true;
        t3.description = "Add new Case";
        t3.lastResult = "Failed";
        t3.lastExecution = "03/30/2021 11:57pm";
        t3.steps = [];
        var t3s1 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t3s1.lastExecution = "03/30/2021 11:57pm";
        t3s1.lastResult = "Passed";
        t3s1.name = "When dossier '10F-1000dpi-001' is selected from tenprint";
        t3s1.collapseImage = true;
        t3.steps.push(t3s1);
        var t3s2 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t3s2.lastExecution = "03/30/2021 11:57pm";
        t3s2.lastResult = "Passed";
        t3s2.name = "When Two Fingers is selected";
        t3s2.collapseImage = true;
        t3.steps.push(t3s2);
        var t3s3 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t3s3.lastExecution = "03/30/2021 11:57pm";
        t3s3.lastResult = "Passed";
        t3s3.name = "Then all images are displayed";
        t3s3.collapseImage = true;
        t3.steps.push(t3s3);
        var t3s4 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t3s4.lastExecution = "03/30/2021 11:57pm";
        t3s4.lastResult = "Failed";
        t3s4.name = "When Five Fingers is selected";
        t3s4.screenshotURL = "./assets/img/exampleFailureSceenshot.jpg";
        t3s4.collapseImage = true;
        t3.steps.push(t3s4);
        var t3s5 = new src_app_models_test__WEBPACK_IMPORTED_MODULE_2__["TestStep"]();
        t3s5.lastExecution = "03/30/2021 11:57pm";
        t3s5.lastResult = "Skipped";
        t3s5.name = "Then all images are displayed";
        t3s5.collapseImage = true;
        t3.steps.push(t3s5);
        this.mbisTests.push(t3);
        console.log(this.mbisTests);
    };
    BackofficeComponent.prototype.showCollapseSteps = function (test) {
        test.collapseSteps = !test.collapseSteps;
    };
    BackofficeComponent.prototype.createPieChart = function () {
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
                        data: [96, 4]
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
    };
    BackofficeComponent.prototype.createAutomationPieChart = function () {
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
                        data: [38, 62]
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
    };
    BackofficeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backoffice',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./backoffice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/civilidentity/backoffice/backoffice.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./backoffice.component.scss */ "./src/app/pages/civilidentity/backoffice/backoffice.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BackofficeComponent);
    return BackofficeComponent;
}());



/***/ }),

/***/ "./src/app/pages/civilidentity/backoffice/backoffice.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/civilidentity/backoffice/backoffice.module.ts ***!
  \*********************************************************************/
/*! exports provided: BackofficeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackofficeModule", function() { return BackofficeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _backoffice_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./backoffice.routing */ "./src/app/pages/civilidentity/backoffice/backoffice.routing.ts");
/* harmony import */ var _backoffice_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./backoffice.component */ "./src/app/pages/civilidentity/backoffice/backoffice.component.ts");










var BackofficeModule = /** @class */ (function () {
    function BackofficeModule() {
    }
    BackofficeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_backoffice_routing__WEBPACK_IMPORTED_MODULE_8__["BackofficeRoutes"]),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot()
            ],
            declarations: [_backoffice_component__WEBPACK_IMPORTED_MODULE_9__["BackofficeComponent"]],
            exports: [_backoffice_component__WEBPACK_IMPORTED_MODULE_9__["BackofficeComponent"]]
        })
    ], BackofficeModule);
    return BackofficeModule;
}());



/***/ }),

/***/ "./src/app/pages/civilidentity/backoffice/backoffice.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/civilidentity/backoffice/backoffice.routing.ts ***!
  \**********************************************************************/
/*! exports provided: BackofficeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackofficeRoutes", function() { return BackofficeRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _backoffice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backoffice.component */ "./src/app/pages/civilidentity/backoffice/backoffice.component.ts");


var BackofficeRoutes = [
    {
        path: "",
        children: [
            {
                path: "backoffice",
                component: _backoffice_component__WEBPACK_IMPORTED_MODULE_1__["BackofficeComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-civilidentity-backoffice-backoffice-module.js.map