(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-components-components-module"],{

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm5/ngx-bootstrap-alert.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm5/ngx-bootstrap-alert.js ***!
  \************************************************************************************/
/*! exports provided: AlertComponent, AlertConfig, AlertModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertConfig", function() { return AlertConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertModule", function() { return AlertModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/utils/fesm5/ngx-bootstrap-utils.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("alert alert-" + ctx_r0.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.classes);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.dismissible);
} }
var _c0 = ["*"];
var AlertConfig = /** @class */ (function () {
    function AlertConfig() {
        /**
         * default alert type
         */
        this.type = 'warning';
        /**
         * is alerts are dismissible by default
         */
        this.dismissible = false;
        /**
         * default time before alert will dismiss
         */
        this.dismissOnTimeout = undefined;
    }
AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
AlertConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertConfig, factory: function (t) { return AlertConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return []; }, null); })();
    return AlertConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertComponent = /** @class */ (function () {
    function AlertComponent(_config, changeDetection) {
        var _this = this;
        this.changeDetection = changeDetection;
        /**
         * Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /**
         * If set, displays an inline "Close" button
         */
        this.dismissible = false;
        /**
         * Is alert visible
         */
        this.isOpen = true;
        /**
         * This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event fires when alert closed, $event is an instance of Alert component
         */
        this.onClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = '';
        this.dismissibleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe((/**
         * @param {?} dismissible
         * @return {?}
         */
        function (dismissible) {
            _this.classes = _this.dismissible ? 'alert-dismissible' : '';
            _this.changeDetection.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    AlertComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.close(); }), parseInt((/** @type {?} */ (this.dismissOnTimeout)), 10));
        }
    };
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    AlertComponent.prototype.close = 
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     * @return {?}
     */
    function () {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    };
    /** @nocollapse */
    AlertComponent.ctorParameters = function () { return [
        { type: AlertConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    AlertComponent.propDecorators = {
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dismissible: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        dismissOnTimeout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        isOpen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
        onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
        onClosed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_2__["OnChange"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AlertComponent.prototype, "dismissible", void 0);
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AlertConfig), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", isOpen: "isOpen", dismissOnTimeout: "dismissOnTimeout" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'alert,bs-alert',
                template: "<ng-template [ngIf]=\"isOpen\">\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\n    <ng-template [ngIf]=\"dismissible\">\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n        <span aria-hidden=\"true\">&times;</span>\n        <span class=\"sr-only\">Close</span>\n      </button>\n    </ng-template>\n    <ng-content></ng-content>\n  </div>\n</ng-template>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: AlertConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], dismissible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClosed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], dismissOnTimeout: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
    return AlertComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AlertModule = /** @class */ (function () {
    function AlertModule() {
    }
    /**
     * @return {?}
     */
    AlertModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: AlertModule, providers: [AlertConfig] };
    };
AlertModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AlertModule });
AlertModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AlertModule, { declarations: function () { return [AlertComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]]; }, exports: function () { return [AlertComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            }]
    }], function () { return []; }, null); })();
    return AlertModule;
}());



//# sourceMappingURL=ngx-bootstrap-alert.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js ***!
  \**********************************************************************************************/
/*! exports provided: PagerComponent, PaginationComponent, PaginationConfig, PaginationModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagerComponent", function() { return PagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationConfig", function() { return PaginationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return PAGER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PAGINATION_CONTROL_VALUE_ACCESSOR; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Provides default values for Pagination and pager components
 */



var _c0 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectPage(1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.getText("first"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.selectPage(ctx_r7.page - 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r1.getText("previous"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); var pg_r9 = ctx.$implicit; var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.selectPage(pg_r9.number, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var pg_r9 = ctx.$implicit;
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", pg_r9.active)("disabled", ctx_r2.disabled && !pg_r9.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", pg_r9.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.selectPage(ctx_r12.page + 1, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.getText("next"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.selectPage(ctx_r14.totalPages, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.getText("last"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var PaginationConfig = /** @class */ (function () {
    function PaginationConfig() {
        this.main = {
            maxSize: void 0,
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
PaginationConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PaginationConfig, factory: function (t) { return PaginationConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return PaginationConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return PagerComponent; })),
    multi: true
};
var PagerComponent = /** @class */ (function () {
    function PagerComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    Object.defineProperty(PagerComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PagerComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PagerComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PagerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PagerComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[key + "Text"] || ((/** @type {?} */ (this))).config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PagerComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PagerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PagerComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PagerComponent.prototype.makePage = 
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PagerComponent.prototype.getPages = /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        /** @type {?} */
        var pages = [];
        // Default page limits
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = totalPages;
        /** @type {?} */
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    /**
     * @protected
     * @return {?}
     */
    PagerComponent.prototype.calculateTotalPages = 
    // base class
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: PaginationConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    PagerComponent.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PagerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagerComponent, selectors: [["pager"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noPrevious())("previous", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("previous"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.pageBtnClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.noNext())("next", ctx.align);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](21, _c0, ctx.align, ctx.align));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.getText("next"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pager',
                template: "<ul class=\"pager\">\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\n  </li>\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\n      class=\"{{ pageBtnClass }}\">\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\n  </li>\n</ul>\n",
                providers: [PAGER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PagerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((/**
     * @return {?}
     */
    function () { return PaginationComponent; })),
    multi: true
};
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /**
         * fired when total pages count changes, $event:number equals to total pages count
         */
        this.numPages = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.inited = false;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    Object.defineProperty(PaginationComponent.prototype, "itemsPerPage", {
        /** maximum number of items per page. If value less than 1 will display all items on one page */
        get: /**
         * maximum number of items per page. If value less than 1 will display all items on one page
         * @return {?}
         */
        function () {
            return this._itemsPerPage;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._itemsPerPage = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        /** total number of items in all pages */
        get: /**
         * total number of items in all pages
         * @return {?}
         */
        function () {
            return this._totalItems;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalItems = v;
            this.totalPages = this.calculateTotalPages();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalPages", {
        get: /**
         * @return {?}
         */
        function () {
            return this._totalPages;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._totalPages = v;
            this.numPages.emit(v);
            if (this.inited) {
                this.selectPage(this.page);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "page", {
        get: /**
         * @return {?}
         */
        function () {
            return this._page;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var _previous = this._page;
            this._page = value > this.totalPages ? this.totalPages : value || 1;
            this.changeDetection.markForCheck();
            if (_previous === this._page || typeof _previous === 'undefined') {
                return;
            }
            this.pageChanged.emit({
                page: this._page,
                itemsPerPage: this.itemsPerPage
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} config
     * @return {?}
     */
    PaginationComponent.prototype.configureOptions = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = Object.assign({}, config);
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        this.maxSize =
            typeof this.maxSize !== 'undefined' ? this.maxSize : this.config.maxSize;
        this.rotate =
            typeof this.rotate !== 'undefined' ? this.rotate : this.config.rotate;
        this.boundaryLinks =
            typeof this.boundaryLinks !== 'undefined'
                ? this.boundaryLinks
                : this.config.boundaryLinks;
        this.directionLinks =
            typeof this.directionLinks !== 'undefined'
                ? this.directionLinks
                : this.config.directionLinks;
        this.pageBtnClass =
            typeof this.pageBtnClass !== 'undefined'
                ? this.pageBtnClass
                : this.config.pageBtnClass;
        // base class
        this.itemsPerPage =
            typeof this.itemsPerPage !== 'undefined'
                ? this.itemsPerPage
                : this.config.itemsPerPage;
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    PaginationComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    PaginationComponent.prototype.getText = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        // tslint:disable-next-line:no-any
        return ((/** @type {?} */ (this)))[key + "Text"] || ((/** @type {?} */ (this))).config[key + "Text"];
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noPrevious = /**
     * @return {?}
     */
    function () {
        return this.page === 1;
    };
    /**
     * @return {?}
     */
    PaginationComponent.prototype.noNext = /**
     * @return {?}
     */
    function () {
        return this.page === this.totalPages;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PaginationComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    PaginationComponent.prototype.selectPage = /**
     * @param {?} page
     * @param {?=} event
     * @return {?}
     */
    function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // tslint:disable-next-line:no-any
                /** @type {?} */
                var target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    };
    // Create page object used in template
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    PaginationComponent.prototype.makePage = 
    // Create page object used in template
    /**
     * @protected
     * @param {?} num
     * @param {?} text
     * @param {?} active
     * @return {?}
     */
    function (num, text, active) {
        return { text: text, number: num, active: active };
    };
    /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    PaginationComponent.prototype.getPages = /**
     * @protected
     * @param {?} currentPage
     * @param {?} totalPages
     * @return {?}
     */
    function (currentPage, totalPages) {
        /** @type {?} */
        var pages = [];
        // Default page limits
        /** @type {?} */
        var startPage = 1;
        /** @type {?} */
        var endPage = totalPages;
        /** @type {?} */
        var isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (var num = startPage; num <= endPage; num++) {
            /** @type {?} */
            var page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                /** @type {?} */
                var previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                /** @type {?} */
                var nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    };
    // base class
    // base class
    /**
     * @protected
     * @return {?}
     */
    PaginationComponent.prototype.calculateTotalPages = 
    // base class
    /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    };
    /** @nocollapse */
    PaginationComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: PaginationConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    PaginationComponent.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maxSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        boundaryLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        directionLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        firstText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        previousText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        nextText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        lastText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        rotate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        pageBtnClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        numPages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        pageChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        itemsPerPage: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        totalItems: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PaginationConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PaginationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PaginationComponent, selectors: [["pagination"]], inputs: { itemsPerPage: "itemsPerPage", totalItems: "totalItems", maxSize: "maxSize", rotate: "rotate", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", pageBtnClass: "pageBtnClass", align: "align", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", disabled: "disabled" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 6, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "innerHTML", "click"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PaginationComponent_li_1_Template, 2, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PaginationComponent_li_2_Template, 2, 3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PaginationComponent_li_3_Template, 2, 5, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PaginationComponent_li_4_Template, 2, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PaginationComponent_li_5_Template, 2, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.directionLinks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.boundaryLinks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'pagination',
                template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\n  <li class=\"pagination-first page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\"\n       [innerHTML]=\"getText('first')\"></a>\n  </li>\n\n  <li class=\"pagination-prev page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noPrevious()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\"\n       [innerHTML]=\"getText('previous')\"></a>\n  </li>\n\n  <li *ngFor=\"let pg of pages\"\n      [class.active]=\"pg.active\"\n      [class.disabled]=\"disabled&&!pg.active\"\n      class=\"pagination-page page-item\">\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\"\n       [innerHTML]=\"pg.text\"></a>\n  </li>\n\n  <li class=\"pagination-next page-item\"\n      *ngIf=\"directionLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\"\n       [innerHTML]=\"getText('next')\"></a></li>\n\n  <li class=\"pagination-last page-item\"\n      *ngIf=\"boundaryLinks\"\n      [class.disabled]=\"noNext()||disabled\">\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\"\n       [innerHTML]=\"getText('last')\"></a></li>\n</ul>\n",
                providers: [PAGINATION_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: PaginationConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { numPages: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], itemsPerPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maxSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], boundaryLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], directionLinks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pageBtnClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], align: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], firstText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], previousText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nextText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lastText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return PaginationComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    /**
     * @return {?}
     */
    PaginationModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: PaginationModule, providers: [PaginationConfig] };
    };
PaginationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PaginationModule });
PaginationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PaginationModule_Factory(t) { return new (t || PaginationModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PaginationModule, { declarations: function () { return [PagerComponent, PaginationComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [PagerComponent, PaginationComponent]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PaginationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], function () { return []; }, null); })();
    return PaginationModule;
}());



//# sourceMappingURL=ngx-bootstrap-pagination.js.map

/***/ }),

/***/ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js ***!
  \**********************************************************************************/
/*! exports provided: NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgTranscludeDirective", function() { return NgTranscludeDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabDirective", function() { return TabDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabHeadingDirective", function() { return TabHeadingDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetComponent", function() { return TabsetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsetConfig", function() { return TabsetConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



function TabsetComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var tabz_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); $event.preventDefault(); return ctx_r4.removeTab(tabz_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u274C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function (a1) { return ["nav-item", a1]; };
function TabsetComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function TabsetComponent_li_1_Template_li_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var i_r2 = ctx.index; var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.keyNavActions($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_li_1_Template_a_click_1_listener() { var tabz_r1 = ctx.$implicit; return tabz_r1.active = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tabz_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tabz_r1.active)("disabled", tabz_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, tabz_r1.customClass || ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", tabz_r1.active)("disabled", tabz_r1.disabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", tabz_r1.id ? tabz_r1.id + "-link" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTransclude", tabz_r1.headingRef);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tabz_r1.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", tabz_r1.removable);
} }
var _c1 = ["*"];
var NgTranscludeDirective = /** @class */ (function () {
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "ngTransclude", {
        /* tslint:disable-next-line:no-any */
        get: /* tslint:disable-next-line:no-any */
        /**
         * @return {?}
         */
        function () {
            return this._ngTransclude;
        },
        set: /**
         * @param {?} templateRef
         * @return {?}
         */
        function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** @nocollapse */
    NgTranscludeDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }
    ]; };
    NgTranscludeDirective.propDecorators = {
        ngTransclude: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
    };
NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
NgTranscludeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], inputs: { ngTransclude: "ngTransclude" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgTranscludeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[ngTransclude]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, { ngTransclude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return NgTranscludeDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
TabsetConfig.ɵfac = function TabsetConfig_Factory(t) { return new (t || TabsetConfig)(); };
TabsetConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TabsetConfig, factory: function (t) { return TabsetConfig.ɵfac(t); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();
    return TabsetConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
var TabsetComponent = /** @class */ (function () {
    function TabsetComponent(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /** if true tabs will be placed vertically */
        get: /**
         * if true tabs will be placed vertically
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /** if true tabs fill the container and have a consistent width */
        get: /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        function () {
            return this._justified;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /** navigation context class: 'tabs' or 'pills' */
        get: /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroyed = true;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && typeof tab.active === 'undefined';
    };
    /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = /**
     * @param {?} tab
     * @param {?=} options
     * @return {?}
     */
    function (tab, options) {
        if (options === void 0) { options = { reselect: true, emit: true }; }
        /** @type {?} */
        var index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            /** @type {?} */
            var newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    };
    /* tslint:disable-next-line: cyclomatic-complexity */
    /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.keyNavActions = /* tslint:disable-next-line: cyclomatic-complexity */
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    function (event, index) {
        /** @type {?} */
        var list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            /** @type {?} */
            var currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            /** @type {?} */
            var nextTab = void 0;
            /** @type {?} */
            var shift = 1;
            do {
                nextTab = list[(index + shift) % list.length];
                shift++;
            } while (nextTab.classList.contains('disabled'));
            nextTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            /** @type {?} */
            var previousTab = void 0;
            /** @type {?} */
            var shift = 1;
            /** @type {?} */
            var i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    previousTab = list[i];
                    shift = 0;
                }
                else {
                    previousTab = list[i - shift];
                }
                shift++;
            } while (previousTab.classList.contains('disabled'));
            previousTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            /** @type {?} */
            var firstTab = void 0;
            /** @type {?} */
            var shift = 0;
            do {
                firstTab = list[shift % list.length];
                shift++;
            } while (firstTab.classList.contains('disabled'));
            firstTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            /** @type {?} */
            var lastTab = void 0;
            /** @type {?} */
            var shift = 1;
            /** @type {?} */
            var i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    lastTab = list[i];
                    shift = 0;
                }
                else {
                    lastTab = list[i - shift];
                }
                shift++;
            } while (lastTab.classList.contains('disabled'));
            lastTab.focus();
            return;
        }
        // tslint:disable-next-line:deprecation
        if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);
                if (list[index + 1]) {
                    list[(index + 1) % list.length].focus();
                    return;
                }
                if (list[list.length - 1]) {
                    list[0].focus();
                }
            }
        }
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var step = 1; step <= tabsLength; step += 1) {
            /** @type {?} */
            var prevIndex = index - step;
            /** @type {?} */
            var nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = /**
     * @protected
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @protected
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = /**
     * @protected
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {
                'nav-stacked': this.vertical,
                'flex-column': this.vertical,
                'nav-justified': this.justified
            },
            _a["nav-" + this.type] = true,
            _a);
    };
    /** @nocollapse */
    TabsetComponent.ctorParameters = function () { return [
        { type: TabsetConfig },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    TabsetComponent.propDecorators = {
        vertical: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        justified: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        clazz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-container',] }]
    };
TabsetComponent.ɵfac = function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabsetConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
TabsetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsetComponent, selectors: [["tabset"]], hostVars: 2, hostBindings: function TabsetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-container", ctx.clazz);
    } }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 2, consts: [[1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]], template: function TabsetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsetComponent_li_1_Template, 5, 15, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classMap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], NgTranscludeDirective, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tabset',
                template: "<ul class=\"nav\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\">\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\n    <a href=\"javascript:void(0);\" class=\"nav-link\"\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\n       (click)=\"tabz.active = true\">\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\n    </a>\n  </li>\n</ul>\n<div class=\"tab-content\">\n  <ng-content></ng-content>\n</div>\n",
                styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}"]
            }]
    }], function () { return [{ type: TabsetConfig }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clazz: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tab-container']
        }], vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], justified: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TabsetComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabDirective = /** @class */ (function () {
    function TabDirective(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.selectTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * fired before tab will be removed, $event:Tab equals to instance of removed tab
         */
        this.removed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addClass = true;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "customClass", {
        /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
        get: /**
         * if set, will be added to the tab's class attribute. Multiple classes are supported.
         * @return {?}
         */
        function () {
            return this._customClass;
        },
        set: /**
         * @param {?} customClass
         * @return {?}
         */
        function (customClass) {
            var _this = this;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.removeClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
            this._customClass = customClass ? customClass.trim() : null;
            if (this.customClass) {
                this.customClass.split(' ').forEach((/**
                 * @param {?} cssClass
                 * @return {?}
                 */
                function (cssClass) {
                    _this.renderer.addClass(_this.elementRef.nativeElement, cssClass);
                }));
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabDirective.prototype, "active", {
        /** tab active state toggle */
        get: /**
         * tab active state toggle
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} active
         * @return {?}
         */
        function (active) {
            var _this = this;
            if (this._active === active) {
                return;
            }
            if ((this.disabled && active) || !active) {
                if (this._active && !active) {
                    this.deselect.emit(this);
                    this._active = active;
                }
                return;
            }
            this._active = active;
            this.selectTab.emit(this);
            this.tabset.tabs.forEach((/**
             * @param {?} tab
             * @return {?}
             */
            function (tab) {
                if (tab !== _this) {
                    tab.active = false;
                }
            }));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.removable = this.removable;
    };
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    };
    /** @nocollapse */
    TabDirective.ctorParameters = function () { return [
        { type: TabsetComponent },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }
    ]; };
    TabDirective.propDecorators = {
        heading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['attr.id',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        removable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        customClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.active',] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        selectTab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        deselect: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        removed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        addClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.tab-pane',] }]
    };
TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabsetComponent), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
TabDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], hostVars: 5, hostBindings: function TabDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab-pane", ctx.addClass)("active", ctx.active);
    } }, inputs: { customClass: "customClass", active: "active", removable: "removable", heading: "heading", id: "id", disabled: "disabled" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'tab, [tab]' }]
    }], function () { return [{ type: TabsetComponent }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { selectTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], deselect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.tab-pane']
        }], customClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.active']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], removable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], heading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['attr.id']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
    return TabDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Should be used to mark <ng-template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    /** @nocollapse */
    TabHeadingDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] },
        { type: TabDirective }
    ]; };
TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](TabDirective)); };
TabHeadingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabHeadingDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: '[tabHeading]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }, { type: TabDirective }]; }, null); })();
    return TabHeadingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
TabsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TabsModule });
TabsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TabsModule_Factory(t) { return new (t || TabsModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TabsModule, { declarations: function () { return [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
                declarations: [
                    NgTranscludeDirective,
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective
                ],
                exports: [
                    TabDirective,
                    TabsetComponent,
                    TabHeadingDirective,
                    NgTranscludeDirective
                ]
            }]
    }], function () { return []; }, null); })();
    return TabsModule;
}());



//# sourceMappingURL=ngx-bootstrap-tabs.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/buttons/buttons.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/buttons/buttons.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" card\">\n    <div class=\" row\">\n      <div class=\" col-md-6\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Pick your Color</h4>\n        </div>\n        <div class=\" card-body\">\n          <button class=\" btn mr-1\">Default</button>\n          <button class=\" btn btn-primary mr-1\">Primary</button>\n          <button class=\" btn btn-info mr-1\">Info</button> <br />\n\n          <button\n            class=\" btn btn-success animation-on-hover mr-1\"\n            placement=\"bottom\"\n            type=\"button\"\n          >\n            Success\n          </button>\n          <button class=\" btn btn-warning mr-1\">Warning</button>\n          <button class=\" btn btn-danger\">Danger</button>\n        </div>\n      </div>\n      <div class=\" col-md-6\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Buttons with Label</h4>\n        </div>\n        <div class=\" card-body\">\n          <button class=\" btn mr-1\">\n            <i class=\" et-icons icon-minimal-left\"> </i> Left\n          </button>\n          <button class=\" btn mr-1\">\n            Right <i class=\" et-icons icon-minimal-right\"> </i>\n          </button>\n          <button class=\" btn btn-info mr-1\">\n            <i class=\" et-icons icon-alert-circle-exc\"> </i> Info\n          </button>\n          <br />\n\n          <button class=\" btn btn-success mr-1\">\n            <i class=\" et-icons icon-check-2\"> </i> Success\n          </button>\n          <button class=\" btn btn-warning mr-1\">\n            <i class=\" et-icons icon-time-alarm\"> </i> Warning\n          </button>\n          <button class=\" btn btn-danger\">\n            <i class=\" et-icons icon-simple-remove\"> </i> Danger\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\" row\">\n      <div class=\" col-md-6\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Pick your Size</h4>\n        </div>\n        <div class=\" card-body\">\n          <button class=\" btn btn-primary btn-sm mr-1\">Small</button>\n          <button class=\" btn btn-primary mr-1\">Regular</button>\n          <button class=\" btn btn-primary btn-lg\">Large</button>\n        </div>\n      </div>\n      <div class=\" col-md-6\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Pick your Style</h4>\n        </div>\n        <div class=\" card-body\">\n          <button class=\" btn btn-primary mr-1\">Default</button>\n          <button class=\" btn btn-primary btn-round mr-1\">round</button>\n          <button class=\" btn btn-primary btn-round mr-1\">\n            <i class=\" et-icons icon-heart-2\"> </i> with icon\n          </button>\n          <button class=\" btn btn-primary btn-round btn-icon mr-1\">\n            <i class=\" et-icons icon-heart-2\"> </i>\n          </button>\n          <button class=\" btn btn-primary btn-simple mr-1\">simple</button>\n          <button class=\" btn btn-primary btn-link\">link</button>\n        </div>\n      </div>\n    </div>\n    <div class=\" row\">\n      <div class=\" col-md-6\">\n        <div class=\" card-header\"><h4 class=\" card-title\">Pagination</h4></div>\n        <div class=\" card-body\">\n          <nav aria-label=\"Page navigation example\">\n            <pagination\n              class=\" pagination-warning\"\n              [(ngModel)]=\"page\"\n              [totalItems]=\"40\"\n            >\n            </pagination>\n            <pagination [(ngModel)]=\"page1\" [totalItems]=\"40\"> </pagination>\n          </nav>\n        </div>\n      </div>\n      <div class=\" col-md-6\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Button Group</h4>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" btn-group\">\n            <button class=\" btn btn-info\" type=\"button\">Left</button>\n            <button class=\" btn btn-info\" type=\"button\">Middle</button>\n            <button class=\" btn btn-info\" type=\"button\">Right</button>\n          </div>\n          <br />\n\n          <br />\n\n          <div class=\" btn-group\" data-toggle=\"buttons\">\n            <button class=\" btn btn-round btn-info\" type=\"button\">1</button>\n            <button class=\" btn btn-round btn-info\" type=\"button\">2</button>\n            <button class=\" btn btn-round btn-info\" type=\"button\">3</button>\n            <button class=\" btn btn-round btn-info\" type=\"button\">4</button>\n          </div>\n          <div class=\" btn-group\">\n            <button class=\" btn btn-round btn-info\" type=\"button\">5</button>\n            <button class=\" btn btn-round btn-info\" type=\"button\">6</button>\n            <button class=\" btn btn-round btn-info\" type=\"button\">7</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" row\">\n      <div class=\" col-sm-12\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Social buttons</h4>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <p class=\" category\">Default</p>\n              <button class=\" btn btn-twitter\">\n                <i class=\" fab fa-twitter\"> </i> Connect with Twitter\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <p class=\" category\">&nbsp;</p>\n              <button class=\" btn btn-icon btn-twitter\">\n                <i class=\" fab fa-twitter\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <p class=\" category\">&nbsp;</p>\n              <button class=\" btn btn-icon btn-round btn-twitter\">\n                <i class=\" fab fa-twitter\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <p class=\" category\">Neutral</p>\n              <button class=\" btn btn-icon btn-simple btn-twitter\">\n                <i class=\" fab fa-twitter\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <p class=\" category\">&nbsp;</p>\n              <button class=\" btn btn-simple btn-twitter\">\n                <i class=\" fab fa-twitter\"> </i> Connect with Twitter\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-facebook\">\n                <i class=\" fab fa-facebook-square\"> </i> Share · 2.2k\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-facebook\">\n                <i class=\" fab fa-facebook-f\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-facebook\">\n                <i class=\" fab fa-facebook-f\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-facebook\">\n                <i class=\" fab fa-facebook-square\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-facebook\">\n                <i class=\" fab fa-facebook-square\"> </i> Share · 2.2k\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-google\">\n                <i class=\" fab fa-google-plus-g\"> </i> Share on Google+\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-google\">\n                <i class=\" fab fa-google-plus-g\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-google\">\n                <i class=\" fab fa-google-plus-g\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-google\">\n                <i class=\" fab fa-google-plus-g\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-google\">\n                <i class=\" fab fa-google-plus-g\"> </i> Share on Google+\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-linkedin\">\n                <i class=\" fab fa-linkedin\"> </i> Connect with Linkedin\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-linkedin\">\n                <i class=\" fab fa-linkedin\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-linkedin\">\n                <i class=\" fab fa-linkedin\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-linkedin\">\n                <i class=\" fab fa-linkedin\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-linkedin\">\n                <i class=\" fab fa-linkedin\"> </i> Connect with Linkedin\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-pinterest\">\n                <i class=\" fab fa-pinterest\"> </i> Pint it · 212\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-pinterest\">\n                <i class=\" fab fa-pinterest\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-pinterest\">\n                <i class=\" fab fa-pinterest\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-pinterest\">\n                <i class=\" fab fa-pinterest\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-pinterest\">\n                <i class=\" fab fa-pinterest\"> </i> Pint it · 212\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-youtube\">\n                <i class=\" fab fa-youtube\"> </i> View on Youtube\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-youtube\">\n                <i class=\" fab fa-youtube\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-youtube\">\n                <i class=\" fab fa-youtube\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-youtube\">\n                <i class=\" fab fa-youtube\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-youtube\">\n                <i class=\" fab fa-youtube\"> </i> View on Youtube\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-tumblr\">\n                <i class=\" fab fa-tumblr-square\"> </i> Repost\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-tumblr\">\n                <i class=\" fab fa-tumblr\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-tumblr\">\n                <i class=\" fab fa-tumblr\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-tumblr\">\n                <i class=\" fab fa-tumblr-square\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-tumblr\">\n                <i class=\" fab fa-tumblr-square\"> </i> Repost\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-github\">\n                <i class=\" fab fa-github\"> </i> Connect with Github\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-github\">\n                <i class=\" fab fa-github\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-github\">\n                <i class=\" fab fa-github\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-github\">\n                <i class=\" fab fa-github\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-github\">\n                <i class=\" fab fa-github\"> </i> Connect with Github\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-behance\">\n                <i class=\" fab fa-behance-square\"> </i> Follow us\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-behance\">\n                <i class=\" fab fa-behance\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-behance\">\n                <i class=\" fab fa-behance\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-behance\">\n                <i class=\" fab fa-behance\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-behance\">\n                <i class=\" fab fa-behance-square\"> </i> Follow us\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-dribbble\">\n                <i class=\" fab fa-dribbble\"> </i> Find us on Dribble\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-dribbble\">\n                <i class=\" fab fa-dribbble\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-dribbble\">\n                <i class=\" fab fa-dribbble\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-dribbble\">\n                <i class=\" fab fa-dribbble\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-dribbble\">\n                <i class=\" fab fa-dribbble\"> </i> Find us on Dribble\n              </button>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-4 col-sm-5\">\n              <button class=\" btn btn-reddit\">\n                <i class=\" fab fa-reddit\"> </i> Repost · 232\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-reddit\">\n                <i class=\" fab fa-reddit\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-round btn-reddit\">\n                <i class=\" fab fa-reddit\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-1 col-sm-1\">\n              <button class=\" btn btn-icon btn-simple btn-reddit\">\n                <i class=\" fab fa-reddit\"> </i>\n              </button>\n            </div>\n            <div class=\" col-md-3 col-sm-4\">\n              <button class=\" btn btn-simple btn-reddit\">\n                <i class=\" fab fa-reddit\"> </i> Repost · 232\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/grid/grid.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/grid/grid.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <h4 class=\" title pl-3\">XS Grid <small> Always Horizontal </small></h4>\n  <div class=\" row\">\n    <div class=\" col-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-4 </code></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\" title pl-3\">SM Grid <small> Collapsed at 576px </small></h4>\n  <div class=\" row\">\n    <div class=\" col-sm-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-sm-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-sm-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-sm-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-sm-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-sm-4 </code></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\" title pl-3\">MD Grid <small> Collapsed at 768px </small></h4>\n  <div class=\" row\">\n    <div class=\" col-md-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-md-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-md-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-md-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-md-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-md-4 </code></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\" title pl-3\">LG Grid <small> Collapsed at 992px </small></h4>\n  <div class=\" row\">\n    <div class=\" col-lg-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-lg-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-lg-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-lg-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-lg-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-lg-4 </code></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\" title pl-3\">XL Grid <small> Collapsed at 1200px </small></h4>\n  <div class=\" row\">\n    <div class=\" col-xl-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-xl-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-xl-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-xl-4 </code></div>\n      </div>\n    </div>\n    <div class=\" col-xl-4\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-xl-4 </code></div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\" title pl-3\">\n    Mixed Grid <small> Showing different sizes on different screens </small>\n  </h4>\n  <div class=\" row\">\n    <div class=\" col-sm-6 col-lg-3\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-sm-6 col-lg-3 </code>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-sm-6 col-lg-3\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-sm-6 col-lg-3 </code>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-sm-6 col-lg-3\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-sm-6 col-lg-3 </code>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-sm-6 col-lg-3\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-sm-6 col-lg-3 </code>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h4 class=\" title pl-3\">\n    Offset Grid <small> Adding some space when needed </small>\n  </h4>\n  <div class=\" row\">\n    <div class=\" col-md-3\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\"><code> col-md-3 </code></div>\n      </div>\n    </div>\n    <div class=\" col-md-3 ml-auto\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-md-3 ml-auto </code>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-md-4 ml-auto mr-auto\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-md-4 ml-auto mr-auto </code>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-4 ml-auto mr-auto\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-md-4 ml-auto mr-auto </code>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-md-6 ml-auto mr-auto\">\n      <div class=\" card\">\n        <div class=\" card-body text-center py-5\">\n          <code> col-md-6 ml-auto mr-auto </code>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h3 class=\" title mt-5 text-center\">Paragraphs</h3>\n  <div class=\" card-body\">\n    <div class=\" row\">\n      <div class=\" col-sm-6\">\n        <h3 class=\" mt-5\">Some Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment. His many legs, pitifully thin compared with the size of\n          the rest of him, waved about helplessly as he looked. \"What's happened\n          to me?\" he thought.\n        </p>\n      </div>\n      <div class=\" col-sm-6\">\n        <h3 class=\" mt-5\">Another Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment. His many legs, pitifully thin compared with the size of\n          the rest of him, waved about helplessly as he looked. \"What's happened\n          to me?\" he thought.\n        </p>\n      </div>\n    </div>\n    <br />\n\n    <div class=\" row\">\n      <div class=\" col-sm-4\">\n        <h3 class=\" mt-5\">Some Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment.\n        </p>\n      </div>\n      <div class=\" col-sm-4\">\n        <h3 class=\" mt-5\">Another Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment.\n        </p>\n      </div>\n      <div class=\" col-sm-4\">\n        <h3 class=\" mt-5\">Another Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment.\n        </p>\n      </div>\n    </div>\n    <br />\n\n    <div class=\" row\">\n      <div class=\" col-sm-4\">\n        <h3 class=\" mt-5\">Some Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment.\n        </p>\n      </div>\n      <div class=\" col-sm-8\">\n        <h3 class=\" mt-5\">Another Title Here</h3>\n        <p>\n          One morning, when Gregor Samsa woke from troubled dreams, he found\n          himself transformed in his bed into a horrible vermin. He lay on his\n          armour-like back, and if he lifted his head a little he could see his\n          brown belly, slightly domed and divided by arches into stiff sections.\n          The bedding was hardly able to cover it and seemed ready to slide off\n          any moment. One morning, when Gregor Samsa woke from troubled dreams,\n          he found himself transformed in his bed into a horrible vermin. He lay\n          on his armour-like back, and if he lifted his head a little he could\n          see his brown belly, slightly domed and divided by arches into stiff\n          sections. The bedding was hardly able to cover it and seemed ready to\n          slide off any moment.\n        </p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/icons/icons.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/icons/icons.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h5 class=\" title\">100 Awesome Nucleo Icons</h5>\n          <p class=\" category\">\n            Handcrafted by our friends from\n            <a href=\"https://nucleoapp.com/?ref=1712\"> NucleoApp </a>\n          </p>\n        </div>\n        <div class=\" card-body all-icons\">\n          <div class=\" row\">\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-alert-circle-exc\"> </i>\n                <p>icon-alert-circle-exc</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-align-center\"> </i>\n                <p>icon-align-center</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-align-left-2\"> </i>\n                <p>icon-align-left-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-app\"> </i>\n                <p>icon-app</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-atom\"> </i>\n                <p>icon-atom</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-attach-87\"> </i>\n                <p>icon-attach-87</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-badge\"> </i>\n                <p>icon-badge</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bag-16\"> </i>\n                <p>icon-bag-16</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bank\"> </i>\n                <p>icon-bank</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-basket-simple\"> </i>\n                <p>icon-basket-simple</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bell-55\"> </i>\n                <p>icon-bell-55</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bold\"> </i>\n                <p>icon-bold</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-book-bookmark\"> </i>\n                <p>icon-book-bookmark</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-double-right\"> </i>\n                <p>icon-double-right</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bulb-63\"> </i>\n                <p>icon-bulb-63</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bullet-list-67\"> </i>\n                <p>icon-bullet-list-67</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-bus-front-12\"> </i>\n                <p>icon-bus-front-12</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-button-power\"> </i>\n                <p>icon-button-power</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-camera-18\"> </i>\n                <p>icon-camera-18</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-calendar-60\"> </i>\n                <p>icon-calendar-60</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-caps-small\"> </i>\n                <p>icon-caps-small</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-cart\"> </i>\n                <p>icon-cart</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-chart-bar-32\"> </i>\n                <p>icon-chart-bar-32</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-chart-pie-36\"> </i>\n                <p>icon-chart-pie-36</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-chat-33\"> </i>\n                <p>icon-chat-33</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-check-2\"> </i>\n                <p>icon-check-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-cloud-download-93\"> </i>\n                <p>icon-cloud-download-93</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-cloud-upload-94\"> </i>\n                <p>icon-cloud-upload-94</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-coins\"> </i>\n                <p>icon-coins</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-compass-05\"> </i>\n                <p>icon-compass-05</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-controller\"> </i>\n                <p>icon-controller</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-credit-card\"> </i>\n                <p>icon-credit-card</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-delivery-fast\"> </i>\n                <p>icon-delivery-fast</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-email-85\"> </i>\n                <p>icon-email-85</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-gift-2\"> </i>\n                <p>icon-gift-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-globe-2\"> </i>\n                <p>icon-globe-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-headphones\"> </i>\n                <p>icon-headphones</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-heart-2\"> </i>\n                <p>icon-heart-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-html5\"> </i>\n                <p>icon-html5</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-double-left\"> </i>\n                <p>icon-double-left</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-image-02\"> </i>\n                <p>icon-image-02</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-istanbul\"> </i>\n                <p>icon-istanbul</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-key-25\"> </i>\n                <p>icon-key-25</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-laptop\"> </i>\n                <p>icon-laptop</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-light-3\"> </i>\n                <p>icon-light-3</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-link-72\"> </i>\n                <p>icon-link-72</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-lock-circle\"> </i>\n                <p>icon-lock-circle</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-map-big\"> </i>\n                <p>icon-map-big</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-minimal-down\"> </i>\n                <p>icon-minimal-down</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-minimal-left\"> </i>\n                <p>icon-minimal-left</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-minimal-right\"> </i>\n                <p>icon-minimal-right</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-minimal-up\"> </i>\n                <p>icon-minimal-up</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-mobile\"> </i>\n                <p>icon-mobile</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-molecule-40\"> </i>\n                <p>icon-molecule-40</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-money-coins\"> </i>\n                <p>icon-money-coins</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-notes\"> </i>\n                <p>icon-notes</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-palette\"> </i>\n                <p>icon-palette</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-paper\"> </i>\n                <p>icon-paper</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-pin\"> </i>\n                <p>icon-pin</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-planet\"> </i>\n                <p>icon-planet</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-puzzle-10\"> </i>\n                <p>icon-puzzle-10</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-pencil\"> </i>\n                <p>icon-pencil</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-satisfied\"> </i>\n                <p>icon-satisfied</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-scissors\"> </i>\n                <p>icon-scissors</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-send\"> </i>\n                <p>icon-send</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-settings-gear-63\"> </i>\n                <p>icon-settings-gear-63</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-settings\"> </i>\n                <p>icon-settings</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-wifi\"> </i>\n                <p>icon-wifi</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-single-02\"> </i>\n                <p>icon-single-02</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-single-copy-04\"> </i>\n                <p>icon-single-copy-04</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-sound-wave\"> </i>\n                <p>icon-sound-wave</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-spaceship\"> </i>\n                <p>icon-spaceship</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-square-pin\"> </i>\n                <p>icon-square-pin</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-support-17\"> </i>\n                <p>icon-support-17</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-tablet-2\"> </i>\n                <p>icon-tablet-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-tag\"> </i>\n                <p>icon-tag</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-tap-02\"> </i>\n                <p>icon-tap-02</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-tie-bow\"> </i>\n                <p>icon-tie-bow</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-time-alarm\"> </i>\n                <p>icon-time-alarm</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-trash-simple\"> </i>\n                <p>icon-trash-simple</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-trophy\"> </i>\n                <p>icon-trophy</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-tv-2\"> </i>\n                <p>icon-tv-2</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-upload\"> </i>\n                <p>icon-upload</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-user-run\"> </i>\n                <p>icon-user-run</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-vector\"> </i>\n                <p>icon-vector</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-video-66\"> </i>\n                <p>icon-video-66</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-wallet-43\"> </i>\n                <p>icon-wallet-43</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-volume-98\"> </i>\n                <p>icon-volume-98</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-watch-time\"> </i>\n                <p>icon-watch-time</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-world\"> </i>\n                <p>icon-world</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-zoom-split\"> </i>\n                <p>icon-zoom-split</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-refresh-01\"> </i>\n                <p>icon-refresh-01</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-refresh-02\"> </i>\n                <p>icon-refresh-02</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-shape-star\"> </i>\n                <p>icon-shape-star</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-components\"> </i>\n                <p>icon-components</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-triangle-right-17\"> </i>\n                <p>icon-triangle-right-17</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-button-pause\"> </i>\n                <p>icon-button-pause</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-simple-remove\"> </i>\n                <p>icon-simple-remove</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-simple-add\"> </i>\n                <p>icon-simple-add</p>\n              </div>\n            </div>\n            <div\n              class=\" font-icon-list col-lg-2 col-md-3 col-sm-4 col-xs-6 col-xs-6\"\n            >\n              <div class=\" font-icon-detail\">\n                <i class=\" et-icons icon-simple-delete\"> </i>\n                <p>icon-simple-delete</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/notifications/notifications.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/notifications/notifications.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Notifications Style</h4>\n        </div>\n        <div class=\" card-body\">\n          <alert [type]=\"'info'\">\n            <span> This is a plain notification </span>\n          </alert>\n          <alert [type]=\"'info'\">\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span> This is a notification with close button. </span>\n          </alert>\n          <alert\n            class=\"\"\n            data-notify=\"container\"\n            [type]=\"'info alert-with-icon'\"\n          >\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span class=\" et-icons icon-bell-55\" data-notify=\"icon\"> </span>\n            <span data-notify=\"message\">\n              This is a notification with close button and icon.\n            </span>\n          </alert>\n          <alert\n            class=\"\"\n            data-notify=\"container\"\n            [type]=\"'info alert-with-icon'\"\n          >\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span class=\" et-icons icon-bell-55\" data-notify=\"icon\"> </span>\n            <span data-notify=\"message\">\n              This is a notification with close button and icon and have many\n              lines. You can see that the icon and the close button are always\n              vertically aligned. This is a beautiful notification. So you don't\n              have to worry about the style.\n            </span>\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title\">Notification states</h4>\n        </div>\n        <div class=\" card-body\">\n          <alert [type]=\"'primary'\">\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span>\n              <b> Primary - </b> This is a regular notification made with\n              \".alert-primary\"\n            </span>\n          </alert>\n          <alert [type]=\"'info'\">\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span>\n              <b> Info - </b> This is a regular notification made with\n              \".alert-info\"\n            </span>\n          </alert>\n          <alert [type]=\"'success'\">\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span>\n              <b> Success - </b> This is a regular notification made with\n              \".alert-success\"\n            </span>\n          </alert>\n          <alert [type]=\"'warning'\">\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span>\n              <b> Warning - </b> This is a regular notification made with\n              \".alert-warning\"\n            </span>\n          </alert>\n          <alert [type]=\"'danger'\">\n            <button\n              aria-hidden=\"true\"\n              aria-label=\"Close\"\n              class=\" close\"\n              data-dismiss=\"alert\"\n              type=\"button\"\n            >\n              <i class=\" et-icons icon-simple-remove\"> </i>\n            </button>\n            <span>\n              <b> Danger - </b> This is a regular notification made with\n              \".alert-danger\"\n            </span>\n          </alert>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-body\">\n          <div class=\" places-buttons\">\n            <div class=\" row\">\n              <div class=\" col-md-6 ml-auto mr-auto text-center\">\n                <h4 class=\" card-title\">Notifications Places</h4>\n                <p class=\" category mb-3\">Click to view notifications</p>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-lg-8 ml-auto mr-auto\">\n                <div class=\" row\">\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('top', 'left')\"\n                    >\n                      Top Left\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('top', 'center')\"\n                    >\n                      Top Center\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('top', 'right')\"\n                    >\n                      Top Right\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\" row\">\n              <div class=\" col-lg-8 ml-auto mr-auto\">\n                <div class=\" row\">\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('bottom', 'left')\"\n                    >\n                      Bottom Left\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('bottom', 'center')\"\n                    >\n                      Bottom Center\n                    </button>\n                  </div>\n                  <div class=\" col-md-4\">\n                    <button\n                      class=\" btn btn-danger btn-block\"\n                      (click)=\"showNotification('bottom', 'right')\"\n                    >\n                      Bottom Right\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\" row\">\n            <div class=\" col-md-12 text-center\">\n              <div class=\" card-header\"><h4 class=\" card-title\">Modal</h4></div>\n              <button\n                class=\" btn btn-primary mr-1\"\n                data-target=\"#myModal\"\n                (click)=\"myModal.show()\"\n              >\n                Classic modal\n              </button>\n              <button\n                class=\" btn btn-info mr-1\"\n                data-target=\"#noticeModal\"\n                (click)=\"noticeModal.show()\"\n              >\n                Notice modal\n              </button>\n              <button\n                class=\" btn\"\n                data-target=\"#myModal10\"\n                (click)=\"myModal10.show()\"\n              >\n                Small alert modal\n              </button>\n              <div\n                aria-hidden=\"true\"\n                aria-labelledby=\"myModalLabel\"\n                bsModal\n                class=\" modal fade\"\n                #myModal=\"bs-modal\"\n                id=\"myModal\"\n                role=\"dialog\"\n                tabindex=\"-1\"\n              >\n                <div class=\" modal-dialog\">\n                  <div class=\" modal-content\">\n                    <div class=\" modal-header justify-content-center\">\n                      <button\n                        aria-hidden=\"true\"\n                        class=\" close\"\n                        data-dismiss=\"modal\"\n                        type=\"button\"\n                        (click)=\"myModal.hide()\"\n                      >\n                        <i class=\" et-icons icon-simple-remove\"> </i>\n                      </button>\n                      <h6 class=\" title title-up\">Modal title</h6>\n                    </div>\n                    <div class=\" modal-body\">\n                      <p>\n                        Far far away, behind the word mountains, far from the\n                        countries Vokalia and Consonantia, there live the blind\n                        texts. Separated they live in Bookmarksgrove right at\n                        the coast of the Semantics, a large language ocean. A\n                        small river named Duden flows by their place and\n                        supplies it with the necessary regelialia. It is a\n                        paradisematic country, in which roasted parts of\n                        sentences fly into your mouth.\n                      </p>\n                    </div>\n                    <div class=\" modal-footer\">\n                      <button class=\" btn btn-default\" type=\"button\">\n                        Nice Button\n                      </button>\n                      <button\n                        class=\" btn btn-danger\"\n                        data-dismiss=\"modal\"\n                        (click)=\"myModal.hide()\"\n                        type=\"button\"\n                      >\n                        Close\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div\n                aria-hidden=\"true\"\n                aria-labelledby=\"myModalLabel\"\n                bsModal\n                class=\" modal fade\"\n                #noticeModal=\"bs-modal\"\n                id=\"noticeModal\"\n                role=\"dialog\"\n                tabindex=\"-1\"\n              >\n                <div class=\" modal-dialog modal-notice\">\n                  <div class=\" modal-content\">\n                    <div class=\" modal-header\">\n                      <button\n                        aria-hidden=\"true\"\n                        class=\" close\"\n                        data-dismiss=\"modal\"\n                        (click)=\"noticeModal.hide()\"\n                        type=\"button\"\n                      >\n                        <i class=\" et-icons icon-simple-remove\"> </i>\n                      </button>\n                      <h5 class=\" modal-title\" id=\"myModalLabel\">\n                        How Do You Become an Affiliate?\n                      </h5>\n                    </div>\n                    <div class=\" modal-body\">\n                      <div class=\" instruction\">\n                        <div class=\" row\">\n                          <div class=\" col-md-8\">\n                            <strong> 1. Register </strong>\n                            <p class=\" description\">\n                              The first step is to create an account at\n                              <a href=\"javascript:void(0)\"> Creative Tim </a> .\n                              You can choose a social network or go for the\n                              classic version, whatever works best for you.\n                            </p>\n                          </div>\n                          <div class=\" col-md-4\">\n                            <div class=\" picture\">\n                              <img\n                                alt=\"Thumbnail Image\"\n                                class=\" rounded img-raised\"\n                                src=\"assets/img/bg1.jpg\"\n                              />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\" instruction\">\n                        <div class=\" row\">\n                          <div class=\" col-md-8\">\n                            <strong> 2. Apply </strong>\n                            <p class=\" description\">\n                              The first step is to create an account at\n                              <a href=\"javascript:void(0)\"> Creative Tim </a> .\n                              You can choose a social network or go for the\n                              classic version, whatever works best for you.\n                            </p>\n                          </div>\n                          <div class=\" col-md-4\">\n                            <div class=\" picture\">\n                              <img\n                                alt=\"Thumbnail Image\"\n                                class=\" rounded img-raised\"\n                                src=\"assets/img/bg3.jpg\"\n                              />\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <p>\n                        If you have more questions, don't hesitate to contact us\n                        or send us a tweet @creativetim. We're here to help!\n                      </p>\n                    </div>\n                    <div class=\" modal-footer justify-content-center\">\n                      <button\n                        class=\" btn btn-info btn-round\"\n                        data-dismiss=\"modal\"\n                        (click)=\"noticeModal.hide()\"\n                        type=\"button\"\n                      >\n                        Sounds good!\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div\n                aria-hidden=\"true\"\n                aria-labelledby=\"myModalLabel\"\n                bsModal\n                class=\" modal fade modal-mini modal-danger\"\n                #myModal10=\"bs-modal\"\n                id=\"myModal10\"\n                role=\"dialog\"\n                tabindex=\"-1\"\n              >\n                <div class=\" modal-dialog\">\n                  <div class=\" modal-content\">\n                    <div class=\" modal-header justify-content-center\">\n                      <button\n                        aria-hidden=\"true\"\n                        class=\" close\"\n                        (click)=\"myModal10.hide()\"\n                        data-dismiss=\"modal\"\n                        type=\"button\"\n                      >\n                        <i class=\" et-icons icon-simple-remove text-white\">\n                        </i>\n                      </button>\n                      <div class=\" modal-profile\">\n                        <i class=\" et-icons icon-single-02\"> </i>\n                      </div>\n                    </div>\n                    <div class=\" modal-body\">\n                      <p>Always have an access to your profile</p>\n                    </div>\n                    <div class=\" modal-footer\">\n                      <button class=\" btn btn-link btn-neutral\" type=\"button\">\n                        Back\n                      </button>\n                      <button\n                        class=\" btn btn-link btn-neutral\"\n                        data-dismiss=\"modal\"\n                        (click)=\"myModal10.hide()\"\n                        type=\"button\"\n                      >\n                        Close\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/panels/panels.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/panels/panels.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Navigation Pills</h5>\n          <h3 class=\" card-title\">Horizontal Tabs</h3>\n        </div>\n        <div class=\" card-body\">\n          <tabset class=\"nav-pills-danger\" type=\"pills\">\n            <tab heading=\"Profile\">\n              Collaboratively administrate empowered markets via plug-and-play\n              networks. Dynamically procrastinate B2C users after installed base\n              benefits. <br />\n\n              <br />\n\n              Dramatically visualize customer directed convergence without\n              revolutionary ROI.\n            </tab>\n            <tab heading=\"Settings\">\n              Efficiently unleash cross-media information without cross-media\n              value. Quickly maximize timely deliverables for real-time schemas.\n              <br />\n\n              <br />\n\n              Dramatically maintain clicks-and-mortar solutions without\n              functional solutions.\n            </tab>\n            <tab heading=\"Options\">\n              Completely synergize resource taxing relationships via premier\n              niche markets. Professionally cultivate one-to-one customer\n              service with robust ideas. <br />\n\n              <br />\n\n              Dynamically innovate resource-leveling customer service for state\n              of the art customer service.\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Navigation Pills</h5>\n          <h3 class=\" card-title\">Vertical Tabs</h3>\n        </div>\n        <div class=\" card-body\">\n          <tabset\n            class=\"nav-pills-danger vertical-pills\"\n            type=\"pills\"\n            [vertical]=\"true\"\n          >\n            <tab heading=\"Profile\">\n              Collaboratively administrate empowered markets via plug-and-play\n              networks. Dynamically procrastinate B2C users after installed base\n              benefits. <br />\n\n              <br />\n\n              Dramatically visualize customer directed convergence without\n              revolutionary ROI.\n            </tab>\n            <tab heading=\"Settings\">\n              Efficiently unleash cross-media information without cross-media\n              value. Quickly maximize timely deliverables for real-time schemas.\n              <br />\n\n              <br />\n\n              Dramatically maintain clicks-and-mortar solutions without\n              functional solutions.\n            </tab>\n            <tab heading=\"Options\">\n              Completely synergize resource taxing relationships via premier\n              niche markets. Professionally cultivate one-to-one customer\n              service with robust ideas. <br />\n\n              <br />\n\n              Dynamically innovate resource-leveling customer service for state\n              of the art customer service.\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Collpase example</h5>\n          <h3 class=\" card-title\">Collapsible Accordion</h3>\n        </div>\n        <div\n          aria-multiselectable=\"true\"\n          class=\" card-collapse\"\n          id=\"accordion\"\n          role=\"tablist\"\n        >\n          <div class=\" card card-plain\">\n            <div class=\" card-header\" id=\"headingOne\">\n              <a\n                aria-controls=\"collapseOne\"\n                data-parent=\"#accordion\"\n                [attr.aria-expanded]=\"!collapseOne\"\n                data-toggle=\"collapse\"\n                (click)=\"collapseOne = !collapseOne\"\n                id=\"collapseOne\"\n                href=\"#pablo\"\n              >\n                Collapsible Group Item #1\n                <i class=\" et-icons icon-minimal-down\"> </i>\n              </a>\n            </div>\n            <div\n              aria-labelledby=\"headingOne\"\n              class=\" show\"\n              [isAnimated]=\"true\"\n              [collapse]=\"collapseOne\"\n              id=\"collapseOne\"\n              role=\"tabpanel\"\n            >\n              <div class=\" card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life\n                accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                non cupidatat skateboard dolor brunch. Food truck quinoa\n                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n                put a bird on it squid single-origin coffee nulla assumenda\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n                wes anderson cred nesciunt sapiente ea proident. Ad vegan\n                excepteur butcher vice lomo. Leggings occaecat craft beer\n                farm-to-table, raw denim aesthetic synth nesciunt you probably\n                haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n          <div class=\" card card-plain\">\n            <div class=\" card-header\" id=\"headingTwo\">\n              <a\n                aria-controls=\"collapseTwo\"\n                class=\" collapsed\"\n                data-parent=\"#accordion\"\n                [attr.aria-expanded]=\"!collapseTwo\"\n                (click)=\"collapseTwo = !collapseTwo\"\n                id=\"collapseTwo\"\n                href=\"#pablo\"\n                data-toggle=\"collapse\"\n              >\n                Collapsible Group Item #2\n                <i class=\" et-icons icon-minimal-down\"> </i>\n              </a>\n            </div>\n            <div\n              aria-labelledby=\"headingTwo\"\n              [isAnimated]=\"true\"\n              [collapse]=\"collapseTwo\"\n              id=\"collapseTwo\"\n              role=\"tabpanel\"\n            >\n              <div class=\" card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life\n                accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                non cupidatat skateboard dolor brunch. Food truck quinoa\n                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n                put a bird on it squid single-origin coffee nulla assumenda\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n                wes anderson cred nesciunt sapiente ea proident. Ad vegan\n                excepteur butcher vice lomo. Leggings occaecat craft beer\n                farm-to-table, raw denim aesthetic synth nesciunt you probably\n                haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n          <div class=\" card card-plain\">\n            <div class=\" card-header\" id=\"headingThree\">\n              <a\n                aria-controls=\"collapseThree\"\n                class=\" collapsed\"\n                data-parent=\"#accordion\"\n                [attr.aria-expanded]=\"!collapseThree\"\n                (click)=\"collapseThree = !collapseThree\"\n                id=\"collapseThree\"\n                href=\"#pablo\"\n                data-toggle=\"collapse\"\n              >\n                Collapsible Group Item #3\n                <i class=\" et-icons icon-minimal-down\"> </i>\n              </a>\n            </div>\n            <div\n              aria-labelledby=\"headingThree\"\n              [isAnimated]=\"true\"\n              [collapse]=\"collapseThree\"\n              id=\"collapseThree\"\n              role=\"tabpanel\"\n            >\n              <div class=\" card-body\">\n                Anim pariatur cliche reprehenderit, enim eiusmod high life\n                accusamus terry richardson ad squid. 3 wolf moon officia aute,\n                non cupidatat skateboard dolor brunch. Food truck quinoa\n                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua\n                put a bird on it squid single-origin coffee nulla assumenda\n                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore\n                wes anderson cred nesciunt sapiente ea proident. Ad vegan\n                excepteur butcher vice lomo. Leggings occaecat craft beer\n                farm-to-table, raw denim aesthetic synth nesciunt you probably\n                haven't heard of them accusamus labore sustainable VHS.\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" col-md-6\">\n      <div class=\" card\">\n        <div class=\" card-header\">\n          <h5 class=\" card-category\">Navigation Pills</h5>\n          <h3 class=\" card-title\">Vertical Tabs With Icons</h3>\n        </div>\n        <div class=\" card-body\">\n          <tabset\n            class=\"nav-pills-danger nav-pills-icons vertical-pills\"\n            type=\"pills\"\n            [vertical]=\"true\"\n          >\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"et-icons icon-spaceship\"> </i> Profile\n              </ng-template>\n              <p>\n                Collaboratively administrate empowered markets via plug-and-play\n                networks. Dynamically procrastinate B2C users after installed\n                base benefits. <br />\n\n                <br />\n\n                Dramatically visualize customer directed convergence without\n                revolutionary ROI.\n              </p>\n            </tab>\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"et-icons icon-settings-gear-63\"> </i> Settings\n              </ng-template>\n              <p>\n                Completely synergize resource taxing relationships via premier\n                niche markets. Professionally cultivate one-to-one customer\n                service with robust ideas. <br />\n\n                <br />\n\n                Dynamically innovate resource-leveling customer service for\n                state of the art customer service.\n              </p>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\" row\">\n    <div class=\" col-md-8 ml-auto mr-auto\">\n      <div class=\" card card-subcategories card-plain\">\n        <div class=\" card-header\">\n          <h4 class=\" card-title text-center mt-5\">Page Subcategories</h4>\n          <br />\n        </div>\n        <div class=\" card-body\">\n          <tabset\n            class=\"nav-pills-danger nav-pills-icons justify-content-center\"\n            type=\"pills\"\n          >\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"et-icons icon-spaceship\"> </i> Profile\n              </ng-template>\n              <p>\n                Collaboratively administrate empowered markets via plug-and-play\n                networks. Dynamically procrastinate B2C users after installed\n                base benefits. <br />\n\n                <br />\n\n                Dramatically visualize customer directed convergence without\n                revolutionary ROI.\n              </p>\n            </tab>\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"et-icons icon-settings-gear-63\"> </i> Settings\n              </ng-template>\n              <p>\n                Completely synergize resource taxing relationships via premier\n                niche markets. Professionally cultivate one-to-one customer\n                service with robust ideas. <br />\n\n                <br />\n\n                Dynamically innovate resource-leveling customer service for\n                state of the art customer service.\n              </p>\n            </tab>\n            <tab>\n              <ng-template tabHeading>\n                <i class=\"et-icons icon-bag-16\"> </i> Options\n              </ng-template>\n              <p>\n                Efficiently unleash cross-media information without cross-media\n                value. Quickly maximize timely deliverables for real-time\n                schemas. <br />\n\n                <br />\n\n                Dramatically maintain clicks-and-mortar solutions without\n                functional solutions.\n              </p>\n            </tab>\n          </tabset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/sweetalert/sweetalert.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/sweetalert/sweetalert.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" places-sweet-alerts\">\n    <h2 class=\" text-center\">Sweet Alert</h2>\n    <p class=\" category text-center\">\n      A beautiful plugin, that replace the classic alert, Handcrafted by our\n      friend\n      <a href=\"https://twitter.com/t4t5\" target=\"_blank\"> Tristan Edwards </a> .\n      Please check out the\n      <a href=\"https://sweetalert2.github.io/\" target=\"_blank\">\n        full documentation.\n      </a>\n    </p>\n    <div class=\" row mt-5\">\n      <div class=\" col-md-3 ml-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">Basic example</p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('basic')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 mr-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">A success message</p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('success-message')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 ml-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">Custom HTML description</p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('custom-html')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 mr-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">\n              A warning message, with a function attached to the \"Confirm\"\n              Button...\n            </p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('warning-message-and-confirmation')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\" row\">\n      <div class=\" col-md-3 ml-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">Modal window with input field</p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('input-field')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 mr-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">A title with a text under</p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('title-and-text')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 ml-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">\n              A message with auto close timer set to 2 seconds\n            </p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('auto-close')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\" col-md-3 mr-auto\">\n        <div class=\" card\">\n          <div class=\" card-body text-center\">\n            <p class=\" card-text\">\n              ...and by passing a parameter, you can execute something else for\n              \"Cancel\"\n            </p>\n            <button\n              class=\" btn btn-danger btn-fill\"\n              (click)=\"showSwal('warning-message-and-cancel')\"\n            >\n              Try me!\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/typography/typography.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/typography/typography.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" content\">\n  <div class=\" row\">\n    <div class=\" col-md-12\">\n      <div class=\" card\">\n        <div class=\" card-header mb-5\">\n          <h5 class=\" card-category\">Black Table Heading</h5>\n          <h3 class=\" card-title\">Created using Poppins Font Family</h3>\n        </div>\n        <div class=\" card-body\">\n          <div class=\" typography-line\">\n            <h1><span> Header 1 </span> The Life of Black Dashboard</h1>\n          </div>\n          <div class=\" typography-line\">\n            <h2><span> Header 2 </span> The Life of Black Dashboard</h2>\n          </div>\n          <div class=\" typography-line\">\n            <h3><span> Header 3 </span> The Life of Black Dashboard</h3>\n          </div>\n          <div class=\" typography-line\">\n            <h4><span> Header 4 </span> The Life of Black Dashboard</h4>\n          </div>\n          <div class=\" typography-line\">\n            <h5><span> Header 5 </span> The Life of Black Dashboard</h5>\n          </div>\n          <div class=\" typography-line\">\n            <h6><span> Header 6 </span> The Life of Black Dashboard</h6>\n          </div>\n          <div class=\" typography-line\">\n            <p>\n              <span> Paragraph </span> I will be the leader of a company that\n              ends up being worth billions of dollars, because I got the\n              answers. I understand culture. I am the nucleus. I think thatâs a\n              responsibility that I have, to push possibilities, to show people,\n              this is the level that things could be at.\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Quote </span>\n            <blockquote>\n              <p class=\" blockquote blockquote-primary\">\n                \"I will be the leader of a company that ends up being worth\n                billions of dollars, because I got the answers. I understand\n                culture. I am the nucleus. I think thatâs a responsibility that\n                I have, to push possibilities, to show people, this is the level\n                that things could be at.\" <br />\n\n                <br />\n\n                <small> - Noaa </small>\n              </p>\n            </blockquote>\n          </div>\n          <div class=\" typography-line\">\n            <span> Muted Text </span>\n            <p class=\" text-muted\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Primary Text </span>\n            <p class=\" text-primary\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Info Text </span>\n            <p class=\" text-info\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Success Text </span>\n            <p class=\" text-success\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Warning Text </span>\n            <p class=\" text-warning\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <span> Danger Text </span>\n            <p class=\" text-danger\">\n              I will be the leader of a company that ends up being worth\n              billions of dollars, because I got the answers...\n            </p>\n          </div>\n          <div class=\" typography-line\">\n            <h2>\n              <span> Small Tag </span> Header with small subtitle <br />\n\n              <small> Use \"small\" tag for the headers </small>\n            </h2>\n          </div>\n          <div class=\" typography-line\">\n            <span> Lists </span>\n            <div class=\" row\">\n              <div class=\" col-md-3\">\n                <h5>Unordered List</h5>\n                <ul>\n                  <li>List Item</li>\n                  <li>List Item</li>\n                  <li class=\" list-unstyled\">\n                    <ul>\n                      <li>List Item</li>\n                      <li>List Item</li>\n                      <li>List Item</li>\n                    </ul>\n                  </li>\n                  <li>List Item</li>\n                </ul>\n              </div>\n              <div class=\" col-md-3\">\n                <h5>Ordered List</h5>\n                <ol>\n                  <li>List Item</li>\n                  <li>List Item</li>\n                  <li>List item</li>\n                  <li>List Item</li>\n                </ol>\n              </div>\n              <div class=\" col-md-3\">\n                <h5>Unstyled List</h5>\n                <ul class=\" list-unstyled\">\n                  <li>List Item</li>\n                  <li>List Item</li>\n                  <li>List item</li>\n                  <li>List Item</li>\n                </ul>\n              </div>\n              <div class=\" col-md-3\">\n                <h5>Inline List</h5>\n                <ul class=\" list-inline\">\n                  <li class=\" list-inline-item\">List1</li>\n                  <li class=\" list-inline-item\">List2</li>\n                  <li class=\" list-inline-item\">List3</li>\n                </ul>\n              </div>\n            </div>\n          </div>\n          <div class=\" typography-line\">\n            <span> Code </span>\n            <p>\n              This is <code> .css-class-as-code </code> , an example of an\n              inline code element. Wrap inline code within a\n              <code> <code>...</code> </code> tag.\n            </p>\n            <pre>\n1. #This is an example of preformatted text.\n2. #Here is another line of code\n</pre\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v10.3.5
* Released under the MIT License.
*/
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  var consolePrefix = 'SweetAlert2:';
  /**
   * Filter the unique values into a new array
   * @param arr
   */

  var uniqueArray = function uniqueArray(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
      if (result.indexOf(arr[i]) === -1) {
        result.push(arr[i]);
      }
    }

    return result;
  };
  /**
   * Capitalize the first letter of a string
   * @param str
   */

  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  /**
   * Returns the array of object values (Object.values isn't supported in IE11)
   * @param obj
   */

  var objectValues = function objectValues(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
  /**
   * Convert NodeList to Array
   * @param nodeList
   */

  var toArray = function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  };
  /**
   * Standardise console warnings
   * @param message
   */

  var warn = function warn(message) {
    console.warn("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Standardise console errors
   * @param message
   */

  var error = function error(message) {
    console.error("".concat(consolePrefix, " ").concat(message));
  };
  /**
   * Private global state for `warnOnce`
   * @type {Array}
   * @private
   */

  var previousWarnOnceMessages = [];
  /**
   * Show a console warning, but only if it hasn't already been shown
   * @param message
   */

  var warnOnce = function warnOnce(message) {
    if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
      previousWarnOnceMessages.push(message);
      warn(message);
    }
  };
  /**
   * Show a one-time console warning about deprecated params/methods
   */

  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
  };
  /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   * @param arg
   */

  var callIfFunction = function callIfFunction(arg) {
    return typeof arg === 'function' ? arg() : arg;
  };
  var hasToPromiseFn = function hasToPromiseFn(arg) {
    return arg && typeof arg.toPromise === 'function';
  };
  var asPromise = function asPromise(arg) {
    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
  };
  var isPromise = function isPromise(arg) {
    return arg && Promise.resolve(arg) === arg;
  };

  var DismissReason = Object.freeze({
    cancel: 'cancel',
    backdrop: 'backdrop',
    close: 'close',
    esc: 'esc',
    timer: 'timer'
  });

  var isJqueryElement = function isJqueryElement(elem) {
    return _typeof(elem) === 'object' && elem.jquery;
  };

  var isElement = function isElement(elem) {
    return elem instanceof Element || isJqueryElement(elem);
  };

  var argsToParams = function argsToParams(args) {
    var params = {};

    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
      _extends(params, args[0]);
    } else {
      ['title', 'html', 'icon'].forEach(function (name, index) {
        var arg = args[index];

        if (typeof arg === 'string' || isElement(arg)) {
          params[name] = arg;
        } else if (arg !== undefined) {
          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
        }
      });
    }

    return params;
  };

  var swalPrefix = 'swal2-';
  var prefix = function prefix(items) {
    var result = {};

    for (var i in items) {
      result[items[i]] = swalPrefix + items[i];
    }

    return result;
  };
  var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'toast-column', 'show', 'hide', 'close', 'title', 'header', 'content', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error']);
  var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

  var getContainer = function getContainer() {
    return document.body.querySelector(".".concat(swalClasses.container));
  };
  var elementBySelector = function elementBySelector(selectorString) {
    var container = getContainer();
    return container ? container.querySelector(selectorString) : null;
  };

  var elementByClass = function elementByClass(className) {
    return elementBySelector(".".concat(className));
  };

  var getPopup = function getPopup() {
    return elementByClass(swalClasses.popup);
  };
  var getIcons = function getIcons() {
    var popup = getPopup();
    return toArray(popup.querySelectorAll(".".concat(swalClasses.icon)));
  };
  var getIcon = function getIcon() {
    var visibleIcon = getIcons().filter(function (icon) {
      return isVisible(icon);
    });
    return visibleIcon.length ? visibleIcon[0] : null;
  };
  var getTitle = function getTitle() {
    return elementByClass(swalClasses.title);
  };
  var getContent = function getContent() {
    return elementByClass(swalClasses.content);
  };
  var getHtmlContainer = function getHtmlContainer() {
    return elementByClass(swalClasses['html-container']);
  };
  var getImage = function getImage() {
    return elementByClass(swalClasses.image);
  };
  var getProgressSteps = function getProgressSteps() {
    return elementByClass(swalClasses['progress-steps']);
  };
  var getValidationMessage = function getValidationMessage() {
    return elementByClass(swalClasses['validation-message']);
  };
  var getConfirmButton = function getConfirmButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
  };
  var getDenyButton = function getDenyButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
  };
  var getLoader = function getLoader() {
    return elementBySelector(".".concat(swalClasses.loader));
  };
  var getCancelButton = function getCancelButton() {
    return elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
  };
  var getActions = function getActions() {
    return elementByClass(swalClasses.actions);
  };
  var getHeader = function getHeader() {
    return elementByClass(swalClasses.header);
  };
  var getFooter = function getFooter() {
    return elementByClass(swalClasses.footer);
  };
  var getTimerProgressBar = function getTimerProgressBar() {
    return elementByClass(swalClasses['timer-progress-bar']);
  };
  var getCloseButton = function getCloseButton() {
    return elementByClass(swalClasses.close);
  }; // https://github.com/jkup/focusable/blob/master/index.js

  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
  var getFocusableElements = function getFocusableElements() {
    var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
    .sort(function (a, b) {
      a = parseInt(a.getAttribute('tabindex'));
      b = parseInt(b.getAttribute('tabindex'));

      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      }

      return 0;
    });
    var otherFocusableElements = toArray(getPopup().querySelectorAll(focusable)).filter(function (el) {
      return el.getAttribute('tabindex') !== '-1';
    });
    return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
      return isVisible(el);
    });
  };
  var isModal = function isModal() {
    return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
  };
  var isToast = function isToast() {
    return document.body.classList.contains(swalClasses['toast-shown']);
  };
  var isLoading = function isLoading() {
    return getPopup().hasAttribute('data-loading');
  };

  var states = {
    previousBodyPadding: null
  };
  var setInnerHtml = function setInnerHtml(elem, html) {
    // #1926
    elem.textContent = '';

    if (html) {
      var parser = new DOMParser();
      var parsed = parser.parseFromString(html, "text/html");
      toArray(parsed.querySelector('head').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
      toArray(parsed.querySelector('body').childNodes).forEach(function (child) {
        elem.appendChild(child);
      });
    }
  };
  var hasClass = function hasClass(elem, className) {
    if (!className) {
      return false;
    }

    var classList = className.split(/\s+/);

    for (var i = 0; i < classList.length; i++) {
      if (!elem.classList.contains(classList[i])) {
        return false;
      }
    }

    return true;
  };

  var removeCustomClasses = function removeCustomClasses(elem, params) {
    toArray(elem.classList).forEach(function (className) {
      if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1) && !(objectValues(params.showClass).indexOf(className) !== -1)) {
        elem.classList.remove(className);
      }
    });
  };

  var applyCustomClass = function applyCustomClass(elem, params, className) {
    removeCustomClasses(elem, params);

    if (params.customClass && params.customClass[className]) {
      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
        return warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
      }

      addClass(elem, params.customClass[className]);
    }
  };
  function getInput(content, inputType) {
    if (!inputType) {
      return null;
    }

    switch (inputType) {
      case 'select':
      case 'textarea':
      case 'file':
        return getChildByClass(content, swalClasses[inputType]);

      case 'checkbox':
        return content.querySelector(".".concat(swalClasses.checkbox, " input"));

      case 'radio':
        return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

      case 'range':
        return content.querySelector(".".concat(swalClasses.range, " input"));

      default:
        return getChildByClass(content, swalClasses.input);
    }
  }
  var focusInput = function focusInput(input) {
    input.focus(); // place cursor at end of text in text input

    if (input.type !== 'file') {
      // http://stackoverflow.com/a/2345915
      var val = input.value;
      input.value = '';
      input.value = val;
    }
  };
  var toggleClass = function toggleClass(target, classList, condition) {
    if (!target || !classList) {
      return;
    }

    if (typeof classList === 'string') {
      classList = classList.split(/\s+/).filter(Boolean);
    }

    classList.forEach(function (className) {
      if (target.forEach) {
        target.forEach(function (elem) {
          condition ? elem.classList.add(className) : elem.classList.remove(className);
        });
      } else {
        condition ? target.classList.add(className) : target.classList.remove(className);
      }
    });
  };
  var addClass = function addClass(target, classList) {
    toggleClass(target, classList, true);
  };
  var removeClass = function removeClass(target, classList) {
    toggleClass(target, classList, false);
  };
  var getChildByClass = function getChildByClass(elem, className) {
    for (var i = 0; i < elem.childNodes.length; i++) {
      if (hasClass(elem.childNodes[i], className)) {
        return elem.childNodes[i];
      }
    }
  };
  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
    if (value || parseInt(value) === 0) {
      elem.style[property] = typeof value === 'number' ? "".concat(value, "px") : value;
    } else {
      elem.style.removeProperty(property);
    }
  };
  var show = function show(elem) {
    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
    elem.style.display = display;
  };
  var hide = function hide(elem) {
    elem.style.display = 'none';
  };
  var setStyle = function setStyle(parent, selector, property, value) {
    var el = parent.querySelector(selector);

    if (el) {
      el.style[property] = value;
    }
  };
  var toggle = function toggle(elem, condition, display) {
    condition ? show(elem, display) : hide(elem);
  }; // borrowed from jquery $(elem).is(':visible') implementation

  var isVisible = function isVisible(elem) {
    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
  };
  /* istanbul ignore next */

  var isScrollable = function isScrollable(elem) {
    return !!(elem.scrollHeight > elem.clientHeight);
  }; // borrowed from https://stackoverflow.com/a/46352119

  var hasCssAnimation = function hasCssAnimation(elem) {
    var style = window.getComputedStyle(elem);
    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
    return animDuration > 0 || transDuration > 0;
  };
  var contains = function contains(haystack, needle) {
    if (typeof haystack.contains === 'function') {
      return haystack.contains(needle);
    }
  };
  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var timerProgressBar = getTimerProgressBar();

    if (isVisible(timerProgressBar)) {
      if (reset) {
        timerProgressBar.style.transition = 'none';
        timerProgressBar.style.width = '100%';
      }

      setTimeout(function () {
        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
        timerProgressBar.style.width = '0%';
      }, 10);
    }
  };
  var stopTimerProgressBar = function stopTimerProgressBar() {
    var timerProgressBar = getTimerProgressBar();
    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = '100%';
    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
    var timerProgressBarPercent = parseInt(timerProgressBarWidth / timerProgressBarFullWidth * 100);
    timerProgressBar.style.removeProperty('transition');
    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
  };

  // Detect Node env
  var isNodeEnv = function isNodeEnv() {
    return typeof window === 'undefined' || typeof document === 'undefined';
  };

  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\"></div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses['html-container'], "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

  var resetOldContainer = function resetOldContainer() {
    var oldContainer = getContainer();

    if (!oldContainer) {
      return false;
    }

    oldContainer.parentNode.removeChild(oldContainer);
    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
    return true;
  };

  var oldInputVal; // IE11 workaround, see #1109 for details

  var resetValidationMessage = function resetValidationMessage(e) {
    if (Swal.isVisible() && oldInputVal !== e.target.value) {
      Swal.resetValidationMessage();
    }

    oldInputVal = e.target.value;
  };

  var addInputChangeListeners = function addInputChangeListeners() {
    var content = getContent();
    var input = getChildByClass(content, swalClasses.input);
    var file = getChildByClass(content, swalClasses.file);
    var range = content.querySelector(".".concat(swalClasses.range, " input"));
    var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
    var select = getChildByClass(content, swalClasses.select);
    var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
    var textarea = getChildByClass(content, swalClasses.textarea);
    input.oninput = resetValidationMessage;
    file.onchange = resetValidationMessage;
    select.onchange = resetValidationMessage;
    checkbox.onchange = resetValidationMessage;
    textarea.oninput = resetValidationMessage;

    range.oninput = function (e) {
      resetValidationMessage(e);
      rangeOutput.value = range.value;
    };

    range.onchange = function (e) {
      resetValidationMessage(e);
      range.nextSibling.value = range.value;
    };
  };

  var getTarget = function getTarget(target) {
    return typeof target === 'string' ? document.querySelector(target) : target;
  };

  var setupAccessibility = function setupAccessibility(params) {
    var popup = getPopup();
    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

    if (!params.toast) {
      popup.setAttribute('aria-modal', 'true');
    }
  };

  var setupRTL = function setupRTL(targetElement) {
    if (window.getComputedStyle(targetElement).direction === 'rtl') {
      addClass(getContainer(), swalClasses.rtl);
    }
  };
  /*
   * Add modal + backdrop to DOM
   */


  var init = function init(params) {
    // Clean up the old popup container if it exists
    var oldContainerExisted = resetOldContainer();
    /* istanbul ignore if */

    if (isNodeEnv()) {
      error('SweetAlert2 requires document to initialize');
      return;
    }

    var container = document.createElement('div');
    container.className = swalClasses.container;

    if (oldContainerExisted) {
      addClass(container, swalClasses['no-transition']);
    }

    setInnerHtml(container, sweetHTML);
    var targetElement = getTarget(params.target);
    targetElement.appendChild(container);
    setupAccessibility(params);
    setupRTL(targetElement);
    addInputChangeListeners();
  };

  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
    // DOM element
    if (param instanceof HTMLElement) {
      target.appendChild(param); // Object
    } else if (_typeof(param) === 'object') {
      handleObject(param, target); // Plain string
    } else if (param) {
      setInnerHtml(target, param);
    }
  };

  var handleObject = function handleObject(param, target) {
    // JQuery element(s)
    if (param.jquery) {
      handleJqueryElem(target, param); // For other objects use their string representation
    } else {
      setInnerHtml(target, param.toString());
    }
  };

  var handleJqueryElem = function handleJqueryElem(target, elem) {
    target.textContent = '';

    if (0 in elem) {
      for (var i = 0; (i in elem); i++) {
        target.appendChild(elem[i].cloneNode(true));
      }
    } else {
      target.appendChild(elem.cloneNode(true));
    }
  };

  var animationEndEvent = function () {
    // Prevent run in Node env

    /* istanbul ignore if */
    if (isNodeEnv()) {
      return false;
    }

    var testEl = document.createElement('div');
    var transEndEventNames = {
      WebkitAnimation: 'webkitAnimationEnd',
      OAnimation: 'oAnimationEnd oanimationend',
      animation: 'animationend'
    };

    for (var i in transEndEventNames) {
      if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== 'undefined') {
        return transEndEventNames[i];
      }
    }

    return false;
  }();

  // https://github.com/twbs/bootstrap/blob/master/js/src/modal.js

  var measureScrollbar = function measureScrollbar() {
    var scrollDiv = document.createElement('div');
    scrollDiv.className = swalClasses['scrollbar-measure'];
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  };

  var renderActions = function renderActions(instance, params) {
    var actions = getActions();
    var loader = getLoader();
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton(); // Actions (buttons) wrapper

    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
      hide(actions);
    } // Custom class


    applyCustomClass(actions, params, 'actions'); // Render buttons

    renderButton(confirmButton, 'confirm', params);
    renderButton(denyButton, 'deny', params);
    renderButton(cancelButton, 'cancel', params); // Loader

    loader.innerHTML = params.loaderHtml;

    if (params.buttonsStyling) {
      handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
    } else {
      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    }

    if (params.reverseButtons) {
      actions.insertBefore(cancelButton, loader);
      actions.insertBefore(denyButton, loader);
      actions.insertBefore(confirmButton, loader);
    }
  };

  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled); // Buttons background colors

    if (params.confirmButtonColor) {
      confirmButton.style.backgroundColor = params.confirmButtonColor;
    }

    if (params.denyButtonColor) {
      denyButton.style.backgroundColor = params.denyButtonColor;
    }

    if (params.cancelButtonColor) {
      cancelButton.style.backgroundColor = params.cancelButtonColor;
    } // Loading state


    if (!isLoading()) {
      var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
      confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
      confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
    }
  }

  function renderButton(button, buttonType, params) {
    toggle(button, params["show".concat(capitalizeFirstLetter(buttonType), "Button")], 'inline-block');
    setInnerHtml(button, params["".concat(buttonType, "ButtonText")]); // Set caption text

    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")]); // ARIA label
    // Add buttons custom classes

    button.className = swalClasses[buttonType];
    applyCustomClass(button, params, "".concat(buttonType, "Button"));
    addClass(button, params["".concat(buttonType, "ButtonClass")]);
  }

  function handleBackdropParam(container, backdrop) {
    if (typeof backdrop === 'string') {
      container.style.background = backdrop;
    } else if (!backdrop) {
      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
    }
  }

  function handlePositionParam(container, position) {
    if (position in swalClasses) {
      addClass(container, swalClasses[position]);
    } else {
      warn('The "position" parameter is not valid, defaulting to "center"');
      addClass(container, swalClasses.center);
    }
  }

  function handleGrowParam(container, grow) {
    if (grow && typeof grow === 'string') {
      var growClass = "grow-".concat(grow);

      if (growClass in swalClasses) {
        addClass(container, swalClasses[growClass]);
      }
    }
  }

  var renderContainer = function renderContainer(instance, params) {
    var container = getContainer();

    if (!container) {
      return;
    }

    handleBackdropParam(container, params.backdrop);

    if (!params.backdrop && params.allowOutsideClick) {
      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
    }

    handlePositionParam(container, params.position);
    handleGrowParam(container, params.grow); // Custom class

    applyCustomClass(container, params, 'container'); // Set queue step attribute for getQueueStep() method

    var queueStep = document.body.getAttribute('data-swal2-queue-step');

    if (queueStep) {
      container.setAttribute('data-queue-step', queueStep);
      document.body.removeAttribute('data-swal2-queue-step');
    }
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateProps = {
    promise: new WeakMap(),
    innerParams: new WeakMap(),
    domCache: new WeakMap()
  };

  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
  var renderInput = function renderInput(instance, params) {
    var content = getContent();
    var innerParams = privateProps.innerParams.get(instance);
    var rerender = !innerParams || params.input !== innerParams.input;
    inputTypes.forEach(function (inputType) {
      var inputClass = swalClasses[inputType];
      var inputContainer = getChildByClass(content, inputClass); // set attributes

      setAttributes(inputType, params.inputAttributes); // set class

      inputContainer.className = inputClass;

      if (rerender) {
        hide(inputContainer);
      }
    });

    if (params.input) {
      if (rerender) {
        showInput(params);
      } // set custom class


      setCustomClass(params);
    }
  };

  var showInput = function showInput(params) {
    if (!renderInputType[params.input]) {
      return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
    }

    var inputContainer = getInputContainer(params.input);
    var input = renderInputType[params.input](inputContainer, params);
    show(input); // input autofocus

    setTimeout(function () {
      focusInput(input);
    });
  };

  var removeAttributes = function removeAttributes(input) {
    for (var i = 0; i < input.attributes.length; i++) {
      var attrName = input.attributes[i].name;

      if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
        input.removeAttribute(attrName);
      }
    }
  };

  var setAttributes = function setAttributes(inputType, inputAttributes) {
    var input = getInput(getContent(), inputType);

    if (!input) {
      return;
    }

    removeAttributes(input);

    for (var attr in inputAttributes) {
      // Do not set a placeholder for <input type="range">
      // it'll crash Edge, #1298
      if (inputType === 'range' && attr === 'placeholder') {
        continue;
      }

      input.setAttribute(attr, inputAttributes[attr]);
    }
  };

  var setCustomClass = function setCustomClass(params) {
    var inputContainer = getInputContainer(params.input);

    if (params.customClass) {
      addClass(inputContainer, params.customClass.input);
    }
  };

  var setInputPlaceholder = function setInputPlaceholder(input, params) {
    if (!input.placeholder || params.inputPlaceholder) {
      input.placeholder = params.inputPlaceholder;
    }
  };

  var getInputContainer = function getInputContainer(inputType) {
    var inputClass = swalClasses[inputType] ? swalClasses[inputType] : swalClasses.input;
    return getChildByClass(getContent(), inputClass);
  };

  var renderInputType = {};

  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (input, params) {
    if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
      input.value = params.inputValue;
    } else if (!isPromise(params.inputValue)) {
      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
    }

    setInputPlaceholder(input, params);
    input.type = params.input;
    return input;
  };

  renderInputType.file = function (input, params) {
    setInputPlaceholder(input, params);
    return input;
  };

  renderInputType.range = function (range, params) {
    var rangeInput = range.querySelector('input');
    var rangeOutput = range.querySelector('output');
    rangeInput.value = params.inputValue;
    rangeInput.type = params.input;
    rangeOutput.value = params.inputValue;
    return range;
  };

  renderInputType.select = function (select, params) {
    select.textContent = '';

    if (params.inputPlaceholder) {
      var placeholder = document.createElement('option');
      setInnerHtml(placeholder, params.inputPlaceholder);
      placeholder.value = '';
      placeholder.disabled = true;
      placeholder.selected = true;
      select.appendChild(placeholder);
    }

    return select;
  };

  renderInputType.radio = function (radio) {
    radio.textContent = '';
    return radio;
  };

  renderInputType.checkbox = function (checkboxContainer, params) {
    var checkbox = getInput(getContent(), 'checkbox');
    checkbox.value = 1;
    checkbox.id = swalClasses.checkbox;
    checkbox.checked = Boolean(params.inputValue);
    var label = checkboxContainer.querySelector('span');
    setInnerHtml(label, params.inputPlaceholder);
    return checkboxContainer;
  };

  renderInputType.textarea = function (textarea, params) {
    textarea.value = params.inputValue;
    setInputPlaceholder(textarea, params);

    if ('MutationObserver' in window) {
      // #1699
      var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      var popupPadding = parseInt(window.getComputedStyle(getPopup()).paddingLeft) + parseInt(window.getComputedStyle(getPopup()).paddingRight);

      var outputsize = function outputsize() {
        var contentWidth = textarea.offsetWidth + popupPadding;

        if (contentWidth > initialPopupWidth) {
          getPopup().style.width = "".concat(contentWidth, "px");
        } else {
          getPopup().style.width = null;
        }
      };

      new MutationObserver(outputsize).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }

    return textarea;
  };

  var renderContent = function renderContent(instance, params) {
    var content = getContent().querySelector("#".concat(swalClasses.content)); // Content as HTML

    if (params.html) {
      parseHtmlToContainer(params.html, content);
      show(content, 'block'); // Content as plain text
    } else if (params.text) {
      content.textContent = params.text;
      show(content, 'block'); // No content
    } else {
      hide(content);
    }

    renderInput(instance, params); // Custom class

    applyCustomClass(getContent(), params, 'content');
  };

  var renderFooter = function renderFooter(instance, params) {
    var footer = getFooter();
    toggle(footer, params.footer);

    if (params.footer) {
      parseHtmlToContainer(params.footer, footer);
    } // Custom class


    applyCustomClass(footer, params, 'footer');
  };

  var renderCloseButton = function renderCloseButton(instance, params) {
    var closeButton = getCloseButton();
    setInnerHtml(closeButton, params.closeButtonHtml); // Custom class

    applyCustomClass(closeButton, params, 'closeButton');
    toggle(closeButton, params.showCloseButton);
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
  };

  var renderIcon = function renderIcon(instance, params) {
    var innerParams = privateProps.innerParams.get(instance); // if the given icon already rendered, apply the styling without re-rendering the icon

    if (innerParams && params.icon === innerParams.icon && getIcon()) {
      applyStyles(getIcon(), params);
      return;
    }

    hideAllIcons();

    if (!params.icon) {
      return;
    }

    if (Object.keys(iconTypes).indexOf(params.icon) !== -1) {
      var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.icon]));
      show(icon); // Custom or default content

      setContent(icon, params);
      applyStyles(icon, params); // Animate icon

      addClass(icon, params.showClass.icon);
    } else {
      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
    }
  };

  var hideAllIcons = function hideAllIcons() {
    var icons = getIcons();

    for (var i = 0; i < icons.length; i++) {
      hide(icons[i]);
    }
  };

  var applyStyles = function applyStyles(icon, params) {
    // Icon color
    setColor(icon, params); // Success icon background color

    adjustSuccessIconBackgoundColor(); // Custom class

    applyCustomClass(icon, params, 'icon');
  }; // Adjust success icon background color to match the popup background color


  var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
    var popup = getPopup();
    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

    for (var i = 0; i < successIconParts.length; i++) {
      successIconParts[i].style.backgroundColor = popupBackgroundColor;
    }
  };

  var setContent = function setContent(icon, params) {
    icon.textContent = '';

    if (params.iconHtml) {
      setInnerHtml(icon, iconContent(params.iconHtml));
    } else if (params.icon === 'success') {
      setInnerHtml(icon, "\n      <div class=\"swal2-success-circular-line-left\"></div>\n      <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n      <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n      <div class=\"swal2-success-circular-line-right\"></div>\n    ");
    } else if (params.icon === 'error') {
      setInnerHtml(icon, "\n      <span class=\"swal2-x-mark\">\n        <span class=\"swal2-x-mark-line-left\"></span>\n        <span class=\"swal2-x-mark-line-right\"></span>\n      </span>\n    ");
    } else {
      var defaultIconHtml = {
        question: '?',
        warning: '!',
        info: 'i'
      };
      setInnerHtml(icon, iconContent(defaultIconHtml[params.icon]));
    }
  };

  var setColor = function setColor(icon, params) {
    if (!params.iconColor) {
      return;
    }

    icon.style.color = params.iconColor;
    icon.style.borderColor = params.iconColor;

    for (var _i = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i < _arr.length; _i++) {
      var sel = _arr[_i];
      setStyle(icon, sel, 'backgroundColor', params.iconColor);
    }

    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);
  };

  var iconContent = function iconContent(content) {
    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
  };

  var renderImage = function renderImage(instance, params) {
    var image = getImage();

    if (!params.imageUrl) {
      return hide(image);
    }

    show(image, ''); // Src, alt

    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt); // Width, height

    applyNumericalStyle(image, 'width', params.imageWidth);
    applyNumericalStyle(image, 'height', params.imageHeight); // Class

    image.className = swalClasses.image;
    applyCustomClass(image, params, 'image');
  };

  var currentSteps = [];
  /*
   * Global function for chaining sweetAlert popups
   */

  var queue = function queue(steps) {
    var Swal = this;
    currentSteps = steps;

    var resetAndResolve = function resetAndResolve(resolve, value) {
      currentSteps = [];
      resolve(value);
    };

    var queueResult = [];
    return new Promise(function (resolve) {
      (function step(i, callback) {
        if (i < currentSteps.length) {
          document.body.setAttribute('data-swal2-queue-step', i);
          Swal.fire(currentSteps[i]).then(function (result) {
            if (typeof result.value !== 'undefined') {
              queueResult.push(result.value);
              step(i + 1, callback);
            } else {
              resetAndResolve(resolve, {
                dismiss: result.dismiss
              });
            }
          });
        } else {
          resetAndResolve(resolve, {
            value: queueResult
          });
        }
      })(0);
    });
  };
  /*
   * Global function for getting the index of current popup in queue
   */

  var getQueueStep = function getQueueStep() {
    return getContainer() && getContainer().getAttribute('data-queue-step');
  };
  /*
   * Global function for inserting a popup to the queue
   */

  var insertQueueStep = function insertQueueStep(step, index) {
    if (index && index < currentSteps.length) {
      return currentSteps.splice(index, 0, step);
    }

    return currentSteps.push(step);
  };
  /*
   * Global function for deleting a popup from the queue
   */

  var deleteQueueStep = function deleteQueueStep(index) {
    if (typeof currentSteps[index] !== 'undefined') {
      currentSteps.splice(index, 1);
    }
  };

  var createStepElement = function createStepElement(step) {
    var stepEl = document.createElement('li');
    addClass(stepEl, swalClasses['progress-step']);
    setInnerHtml(stepEl, step);
    return stepEl;
  };

  var createLineElement = function createLineElement(params) {
    var lineEl = document.createElement('li');
    addClass(lineEl, swalClasses['progress-step-line']);

    if (params.progressStepsDistance) {
      lineEl.style.width = params.progressStepsDistance;
    }

    return lineEl;
  };

  var renderProgressSteps = function renderProgressSteps(instance, params) {
    var progressStepsContainer = getProgressSteps();

    if (!params.progressSteps || params.progressSteps.length === 0) {
      return hide(progressStepsContainer);
    }

    show(progressStepsContainer);
    progressStepsContainer.textContent = '';
    var currentProgressStep = parseInt(params.currentProgressStep === undefined ? getQueueStep() : params.currentProgressStep);

    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }

    params.progressSteps.forEach(function (step, index) {
      var stepEl = createStepElement(step);
      progressStepsContainer.appendChild(stepEl);

      if (index === currentProgressStep) {
        addClass(stepEl, swalClasses['active-progress-step']);
      }

      if (index !== params.progressSteps.length - 1) {
        var lineEl = createLineElement(params);
        progressStepsContainer.appendChild(lineEl);
      }
    });
  };

  var renderTitle = function renderTitle(instance, params) {
    var title = getTitle();
    toggle(title, params.title || params.titleText);

    if (params.title) {
      parseHtmlToContainer(params.title, title);
    }

    if (params.titleText) {
      title.innerText = params.titleText;
    } // Custom class


    applyCustomClass(title, params, 'title');
  };

  var renderHeader = function renderHeader(instance, params) {
    var header = getHeader(); // Custom class

    applyCustomClass(header, params, 'header'); // Progress steps

    renderProgressSteps(instance, params); // Icon

    renderIcon(instance, params); // Image

    renderImage(instance, params); // Title

    renderTitle(instance, params); // Close button

    renderCloseButton(instance, params);
  };

  var renderPopup = function renderPopup(instance, params) {
    var popup = getPopup(); // Width

    applyNumericalStyle(popup, 'width', params.width); // Padding

    applyNumericalStyle(popup, 'padding', params.padding); // Background

    if (params.background) {
      popup.style.background = params.background;
    } // Classes


    addClasses(popup, params);
  };

  var addClasses = function addClasses(popup, params) {
    // Default Class + showClass when updating Swal.update({})
    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible(popup) ? params.showClass.popup : '');

    if (params.toast) {
      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
      addClass(popup, swalClasses.toast);
    } else {
      addClass(popup, swalClasses.modal);
    } // Custom class


    applyCustomClass(popup, params, 'popup');

    if (typeof params.customClass === 'string') {
      addClass(popup, params.customClass);
    } // Icon class (#1842)


    if (params.icon) {
      addClass(popup, swalClasses["icon-".concat(params.icon)]);
    }
  };

  var render = function render(instance, params) {
    renderPopup(instance, params);
    renderContainer(instance, params);
    renderHeader(instance, params);
    renderContent(instance, params);
    renderActions(instance, params);
    renderFooter(instance, params);

    if (typeof params.didRender === 'function') {
      params.didRender(getPopup());
    } else if (typeof params.onRender === 'function') {
      params.onRender(getPopup()); // @deprecated
    }
  };

  /*
   * Global function to determine if SweetAlert2 popup is shown
   */

  var isVisible$1 = function isVisible$$1() {
    return isVisible(getPopup());
  };
  /*
   * Global function to click 'Confirm' button
   */

  var clickConfirm = function clickConfirm() {
    return getConfirmButton() && getConfirmButton().click();
  };
  /*
   * Global function to click 'Deny' button
   */

  var clickDeny = function clickDeny() {
    return getDenyButton() && getDenyButton().click();
  };
  /*
   * Global function to click 'Cancel' button
   */

  var clickCancel = function clickCancel() {
    return getCancelButton() && getCancelButton().click();
  };

  function fire() {
    var Swal = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _construct(Swal, args);
  }

  /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param mixinParams
   */
  function mixin(mixinParams) {
    var MixinSwal = /*#__PURE__*/function (_this) {
      _inherits(MixinSwal, _this);

      var _super = _createSuper(MixinSwal);

      function MixinSwal() {
        _classCallCheck(this, MixinSwal);

        return _super.apply(this, arguments);
      }

      _createClass(MixinSwal, [{
        key: "_main",
        value: function _main(params) {
          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
        }
      }]);

      return MixinSwal;
    }(this);

    return MixinSwal;
  }

  /**
   * Show spinner instead of Confirm button
   */

  var showLoading = function showLoading() {
    var popup = getPopup();

    if (!popup) {
      Swal.fire();
    }

    popup = getPopup();
    var actions = getActions();
    var confirmButton = getConfirmButton();
    var loader = getLoader();
    show(actions);
    hide(confirmButton);
    addClass([popup, actions], swalClasses.loading);
    show(loader);
    popup.setAttribute('data-loading', true);
    popup.setAttribute('aria-busy', true);
    popup.focus();
  };

  var RESTORE_FOCUS_TIMEOUT = 100;

  var globalState = {};

  var focusPreviousActiveElement = function focusPreviousActiveElement() {
    if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
      globalState.previousActiveElement.focus();
      globalState.previousActiveElement = null;
    } else if (document.body) {
      document.body.focus();
    }
  }; // Restore previous active (focused) element


  var restoreActiveElement = function restoreActiveElement() {
    return new Promise(function (resolve) {
      var x = window.scrollX;
      var y = window.scrollY;
      globalState.restoreFocusTimeout = setTimeout(function () {
        focusPreviousActiveElement();
        resolve();
      }, RESTORE_FOCUS_TIMEOUT); // issues/900

      /* istanbul ignore if */

      if (typeof x !== 'undefined' && typeof y !== 'undefined') {
        // IE doesn't have scrollX/scrollY support
        window.scrollTo(x, y);
      }
    });
  };

  /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   */

  var getTimerLeft = function getTimerLeft() {
    return globalState.timeout && globalState.timeout.getTimerLeft();
  };
  /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var stopTimer = function stopTimer() {
    if (globalState.timeout) {
      stopTimerProgressBar();
      return globalState.timeout.stop();
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var resumeTimer = function resumeTimer() {
    if (globalState.timeout) {
      var remaining = globalState.timeout.start();
      animateTimerProgressBar(remaining);
      return remaining;
    }
  };
  /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   */

  var toggleTimer = function toggleTimer() {
    var timer = globalState.timeout;
    return timer && (timer.running ? stopTimer() : resumeTimer());
  };
  /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   */

  var increaseTimer = function increaseTimer(n) {
    if (globalState.timeout) {
      var remaining = globalState.timeout.increase(n);
      animateTimerProgressBar(remaining, true);
      return remaining;
    }
  };
  /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   */

  var isTimerRunning = function isTimerRunning() {
    return globalState.timeout && globalState.timeout.isRunning();
  };

  var defaultParams = {
    title: '',
    titleText: '',
    text: '',
    html: '',
    footer: '',
    icon: undefined,
    iconColor: undefined,
    iconHtml: undefined,
    toast: false,
    animation: true,
    showClass: {
      popup: 'swal2-show',
      backdrop: 'swal2-backdrop-show',
      icon: 'swal2-icon-show'
    },
    hideClass: {
      popup: 'swal2-hide',
      backdrop: 'swal2-backdrop-hide',
      icon: 'swal2-icon-hide'
    },
    customClass: undefined,
    target: 'body',
    backdrop: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showDenyButton: false,
    showCancelButton: false,
    preConfirm: undefined,
    confirmButtonText: 'OK',
    confirmButtonAriaLabel: '',
    confirmButtonColor: undefined,
    denyButtonText: 'No',
    denyButtonAriaLabel: '',
    denyButtonColor: undefined,
    cancelButtonText: 'Cancel',
    cancelButtonAriaLabel: '',
    cancelButtonColor: undefined,
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusDeny: false,
    focusCancel: false,
    showCloseButton: false,
    closeButtonHtml: '&times;',
    closeButtonAriaLabel: 'Close this dialog',
    loaderHtml: '',
    showLoaderOnConfirm: false,
    imageUrl: undefined,
    imageWidth: undefined,
    imageHeight: undefined,
    imageAlt: '',
    timer: undefined,
    timerProgressBar: false,
    width: undefined,
    padding: undefined,
    background: undefined,
    input: undefined,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: undefined,
    validationMessage: undefined,
    grow: false,
    position: 'center',
    progressSteps: [],
    currentProgressStep: undefined,
    progressStepsDistance: undefined,
    onBeforeOpen: undefined,
    onOpen: undefined,
    willOpen: undefined,
    didOpen: undefined,
    onRender: undefined,
    didRender: undefined,
    onClose: undefined,
    onAfterClose: undefined,
    willClose: undefined,
    didClose: undefined,
    onDestroy: undefined,
    didDestroy: undefined,
    scrollbarPadding: true
  };
  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'onAfterClose', 'onClose', 'onDestroy', 'progressSteps', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];
  var deprecatedParams = {
    animation: 'showClass" and "hideClass',
    onBeforeOpen: 'willOpen',
    onOpen: 'didOpen',
    onRender: 'didRender',
    onClose: 'willClose',
    onAfterClose: 'didClose',
    onDestroy: 'didDestroy'
  };
  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
  /**
   * Is valid parameter
   * @param {String} paramName
   */

  var isValidParameter = function isValidParameter(paramName) {
    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
  };
  /**
   * Is valid parameter for Swal.update() method
   * @param {String} paramName
   */

  var isUpdatableParameter = function isUpdatableParameter(paramName) {
    return updatableParams.indexOf(paramName) !== -1;
  };
  /**
   * Is deprecated parameter
   * @param {String} paramName
   */

  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
    return deprecatedParams[paramName];
  };

  var checkIfParamIsValid = function checkIfParamIsValid(param) {
    if (!isValidParameter(param)) {
      warn("Unknown parameter \"".concat(param, "\""));
    }
  };

  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
    if (toastIncompatibleParams.indexOf(param) !== -1) {
      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
    }
  };

  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
    if (isDeprecatedParameter(param)) {
      warnAboutDeprecation(param, isDeprecatedParameter(param));
    }
  };
  /**
   * Show relevant warnings for given params
   *
   * @param params
   */


  var showWarningsForParams = function showWarningsForParams(params) {
    for (var param in params) {
      checkIfParamIsValid(param);

      if (params.toast) {
        checkIfToastParamIsValid(param);
      }

      checkIfParamIsDeprecated(param);
    }
  };



  var staticMethods = /*#__PURE__*/Object.freeze({
    isValidParameter: isValidParameter,
    isUpdatableParameter: isUpdatableParameter,
    isDeprecatedParameter: isDeprecatedParameter,
    argsToParams: argsToParams,
    isVisible: isVisible$1,
    clickConfirm: clickConfirm,
    clickDeny: clickDeny,
    clickCancel: clickCancel,
    getContainer: getContainer,
    getPopup: getPopup,
    getTitle: getTitle,
    getContent: getContent,
    getHtmlContainer: getHtmlContainer,
    getImage: getImage,
    getIcon: getIcon,
    getIcons: getIcons,
    getCloseButton: getCloseButton,
    getActions: getActions,
    getConfirmButton: getConfirmButton,
    getDenyButton: getDenyButton,
    getCancelButton: getCancelButton,
    getHeader: getHeader,
    getFooter: getFooter,
    getTimerProgressBar: getTimerProgressBar,
    getFocusableElements: getFocusableElements,
    getValidationMessage: getValidationMessage,
    isLoading: isLoading,
    fire: fire,
    mixin: mixin,
    queue: queue,
    getQueueStep: getQueueStep,
    insertQueueStep: insertQueueStep,
    deleteQueueStep: deleteQueueStep,
    showLoading: showLoading,
    enableLoading: showLoading,
    getTimerLeft: getTimerLeft,
    stopTimer: stopTimer,
    resumeTimer: resumeTimer,
    toggleTimer: toggleTimer,
    increaseTimer: increaseTimer,
    isTimerRunning: isTimerRunning
  });

  /**
   * Enables buttons and hide loader.
   */

  function hideLoading() {
    // do nothing if popup is closed
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return;
    }

    var domCache = privateProps.domCache.get(this);
    hide(domCache.loader);

    if (innerParams.showConfirmButton) {
      show(domCache.confirmButton);
    } else if (!innerParams.showConfirmButton && !innerParams.showCancelButton) {
      hide(domCache.actions);
    }

    removeClass([domCache.popup, domCache.actions], swalClasses.loading);
    domCache.popup.removeAttribute('aria-busy');
    domCache.popup.removeAttribute('data-loading');
    domCache.confirmButton.disabled = false;
    domCache.denyButton.disabled = false;
    domCache.cancelButton.disabled = false;
  }

  function getInput$1(instance) {
    var innerParams = privateProps.innerParams.get(instance || this);
    var domCache = privateProps.domCache.get(instance || this);

    if (!domCache) {
      return null;
    }

    return getInput(domCache.content, innerParams.input);
  }

  var fixScrollbar = function fixScrollbar() {
    // for queues, do not do this more than once
    if (states.previousBodyPadding !== null) {
      return;
    } // if the body has overflow


    if (document.body.scrollHeight > window.innerHeight) {
      // add padding so the content doesn't shift after removal of scrollbar
      states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
      document.body.style.paddingRight = "".concat(states.previousBodyPadding + measureScrollbar(), "px");
    }
  };
  var undoScrollbar = function undoScrollbar() {
    if (states.previousBodyPadding !== null) {
      document.body.style.paddingRight = "".concat(states.previousBodyPadding, "px");
      states.previousBodyPadding = null;
    }
  };

  /* istanbul ignore file */

  var iOSfix = function iOSfix() {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1;

    if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
      var offset = document.body.scrollTop;
      document.body.style.top = "".concat(offset * -1, "px");
      addClass(document.body, swalClasses.iosfix);
      lockBodyScroll();
      addBottomPaddingForTallPopups(); // #1948
    }
  };

  var addBottomPaddingForTallPopups = function addBottomPaddingForTallPopups() {
    var safari = !navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i);

    if (safari) {
      var bottomPanelHeight = 44;

      if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
        getContainer().style.paddingBottom = "".concat(bottomPanelHeight, "px");
      }
    }
  };

  var lockBodyScroll = function lockBodyScroll() {
    // #1246
    var container = getContainer();
    var preventTouchMove;

    container.ontouchstart = function (e) {
      preventTouchMove = shouldPreventTouchMove(e.target);
    };

    container.ontouchmove = function (e) {
      if (preventTouchMove) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
  };

  var shouldPreventTouchMove = function shouldPreventTouchMove(target) {
    var container = getContainer();

    if (target === container) {
      return true;
    }

    if (!isScrollable(container) && target.tagName !== 'INPUT' && // #1603
    !(isScrollable(getContent()) && // #1944
    getContent().contains(target))) {
      return true;
    }

    return false;
  };

  var undoIOSfix = function undoIOSfix() {
    if (hasClass(document.body, swalClasses.iosfix)) {
      var offset = parseInt(document.body.style.top, 10);
      removeClass(document.body, swalClasses.iosfix);
      document.body.style.top = '';
      document.body.scrollTop = offset * -1;
    }
  };

  /* istanbul ignore file */

  var isIE11 = function isIE11() {
    return !!window.MSInputMethodContext && !!document.documentMode;
  }; // Fix IE11 centering sweetalert2/issues/933


  var fixVerticalPositionIE = function fixVerticalPositionIE() {
    var container = getContainer();
    var popup = getPopup();
    container.style.removeProperty('align-items');

    if (popup.offsetTop < 0) {
      container.style.alignItems = 'flex-start';
    }
  };

  var IEfix = function IEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      fixVerticalPositionIE();
      window.addEventListener('resize', fixVerticalPositionIE);
    }
  };
  var undoIEfix = function undoIEfix() {
    if (typeof window !== 'undefined' && isIE11()) {
      window.removeEventListener('resize', fixVerticalPositionIE);
    }
  };

  // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
  // elements not within the active modal dialog will not be surfaced if a user opens a screen
  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

  var setAriaHidden = function setAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el === getContainer() || contains(el, getContainer())) {
        return;
      }

      if (el.hasAttribute('aria-hidden')) {
        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
      }

      el.setAttribute('aria-hidden', 'true');
    });
  };
  var unsetAriaHidden = function unsetAriaHidden() {
    var bodyChildren = toArray(document.body.children);
    bodyChildren.forEach(function (el) {
      if (el.hasAttribute('data-previous-aria-hidden')) {
        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
        el.removeAttribute('data-previous-aria-hidden');
      } else {
        el.removeAttribute('aria-hidden');
      }
    });
  };

  /**
   * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */
  var privateMethods = {
    swalPromiseResolve: new WeakMap()
  };

  /*
   * Instance method to close sweetAlert
   */

  function removePopupAndResetState(instance, container, isToast$$1, didClose) {
    if (isToast$$1) {
      triggerDidCloseAndDispose(instance, didClose);
    } else {
      restoreActiveElement().then(function () {
        return triggerDidCloseAndDispose(instance, didClose);
      });
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (container.parentNode && !document.body.getAttribute('data-swal2-queue-step')) {
      container.parentNode.removeChild(container);
    }

    if (isModal()) {
      undoScrollbar();
      undoIOSfix();
      undoIEfix();
      unsetAriaHidden();
    }

    removeBodyClasses();
  }

  function removeBodyClasses() {
    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
  }

  function close(resolveValue) {
    var popup = getPopup();

    if (!popup) {
      return;
    }

    resolveValue = prepareResolveValue(resolveValue);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
      return;
    }

    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
    removeClass(popup, innerParams.showClass.popup);
    addClass(popup, innerParams.hideClass.popup);
    var backdrop = getContainer();
    removeClass(backdrop, innerParams.showClass.backdrop);
    addClass(backdrop, innerParams.hideClass.backdrop);
    handlePopupAnimation(this, popup, innerParams); // Resolve Swal promise

    swalPromiseResolve(resolveValue);
  }

  var prepareResolveValue = function prepareResolveValue(resolveValue) {
    // When user calls Swal.close()
    if (typeof resolveValue === 'undefined') {
      return {
        isConfirmed: false,
        isDenied: false,
        isDismissed: true
      };
    }

    return _extends({
      isConfirmed: false,
      isDenied: false,
      isDismissed: false
    }, resolveValue);
  };

  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
    var container = getContainer(); // If animation is supported, animate

    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
    var onClose = innerParams.onClose,
        onAfterClose = innerParams.onAfterClose,
        willClose = innerParams.willClose,
        didClose = innerParams.didClose;
    runDidClose(popup, willClose, onClose);

    if (animationIsSupported) {
      animatePopup(instance, popup, container, didClose || onAfterClose);
    } else {
      // Otherwise, remove immediately
      removePopupAndResetState(instance, container, isToast(), didClose || onAfterClose);
    }
  };

  var runDidClose = function runDidClose(popup, willClose, onClose) {
    if (willClose !== null && typeof willClose === 'function') {
      willClose(popup);
    } else if (onClose !== null && typeof onClose === 'function') {
      onClose(popup); // @deprecated
    }
  };

  var animatePopup = function animatePopup(instance, popup, container, didClose) {
    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, isToast(), didClose);
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
    });
  };

  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
    setTimeout(function () {
      if (typeof didClose === 'function') {
        didClose();
      }

      instance._destroy();
    });
  };

  function setButtonsDisabled(instance, buttons, disabled) {
    var domCache = privateProps.domCache.get(instance);
    buttons.forEach(function (button) {
      domCache[button].disabled = disabled;
    });
  }

  function setInputDisabled(input, disabled) {
    if (!input) {
      return false;
    }

    if (input.type === 'radio') {
      var radiosContainer = input.parentNode.parentNode;
      var radios = radiosContainer.querySelectorAll('input');

      for (var i = 0; i < radios.length; i++) {
        radios[i].disabled = disabled;
      }
    } else {
      input.disabled = disabled;
    }
  }

  function enableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
  }
  function disableButtons() {
    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
  }
  function enableInput() {
    return setInputDisabled(this.getInput(), false);
  }
  function disableInput() {
    return setInputDisabled(this.getInput(), true);
  }

  function showValidationMessage(error) {
    var domCache = privateProps.domCache.get(this);
    setInnerHtml(domCache.validationMessage, error);
    var popupComputedStyle = window.getComputedStyle(domCache.popup);
    domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
    domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
    show(domCache.validationMessage);
    var input = this.getInput();

    if (input) {
      input.setAttribute('aria-invalid', true);
      input.setAttribute('aria-describedBy', swalClasses['validation-message']);
      focusInput(input);
      addClass(input, swalClasses.inputerror);
    }
  } // Hide block with validation message

  function resetValidationMessage$1() {
    var domCache = privateProps.domCache.get(this);

    if (domCache.validationMessage) {
      hide(domCache.validationMessage);
    }

    var input = this.getInput();

    if (input) {
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedBy');
      removeClass(input, swalClasses.inputerror);
    }
  }

  function getProgressSteps$1() {
    var domCache = privateProps.domCache.get(this);
    return domCache.progressSteps;
  }

  var Timer = /*#__PURE__*/function () {
    function Timer(callback, delay) {
      _classCallCheck(this, Timer);

      this.callback = callback;
      this.remaining = delay;
      this.running = false;
      this.start();
    }

    _createClass(Timer, [{
      key: "start",
      value: function start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }

        return this.remaining;
      }
    }, {
      key: "stop",
      value: function stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date() - this.started;
        }

        return this.remaining;
      }
    }, {
      key: "increase",
      value: function increase(n) {
        var running = this.running;

        if (running) {
          this.stop();
        }

        this.remaining += n;

        if (running) {
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "getTimerLeft",
      value: function getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }

        return this.remaining;
      }
    }, {
      key: "isRunning",
      value: function isRunning() {
        return this.running;
      }
    }]);

    return Timer;
  }();

  var defaultInputValidators = {
    email: function email(string, validationMessage) {
      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
    },
    url: function url(string, validationMessage) {
      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
      return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
    }
  };

  function setDefaultInputValidators(params) {
    // Use default `inputValidator` for supported input types if not provided
    if (!params.inputValidator) {
      Object.keys(defaultInputValidators).forEach(function (key) {
        if (params.input === key) {
          params.inputValidator = defaultInputValidators[key];
        }
      });
    }
  }

  function validateCustomTargetElement(params) {
    // Determine if the custom target element is valid
    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
      warn('Target parameter is not valid, defaulting to "body"');
      params.target = 'body';
    }
  }
  /**
   * Set type, text and actions on popup
   *
   * @param params
   * @returns {boolean}
   */


  function setParameters(params) {
    setDefaultInputValidators(params); // showLoaderOnConfirm && preConfirm

    if (params.showLoaderOnConfirm && !params.preConfirm) {
      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
    } // params.animation will be actually used in renderPopup.js
    // but in case when params.animation is a function, we need to call that function
    // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
    // inside the params.animation function


    params.animation = callIfFunction(params.animation);
    validateCustomTargetElement(params); // Replace newlines with <br> in title

    if (typeof params.title === 'string') {
      params.title = params.title.split('\n').join('<br />');
    }

    init(params);
  }

  var SHOW_CLASS_TIMEOUT = 10;
  /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param params
   */

  var openPopup = function openPopup(params) {
    var container = getContainer();
    var popup = getPopup();

    if (typeof params.willOpen === 'function') {
      params.willOpen(popup);
    } else if (typeof params.onBeforeOpen === 'function') {
      params.onBeforeOpen(popup); // @deprecated
    }

    var bodyStyles = window.getComputedStyle(document.body);
    var initialBodyOverflow = bodyStyles.overflowY;
    addClasses$1(container, popup, params); // scrolling is 'hidden' until animation is done, after that 'auto'

    setTimeout(function () {
      setScrollingVisibility(container, popup);
    }, SHOW_CLASS_TIMEOUT);

    if (isModal()) {
      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
      setAriaHidden();
    }

    if (!isToast() && !globalState.previousActiveElement) {
      globalState.previousActiveElement = document.activeElement;
    }

    runDidOpen(popup, params);
    removeClass(container, swalClasses['no-transition']);
  };

  var runDidOpen = function runDidOpen(popup, params) {
    if (typeof params.didOpen === 'function') {
      setTimeout(function () {
        return params.didOpen(popup);
      });
    } else if (typeof params.onOpen === 'function') {
      setTimeout(function () {
        return params.onOpen(popup);
      }); // @deprecated
    }
  };

  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
    var popup = getPopup();

    if (event.target !== popup) {
      return;
    }

    var container = getContainer();
    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
    container.style.overflowY = 'auto';
  };

  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
    if (animationEndEvent && hasCssAnimation(popup)) {
      container.style.overflowY = 'hidden';
      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
    } else {
      container.style.overflowY = 'auto';
    }
  };

  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
    iOSfix();
    IEfix();

    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
      fixScrollbar();
    } // sweetalert2/issues/1247


    setTimeout(function () {
      container.scrollTop = 0;
    });
  };

  var addClasses$1 = function addClasses(container, popup, params) {
    addClass(container, params.showClass.backdrop); // the workaround with setting/unsetting opacity is needed for #2019 and 2059

    popup.style.setProperty('opacity', '0', 'important');
    show(popup);
    setTimeout(function () {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup); // and remove the opacity workaround

      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062

    addClass([document.documentElement, document.body], swalClasses.shown);

    if (params.heightAuto && params.backdrop && !params.toast) {
      addClass([document.documentElement, document.body], swalClasses['height-auto']);
    }
  };

  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
    if (params.input === 'select' || params.input === 'radio') {
      handleInputOptions(instance, params);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(params.input) !== -1 && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
      handleInputValue(instance, params);
    }
  };
  var getInputValue = function getInputValue(instance, innerParams) {
    var input = instance.getInput();

    if (!input) {
      return null;
    }

    switch (innerParams.input) {
      case 'checkbox':
        return getCheckboxValue(input);

      case 'radio':
        return getRadioValue(input);

      case 'file':
        return getFileValue(input);

      default:
        return innerParams.inputAutoTrim ? input.value.trim() : input.value;
    }
  };

  var getCheckboxValue = function getCheckboxValue(input) {
    return input.checked ? 1 : 0;
  };

  var getRadioValue = function getRadioValue(input) {
    return input.checked ? input.value : null;
  };

  var getFileValue = function getFileValue(input) {
    return input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
  };

  var handleInputOptions = function handleInputOptions(instance, params) {
    var content = getContent();

    var processInputOptions = function processInputOptions(inputOptions) {
      return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
    };

    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
      showLoading();
      asPromise(params.inputOptions).then(function (inputOptions) {
        instance.hideLoading();
        processInputOptions(inputOptions);
      });
    } else if (_typeof(params.inputOptions) === 'object') {
      processInputOptions(params.inputOptions);
    } else {
      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
    }
  };

  var handleInputValue = function handleInputValue(instance, params) {
    var input = instance.getInput();
    hide(input);
    asPromise(params.inputValue).then(function (inputValue) {
      input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : "".concat(inputValue);
      show(input);
      input.focus();
      instance.hideLoading();
    })["catch"](function (err) {
      error("Error in inputValue promise: ".concat(err));
      input.value = '';
      show(input);
      input.focus();
      instance.hideLoading();
    });
  };

  var populateInputOptions = {
    select: function select(content, inputOptions, params) {
      var select = getChildByClass(content, swalClasses.select);

      var renderOption = function renderOption(parent, optionLabel, optionValue) {
        var option = document.createElement('option');
        option.value = optionValue;
        setInnerHtml(option, optionLabel);

        if (params.inputValue.toString() === optionValue.toString()) {
          option.selected = true;
        }

        parent.appendChild(option);
      };

      inputOptions.forEach(function (inputOption) {
        var optionValue = inputOption[0];
        var optionLabel = inputOption[1]; // <optgroup> spec:
        // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
        // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
        // check whether this is a <optgroup>

        if (Array.isArray(optionLabel)) {
          // if it is an array, then it is an <optgroup>
          var optgroup = document.createElement('optgroup');
          optgroup.label = optionValue;
          optgroup.disabled = false; // not configurable for now

          select.appendChild(optgroup);
          optionLabel.forEach(function (o) {
            return renderOption(optgroup, o[1], o[0]);
          });
        } else {
          // case of <option>
          renderOption(select, optionLabel, optionValue);
        }
      });
      select.focus();
    },
    radio: function radio(content, inputOptions, params) {
      var radio = getChildByClass(content, swalClasses.radio);
      inputOptions.forEach(function (inputOption) {
        var radioValue = inputOption[0];
        var radioLabel = inputOption[1];
        var radioInput = document.createElement('input');
        var radioLabelElement = document.createElement('label');
        radioInput.type = 'radio';
        radioInput.name = swalClasses.radio;
        radioInput.value = radioValue;

        if (params.inputValue.toString() === radioValue.toString()) {
          radioInput.checked = true;
        }

        var label = document.createElement('span');
        setInnerHtml(label, radioLabel);
        label.className = swalClasses.label;
        radioLabelElement.appendChild(radioInput);
        radioLabelElement.appendChild(label);
        radio.appendChild(radioLabelElement);
      });
      var radios = radio.querySelectorAll('input');

      if (radios.length) {
        radios[0].focus();
      }
    }
  };
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

  var formatInputOptions = function formatInputOptions(inputOptions) {
    var result = [];

    if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
      inputOptions.forEach(function (value, key) {
        var valueFormatted = value;

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    } else {
      Object.keys(inputOptions).forEach(function (key) {
        var valueFormatted = inputOptions[key];

        if (_typeof(valueFormatted) === 'object') {
          // case of <optgroup>
          valueFormatted = formatInputOptions(valueFormatted);
        }

        result.push([key, valueFormatted]);
      });
    }

    return result;
  };

  var handleConfirmButtonClick = function handleConfirmButtonClick(instance, innerParams) {
    instance.disableButtons();

    if (innerParams.input) {
      handleConfirmWithInput(instance, innerParams);
    } else {
      confirm(instance, innerParams, true);
    }
  };
  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
    instance.disableButtons(); // here we could add preDeny in future, if needed

    deny(instance);
  };
  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
    instance.disableButtons();
    dismissWith(DismissReason.cancel);
  };

  var handleConfirmWithInput = function handleConfirmWithInput(instance, innerParams) {
    var inputValue = getInputValue(instance, innerParams);

    if (innerParams.inputValidator) {
      instance.disableInput();
      var validationPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
      });
      validationPromise.then(function (validationMessage) {
        instance.enableButtons();
        instance.enableInput();

        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else {
          confirm(instance, innerParams, inputValue);
        }
      });
    } else if (!instance.getInput().checkValidity()) {
      instance.enableButtons();
      instance.showValidationMessage(innerParams.validationMessage);
    } else {
      confirm(instance, innerParams, inputValue);
    }
  };

  var deny = function deny(instance) {
    instance.closePopup({
      isDenied: true,
      value: false
    });
  };

  var succeedWith = function succeedWith(instance, value) {
    instance.closePopup({
      isConfirmed: true,
      value: value
    });
  };

  var confirm = function confirm(instance, innerParams, value) {
    if (innerParams.showLoaderOnConfirm) {
      showLoading(); // TODO: make showLoading an *instance* method
    }

    if (innerParams.preConfirm) {
      instance.resetValidationMessage();
      var preConfirmPromise = Promise.resolve().then(function () {
        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
      });
      preConfirmPromise.then(function (preConfirmValue) {
        if (isVisible(getValidationMessage()) || preConfirmValue === false) {
          instance.hideLoading();
        } else {
          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
        }
      });
    } else {
      succeedWith(instance, value);
    }
  };

  var addKeydownHandler = function addKeydownHandler(instance, globalState, innerParams, dismissWith) {
    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(instance, e, dismissWith);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }
  }; // Focus handling

  var setFocus = function setFocus(innerParams, index, increment) {
    var focusableElements = getFocusableElements(); // search for visible elements and select the next possible match

    for (var i = 0; i < focusableElements.length; i++) {
      index = index + increment; // rollover to first item

      if (index === focusableElements.length) {
        index = 0; // go to last item
      } else if (index === -1) {
        index = focusableElements.length - 1;
      }

      return focusableElements[index].focus();
    } // no visible focusable elements, focus the popup


    getPopup().focus();
  };
  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown', 'Right', 'Down' // IE11
  ];
  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp', 'Left', 'Up' // IE11
  ];
  var escKeys = ['Escape', 'Esc' // IE11
  ];

  var keydownHandler = function keydownHandler(instance, e, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.stopKeydownPropagation) {
      e.stopPropagation();
    } // ENTER


    if (e.key === 'Enter') {
      handleEnter(instance, e, innerParams); // TAB
    } else if (e.key === 'Tab') {
      handleTab(e, innerParams); // ARROWS - switch focus between buttons
    } else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).indexOf(e.key) !== -1) {
      handleArrows(e.key); // ESC
    } else if (escKeys.indexOf(e.key) !== -1) {
      handleEsc(e, innerParams, dismissWith);
    }
  };

  var handleEnter = function handleEnter(instance, e, innerParams) {
    // #720 #721
    if (e.isComposing) {
      return;
    }

    if (e.target && instance.getInput() && e.target.outerHTML === instance.getInput().outerHTML) {
      if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
        return; // do not submit
      }

      clickConfirm();
      e.preventDefault();
    }
  };

  var handleTab = function handleTab(e, innerParams) {
    var targetElement = e.target;
    var focusableElements = getFocusableElements();
    var btnIndex = -1;

    for (var i = 0; i < focusableElements.length; i++) {
      if (targetElement === focusableElements[i]) {
        btnIndex = i;
        break;
      }
    }

    if (!e.shiftKey) {
      // Cycle to the next button
      setFocus(innerParams, btnIndex, 1);
    } else {
      // Cycle to the prev button
      setFocus(innerParams, btnIndex, -1);
    }

    e.stopPropagation();
    e.preventDefault();
  };

  var handleArrows = function handleArrows(key) {
    var confirmButton = getConfirmButton();
    var denyButton = getDenyButton();
    var cancelButton = getCancelButton();

    if (!([confirmButton, denyButton, cancelButton].indexOf(document.activeElement) !== -1)) {
      return;
    }

    var sibling = arrowKeysNextButton.indexOf(key) !== -1 ? 'nextElementSibling' : 'previousElementSibling';
    var buttonToFocus = document.activeElement[sibling];

    if (buttonToFocus) {
      buttonToFocus.focus();
    }
  };

  var handleEsc = function handleEsc(e, innerParams, dismissWith) {
    if (callIfFunction(innerParams.allowEscapeKey)) {
      e.preventDefault();
      dismissWith(DismissReason.esc);
    }
  };

  var handlePopupClick = function handlePopupClick(instance, domCache, dismissWith) {
    var innerParams = privateProps.innerParams.get(instance);

    if (innerParams.toast) {
      handleToastClick(instance, domCache, dismissWith);
    } else {
      // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider
      handleModalMousedown(domCache); // Ignore click events that had mousedown on the container but mouseup on the popup

      handleContainerMousedown(domCache);
      handleModalClick(instance, domCache, dismissWith);
    }
  };

  var handleToastClick = function handleToastClick(instance, domCache, dismissWith) {
    // Closing toast by internal click
    domCache.popup.onclick = function () {
      var innerParams = privateProps.innerParams.get(instance);

      if (innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
        return;
      }

      dismissWith(DismissReason.close);
    };
  };

  var ignoreOutsideClick = false;

  var handleModalMousedown = function handleModalMousedown(domCache) {
    domCache.popup.onmousedown = function () {
      domCache.container.onmouseup = function (e) {
        domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
        // have any other direct children aside of the popup

        if (e.target === domCache.container) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleContainerMousedown = function handleContainerMousedown(domCache) {
    domCache.container.onmousedown = function () {
      domCache.popup.onmouseup = function (e) {
        domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
          ignoreOutsideClick = true;
        }
      };
    };
  };

  var handleModalClick = function handleModalClick(instance, domCache, dismissWith) {
    domCache.container.onclick = function (e) {
      var innerParams = privateProps.innerParams.get(instance);

      if (ignoreOutsideClick) {
        ignoreOutsideClick = false;
        return;
      }

      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
        dismissWith(DismissReason.backdrop);
      }
    };
  };

  function _main(userParams) {
    showWarningsForParams(userParams);

    if (globalState.currentInstance) {
      globalState.currentInstance._destroy();
    }

    globalState.currentInstance = this;
    var innerParams = prepareParams(userParams);
    setParameters(innerParams);
    Object.freeze(innerParams); // clear the previous timer

    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    } // clear the restore focus timeout


    clearTimeout(globalState.restoreFocusTimeout);
    var domCache = populateDomCache(this);
    render(this, innerParams);
    privateProps.innerParams.set(this, innerParams);
    return swalPromise(this, domCache, innerParams);
  }

  var prepareParams = function prepareParams(userParams) {
    var showClass = _extends({}, defaultParams.showClass, userParams.showClass);

    var hideClass = _extends({}, defaultParams.hideClass, userParams.hideClass);

    var params = _extends({}, defaultParams, userParams);

    params.showClass = showClass;
    params.hideClass = hideClass; // @deprecated

    if (userParams.animation === false) {
      params.showClass = {
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      };
      params.hideClass = {};
    }

    return params;
  };

  var swalPromise = function swalPromise(instance, domCache, innerParams) {
    return new Promise(function (resolve) {
      // functions to handle all closings/dismissals
      var dismissWith = function dismissWith(dismiss) {
        instance.closePopup({
          isDismissed: true,
          dismiss: dismiss
        });
      };

      privateMethods.swalPromiseResolve.set(instance, resolve);

      domCache.confirmButton.onclick = function () {
        return handleConfirmButtonClick(instance, innerParams);
      };

      domCache.denyButton.onclick = function () {
        return handleDenyButtonClick(instance);
      };

      domCache.cancelButton.onclick = function () {
        return handleCancelButtonClick(instance, dismissWith);
      };

      domCache.closeButton.onclick = function () {
        return dismissWith(DismissReason.close);
      };

      handlePopupClick(instance, domCache, dismissWith);
      addKeydownHandler(instance, globalState, innerParams, dismissWith);

      if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
        addClass(document.body, swalClasses['toast-column']);
      } else {
        removeClass(document.body, swalClasses['toast-column']);
      }

      handleInputOptionsAndValue(instance, innerParams);
      openPopup(innerParams);
      setupTimer(globalState, innerParams, dismissWith);
      initFocus(domCache, innerParams); // Scroll container to top on open (#1247, #1946)

      setTimeout(function () {
        domCache.container.scrollTop = 0;
      });
    });
  };

  var populateDomCache = function populateDomCache(instance) {
    var domCache = {
      popup: getPopup(),
      container: getContainer(),
      content: getContent(),
      actions: getActions(),
      confirmButton: getConfirmButton(),
      denyButton: getDenyButton(),
      cancelButton: getCancelButton(),
      loader: getLoader(),
      closeButton: getCloseButton(),
      validationMessage: getValidationMessage(),
      progressSteps: getProgressSteps()
    };
    privateProps.domCache.set(instance, domCache);
    return domCache;
  };

  var setupTimer = function setupTimer(globalState$$1, innerParams, dismissWith) {
    var timerProgressBar = getTimerProgressBar();
    hide(timerProgressBar);

    if (innerParams.timer) {
      globalState$$1.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState$$1.timeout;
      }, innerParams.timer);

      if (innerParams.timerProgressBar) {
        show(timerProgressBar);
        setTimeout(function () {
          if (globalState$$1.timeout.running) {
            // timer can be already stopped at this point
            animateTimerProgressBar(innerParams.timer);
          }
        });
      }
    }
  };

  var initFocus = function initFocus(domCache, innerParams) {
    if (innerParams.toast) {
      return;
    }

    if (!callIfFunction(innerParams.allowEnterKey)) {
      return blurActiveElement();
    }

    if (!focusButton(domCache, innerParams)) {
      setFocus(innerParams, -1, 1);
    }
  };

  var focusButton = function focusButton(domCache, innerParams) {
    if (innerParams.focusDeny && isVisible(domCache.denyButton)) {
      domCache.denyButton.focus();
      return true;
    }

    if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
      domCache.cancelButton.focus();
      return true;
    }

    if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
      domCache.confirmButton.focus();
      return true;
    }

    return false;
  };

  var blurActiveElement = function blurActiveElement() {
    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
  };

  /**
   * Updates popup parameters.
   */

  function update(params) {
    var popup = getPopup();
    var innerParams = privateProps.innerParams.get(this);

    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
      return warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
    }

    var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

    Object.keys(params).forEach(function (param) {
      if (Swal.isUpdatableParameter(param)) {
        validUpdatableParams[param] = params[param];
      } else {
        warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md"));
      }
    });

    var updatedParams = _extends({}, innerParams, validUpdatableParams);

    render(this, updatedParams);
    privateProps.innerParams.set(this, updatedParams);
    Object.defineProperties(this, {
      params: {
        value: _extends({}, this.params, params),
        writable: false,
        enumerable: true
      }
    });
  }

  function _destroy() {
    var domCache = privateProps.domCache.get(this);
    var innerParams = privateProps.innerParams.get(this);

    if (!innerParams) {
      return; // This instance has already been destroyed
    } // Check if there is another Swal closing


    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
      globalState.swalCloseEventFinishedCallback();
      delete globalState.swalCloseEventFinishedCallback;
    } // Check if there is a swal disposal defer timer


    if (globalState.deferDisposalTimer) {
      clearTimeout(globalState.deferDisposalTimer);
      delete globalState.deferDisposalTimer;
    }

    runDidDestroy(innerParams);
    disposeSwal(this);
  }

  var runDidDestroy = function runDidDestroy(innerParams) {
    if (typeof innerParams.didDestroy === 'function') {
      innerParams.didDestroy();
    } else if (typeof innerParams.onDestroy === 'function') {
      innerParams.onDestroy(); // @deprecated
    }
  };

  var disposeSwal = function disposeSwal(instance) {
    // Unset this.params so GC will dispose it (#1569)
    delete instance.params; // Unset globalState props so GC will dispose globalState (#1569)

    delete globalState.keydownHandler;
    delete globalState.keydownTarget; // Unset WeakMaps so GC will be able to dispose them (#1569)

    unsetWeakMaps(privateProps);
    unsetWeakMaps(privateMethods);
  };

  var unsetWeakMaps = function unsetWeakMaps(obj) {
    for (var i in obj) {
      obj[i] = new WeakMap();
    }
  };



  var instanceMethods = /*#__PURE__*/Object.freeze({
    hideLoading: hideLoading,
    disableLoading: hideLoading,
    getInput: getInput$1,
    close: close,
    closePopup: close,
    closeModal: close,
    closeToast: close,
    enableButtons: enableButtons,
    disableButtons: disableButtons,
    enableInput: enableInput,
    disableInput: disableInput,
    showValidationMessage: showValidationMessage,
    resetValidationMessage: resetValidationMessage$1,
    getProgressSteps: getProgressSteps$1,
    _main: _main,
    update: update,
    _destroy: _destroy
  });

  var currentInstance;

  var SweetAlert = /*#__PURE__*/function () {
    function SweetAlert() {
      _classCallCheck(this, SweetAlert);

      // Prevent run in Node env
      if (typeof window === 'undefined') {
        return;
      } // Check for the existence of Promise


      if (typeof Promise === 'undefined') {
        error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
      }

      currentInstance = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var outerParams = Object.freeze(this.constructor.argsToParams(args));
      Object.defineProperties(this, {
        params: {
          value: outerParams,
          writable: false,
          enumerable: true,
          configurable: true
        }
      });

      var promise = this._main(this.params);

      privateProps.promise.set(this, promise);
    } // `catch` cannot be the name of a module export, so we define our thenable methods here instead


    _createClass(SweetAlert, [{
      key: "then",
      value: function then(onFulfilled) {
        var promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
    }, {
      key: "finally",
      value: function _finally(onFinally) {
        var promise = privateProps.promise.get(this);
        return promise["finally"](onFinally);
      }
    }]);

    return SweetAlert;
  }(); // Assign instance methods from src/instanceMethods/*.js to prototype


  _extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


  _extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


  Object.keys(instanceMethods).forEach(function (key) {
    SweetAlert[key] = function () {
      if (currentInstance) {
        var _currentInstance;

        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
      }
    };
  });
  SweetAlert.DismissReason = DismissReason;
  SweetAlert.version = '10.3.5';

  var Swal = SweetAlert;
  Swal["default"] = Swal;

  return Swal;

}));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;background:#fff;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row;padding:0}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;padding:0;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;width:auto;height:auto;margin:0 .3125em;padding:0}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-no-transition{transition:none!important}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center;padding:0 1.8em}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0;padding:0 1.6em}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#3085d6 transparent #3085d6 transparent}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dd6b55;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;height:.25em;overflow:hidden;border-bottom-right-radius:.3125em;border-bottom-left-radius:.3125em}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;align-items:center;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close::-moz-focus-inner{border:0}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0 1.6em;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;border:.25em solid transparent;border-radius:50%;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}@-webkit-keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{transform:translateY(-.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@keyframes swal2-show{0%{transform:scale(.7)}45%{transform:scale(1.05)}80%{transform:scale(.95)}100%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(.4);opacity:0}50%{margin-top:1.625em;transform:scale(.4);opacity:0}80%{margin-top:-.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent!important}body.swal2-no-backdrop .swal2-container>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-container.swal2-top{top:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-top-left,body.swal2-no-backdrop .swal2-container.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-top-end,body.swal2-no-backdrop .swal2-container.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-container.swal2-center{top:50%;left:50%;transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-left,body.swal2-no-backdrop .swal2-container.swal2-center-start{top:50%;left:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-center-end,body.swal2-no-backdrop .swal2-container.swal2-center-right{top:50%;right:0;transform:translateY(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom{bottom:0;left:50%;transform:translateX(-50%)}body.swal2-no-backdrop .swal2-container.swal2-bottom-left,body.swal2-no-backdrop .swal2-container.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-container.swal2-bottom-end,body.swal2-no-backdrop .swal2-container.swal2-bottom-right{right:0;bottom:0}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}");

