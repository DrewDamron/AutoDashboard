(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-jiradefects-jiradefects-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jiradefects/jiradefects.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jiradefects/jiradefects.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n    <div class=\" row\">\n      <div class=\"col-sm-12\">\n        <div class=\" pad-down10 btn-group btn-group-toggle float-right\" data-toggle=\"buttons\">\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"updateOptions('allClicked');\" [ngClass]=\"{ active: allClicked === true }\">\n            <input checked=\"checked\" name=\"options\" type=\"radio\" />\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">All</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-single-02\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"updateOptions('psClicked');\" [ngClass]=\"{ active: psClicked === true }\">\n            <input checked=\"checked\" name=\"options\" type=\"radio\" />\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">Public Security</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-single-02\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"updateOptions('ciClicked');\"[ngClass]=\"{ active: ciClicked === true }\">\n            <input checked=\"checked\" name=\"options\" type=\"radio\" />\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">Civil Identity</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-single-02\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-danger btn-simple\" (click)=\"updateOptions('dgClicked');\" [ngClass]=\"{ active: dgClicked === true }\">\n            <input class=\" d-none d-sm-none\" name=\"options\" type=\"radio\"/>\n            <span class=\" d-none d-sm-block d-md-block d-lg-block d-xl-block\">Digital</span>\n            <span class=\" d-block d-sm-none\">\n              <i class=\" et-icons icon-gift-2\"> </i>\n            </span>\n          </label>\n          <label class=\" btn btn-sm btn-warning btn-simple\">\n            <div class=\"info-icon text-center icon-warning\" (click)=\"downloadFile();\" style=\"width: 40px;\">\n              <i class=\" et-icons icon-cloud-download-93\"> </i>\n            </div>\n          </label>\n        </div>\n      </div>\n      <div class=\" col-lg-6\">\n        <div class=\" card card-chart\">\n          <div class=\" card-header\">\n            <h4 class=\"\">Jira Defects</h4>\n            <h3 class=\" card-title\">\n              <i class=\" et-icons icon-single-copy-04 text-info\"> </i> 42\n            </h3>\n          </div>\n          <div class=\" card-body\">\n            <div class=\"chart-area\"><canvas id=\"SystemDefectsChart\"> </canvas></div>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-lg-6\">\n        <div class=\" card card-chart\">\n          <div class=\" card-header\">\n            <h4 class=\"\">Escaped Defects by Year</h4>\n            <h3 class=\" card-title\">\n              <i class=\" et-icons icon-single-copy-04 text-info\"> </i>\n            </h3>\n          </div>\n          <div class=\" card-body\">\n            <div class=\"chart-area\"><canvas id=\"SystemEscapedDefectsChart\"> </canvas></div>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-lg-6\">\n        <div class=\" card card-chart card-chart-pie\">\n          <div class=\"card-header\"> \n            <h2 class=\"card-title\">Project Defects</h2>\n          </div>\n          <div class=\"card-body\">\n            <div class=\" row\">\n              <div class=\" col-10\">\n                <div class=\"chart-area\"><canvas id=\"projectDefectsPieChart\"> </canvas></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-lg-6\">\n        <div class=\" card card-chart card-chart-pie\">\n          <div class=\"card-header\"> \n            <h2 class=\"card-title\">Late Detection Cause:</h2>\n          </div>\n          <div class=\"card-body\">\n            <div class=\" row\">\n              <div class=\" col-10\">\n                <div class=\"chart-area\"><canvas id=\"systemDefectsPieChart\"> </canvas></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\" col-lg-12\">\n        <div class=\" card card-tasks\">\n          <div class=\" card-header\">\n            <h4 class=\"text-danger title d-inline\">Jira Defects(6)</h4>\n          </div>\n          <div class=\" card-body\">\n            <div class=\" table-full-width table-responsive\">\n              <table class=\" table\">\n                <tbody>\n                  <tr *ngFor=\"let defect of jiraDefects\">\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Jira Key:</p>\n                      <p class=\"text-info\">{{defect.key}}</p>\n                    </td>\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Summary:</p>\n                      <p class=\"\">{{defect.fields.summary}}</p>\n                    </td>\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Project:</p>\n                      <p class=\"\"><b>{{defect.fields.project.name}}</b></p>\n                    </td>\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Escaped From:</p>\n                      <p class=\"\">{{defect.fields.customfield_11701.value}}</p>\n                    </td>\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Late Detection Cause:</p>\n                      <p class=\"\">{{defect.fields.customfield_11704.value}}</p>\n                    </td>\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Created:</p>\n                      <p class=\"\">{{defect.fields.created}}</p>\n                    </td>\n                    <td>\n                      <p class=\"title\" style=\"min-width: 100px;\">Created By:</p>\n                      <p>{{defect.fields.creator.displayname}}</p>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/models/jiraIssue.ts":
/*!*************************************!*\
  !*** ./src/app/models/jiraIssue.ts ***!
  \*************************************/
/*! exports provided: JiraIssue, Fields, IssueType, GenericCustomField, JiraUser, JiraProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraIssue", function() { return JiraIssue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fields", function() { return Fields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueType", function() { return IssueType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericCustomField", function() { return GenericCustomField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraUser", function() { return JiraUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraProject", function() { return JiraProject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var JiraIssue = /** @class */ (function () {
    function JiraIssue() {
    }
    return JiraIssue;
}());

var Fields = /** @class */ (function () {
    function Fields() {
    }
    return Fields;
}());

var IssueType = /** @class */ (function () {
    function IssueType() {
    }
    return IssueType;
}());

var GenericCustomField = /** @class */ (function () {
    function GenericCustomField() {
    }
    return GenericCustomField;
}());

var JiraUser = /** @class */ (function () {
    function JiraUser() {
    }
    return JiraUser;
}());

var JiraProject = /** @class */ (function () {
    function JiraProject() {
    }
    return JiraProject;
}());



/***/ }),

