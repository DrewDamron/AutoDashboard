(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-12\">\n      <div class=\"col-sm-12\">\n        <div class=\" pad-down10 btn-group btn-group-toggle float-right\" data-toggle=\"buttons\">\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data = allTestExecutions; updateOptions('allClicked');\" [ngClass]=\"{ active: dashBoardDataObjects.allClicked === true }\">\n            <input checked=\"checked\" name=\"options\" type=\"radio\" />\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">All</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-single-02\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data = publicSecurityExecutions; updateOptions('psClicked');\" [ngClass]=\"{ active: dashBoardDataObjects.psClicked === true }\">\n            <input checked=\"checked\" name=\"options\" type=\"radio\" />\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">Public Security</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-single-02\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data = dbExecutions; updateOptions('ciClicked');\"[ngClass]=\"{ active: dashBoardDataObjects.ciClicked === true }\">\n            <input checked=\"checked\" name=\"options\" type=\"radio\" />\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">Civil Identity</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-single-02\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"data = osExecutions; updateOptions('dgClicked');\" [ngClass]=\"{ active: dashBoardDataObjects.dgClicked === true }\">\n            <input class=\" d-none d-sm-none\" name=\"options\" type=\"radio\"/>\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">Digital</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-gift-2\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-warning btn-simple\">\n            <div class=\"info-icon text-center icon-warning\" (click)=\"downloadFile();\" style=\"width: 40px;\">\n              <i class=\" et-icons icon-cloud-download-93\"> </i>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <div class=\" row\">\n            <div class=\" col-sm-6 text-left\">\n              <h5 class=\" card-category\">Test Executions</h5>\n              <h2 class=\" card-title\">{{dashBoardDataObjects.executionChartText}}</h2>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-body\">\n          <div class=\"chart-area\"><canvas id=\"totalExecutionsChart\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-6\">\n      <div class=\" card card-chart card-chart-pie\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Test Executions</h5>\n          <h2 class=\" card-title\">Pass/Fail %</h2>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-6\">\n              <div class=\"chart-area\"><canvas id=\"passfailperc\"> </canvas></div>\n            </div>\n            <div class=\" col-6\">\n              <h4 class=\" card-title\">\n                <i class=\" tim-icons icon-trophy text-success\"> </i> Executions: {{dashBoardDataObjects.totalExecutions}}\n              </h4>\n              <p class=\" category\">A pass rate of {{dashBoardDataObjects.passFailPercent}}%</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-6\">\n      <div class=\" card card-chart\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Tests</h5>\n          <h3 class=\" card-title\">{{dashBoardDataObjects.orgTestsText}}</h3>\n        </div>\n        <div class=\" card-body\">\n          <div class=\"chart-area\"><canvas id=\"SystemTestsChart\"> </canvas></div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-3 col-md-6\">\n      <div class=\" card card-stats\">\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-5\">\n              <div class=\" info-icon text-center icon-warning\">\n                <i class=\" et-icons icon-spaceship\"> </i>\n              </div>\n            </div>\n            <div class=\" col-7\">\n              <div class=\" numbers\">\n                <h4 class=\"\">Total Executions</h4>\n                <h3 class=\" card-title\">{{dashBoardDataObjects.executionCount}}</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-footer\">\n          <hr />\n          <div class=\" stats\">\n            <i class=\" et-icons icon-sound-wave\"> </i> Last Update: 03/15/2021\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-3 col-md-6\">\n      <div class=\" card card-stats\">\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-5\">\n              <div class=\" info-icon text-center icon-primary\">\n                <i class=\" et-icons icon-paper\"> </i>\n              </div>\n            </div>\n            <div class=\" col-7\">\n              <div class=\" numbers\">\n                <h4 class=\"\">Tests</h4>\n                <h3 class=\" card-title\">660</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-footer\">\n          <hr />\n          <div class=\" stats\">\n            <i class=\" et-icons icon-sound-wave\"> </i> Last Update: 03/15/2021\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-3 col-md-6\">\n      <div class=\" card card-stats\">\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-5\">\n              <div class=\" info-icon text-center icon-success\">\n                <i class=\" et-icons icon-check-2\"> </i>\n              </div>\n            </div>\n            <div class=\" col-7\">\n              <div class=\" numbers\">\n                <h4 class=\"\">Passed Tests</h4>\n                <h3 class=\" card-title\">656</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-footer\">\n          <hr />\n          <div class=\" stats\">\n            <i class=\" et-icons icon-sound-wave\"> </i> Last Run: 03/15/2021\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-3 col-md-6\">\n      <div class=\" card card-stats\">\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-5\">\n              <div class=\" info-icon text-center icon-danger\">\n                <i class=\" et-icons icon-simple-remove\"> </i>\n              </div>\n            </div>\n            <div class=\" col-7\">\n              <div class=\" numbers\">\n                <h4 class=\"\">Tests Failed</h4>\n                <h3 class=\" card-title\">4</h3>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\" card-footer\">\n          <hr />\n\n          <div class=\" stats\">\n            <i class=\" et-icons icon-sound-wave\"> </i> Last Updated: 03/15/2021\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-lg-12\">\n      <div class=\" card card-tasks\">\n        <div class=\" card-header\">\n          <h4 class=\"text-danger title d-inline\">Active Failed Tests({{dashBoardDataObjects.failedTestCount}})</h4>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" table-full-width table-responsive\">\n            <table class=\" table\">\n              <tbody>\n                <tr *ngFor=\"let failedTest of dashBoardDataObjects.activeFailedTests\">\n                  <td>\n                    <p class=\"text-danger\">{{failedTest.Description}}</p>\n                  </td>\n                  <td>\n                    <p class=\"title\" style=\"min-width: 100px;\">Failing For:</p>\n                    <p class=\"text-danger\"><b>{{failedTest.FailingFor}}</b></p>\n                  </td>\n                  <td>\n                    <p class=\"title\" style=\"min-width: 100px;\">System:</p>\n                    <p><b>{{failedTest.System}}</b></p>\n                  </td>\n                  <td>\n                    <p class=\"title\" style=\"min-width: 100px;\">Jira Link:</p>\n                    <p><b><a>{{failedTest.JiraID}}</a></b></p>\n                  </td>\n                  <td>\n                    <p class=\"title\" style=\"min-width: 150px;\">First Failure Date:</p>\n                    <p>{{failedTest.FirstFailureDate}}</p>\n                  </td>\n                  <td>\n                    <p class=\"title\" style=\"min-width: 150px;\">Last Failure Date:</p>\n                    <p>{{failedTest.LastFailureDate}}</p>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/models/dashboardDataObjects.ts":
/*!************************************************!*\
  !*** ./src/app/models/dashboardDataObjects.ts ***!
  \************************************************/
/*! exports provided: DashboardDataObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDataObjects", function() { return DashboardDataObjects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var DashboardDataObjects = /** @class */ (function () {
    function DashboardDataObjects() {
        //A raw collection of the data for use to derive specific metrics
        this.allExecutionData = [];
        //These are used for switching data for the Line Graph
        this.allTestExecutions = [];
        this.psTestExecutions = [];
        this.osTestExecutions = [];
        this.wsTestExecutions = [];
        this.executionLineChartLabels = [];
        this.executionChartText = "";
        this.orgTestsText = "";
        //These are used for the Pass/Fail percent pie chart
        this.passFailPercent = 0;
        this.passFailFailed = 0;
        this.passFailTotal = 0;
        this.passFailPassed = 0;
        this.pieChartDataSet = [];
        //These are used for the system test bar chart
        this.systemAllTestsBarLabels = [];
        this.systemTestsBarAllData = [];
        this.systemPSTestsBarLabels = [];
        this.systemTestsBarPSData = [];
        this.systemCITestsBarLabels = [];
        this.systemTestsBarCIData = [];
        this.systemDGTestsBarLabels = [];
        this.systemTestsBarDGData = [];
        //These are used for determining what data metric is selected
        this.allClicked = true;
        this.psClicked = false;
        this.ciClicked = false;
        this.dgClicked = false;
        //These are for switching front end counts when the systme types are changed
        this.executionCount = 0;
        this.testCount = 0;
        this.passedTestCount = 0;
        this.failedTestCount = 0;
        this.testSystems = [];
        this.failedTests = [];
    }
    return DashboardDataObjects;
}());



/***/ }),

