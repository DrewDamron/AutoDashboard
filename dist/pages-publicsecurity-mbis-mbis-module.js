(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-publicsecurity-mbis-mbis-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publicsecurity/mbis/mbis.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publicsecurity/mbis/mbis.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\r\n    <div class=\"row\">\r\n        <div class=\" col-lg-6\">\r\n            <div class=\" card card-chart card-chart-pie\">\r\n              <div class=\" card-header\">\r\n                <h5 class=\" card-category\">Test Executions</h5>\r\n                <h2 class=\" card-title\">Pass/Fail %</h2>\r\n              </div>\r\n              <div class=\" card-body\">\r\n                <div class=\" row\">\r\n                  <div class=\" col-6\">\r\n                    <div class=\"chart-area\"><canvas id=\"passfailperc\"> </canvas></div>\r\n                  </div>\r\n                  <div class=\" col-6\">\r\n                    <h4 class=\" card-title\">\r\n                      <i class=\" tim-icons icon-trophy text-success\"> </i> Executions: 124\r\n                    </h4>\r\n                    <p class=\" category\">A pass rate of 96%</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <div class=\" col-lg-6\">\r\n            <div class=\" card card-chart card-chart-pie\">\r\n              <div class=\" card-header\">\r\n                <h5 class=\" card-category\">Test Type</h5>\r\n                <h2 class=\" card-title\">Manual/Automated %</h2>\r\n              </div>\r\n              <div class=\" card-body\">\r\n                <div class=\" row\">\r\n                  <div class=\" col-6\">\r\n                    <div class=\"chart-area\"><canvas id=\"automationperc\"> </canvas></div>\r\n                  </div>\r\n                  <div class=\" col-6\">\r\n                    <p class=\" category\">An automation rate of 62%</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\" col-lg-12\">\r\n            <div class=\" card card-tasks\">\r\n                <div class=\" card-header\">\r\n                    <h3 class=\"title d-inline\">MBIS Tests(3)</h3>\r\n                </div>\r\n                <div class=\" card-body\">\r\n                <div class=\" table-full-width table-responsive\">\r\n                    <table class=\"table\">\r\n                    <tbody>\r\n                      <tr *ngFor=\"let test of mbisTests\">\r\n                          <td>\r\n                            <div class=\"card\">\r\n                              <div class=\" card-header\">\r\n                                <div class=\" row\">\r\n                                  <div class=\" col-sm-8 text-left\">\r\n                                    <h4 class=\" card-title\">\r\n                                      <i (click)=\"showCollapseSteps(test)\" style=\"cursor: pointer;\" class=\"et-icons pad-right10\" [ngClass]=\"{'icon-minimal-up ' : test.collapseSteps, 'icon-minimal-down ' : !test.collapseSteps}\"> </i>\r\n                                      Feature: {{test.description}}\r\n                                    </h4>\r\n                                    <h4 class=\" card-title\"></h4>\r\n                                  </div>\r\n                                  <div class=\" col-sm-2 text-right\">\r\n                                    <p class=\"title\" style=\"min-width: 100px;\">Last Execution Date: </p>\r\n                                    <p class=\"title\">{{test.lastExecution}}</p>      \r\n                                  </div>\r\n                                  <div class=\" col-sm-2 text-right\">\r\n                                    <p class=\"title\" style=\"min-width: 100px;\">Last Execution Result: </p>\r\n                                    <p class=\"title\" [ngClass]=\"{'text-danger' : test.lastResult == 'Failed', 'text-success' : test.lastResult == 'Passed'}\">{{test.lastResult}}</p>      \r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              <div [hidden]=\"test.collapseSteps\" class=\"card-body\">\r\n                                <div *ngFor=\"let step of test.steps\">\r\n                                  <p [ngClass]=\"{'text-danger' : step.lastResult == 'Failed', 'text-success' : step.lastResult == 'Passed'}\">{{step.name}}\r\n                                    <i *ngIf=\"step.screenshotURL != null\" (click)=\"step.collapseImage = !step.collapseImage\" style=\"cursor: pointer;\" class=\"et-icons pad-right10\" [ngClass]=\"{'icon-minimal-up' : step.collapseImage, 'icon-minimal-down' : !step.collapseImage}\"> </i>\r\n                                  </p>\r\n                                  <img [hidden]=\"step.collapseImage\" *ngIf=\"step.screenshotURL != null\" [src]=\"step.screenshotURL\">\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </td>\r\n                      </tr>\r\n                    </tbody>\r\n                    </table>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/pages/publicsecurity/mbis/mbis.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/publicsecurity/mbis/mbis.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pad-left10 {\n  padding-left: 10px;\n}\n\n.pad-right10 {\n  padding-right: 10px;\n}\n\n.pad-top10 {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHVibGljc2VjdXJpdHkvbWJpcy9DOlxcUHJvamVjdHNcXEF1dG9EYXNoYm9hcmQvc3JjXFxhcHBcXHBhZ2VzXFxwdWJsaWNzZWN1cml0eVxcbWJpc1xcbWJpcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHVibGljc2VjdXJpdHkvbWJpcy9tYmlzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjs7QURDQTtFQUNJLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHVibGljc2VjdXJpdHkvbWJpcy9tYmlzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZC1sZWZ0MTAge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuLnBhZC1yaWdodDEwIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4ucGFkLXRvcDEwIHtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIH0iLCIucGFkLWxlZnQxMCB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLnBhZC1yaWdodDEwIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnBhZC10b3AxMCB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/publicsecurity/mbis/mbis.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/publicsecurity/mbis/mbis.component.ts ***!
  \*************************************************************/
/*! exports provided: MbisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbisComponent", function() { return MbisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_models_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/test */ "./src/app/models/test.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);




var MbisComponent = /** @class */ (function () {
    function MbisComponent() {
        this.mbisTests = [];
    }
    MbisComponent.prototype.ngOnInit = function () {
        this.createTests();
        this.passFailPercentCanvas = document.getElementById("passfailperc");
        this.passFailPercentCTX = this.passFailPercentCanvas.getContext("2d");
        this.passFailChartData = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.passFailPercentCTX, this.createPieChart());
        this.testTypePercentCanvas = document.getElementById("automationperc");
        this.testTypePercentCTX = this.testTypePercentCanvas.getContext("2d");
        this.testTypeChartData = new chart_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.testTypePercentCTX, this.createAutomationPieChart());
    };
    MbisComponent.prototype.createTests = function () {
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
    MbisComponent.prototype.showCollapseSteps = function (test) {
        test.collapseSteps = !test.collapseSteps;
    };
    MbisComponent.prototype.createPieChart = function () {
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
    MbisComponent.prototype.createAutomationPieChart = function () {
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
    MbisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mbis',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mbis.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/publicsecurity/mbis/mbis.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mbis.component.scss */ "./src/app/pages/publicsecurity/mbis/mbis.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], MbisComponent);
    return MbisComponent;
}());



/***/ }),