/***/ "./src/app/pages/jiradefects/jiradefects.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/jiradefects/jiradefects.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pad-down10 {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvamlyYWRlZmVjdHMvQzpcXFByb2plY3RzXFxBdXRvRGFzaGJvYXJkL3NyY1xcYXBwXFxwYWdlc1xcamlyYWRlZmVjdHNcXGppcmFkZWZlY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9qaXJhZGVmZWN0cy9qaXJhZGVmZWN0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9qaXJhZGVmZWN0cy9qaXJhZGVmZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWQtZG93bjEwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIH0iLCIucGFkLWRvd24xMCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/jiradefects/jiradefects.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/jiradefects/jiradefects.component.ts ***!
  \************************************************************/
/*! exports provided: JiraDefectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraDefectsComponent", function() { return JiraDefectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/jiraIssue */ "./src/app/models/jiraIssue.ts");
/* harmony import */ var src_app_services_jiraService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/jiraService */ "./src/app/services/jiraService.ts");
/* harmony import */ var _utils_ChartOptionsUtil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/ChartOptionsUtil */ "./src/app/pages/utils/ChartOptionsUtil.ts");






var JiraDefectsComponent = /** @class */ (function () {
    function JiraDefectsComponent(jiraService) {
        this.jiraService = jiraService;
        this.jiraDefects = [];
        this.systemTestsBarLabels = [];
        this.allClicked = true;
        this.psClicked = false;
        this.ciClicked = false;
        this.dgClicked = false;
        this.chartOptionsUtil = new _utils_ChartOptionsUtil__WEBPACK_IMPORTED_MODULE_5__["ChartOptionsUtils"]();
    }
    JiraDefectsComponent.prototype.ngOnInit = function () {
        this.jiraDefects = this.createJiraDefects();
        this.systemTestsBarLabels = ["Public Security", "Civil Identity", "Digital"];
        this.systemDefectsChartCanvas = document.getElementById("SystemDefectsChart");
        this.systemDefectsChartCTX = this.systemDefectsChartCanvas.getContext("2d");
        this.systemDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), this.systemTestsBarLabels, [14, 6, 9, 13]));
        this.systemEscapedDefectsChartCanvas = document.getElementById("SystemEscapedDefectsChart");
        this.systemEscapedDefectsChartCTX = this.systemEscapedDefectsChartCanvas.getContext("2d");
        this.systemEscapedDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), this.systemTestsBarLabels, [40, 16, 31], [12, 8, 6]));
        this.systemDefectsPieCanvas = document.getElementById("systemDefectsPieChart");
        this.systemDefectsPieCTX = this.systemDefectsPieCanvas.getContext("2d");
        this.systemDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsPieCTX, this.createLateDetectionPieChart([14, 7, 2]));
        this.projectDefectsPieCanvas = document.getElementById("projectDefectsPieChart");
        this.projectDefectsPieCTX = this.projectDefectsPieCanvas.getContext("2d");
        this.projectDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MBIS", "Back Office", "TPE/LiveScan", "MFace", "UES", "Testing", "Web Enrollment", "Civil Identity", "MID", "Proofing"], [10, 7, 2, 5, 7, 1, 12, 6, 8, 9]));
    };
    JiraDefectsComponent.prototype.createSystemTestsBarGraph = function (chartOptions, labels, data) {
        var gradientStroke = this.systemDefectsChartCTX.createLinearGradient(0, 230, 0, 50);
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
    };
    JiraDefectsComponent.prototype.createEscapedSystemDefectsBarGraph = function (chartOptions, labels, dataSet1, dataSet2) {
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
        var config = {
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
    };
    JiraDefectsComponent.prototype.createJiraDefects = function () {
        var jiraDefects = [];
        var jd1 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraIssue"]();
        jd1.id = "BDDEX-91";
        jd1.self = "https://jira.corp.morphotrak.com/browse/BDDEX-91";
        jd1.key = "BDDEX-91";
        jd1.fields = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["Fields"]();
        jd1.fields.created = "03/24/2021";
        jd1.fields.customfield_11703 = "Stuff to work"; //Expected Behavior
        jd1.fields.summary = "Test Dashboard defect";
        jd1.fields.issuetype = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["IssueType"]();
        jd1.fields.issuetype.description = "Bug issuetype with simpler workflow";
        jd1.fields.issuetype.id = "10400";
        jd1.fields.issuetype.name = "Defect";
        jd1.fields.issuetype.subtask = false;
        jd1.fields.assignee = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd1.fields.assignee.displayname = "DAMRON Drew";
        jd1.fields.assignee.name = "GT911066";
        jd1.fields.creator = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd1.fields.creator.displayname = "DAMRON Drew";
        jd1.fields.creator.name = "GT911066";
        jd1.fields.customfield_11701 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd1.fields.customfield_11701.value = "MORPHO: MMGS"; //Escaped From
        jd1.fields.customfield_11704 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd1.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
        jd1.fields.project = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraProject"]();
        jd1.fields.project.name = "MBIS";
        jd1.businessLine = "Public Security";
        var jd2 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraIssue"]();
        jd2.id = "BDDEX-99";
        jd2.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
        jd2.key = "BDDEX-99";
        jd2.fields = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["Fields"]();
        jd2.fields.created = "03/29/2021";
        jd2.fields.customfield_11703 = "Not have an unexpected result"; //Expected Behavior
        jd2.fields.summary = "Test Dashboard TPE defect";
        jd2.fields.issuetype = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["IssueType"]();
        jd2.fields.issuetype.description = "Bug issuetype with simpler workflow";
        jd2.fields.issuetype.id = "10400";
        jd2.fields.issuetype.name = "Defect";
        jd2.fields.issuetype.subtask = false;
        jd2.fields.assignee = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd2.fields.assignee.displayname = "DAMRON Drew";
        jd2.fields.assignee.name = "GT911066";
        jd2.fields.creator = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd2.fields.creator.displayname = "DAMRON Drew";
        jd2.fields.creator.name = "GT911066";
        jd2.fields.customfield_11701 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd2.fields.customfield_11701.value = "MORPHO: TPE"; //Escaped From
        jd2.fields.customfield_11704 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd2.fields.customfield_11704.value = "Missing Requirement"; //Late Detection Cause
        jd2.fields.project = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraProject"]();
        jd2.fields.project.name = "TPE";
        jd2.businessLine = "Public Security";
        var jd3 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraIssue"]();
        jd3.id = "MTPS-99";
        jd3.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
        jd3.key = "MTPS-99";
        jd3.fields = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["Fields"]();
        jd3.fields.created = "02/28/2021";
        jd3.fields.customfield_11703 = "Save button should be disabled"; //Expected Behavior
        jd3.fields.summary = "Test Dashboard M-Face defect";
        jd3.fields.issuetype = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["IssueType"]();
        jd3.fields.issuetype.description = "Bug issuetype with simpler workflow";
        jd3.fields.issuetype.id = "10400";
        jd3.fields.issuetype.name = "Defect";
        jd3.fields.issuetype.subtask = false;
        jd3.fields.assignee = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd3.fields.assignee.displayname = "DAMRON Drew";
        jd3.fields.assignee.name = "GT911066";
        jd3.fields.creator = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd3.fields.creator.displayname = "DAMRON Drew";
        jd3.fields.creator.name = "GT911066";
        jd3.fields.customfield_11701 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd3.fields.customfield_11701.value = "MORPHO: M-Face"; //Escaped From
        jd3.fields.customfield_11704 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd3.fields.customfield_11704.value = "Missing Requirement"; //Late Detection Cause
        jd3.fields.project = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraProject"]();
        jd3.fields.project.name = "MFACE";
        jd3.businessLine = "Public Security";
        var jd4 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraIssue"]();
        jd4.id = "CIVID-477";
        jd4.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
        jd4.key = "CIVID-477";
        jd4.fields = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["Fields"]();
        jd4.fields.created = "03/28/2021";
        jd4.fields.customfield_11703 = "Preferences Saved"; //Expected Behavior
        jd4.fields.summary = "Test Dashboard Back Office defect";
        jd4.fields.issuetype = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["IssueType"]();
        jd4.fields.issuetype.description = "Bug issuetype with simpler workflow";
        jd4.fields.issuetype.id = "10400";
        jd4.fields.issuetype.name = "Defect";
        jd4.fields.issuetype.subtask = false;
        jd4.fields.assignee = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd4.fields.assignee.displayname = "DAMRON Drew";
        jd4.fields.assignee.name = "GT911066";
        jd4.fields.creator = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd4.fields.creator.displayname = "DAMRON Drew";
        jd4.fields.creator.name = "GT911066";
        jd4.fields.customfield_11701 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd4.fields.customfield_11701.value = "Back Office Prod"; //Escaped From
        jd4.fields.customfield_11704 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd4.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
        jd4.fields.project = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraProject"]();
        jd4.fields.project.name = "Back Office";
        jd4.businessLine = "Civil Identity";
        var jd5 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraIssue"]();
        jd5.id = "CIVID-447";
        jd5.self = "https://jira.corp.morphotrak.com/browse/BDDEX-99";
        jd5.key = "CIVID-447";
        jd5.fields = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["Fields"]();
        jd5.fields.created = "03/25/2021";
        jd5.fields.customfield_11703 = "Enrollment Saved"; //Expected Behavior
        jd5.fields.summary = "Test Dashboard Web Enrollment defect";
        jd5.fields.issuetype = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["IssueType"]();
        jd5.fields.issuetype.description = "Bug issuetype with simpler workflow";
        jd5.fields.issuetype.id = "10400";
        jd5.fields.issuetype.name = "Defect";
        jd5.fields.issuetype.subtask = false;
        jd5.fields.assignee = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd5.fields.assignee.displayname = "DAMRON Drew";
        jd5.fields.assignee.name = "GT911066";
        jd5.fields.creator = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
        jd5.fields.creator.displayname = "DAMRON Drew";
        jd5.fields.creator.name = "GT911066";
        jd5.fields.customfield_11701 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd5.fields.customfield_11701.value = "Web Enrollment Prod"; //Escaped From
        jd5.fields.customfield_11704 = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
        jd5.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
        jd5.fields.project = new src_app_models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraProject"]();
        jd5.fields.project.name = "Web Enrollment";
        jd5.businessLine = "Civil Identity";
        jiraDefects.push(jd1);
        jiraDefects.push(jd2);
        jiraDefects.push(jd3);
        jiraDefects.push(jd4);
        jiraDefects.push(jd5);
        return jiraDefects;
    };
    JiraDefectsComponent.prototype.createLateDetectionPieChart = function (data) {
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
    };
    JiraDefectsComponent.prototype.createProjectDefectsPieChart = function (labels, data) {
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
    };
    JiraDefectsComponent.prototype.updateOptions = function (selectedOption) {
        this.allClicked = false;
        this.psClicked = false;
        this.ciClicked = false;
        this.dgClicked = false;
        if (selectedOption.toLowerCase() == "allclicked") {
            this.allClicked = true;
            this.systemDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["Public Security", "Civil Identity", "Digital"], [14, 6, 9, 13]));
            this.systemEscapedDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), this.systemTestsBarLabels, [40, 16, 31], [12, 8, 6]));
            this.systemDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsPieCTX, this.createLateDetectionPieChart([14, 7, 2]));
            this.projectDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MBIS", "Back Office", "TPE/LiveScan", "MFace", "UES", "Testing", "Web Enrollment", "Civil Identity", "MID", "Proofing"], [10, 7, 2, 5, 7, 1, 12, 6, 8, 9]));
        }
        if (selectedOption.toLowerCase() == "psclicked") {
            this.psClicked = true;
            this.systemDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["MBIS", "TPE/LiveScan", "M-Face", "UES"], [8, 2, 4, 1]));
            this.systemEscapedDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["MBIS", "TPE/LiveScan", "M-Face", "UES"], [12, 8, 15, 4], [6, 2, 7, 1]));
            this.systemDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsPieCTX, this.createLateDetectionPieChart([4, 2, 2]));
            this.projectDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MBIS", "TPE/LiveScan", "MFace", "UES"], [5, 7, 2]));
        }
        if (selectedOption.toLowerCase() == "ciclicked") {
            this.ciClicked = true;
            this.systemDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["Web Enrollment", "Back Office", "Testing"], [6, 4, 3]));
            this.systemEscapedDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["Web Enrollment", "Back Office", "Testing"], [9, 8, 10, 4], [4, 3, 5, 2]));
            this.systemDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsPieCTX, this.createLateDetectionPieChart([6, 1, 2]));
            this.projectDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["Web Enrollment", "Back Office", "Testing"], [7, 2, 6]));
        }
        if (selectedOption.toLowerCase() == "dgclicked") {
            this.dgClicked = true;
            this.systemDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsChartCTX, this.createSystemTestsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(), ["MID", "Proofing"], [2, 1]));
            this.systemEscapedDefectsChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemEscapedDefectsChartCTX, this.createEscapedSystemDefectsBarGraph(this.chartOptionsUtil.getBarChartOptionsConfig(true), ["MID", "Proofing"], [4, 7], [2, 1]));
            this.systemDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.systemDefectsPieCTX, this.createLateDetectionPieChart([2, 2]));
            this.projectDefectsPieChartData = new chart_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.projectDefectsPieCTX, this.createProjectDefectsPieChart(["MID", "Proofing"], [2, 1]));
        }
    };
    JiraDefectsComponent.ctorParameters = function () { return [
        { type: src_app_services_jiraService__WEBPACK_IMPORTED_MODULE_4__["JiraService"] }
    ]; };
    JiraDefectsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jiradefects',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./jiradefects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/jiradefects/jiradefects.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./jiradefects.component.scss */ "./src/app/pages/jiradefects/jiradefects.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_jiraService__WEBPACK_IMPORTED_MODULE_4__["JiraService"]])
    ], JiraDefectsComponent);
    return JiraDefectsComponent;
}());