/***/ }),

/***/ "./src/app/pages/components/buttons/buttons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/components/buttons/buttons.component.ts ***!
  \***************************************************************/
/*! exports provided: ButtonsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsComponent", function() { return ButtonsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var ButtonsComponent = /** @class */ (function () {
    function ButtonsComponent() {
        this.page = 2;
        this.page1 = 3;
    }
    ButtonsComponent.prototype.ngOnInit = function () { };
    ButtonsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-buttons",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./buttons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/buttons/buttons.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/components.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/components/components.module.ts ***!
  \*******************************************************/
/*! exports provided: ComponentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsPageModule", function() { return ComponentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/progressbar/fesm5/ngx-bootstrap-progressbar.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm5/ngx-bootstrap-pagination.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/collapse/fesm5/ngx-bootstrap-collapse.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/alert/fesm5/ngx-bootstrap-alert.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/tabs/fesm5/ngx-bootstrap-tabs.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/pages/components/buttons/buttons.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/pages/components/panels/panels.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/pages/components/grid/grid.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/pages/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/pages/components/notifications/notifications.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/pages/components/icons/icons.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/components/typography/typography.component.ts");
/* harmony import */ var _components_routing__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components.routing */ "./src/app/pages/components/components.routing.ts");





















var ComponentsPageModule = /** @class */ (function () {
    function ComponentsPageModule() {
    }
    ComponentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_components_routing__WEBPACK_IMPORTED_MODULE_20__["ComponentsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_5__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_6__["ProgressbarModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_9__["CollapseModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_12__["TabsModule"].forRoot(),
                ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot(),
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_11__["ModalModule"].forRoot()
            ],
            declarations: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ButtonsComponent"],
                _panels_panels_component__WEBPACK_IMPORTED_MODULE_14__["PanelsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"],
                _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_16__["SweetalertComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_18__["IconsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_19__["TypographyComponent"]
            ],
            exports: [
                _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_13__["ButtonsComponent"],
                _panels_panels_component__WEBPACK_IMPORTED_MODULE_14__["PanelsComponent"],
                _grid_grid_component__WEBPACK_IMPORTED_MODULE_15__["GridComponent"],
                _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_16__["SweetalertComponent"],
                _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_17__["NotificationsComponent"],
                _icons_icons_component__WEBPACK_IMPORTED_MODULE_18__["IconsComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_19__["TypographyComponent"]
            ]
        })
    ], ComponentsPageModule);
    return ComponentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/components/components.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/components/components.routing.ts ***!
  \********************************************************/
/*! exports provided: ComponentsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsRoutes", function() { return ComponentsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons.component */ "./src/app/pages/components/buttons/buttons.component.ts");
/* harmony import */ var _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid/grid.component */ "./src/app/pages/components/grid/grid.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/pages/components/icons/icons.component.ts");
/* harmony import */ var _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notifications/notifications.component */ "./src/app/pages/components/notifications/notifications.component.ts");
/* harmony import */ var _panels_panels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panels/panels.component */ "./src/app/pages/components/panels/panels.component.ts");
/* harmony import */ var _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sweetalert/sweetalert.component */ "./src/app/pages/components/sweetalert/sweetalert.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/pages/components/typography/typography.component.ts");