/***/ "./src/app/models/testMetric.ts":
/*!**************************************!*\
  !*** ./src/app/models/testMetric.ts ***!
  \**************************************/
/*! exports provided: TestMetric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestMetric", function() { return TestMetric; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TestMetric = /** @class */ (function () {
    function TestMetric() {
    }
    return TestMetric;
}());



/***/ }),

/***/ "./src/app/models/testSystem.ts":
/*!**************************************!*\
  !*** ./src/app/models/testSystem.ts ***!
  \**************************************/
/*! exports provided: TestSystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestSystem", function() { return TestSystem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var TestSystem = /** @class */ (function () {
    function TestSystem() {
    }
    return TestSystem;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pad-down10 {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0M6XFxQcm9qZWN0c1xcQXV0b0Rhc2hib2FyZC9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFkLWRvd24xMCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICB9IiwiLnBhZC1kb3duMTAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_dashboardDataObjects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/dashboardDataObjects */ "./src/app/models/dashboardDataObjects.ts");
/* harmony import */ var src_app_services_dasboardService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/dasboardService */ "./src/app/services/dasboardService.ts");
/* harmony import */ var _utils_ChartOptionsUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ChartOptionsUtil */ "./src/app/pages/utils/ChartOptionsUtil.ts");






var ActiveFailedTest = /** @class */ (function () {
    function ActiveFailedTest() {
    }
    return ActiveFailedTest;
}());
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        this.dashBoardDataObjects = new src_app_models_dashboardDataObjects__WEBPACK_IMPORTED_MODULE_3__["DashboardDataObjects"]();
        this.chartOptionsUtil = new _utils_ChartOptionsUtil__WEBPACK_IMPORTED_MODULE_5__["ChartOptionsUtils"]();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get all tests so we can map systems to number of tests for those systems
        this.dashBoardDataObjects.executionChartText = "All Test Executions";
        var testMetrics = this.dashboardService.getAllTestMetrics();
        testMetrics.forEach(function (testMetric) {
            _this.dashBoardDataObjects.systemAllTestsBarLabels.push(testMetric.system);
            _this.dashBoardDataObjects.systemTestsBarAllData.push(testMetric.testCount);
            _this.dashBoardDataObjects.testCount += testMetric.testCount;
        });
        this.dashBoardDataObjects.orgTestsText = "All Tests (" + this.dashBoardDataObjects.testCount + ")";
        this.dashBoardDataObjects.systemTestsChartCanvas = document.getElementById("SystemTestsChart");
        this.dashBoardDataObjects.systemTestsChartCTX = this.dashBoardDataObjects.systemTestsChartCanvas.getContext("2d");
        this.dashBoardDataObjects.systemTestsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.dashBoardDataObjects.systemTestsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), this.dashBoardDataObjects.systemTestsBarAllData, this.dashBoardDataObjects.systemAllTestsBarLabels));
        this.dashboardService.getTestAllExecutionMetrics().subscribe(function (metrics) {
            metrics.sort(function (a, b) { return Number(a.id) - Number(b.id); });
            _this.dashBoardDataObjects.allExecutionData = metrics;
            _this.dashBoardDataObjects.passFailFailed = 0;
            _this.dashBoardDataObjects.passFailTotal = 0;
            metrics.forEach(function (metric) {
                _this.dashBoardDataObjects.allTestExecutions.push(Number(metric.totalExecutions));
                _this.dashBoardDataObjects.psTestExecutions.push(Number(metric.dbExecutions));
                _this.dashBoardDataObjects.osTestExecutions.push(Number(metric.osExecutions));
                _this.dashBoardDataObjects.wsTestExecutions.push(Number(metric.wsExecutions));
                _this.dashBoardDataObjects.executionLineChartLabels.push(metric.exeuctionRange);
                _this.dashBoardDataObjects.passFailFailed += (Number(metric.dbFails) + Number(metric.osFails) + Number(metric.wsFails));
                _this.dashBoardDataObjects.passFailTotal += Number(metric.totalExecutions);
                _this.dashBoardDataObjects.passFailPassed = _this.dashBoardDataObjects.passFailTotal - _this.dashBoardDataObjects.passFailFailed;
                _this.calculatePercent();
                _this.dashBoardDataObjects.pieChartDataSet = [_this.dashBoardDataObjects.passFailPassed, _this.dashBoardDataObjects.passFailFailed];
                _this.dashBoardDataObjects.executionCount += Number(metric.totalExecutions);
            });
            _this.dashBoardDataObjects.totalExecutionsCanvas = document.getElementById("totalExecutionsChart");
            _this.dashBoardDataObjects.totalExecutionsCTX = _this.dashBoardDataObjects.totalExecutionsCanvas.getContext("2d");
            _this.dashBoardDataObjects.totalExecutionsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(_this.dashBoardDataObjects.totalExecutionsCTX, _this.createLineGraph(_this.chartOptionsUtil.getGradientChartOptionsConfigurationWithTooltipRed()));
            _this.dashBoardDataObjects.passFailPercentCanvas = document.getElementById("passfailperc");
            _this.dashBoardDataObjects.passFailPercentCTX = _this.dashBoardDataObjects.passFailPercentCanvas.getContext("2d");
            _this.dashBoardDataObjects.passFailChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(_this.dashBoardDataObjects.passFailPercentCTX, _this.createPieChart());
        });
        this.updateActiveFailedTests();
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var ciTestMetrics = this.dashboardService.getCITestMetrics();
        ciTestMetrics.forEach(function (metric) {
            _this.dashBoardDataObjects.systemCITestsBarLabels.push(metric.system);
            _this.dashBoardDataObjects.systemTestsBarCIData.push(metric.testCount);
        });
        var psTestMetrics = this.dashboardService.getPSTestMetrics();
        psTestMetrics.forEach(function (metric) {
            _this.dashBoardDataObjects.systemPSTestsBarLabels.push(metric.system);
            _this.dashBoardDataObjects.systemTestsBarPSData.push(metric.testCount);
        });
        var dgTestMetrics = this.dashboardService.getDGTestMetrics();
        dgTestMetrics.forEach(function (metric) {
            _this.dashBoardDataObjects.systemDGTestsBarLabels.push(metric.system);
            _this.dashBoardDataObjects.systemTestsBarDGData.push(metric.testCount);
        });
    };
    DashboardComponent.prototype.updateOptions = function (clicked) {
        var _this = this;
        var executionsDataSet = [];
        var testDataSet = [];
        var testDataLabels = [];
        this.dashBoardDataObjects.allClicked = false;
        this.dashBoardDataObjects.psClicked = false;
        this.dashBoardDataObjects.ciClicked = false;
        this.dashBoardDataObjects.dgClicked = false;
        this.dashBoardDataObjects.passFailFailed = 0;
        this.dashBoardDataObjects.passFailTotal = 0;
        if (clicked == "allClicked") {
            this.dashBoardDataObjects.executionChartText = "All Test Executions";
            this.dashBoardDataObjects.allClicked = true;
            testDataLabels = this.dashBoardDataObjects.systemAllTestsBarLabels;
            executionsDataSet = this.dashBoardDataObjects.allTestExecutions;
            testDataSet = this.dashBoardDataObjects.systemTestsBarAllData;
            this.dashBoardDataObjects.allExecutionData.forEach(function (execution) {
                _this.dashBoardDataObjects.passFailFailed += (Number(execution.dbFails) + Number(execution.osFails) + Number(execution.wsFails));
                _this.dashBoardDataObjects.passFailTotal += Number(execution.totalExecutions);
            });
            var totalTests_1 = 0;
            this.dashBoardDataObjects.systemTestsBarAllData.forEach(function (test) {
                totalTests_1 += test;
            });
            this.dashBoardDataObjects.orgTestsText = "All Tests (" + totalTests_1 + ")";
            //this.updateActiveFailedTests();
        }
        if (clicked == "psClicked") {
            this.dashBoardDataObjects.psClicked = true;
            this.dashBoardDataObjects.executionChartText = "Public Security Test Executions";
            testDataLabels = this.dashBoardDataObjects.systemPSTestsBarLabels;
            executionsDataSet = this.dashBoardDataObjects.psTestExecutions;
            testDataSet = this.dashBoardDataObjects.systemTestsBarPSData;
            this.dashBoardDataObjects.allExecutionData.forEach(function (execution) {
                _this.dashBoardDataObjects.passFailFailed += Number(execution.dbFails);
                _this.dashBoardDataObjects.passFailTotal += Number(execution.dbExecutions);
            });
            var totalTests_2 = 0;
            this.dashBoardDataObjects.systemTestsBarPSData.forEach(function (test) {
                totalTests_2 += test;
            });
            this.dashBoardDataObjects.orgTestsText = "Public Security Tests (" + totalTests_2 + ")";
            //this.updateActiveFailedTests();
        }
        if (clicked == "ciClicked") {
            this.dashBoardDataObjects.ciClicked = true;
            this.dashBoardDataObjects.executionChartText = "Civil Identity Test Executions";
            executionsDataSet = this.dashBoardDataObjects.osTestExecutions;
            testDataSet = this.dashBoardDataObjects.systemTestsBarCIData;
            testDataLabels = this.dashBoardDataObjects.systemCITestsBarLabels;
            this.dashBoardDataObjects.allExecutionData.forEach(function (execution) {
                _this.dashBoardDataObjects.passFailFailed += Number(execution.osFails);
                _this.dashBoardDataObjects.passFailTotal += Number(execution.osExecutions);
            });
            var totalTests_3 = 0;
            this.dashBoardDataObjects.systemTestsBarCIData.forEach(function (test) {
                totalTests_3 += test;
            });
            this.dashBoardDataObjects.orgTestsText = "Civil Identity Tests (" + totalTests_3 + ")";
        }
        if (clicked == "dgClicked") {
            this.dashBoardDataObjects.dgClicked = true;
            this.dashBoardDataObjects.executionChartText = "Digital Test Executions";
            executionsDataSet = this.dashBoardDataObjects.wsTestExecutions;
            testDataSet = this.dashBoardDataObjects.systemTestsBarDGData;
            testDataLabels = this.dashBoardDataObjects.systemDGTestsBarLabels;
            this.dashBoardDataObjects.allExecutionData.forEach(function (execution) {
                _this.dashBoardDataObjects.passFailFailed += Number(execution.wsFails);
                _this.dashBoardDataObjects.passFailTotal += Number(execution.wsExecutions);
            });
            var totalTests_4 = 0;
            this.dashBoardDataObjects.systemTestsBarDGData.forEach(function (test) {
                totalTests_4 += test;
            });
            this.dashBoardDataObjects.orgTestsText = "Digital Tests (" + totalTests_4 + ")";
        }
        this.dashBoardDataObjects.passFailPassed = this.dashBoardDataObjects.passFailFailed + this.dashBoardDataObjects.passFailTotal;
        this.calculatePercent();
        this.dashBoardDataObjects.pieChartDataSet = [this.dashBoardDataObjects.passFailPassed, this.dashBoardDataObjects.passFailFailed];
        this.dashBoardDataObjects.passFailChartData.data.datasets[0].data = this.dashBoardDataObjects.pieChartDataSet;
        this.dashBoardDataObjects.passFailChartData.update();
        this.dashBoardDataObjects.totalExecutionsChartData.data.datasets[0].data = executionsDataSet;
        this.dashBoardDataObjects.totalExecutionsChartData.update();
        this.dashBoardDataObjects.systemTestsChartData.data.datasets[0].data = testDataSet;
        this.dashBoardDataObjects.systemTestsChartData.data.labels = testDataLabels;
        this.dashBoardDataObjects.systemTestsChartData.update();
    };
    DashboardComponent.prototype.updateActiveFailedTests = function () {
        var arr = [];
        var fail1 = new ActiveFailedTest();
        fail1.Description = "DM View Registration";
        fail1.FailingFor = "3 days";
        fail1.FirstFailureDate = "03/12/2021";
        fail1.LastFailureDate = "03/15/2021";
        fail1.System = "MBIS";
        fail1.JiraID = "BBDEX-01";
        arr.push(fail1);
        var fail2 = new ActiveFailedTest();
        fail2.Description = "Reverse Verification";
        fail2.FailingFor = "2 days";
        fail2.FirstFailureDate = "03/14/2021";
        fail2.LastFailureDate = "03/15/2021";
        fail2.System = "MBIS";
        fail2.JiraID = "BBDEX-02";
        arr.push(fail2);
        var fail3 = new ActiveFailedTest();
        fail3.Description = "Login";
        fail3.FailingFor = "1 day";
        fail3.FirstFailureDate = "03/15/2021";
        fail3.LastFailureDate = "03/15/2021";
        fail3.System = "MFace";
        fail3.JiraID = "BBDEX-05";
        arr.push(fail3);
        var fail4 = new ActiveFailedTest();
        fail4.Description = "Update Record";
        fail4.FailingFor = "1 day";
        fail4.FirstFailureDate = "03/12/2021";
        fail4.LastFailureDate = "03/12/2021";
        fail4.System = "Back Office";
        fail4.JiraID = "BBDEX-48";
        arr.push(fail4);
        this.dashBoardDataObjects.activeFailedTests = arr;
    };
    DashboardComponent.prototype.ConvertToCSV = function (objArray, headerList) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = 'S.No,';
        for (var index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = (i + 1) + '';
            for (var index in headerList) {
                var head = headerList[index];
                line += ',' + array[i][head];
            }
            str += line + '\r\n';
        }
        return str;
    };
    DashboardComponent.prototype.downloadFile = function (filename) {
        if (filename === void 0) { filename = 'Executions'; }
        var csvData = this.ConvertToCSV(this.dashboardService.getTestExecutionData(), ['test', 'executionDate', 'host', 'id', 'remediationNeeded', "remediationTook", "result", "system", "testDuration", "testId"]);
        console.log(csvData);
        var blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        var dwldLink = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    DashboardComponent.prototype.calculatePercent = function () {
        var failingPercent = 100 / this.dashBoardDataObjects.passFailTotal * this.dashBoardDataObjects.passFailFailed;
        var PassingPercent = 100 - failingPercent;
        this.dashBoardDataObjects.passFailPercent = (Math.round(PassingPercent * 10) / 10);
    };
    DashboardComponent.prototype.createLineGraph = function (chartOptions) {
        var gradientStroke = this.dashBoardDataObjects.totalExecutionsCTX.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, "rgba(233,32,16,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(233,32,16,0.0)");
        gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //red colors
        var config = {
            type: "line",
            data: {
                labels: this.dashBoardDataObjects.executionLineChartLabels,
                datasets: [
                    {
                        label: "Test Executions",
                        fill: true,
                        backgroundColor: gradientStroke,
                        borderColor: "#ec250d",
                        borderWidth: 2,
                        borderDash: [],
                        borderDashOffset: 0.0,
                        pointBackgroundColor: "#ec250d",
                        pointBorderColor: "rgba(255,255,255,0)",
                        pointHoverBackgroundColor: "#ec250d",
                        pointBorderWidth: 20,
                        pointHoverRadius: 4,
                        pointHoverBorderWidth: 15,
                        pointRadius: 4,
                        data: this.dashBoardDataObjects.allTestExecutions
                    }
                ]
            },
            options: chartOptions
        };
        return config;
    };
    DashboardComponent.prototype.createPieChart = function () {
        var config = {
            type: "pie",
            data: {
                labels: ["Pass", "Fail"],
                datasets: [
                    {
                        label: "Executions",
                        pointRadius: 0,
                        pointHoverRadius: 0,
                        backgroundColor: ["#00c09d", "#e2e2e2"],
                        borderWidth: 0,
                        data: this.dashBoardDataObjects.pieChartDataSet
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
    DashboardComponent.prototype.createSystemTestsBarGraph = function (chartOptions, dataSet, labels) {
        var gradientStroke = this.dashBoardDataObjects.systemTestsChartCTX.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
        //System Tests Config
        var config = {
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
                        data: dataSet
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
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: src_app_services_dasboardService__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }
    ]; };
    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-dashboard",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_dasboardService__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard.routing */ "./src/app/pages/dashboard/dashboard.routing.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");










var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutes"]),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot()
            ],
            declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]],
            exports: [_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.routing.ts ***!
  \******************************************************/
/*! exports provided: DashboardRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function() { return DashboardRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");


var DashboardRoutes = [
    {
        path: "",
        children: [
            {
                path: "dashboard",
                component: _dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/services/dasboardService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/dasboardService.ts ***!
  \*********************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_testSystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/testSystem */ "./src/app/models/testSystem.ts");
/* harmony import */ var _models_testMetric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/testMetric */ "./src/app/models/testMetric.ts");