/***/ }),

/***/ "./src/app/pages/jiradefects/jiradefects.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/jiradefects/jiradefects.module.ts ***!
  \*********************************************************/
/*! exports provided: JiraDefectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraDefectsModule", function() { return JiraDefectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _jiradefects_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jiradefects.routing */ "./src/app/pages/jiradefects/jiradefects.routing.ts");
/* harmony import */ var _jiradefects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./jiradefects.component */ "./src/app/pages/jiradefects/jiradefects.component.ts");










var JiraDefectsModule = /** @class */ (function () {
    function JiraDefectsModule() {
    }
    JiraDefectsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_jiradefects_routing__WEBPACK_IMPORTED_MODULE_8__["JiraDefectsRoutes"]),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                _components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"],
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot()
            ],
            declarations: [_jiradefects_component__WEBPACK_IMPORTED_MODULE_9__["JiraDefectsComponent"]],
            exports: [_jiradefects_component__WEBPACK_IMPORTED_MODULE_9__["JiraDefectsComponent"]]
        })
    ], JiraDefectsModule);
    return JiraDefectsModule;
}());



/***/ }),

/***/ "./src/app/pages/jiradefects/jiradefects.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/jiradefects/jiradefects.routing.ts ***!
  \**********************************************************/
/*! exports provided: JiraDefectsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraDefectsRoutes", function() { return JiraDefectsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jiradefects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiradefects.component */ "./src/app/pages/jiradefects/jiradefects.component.ts");