var ComponentsRoutes = [
    {
        path: "",
        children: [
            {
                path: "buttons",
                component: _buttons_buttons_component__WEBPACK_IMPORTED_MODULE_1__["ButtonsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "grid",
                component: _grid_grid_component__WEBPACK_IMPORTED_MODULE_2__["GridComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "icons",
                component: _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "notifications",
                component: _notifications_notifications_component__WEBPACK_IMPORTED_MODULE_4__["NotificationsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "panels",
                component: _panels_panels_component__WEBPACK_IMPORTED_MODULE_5__["PanelsComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "sweet-alert",
                component: _sweetalert_sweetalert_component__WEBPACK_IMPORTED_MODULE_6__["SweetalertComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "typography",
                component: _typography_typography_component__WEBPACK_IMPORTED_MODULE_7__["TypographyComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/pages/components/grid/grid.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/components/grid/grid.component.ts ***!
  \*********************************************************/
/*! exports provided: GridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridComponent", function() { return GridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var GridComponent = /** @class */ (function () {
    function GridComponent() {
    }
    GridComponent.prototype.ngOnInit = function () { };
    GridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-grid",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/grid/grid.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GridComponent);
    return GridComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/icons/icons.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/components/icons/icons.component.ts ***!
  \***********************************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var IconsComponent = /** @class */ (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () { };
    IconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-icons",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./icons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/icons/icons.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/notifications/notifications.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/components/notifications/notifications.component.ts ***!
  \***************************************************************************/
/*! exports provided: NotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsComponent", function() { return NotificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm5/ngx-toastr.js");



var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(toastr) {
        this.toastr = toastr;
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var color = Math.floor(Math.random() * 5 + 1);
        switch (color) {
            case 1:
                this.toastr.info('<span class=" et-icons icon-bell-55"></span> Welcome to <b>Black Dashboard PRO Angular</b> - a beautiful premium admin for every web developer.', "", {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-info alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 2:
                this.toastr.success('<span class=" et-icons icon-bell-55"></span> Welcome to <b>Black Dashboard PRO Angular</b> - a beautiful notification for every web developer.', "", {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-success alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 3:
                this.toastr.warning('<span class=" et-icons icon-bell-55"></span> Welcome to <b>Black Dashboard PRO Angular</b> - a beautiful notification for every web developer.', "", {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-warning alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 4:
                this.toastr.error('<span class=" et-icons icon-bell-55"></span> Welcome to <b>Black Dashboard PRO Angular</b> - a beautiful notification for every web developer.', "", {
                    timeOut: 8000,
                    enableHtml: true,
                    closeButton: true,
                    toastClass: "alert alert-danger alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            case 5:
                this.toastr.show('<span class=" et-icons icon-bell-55"></span> Welcome to <b>Black Dashboard PRO Angular</b> - a beautiful notification for every web developer.', "", {
                    timeOut: 8000,
                    closeButton: true,
                    enableHtml: true,
                    toastClass: "alert alert-primary alert-with-icon",
                    positionClass: "toast-" + from + "-" + align
                });
                break;
            default:
                break;
        }
    };
    NotificationsComponent.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
    ]; };
    NotificationsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-notifications",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notifications.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/notifications/notifications.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/panels/panels.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/components/panels/panels.component.ts ***!
  \*************************************************************/
/*! exports provided: PanelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelsComponent", function() { return PanelsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PanelsComponent = /** @class */ (function () {
    function PanelsComponent() {
        this.collapseOne = true;
        this.collapseThree = true;
        this.collapseTwo = true;
    }
    PanelsComponent.prototype.ngOnInit = function () { };
    PanelsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-panels",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./panels.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/panels/panels.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PanelsComponent);
    return PanelsComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/sweetalert/sweetalert.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/sweetalert/sweetalert.component.ts ***!
  \*********************************************************************/
/*! exports provided: SweetalertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetalertComponent", function() { return SweetalertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);



var SweetalertComponent = /** @class */ (function () {
    function SweetalertComponent() {
    }
    SweetalertComponent.prototype.showSwal = function (type) {
        if (type == "basic") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Here's a message!",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success"
                }
            });
        }
        else if (type == "title-and-text") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Here's a message!",
                text: "It's pretty, isn't it?",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-info"
                }
            });
        }
        else if (type == "success-message") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Good job!",
                text: "You clicked the button!",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success",
                },
                icon: "success"
            });
        }
        else if (type == "warning-message-and-confirmation") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a
                .fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                customClass: {
                    cancelButton: "btn btn-danger",
                    confirmButton: "btn btn-success mr-1",
                },
                confirmButtonText: "Yes, delete it!",
                buttonsStyling: false
            })
                .then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                        customClass: {
                            confirmButton: "btn btn-success",
                        },
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == "warning-message-and-cancel") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a
                .fire({
                title: "Are you sure?",
                text: "You will not be able to recover this imaginary file!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, keep it",
                customClass: {
                    confirmButton: "btn btn-success mr-1",
                    cancelButton: "btn btn-danger",
                },
                buttonsStyling: false
            })
                .then(function (result) {
                if (result.value) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Deleted!",
                        text: "Your imaginary file has been deleted.",
                        icon: "success",
                        customClass: {
                            confirmButton: "btn btn-success",
                        },
                        buttonsStyling: false
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn btn-info",
                        },
                        buttonsStyling: false
                    });
                }
            });
        }
        else if (type == "custom-html") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "HTML example",
                buttonsStyling: false,
                customClass: {
                    confirmButton: "btn btn-success mr-1",
                },
                html: "You can use <b>bold text</b>, " +
                    '<a href="https://github.com">links</a> ' +
                    "and other HTML tags"
            });
        }
        else if (type == "auto-close") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Auto close alert!",
                text: "I will close in 2 seconds.",
                timer: 2000,
                showConfirmButton: false
            });
        }
        else if (type == "input-field") {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a
                .fire({
                title: "Input something",
                html: '<div class="form-group">' +
                    '<input id="input-field" type="text" class="form-control" />' +
                    "</div>",
                showCancelButton: true,
                customClass: {
                    confirmButton: "btn btn-success mr-1",
                    cancelButton: "btn btn-danger",
                },
                buttonsStyling: false
            })
                .then(function (result) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    icon: "success",
                    html: "You entered: <strong>" +
                        document.getElementById("input-field")
                            .value +
                        "</strong>",
                    customClass: {
                        confirmButton: "btn btn-success",
                    },
                    buttonsStyling: false
                });
            });
        }
    };
    SweetalertComponent.prototype.ngOnInit = function () { };
    SweetalertComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-sweetalert",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sweetalert.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/sweetalert/sweetalert.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], SweetalertComponent);
    return SweetalertComponent;
}());



/***/ }),

/***/ "./src/app/pages/components/typography/typography.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/components/typography/typography.component.ts ***!
  \*********************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-typography",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/components/typography/typography.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-components-components-module.js.map