var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
        this.databaseHosts = [
            {
                "host": "uatdb95w92m7:6010",
                "dbType": "MySql",
                "environmentType": "non-prod",
                "testCount": 25,
                'lastExecutionDate': 'Jan 20, 2021'
            },
            {
                "host": "devdb3w106m7:6000",
                "dbType": "MySql",
                "environmentType": "dev",
                "testCount": 25,
                'lastExecutionDate': 'Jan 20, 2021'
            },
            {
                "host": "ATL1L-D64H353",
                "dbType": "MySql",
                "environmentType": "localhost",
                "testCount": 25,
                'lastExecutionDate': 'Jan 20, 2021'
            },
            {
                "host": "ATL1L-D64H353",
                "dbType": "MSSql",
                "environmentType": "localhost",
                "testCount": 25,
                'lastExecutionDate': 'Jan 20, 2021'
            }
        ];
        this.testExecutions = [
            {
                "test": "Section Header 2.13 Ensure sa Login Account is set to Disabled",
                "executionDate": "03/08/2021 11:02pm",
                "host": "dev000001",
                "id": "1",
                "remediationNeeded": false,
                "remediationTook": "",
                "result": "pass",
                "steps": [
                    {
                        "duration": "0.005667209625244141",
                        "name": "Then the \"sa\" account is removed on \"dev000001\"",
                        "status": "pass"
                    }
                ],
                "system": "mssql",
                "testDuration": "0.005877209625244141",
                "testId": "5"
            },
            {
                "test": "Section Header 2.11 Ensure Ensure non-standard ports are not used",
                "executionDate": "03/08/2021 11:02pm",
                "host": "dev000001",
                "id": "1",
                "remediationNeeded": false,
                "remediationTook": "",
                "result": "pass",
                "steps": [
                    {
                        "duration": "0.005667209625244141",
                        "name": "Then SQL Server is configured to use non-standard ports",
                        "status": "pass"
                    }
                ],
                "system": "mssql",
                "testDuration": "0.005877209625244141",
                "testId": "6"
            }
        ];
    }
    DashboardService.prototype.getTestAllExecutionMetrics = function () {
        var allMetrics = this.httpClient.get("https://kf460t61l8.execute-api.us-west-1.amazonaws.com/dev/get");
        return allMetrics;
    };
    DashboardService.prototype.getTestResults = function () {
        return this.httpClient.get("https://irjzeor466.execute-api.us-west-1.amazonaws.com/dev/get");
    };
    DashboardService.prototype.getAllTestMetrics = function () {
        //return this.httpClient.get<Test[]>("https://vp4fjvs6vb.execute-api.us-west-1.amazonaws.com/dev/get");
        var testMetrics = [];
        var tm1 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm1.system = "Public Security";
        tm1.testCount = 254;
        testMetrics.push(tm1);
        var tm2 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm2.system = "Civil Identity";
        tm2.testCount = 198;
        testMetrics.push(tm2);
        var tm3 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm3.system = "Digital";
        tm3.testCount = 140;
        testMetrics.push(tm3);
        return testMetrics;
    };
    DashboardService.prototype.getPSTestMetrics = function () {
        var testMetrics = [];
        var tm1 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm1.system = "MBIS";
        tm1.testCount = 121;
        testMetrics.push(tm1);
        var tm2 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm2.system = "TPE/LiveScan";
        tm2.testCount = 59;
        testMetrics.push(tm2);
        var tm3 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm3.system = "M-Face";
        tm3.testCount = 50;
        testMetrics.push(tm3);
        var tm4 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm4.system = "UES";
        tm4.testCount = 24;
        testMetrics.push(tm4);
        return testMetrics;
    };
    DashboardService.prototype.getCITestMetrics = function () {
        var testMetrics = [];
        var tm1 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm1.system = "Web Enrollment";
        tm1.testCount = 121;
        testMetrics.push(tm1);
        var tm2 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm2.system = "Back Office";
        tm2.testCount = 200;
        testMetrics.push(tm2);
        var tm3 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm3.system = "Testing";
        tm3.testCount = 50;
        testMetrics.push(tm3);
        return testMetrics;
    };
    DashboardService.prototype.getDGTestMetrics = function () {
        var testMetrics = [];
        var tm1 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm1.system = "MID";
        tm1.testCount = 41;
        testMetrics.push(tm1);
        var tm2 = new _models_testMetric__WEBPACK_IMPORTED_MODULE_4__["TestMetric"]();
        tm2.system = "Proofing";
        tm2.testCount = 58;
        testMetrics.push(tm2);
        return testMetrics;
    };
    DashboardService.prototype.getSystems = function () {
        //return this.httpClient.get<TestSystem[]>("https://tff01d8t22.execute-api.us-west-1.amazonaws.com/dev/get");
        var testSystems = [];
        var ts1 = new _models_testSystem__WEBPACK_IMPORTED_MODULE_3__["TestSystem"]();
        ts1.id = "1";
        ts1.name = "Public Security";
        ts1.shortName = "PS";
        testSystems.push(ts1);
        var ts2 = new _models_testSystem__WEBPACK_IMPORTED_MODULE_3__["TestSystem"]();
        ts2.id = "2";
        ts2.name = "Civil Identity";
        ts2.shortName = "CI";
        testSystems.push(ts2);
        var ts3 = new _models_testSystem__WEBPACK_IMPORTED_MODULE_3__["TestSystem"]();
        ts3.id = "3";
        ts3.name = "Digital";
        ts3.shortName = "DG";
        testSystems.push(ts3);
        return testSystems;
    };
    DashboardService.prototype.getDatabaseHosts = function () {
        var jsonObject = JSON.parse(JSON.stringify(this.databaseHosts));
        var results = jsonObject;
        return results;
    };
    DashboardService.prototype.getJiraBaselineExceptions = function () {
        var exceptions = [];
        return exceptions;
    };
    DashboardService.prototype.getTestExecutionData = function () {
        var jsonObject = JSON.parse(JSON.stringify(this.testExecutions));
        var results = jsonObject;
        return results;
    };
    DashboardService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardService);
    return DashboardService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-dashboard-dashboard-module.js.map