var JiraDefectsRoutes = [
    {
        path: "",
        children: [
            {
                path: "jiradefects",
                component: _jiradefects_component__WEBPACK_IMPORTED_MODULE_1__["JiraDefectsComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/services/jiraService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/jiraService.ts ***!
  \*****************************************/
/*! exports provided: JiraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JiraService", function() { return JiraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/jiraIssue */ "./src/app/models/jiraIssue.ts");




var JiraService = /** @class */ (function () {
    function JiraService(httpClient) {
        this.httpClient = httpClient;
    }
    Object.defineProperty(JiraService.prototype, "getjiraDefects", {
        get: function () {
            var jiraDefects = [];
            var jd1 = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraIssue"]();
            jd1.id = "BDDEX-91";
            jd1.self = "https://jira.corp.morphotrak.com/browse/BDDEX-91";
            jd1.key = "BDDEX-91";
            jd1.fields = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["Fields"]();
            jd1.fields.created = "2021-03-24T22:29:39.055-0700";
            jd1.fields.customfield_11703 = "Stuff to work"; //Expected Behavior
            jd1.fields.summary = "Test Dashboard defect";
            jd1.fields.issuetype = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["IssueType"]();
            jd1.fields.issuetype.description = "Bug issuetype with simpler workflow";
            jd1.fields.issuetype.id = "10400";
            jd1.fields.issuetype.name = "Defect";
            jd1.fields.issuetype.subtask = false;
            jd1.fields.assignee = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
            jd1.fields.assignee.displayname = "DAMRON Drew";
            jd1.fields.assignee.name = "GT911066";
            jd1.fields.creator = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["JiraUser"]();
            jd1.fields.creator.displayname = "DAMRON Drew";
            jd1.fields.creator.name = "GT911066";
            jd1.fields.customfield_11701 = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
            jd1.fields.customfield_11701.value = "MORPHO: MMGS"; //Escaped From
            jd1.fields.customfield_11704 = new _models_jiraIssue__WEBPACK_IMPORTED_MODULE_3__["GenericCustomField"]();
            jd1.fields.customfield_11704.value = "A test case is missing"; //Late Detection Cause
            jiraDefects.push(jd1);
            return jiraDefects;
        },
        enumerable: false,
        configurable: true
    });
    JiraService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    JiraService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], JiraService);
    return JiraService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-jiradefects-jiradefects-module.js.map