/***/ "./src/app/pages/publicsecurity/mbis/mbis.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/publicsecurity/mbis/mbis.module.ts ***!
  \**********************************************************/
/*! exports provided: MbisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbisModule", function() { return MbisModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _mbis_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mbis.routing */ "./src/app/pages/publicsecurity/mbis/mbis.routing.ts");
/* harmony import */ var _mbis_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./mbis.component */ "./src/app/pages/publicsecurity/mbis/mbis.component.ts");










var MbisModule = /** @class */ (function () {
    function MbisModule() {
    }
    MbisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_mbis_routing__WEBPACK_IMPORTED_MODULE_8__["MbisRoutes"]),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot()
            ],
            declarations: [_mbis_component__WEBPACK_IMPORTED_MODULE_9__["MbisComponent"]],
            exports: [_mbis_component__WEBPACK_IMPORTED_MODULE_9__["MbisComponent"]]
        })
    ], MbisModule);
    return MbisModule;
}());



/***/ }),

/***/ "./src/app/pages/publicsecurity/mbis/mbis.routing.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/publicsecurity/mbis/mbis.routing.ts ***!
  \***********************************************************/
/*! exports provided: MbisRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MbisRoutes", function() { return MbisRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mbis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mbis.component */ "./src/app/pages/publicsecurity/mbis/mbis.component.ts");


var MbisRoutes = [
    {
        path: "",
        children: [
            {
                path: "mbis",
                component: _mbis_component__WEBPACK_IMPORTED_MODULE_1__["MbisComponent"]
            }
        ]
    }
];


/***/ })

}]);
//# sourceMappingURL=pages-publicsecurity-mbis-mbis-module.js.map