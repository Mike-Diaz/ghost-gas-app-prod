(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list cols=\"1\" rowHeight=\"fit\">\n  <mat-grid-tile-header><app-header></app-header></mat-grid-tile-header>\n  <mat-accordion class=\"user-dashboard\">\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-icon>local_gas_station-24px</mat-icon>\n        <mat-panel-title>Fuel Up</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-vehicle-fuel-up></app-vehicle-fuel-up>\n\n    </mat-expansion-panel>\n    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-icon>show_chart-24px</mat-icon>\n        <mat-panel-title>Metrics View</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-vehicle-view></app-vehicle-view>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-icon>edit-24px</mat-icon>\n        <mat-panel-title>Vehicle Add/Edit</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-vehicle-add></app-vehicle-add>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-icon>apartment-24px</mat-icon>\n        <mat-panel-title>Organization Add/Edit</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-organization-table></app-organization-table>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\n      <mat-expansion-panel-header>\n        <mat-icon>face-24px</mat-icon>\n        <mat-panel-title>User Add/Edit</mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-user-table></app-user-table>\n    </mat-expansion-panel>\n\n  </mat-accordion>\n</mat-grid-list>\n\n<!-- <app-footer class=\"footer\"></app-footer> TODO: figure out how to make footer stick to bottom of page -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Login with Google</h2>\n\n<a href=\"/auth/google\">Sign In</a>\n<a href=\"/logout\">Sign out</a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-search-form/organization-search-form.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-search-form/organization-search-form.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <mat-form-field>\n      <input type=\"search\" placeholder=\"Search for an Organization...\" matInput [formControl]=\"searchControl\"\n             [matAutocomplete]=\"autoSearch\">\n      <button mat-button *ngIf=\"searchControl.value.length\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n        <mat-icon>close</mat-icon>\n      </button>\n      <mat-autocomplete #autoSearch=\"matAutocomplete\" (optionSelected)=\"selectOrganization($event)\"\n                        [displayWith]=\"searchDisplay\">\n        <mat-option *ngFor=\"let option of filteredSearchOptions | async\" [value]=\"option\">\n          {{option.organizationId}} - {{option.name}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-table/organization-table.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-table/organization-table.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add new Organization using the form below or search for an Organization ID to edit:</p>\n<app-organization-search-form #organizationSearchForm [(selectedOrganization)]=\"selectedOrganization\"></app-organization-search-form>\n\n<div *ngIf=\"selectedOrganization._id\">\n    <p>Editing Organization ID: {{selectedOrganization._id}}&nbsp;&nbsp;<button mat-raised-button (click)=\"resetForm()\">Cancel</button></p>\n  </div>\n  \n  <br>\n  \n  <form class=\"organization-add-container\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input type=\"number\" name=\"organizationId\" ngModel required matInput placeholder=\"Organization ID\"\n             [(ngModel)]=\"selectedOrganization.organizationId\">\n    </mat-form-field>\n  \n    <mat-divider></mat-divider>\n  \n    <mat-form-field>\n      <input name=\"name\" ngModel required matInput placeholder=\"Name\" [(ngModel)]=\"selectedOrganization.name\">\n    </mat-form-field>\n  \n    <mat-divider></mat-divider>\n  \n    <mat-form-field>\n      <input name=\"address\" ngModel required matInput placeholder=\"Address\" [(ngModel)]=\"selectedOrganization.address\">\n    </mat-form-field>\n  \n    <mat-divider></mat-divider>\n  \n    <mat-form-field>\n      <input name=\"phone\" ngModel required matInput placeholder=\"Phone\" [(ngModel)]=\"selectedOrganization.phone\">\n    </mat-form-field>\n  \n    <mat-divider></mat-divider>\n  \n    <button mat-raised-button type=\"submit\">\n      <mat-icon aria-hidden=\"false\" aria-label=\"Add Organization Information\">save-24px</mat-icon>\n    </button>\n  </form>\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-search-form/user-search-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-search-form/user-search-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <mat-form-field>\n      <input type=\"search\" placeholder=\"Search for a User...\" matInput [formControl]=\"searchControl\"\n             [matAutocomplete]=\"autoSearch\">\n      <button mat-button *ngIf=\"searchControl.value.length\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n        <mat-icon>close</mat-icon>\n      </button>\n      <mat-autocomplete #autoSearch=\"matAutocomplete\" (optionSelected)=\"selectUser($event)\"\n                        [displayWith]=\"searchDisplay\">\n        <mat-option *ngFor=\"let option of filteredSearchOptions | async\" [value]=\"option\">\n          {{option.userId}} - {{option.name}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-table/user-table.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-table/user-table.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add new User using the form below or search for a User ID to edit:</p>\n<app-user-search-form #userSearchForm [(selectedUser)]=\"selectedUser\"></app-user-search-form>\n\n<div *ngIf=\"selectedUser._id\">\n    <p>Editing User ID: {{selectedUser._id}}&nbsp;&nbsp;<button mat-raised-button (click)=\"resetForm()\">Cancel</button>\n    </p>\n</div>\n\n<br>\n\n<form class=\"user-add-container\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n\n    <mat-form-field>\n        <input type=\"number\" name=\"userId\" ngModel required matInput placeholder=\"User ID\"\n            [(ngModel)]=\"selectedUser.userId\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <app-organization-search-form #organizationSearchForm ngDefaultControl matInput required name=\"organizationId\"\n        [(ngModel)]=\"selectedUser.organizationId\">\n    </app-organization-search-form>\n    <p>Organization ID: {{selectedUser.organizationId}}</p>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"role\" ngModel required matInput placeholder=\"Role\" [(ngModel)]=\"selectedUser.role\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"userId\" ngModel required matInput placeholder=\"User ID\" [(ngModel)]=\"selectedUser.userId\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"name\" ngModel required matInput placeholder=\"Name\" [(ngModel)]=\"selectedUser.name\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"displayName\" ngModel required matInput placeholder=\"Display Name\"\n            [(ngModel)]=\"selectedUser.displayName\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"birthday\" ngModel required matInput placeholder=\"Birthday\" [(ngModel)]=\"selectedUser.birthday\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"relationship\" ngModel required matInput placeholder=\"Relationship\"\n            [(ngModel)]=\"selectedUser.relationship\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"language\" ngModel required matInput placeholder=\"Language\" [(ngModel)]=\"selectedUser.language\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"emails\" ngModel required matInput placeholder=\"Emails\" [(ngModel)]=\"selectedUser.emails\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"gender\" ngModel required matInput placeholder=\"Gender\" [(ngModel)]=\"selectedUser.gender\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"isPerson\" ngModel required matInput placeholder=\"isPerson\" [(ngModel)]=\"selectedUser.isPerson\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"isPlusUser\" ngModel required matInput placeholder=\"isPlusUser\"\n            [(ngModel)]=\"selectedUser.isPlusUser\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"picture\" ngModel required matInput placeholder=\"picture\" [(ngModel)]=\"selectedUser.picture\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"coverPhoto\" ngModel required matInput placeholder=\"coverPhoto\"\n            [(ngModel)]=\"selectedUser.coverPhoto\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n        <input name=\"placesLived\" ngModel required matInput placeholder=\"placesLived\"\n            [(ngModel)]=\"selectedUser.placesLived\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <button mat-raised-button type=\"submit\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"Add Organization Information\">save-24px</mat-icon>\n    </button>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-add/vehicle-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-add/vehicle-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Add new vehicle using the form below or search for a vehicle number to edit:</p>\n<app-vehicle-search-form #vehicleSearchForm [(selectedVehicle)]=\"selectedVehicle\"></app-vehicle-search-form>\n\n<div *ngIf=\"selectedVehicle._id\">\n  <p>Editing vehicle ID: {{selectedVehicle._id}}&nbsp;&nbsp;<button mat-raised-button (click)=\"resetForm()\">Cancel</button></p>\n</div>\n\n<br>\n\n<form class=\"vehicle-add-container\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-form-field>\n    <input type=\"number\" name=\"vehicleNum\" ngModel required matInput placeholder=\"Vehicle Number\"\n           [(ngModel)]=\"selectedVehicle.vehicleNum\">\n  </mat-form-field>\n\n  <mat-divider></mat-divider>\n\n  <mat-form-field>\n    <input name=\"make\" ngModel required matInput placeholder=\"Make\" [(ngModel)]=\"selectedVehicle.make\">\n  </mat-form-field>\n\n  <mat-divider></mat-divider>\n\n  <mat-form-field>\n    <input name=\"model\" ngModel required matInput placeholder=\"Model\" [(ngModel)]=\"selectedVehicle.model\">\n  </mat-form-field>\n\n  <mat-divider></mat-divider>\n\n  <mat-form-field>\n    <input name=\"year\" ngModel required matInput placeholder=\"Year\" [(ngModel)]=\"selectedVehicle.year\">\n  </mat-form-field>\n\n  <mat-divider></mat-divider>\n\n  <mat-form-field>\n    <input name=\"vin\" ngModel matInput placeholder=\"VIN\" [(ngModel)]=\"selectedVehicle.vin\">\n  </mat-form-field>\n\n  <mat-divider></mat-divider>\n\n  <button mat-raised-button type=\"submit\">\n    <mat-icon aria-hidden=\"false\" aria-label=\"Add Vehicle Information\">save-24px</mat-icon>\n  </button>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>Search for a vehicle number to add a fuel-up to:</p>\n<app-vehicle-search-form #vehicleSearchForm [(selectedVehicle)]=\"selectedVehicle\"></app-vehicle-search-form>\n\n<br>\n\n<div *ngIf=\"selectedVehicle._id\">\n  <p>Selected vehicle ID: {{selectedVehicle._id}}&nbsp;&nbsp;<button mat-raised-button (click)=\"resetForm()\">Cancel</button>\n  </p>\n\n  <form class=\"vehicle-fuel-up-container\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input name=\"fuelUpDate\" ngModel matInput placeholder=\"Fuel-up date\" [matDatepicker]=\"fuelUpDatePicker\">\n      <mat-datepicker-toggle matSuffix [for]=\"fuelUpDatePicker\"></mat-datepicker-toggle>\n      <mat-datepicker #fuelUpDatePicker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n      <input name=\"miles\" ngModel matInput placeholder=\"Miles traveled\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n      <input name=\"gallons\" ngModel matInput placeholder=\"Gallons\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <mat-form-field>\n      <input name=\"totalCost\" ngModel matInput placeholder=\"Total cost\">\n    </mat-form-field>\n\n    <mat-divider></mat-divider>\n\n    <button mat-raised-button>\n      <mat-icon aria-hidden=\"false\" aria-label=\"Save Fuel-Up\">save-24px</mat-icon>\n    </button>\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-metrics/vehicle-metrics.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-metrics/vehicle-metrics.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"selectedVehicle._id\">\n  <h2>Metrics</h2>\n\n  <table mat-table [dataSource]=\"fuelUps\"\n         class=\"mat-elevation-z8 vehicle-mileage-log\">\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                      [checked]=\"selection.hasValue() && isAllSelected()\"\n                      [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </th>\n      <td mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                      (change)=\"$event ? selection.toggle(row) : null\"\n                      [checked]=\"selection.isSelected(row)\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"fuelUpDate\">\n      <th mat-header-cell *matHeaderCellDef> Fuel-Up Date</th>\n      <td mat-cell *matCellDef=\"let entry\"> {{entry.fuelUpDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"miles\">\n      <th mat-header-cell *matHeaderCellDef> Miles</th>\n      <td mat-cell *matCellDef=\"let entry\"> {{entry.miles}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"gallons\">\n      <th mat-header-cell *matHeaderCellDef> Gallons</th>\n      <td mat-cell *matCellDef=\"let entry\"> {{entry.gallons}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"calc_mpg\">\n      <th mat-header-cell *matHeaderCellDef> MPG</th>\n      <td mat-cell *matCellDef=\"let entry\"> {{entry.miles / entry.gallons}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"totalCost\">\n      <th mat-header-cell *matHeaderCellDef> Total Cost Per Gallon</th>\n      <td mat-cell *matCellDef=\"let entry\"> {{entry.totalCost}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedFuelUpCols\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedFuelUpCols;\"></tr>\n  </table>\n\n  <div id=\"selection-actions\" *ngIf=\"selection.selected.length > 0\">\n    <button mat-raised-button (click)=\"deleteSelectedFuelUps()\">Deleted Selected Fuel-Ups</button>\n  </div>\n\n  <div id=\"vehicle-metrics-totals\">\n    <h3>Totals</h3>\n    <ul>\n      <li><strong>Mileage:</strong> {{getTotalFuelUpMileage()}}</li>\n      <li><strong>Average MPG:</strong> {{getAverageFuelUpMpg()}}</li>\n      <li><strong>Total cost:</strong> {{getTotalFuelUpCost()}}</li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-search-form/vehicle-search-form.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-search-form/vehicle-search-form.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n  <mat-form-field>\n    <input type=\"search\" placeholder=\"Search for a vehicle number...\" matInput [formControl]=\"searchControl\"\n           [matAutocomplete]=\"autoSearch\">\n    <button mat-button *ngIf=\"searchControl.value.length\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"clearSearch()\">\n      <mat-icon>close</mat-icon>\n    </button>\n    <mat-autocomplete #autoSearch=\"matAutocomplete\" (optionSelected)=\"selectVehicle($event)\"\n                      [displayWith]=\"searchDisplay\">\n      <mat-option *ngFor=\"let option of filteredSearchOptions | async\" [value]=\"option\">\n        {{option.vehicleNum}} - {{option.make}} {{option.model}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-view/vehicle-view.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-view/vehicle-view.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-vehicle-search-form [(selectedVehicle)]=\"selectedVehicle\"></app-vehicle-search-form>\n\n<div *ngIf=\"selectedVehicle !== null\">\n    <button mat-raised-button color=\"primary\" (click)=\"refreshData()\">Refresh Data</button>\n\n    <h2>{{selectedVehicle.vehicleNum}} - {{selectedVehicle.make}} {{selectedVehicle.model}}</h2>\n\n    <ul id=\"vehicle-info\">\n      <li><strong>Vehicle Number:</strong> {{selectedVehicle.vehicleNum}}</li>\n      <li><strong>Make:</strong> {{selectedVehicle.make}}</li>\n      <li><strong>Model:</strong> {{selectedVehicle.model}}</li>\n      <li><strong>Year:</strong> {{selectedVehicle.year}}</li>\n      <li><strong>VIN:</strong> {{selectedVehicle.vin}}</li>\n    </ul>\n\n  <br>\n  <mat-divider></mat-divider>\n\n  <app-vehicle-metrics [selectedVehicle]=\"selectedVehicle\"></app-vehicle-metrics>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" flex=\"1\"></mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" flex=\"1\"><img src=\"../../../assets/gasTracker.png\" alt=\"Logo\" style=\"width: 200px; height: 43px;\" ></mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#content {\n  padding: 1rem;\n}\n\n#footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZveC9HaXQvZ2hvc3QtZ2FzLWFwcC1kZXYvZ2hvc3QtZ2FzLXRyYWNrZXIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250ZW50IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG4jZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufSIsIiNjb250ZW50IHtcbiAgcGFkZGluZzogMXJlbTtcbn1cblxuI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ghost-gas-tracker';
        this.step = 0;
    }
    setStep(index) {
        this.step = index;
    }
    nextStep() {
        this.step++;
    }
    prevStep() {
        this.step--;
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _components_vehicle_fuel_up_vehicle_fuel_up_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/vehicle-fuel-up/vehicle-fuel-up.component */ "./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.ts");
/* harmony import */ var _components_vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/vehicle-view/vehicle-view.component */ "./src/app/components/vehicle-view/vehicle-view.component.ts");
/* harmony import */ var _components_vehicle_add_vehicle_add_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/vehicle-add/vehicle-add.component */ "./src/app/components/vehicle-add/vehicle-add.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _components_vehicle_search_form_vehicle_search_form_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/vehicle-search-form/vehicle-search-form.component */ "./src/app/components/vehicle-search-form/vehicle-search-form.component.ts");
/* harmony import */ var _components_vehicle_metrics_vehicle_metrics_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/vehicle-metrics/vehicle-metrics.component */ "./src/app/components/vehicle-metrics/vehicle-metrics.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/user-table/user-table.component */ "./src/app/components/user-table/user-table.component.ts");
/* harmony import */ var _components_organization_table_organization_table_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/organization-table/organization-table.component */ "./src/app/components/organization-table/organization-table.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _components_organization_search_form_organization_search_form_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/organization-search-form/organization-search-form.component */ "./src/app/components/organization-search-form/organization-search-form.component.ts");
/* harmony import */ var _components_user_search_form_user_search_form_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/user-search-form/user-search-form.component */ "./src/app/components/user-search-form/user-search-form.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _layout_header_header_component__WEBPACK_IMPORTED_MODULE_17__["HeaderComponent"],
            _components_vehicle_view_vehicle_view_component__WEBPACK_IMPORTED_MODULE_19__["VehicleViewComponent"],
            _components_vehicle_fuel_up_vehicle_fuel_up_component__WEBPACK_IMPORTED_MODULE_18__["VehicleFuelUpComponent"],
            _components_vehicle_add_vehicle_add_component__WEBPACK_IMPORTED_MODULE_20__["VehicleAddComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_21__["FooterComponent"],
            _components_vehicle_search_form_vehicle_search_form_component__WEBPACK_IMPORTED_MODULE_22__["VehicleSearchFormComponent"],
            _components_vehicle_metrics_vehicle_metrics_component__WEBPACK_IMPORTED_MODULE_23__["VehicleMetricsComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
            _components_user_table_user_table_component__WEBPACK_IMPORTED_MODULE_26__["UserTableComponent"],
            _components_organization_table_organization_table_component__WEBPACK_IMPORTED_MODULE_27__["OrganizationTableComponent"],
            _components_organization_search_form_organization_search_form_component__WEBPACK_IMPORTED_MODULE_31__["OrganizationSearchFormComponent"],
            _components_user_search_form_user_search_form_component__WEBPACK_IMPORTED_MODULE_32__["UserSearchFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__["MatDatepickerModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_30__["MatCheckboxModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_33__["ToastrModule"].forRoot()
        ],
        providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_34__["APP_BASE_HREF"], useValue: '/' }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
        function onSignIn(googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/components/organization-search-form/organization-search-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/organization-search-form/organization-search-form.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uLXNlYXJjaC1mb3JtL29yZ2FuaXphdGlvbi1zZWFyY2gtZm9ybS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/organization-search-form/organization-search-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/organization-search-form/organization-search-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: OrganizationSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationSearchFormComponent", function() { return OrganizationSearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_orgStore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/orgStore.service */ "./src/app/services/orgStore.service.ts");





let OrganizationSearchFormComponent = class OrganizationSearchFormComponent {
    constructor(orgStoreService) {
        this.orgStoreService = orgStoreService;
        this.selectedOrganization = {};
        this.selectedOrganizationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchOptions = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        this.orgStoreService.searchOptions.subscribe(options => this.searchOptions = options);
        this.filteredSearchOptions = this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(searchInput => this._filterSearch(searchInput)));
    }
    _filterSearch(searchInput) {
        const filterValue = searchInput.length ? searchInput : '';
        return this.searchOptions.filter(option => option.organizationId ? option.organizationId.toString().includes(filterValue) : '');
    }
    searchDisplay(option) {
        return option.organizationId;
    }
    selectOrganization(event) {
        this.selectedOrganization = event.option.value;
        this.selectedOrganizationChange.emit(this.selectedOrganization);
    }
    clearSearch() {
        // Reset search form
        this.searchControl.setValue('');
        this.selectedOrganization = {};
        // Retrieve organization again
        this.orgStoreService.fetchOrganizationSearchOptions();
    }
};
OrganizationSearchFormComponent.ctorParameters = () => [
    { type: _services_orgStore_service__WEBPACK_IMPORTED_MODULE_4__["OrgStoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], OrganizationSearchFormComponent.prototype, "selectedOrganization", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], OrganizationSearchFormComponent.prototype, "selectedOrganizationChange", void 0);
OrganizationSearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organization-search-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organization-search-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-search-form/organization-search-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./organization-search-form.component.scss */ "./src/app/components/organization-search-form/organization-search-form.component.scss")).default]
    })
], OrganizationSearchFormComponent);



/***/ }),

/***/ "./src/app/components/organization-table/organization-table.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/organization-table/organization-table.component.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3JnYW5pemF0aW9uLXRhYmxlL29yZ2FuaXphdGlvbi10YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/organization-table/organization-table.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/organization-table/organization-table.component.ts ***!
  \*******************************************************************************/
/*! exports provided: OrganizationTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationTableComponent", function() { return OrganizationTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/organization.service */ "./src/app/services/organization.service.ts");



let OrganizationTableComponent = class OrganizationTableComponent {
    constructor(organizationService) {
        this.organizationService = organizationService;
        this.selectedOrganization = {};
    }
    ngOnInit() {
    }
    resetForm() {
        this.form.resetForm('');
        this.selectedOrganization = {};
        // Reset the search form
        this.organizationSearchForm.clearSearch();
    }
    onSubmit() {
        if (this.form.valid) {
            const saveOrganization = {
                organizationId: this.form.value.organizationId,
                name: this.form.value.name,
                address: this.form.value.address,
                phone: this.form.value.phone
            };
            if (this.selectedOrganization._id) {
                // Editing
                saveOrganization._id = this.selectedOrganization._id;
                this.organizationService.update(saveOrganization).subscribe((result) => {
                    console.log('Organization updated!');
                });
            }
            else {
                // New
                // We must call subscribe() for new() to be executed
                this.organizationService.new(saveOrganization).subscribe((result) => {
                    console.log('Organization created!');
                });
            }
            this.resetForm();
        }
    }
};
OrganizationTableComponent.ctorParameters = () => [
    { type: _services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('organizationSearchForm', { static: false })
], OrganizationTableComponent.prototype, "organizationSearchForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false })
], OrganizationTableComponent.prototype, "form", void 0);
OrganizationTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organization-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./organization-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/organization-table/organization-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./organization-table.component.scss */ "./src/app/components/organization-table/organization-table.component.scss")).default]
    })
], OrganizationTableComponent);



/***/ }),

/***/ "./src/app/components/user-search-form/user-search-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/user-search-form/user-search-form.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci1zZWFyY2gtZm9ybS91c2VyLXNlYXJjaC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user-search-form/user-search-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/user-search-form/user-search-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchFormComponent", function() { return UserSearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_userStore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/userStore.service */ "./src/app/services/userStore.service.ts");





let UserSearchFormComponent = class UserSearchFormComponent {
    constructor(userStoreService) {
        this.userStoreService = userStoreService;
        this.selectedUser = {};
        this.selectedUserChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchOptions = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        this.userStoreService.searchOptions.subscribe(options => this.searchOptions = options);
        this.filteredSearchOptions = this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(searchInput => this._filterSearch(searchInput)));
    }
    _filterSearch(searchInput) {
        const filterValue = searchInput.length ? searchInput : '';
        return this.searchOptions.filter(option => option.userId ? option.userId.toString().includes(filterValue) : '');
    }
    searchDisplay(option) {
        return option.userId;
    }
    selectUser(event) {
        this.selectedUser = event.option.value;
        this.selectedUserChange.emit(this.selectedUser);
    }
    clearSearch() {
        // Reset search form
        this.searchControl.setValue('');
        this.selectedUser = {};
        // Retrieve users again
        this.userStoreService.fetchUserSearchOptions();
    }
};
UserSearchFormComponent.ctorParameters = () => [
    { type: _services_userStore_service__WEBPACK_IMPORTED_MODULE_4__["UserStoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], UserSearchFormComponent.prototype, "selectedUser", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], UserSearchFormComponent.prototype, "selectedUserChange", void 0);
UserSearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-search-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-search-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-search-form/user-search-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-search-form.component.scss */ "./src/app/components/user-search-form/user-search-form.component.scss")).default]
    })
], UserSearchFormComponent);



/***/ }),

/***/ "./src/app/components/user-table/user-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci10YWJsZS91c2VyLXRhYmxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/user-table/user-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/user-table/user-table.component.ts ***!
  \***************************************************************/
/*! exports provided: UserTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTableComponent", function() { return UserTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");



let UserTableComponent = class UserTableComponent {
    constructor(userService) {
        this.userService = userService;
        this.selectedUser = {};
        this.selectedOrganization = {};
    }
    ngOnInit() {
    }
    resetForm() {
        this.form.resetForm('');
        this.selectedUser = {};
        this.form.resetForm('');
        this.selectedOrganization = {};
        // Reset the search form
        this.userSearchForm.clearSearch();
        this.organizationSearchForm.clearSearch();
    }
    onSubmit() {
        if (this.form.valid) {
            const saveUser = {
                userId: this.form.value.userId,
                organizationId: this.form.value.organizationId,
                role: this.form.value.role,
                name: this.form.value.name,
                displayName: this.form.value.displayName,
                birthday: this.form.value.birthday,
                relationship: this.form.value.relationship,
                language: this.form.value.language,
                emails: this.form.value.emails,
                gender: this.form.value.gender,
                isPerson: this.form.value.isPerson,
                isPlusUser: this.form.value.isPlusUser,
                picture: this.form.value.picture,
                coverPhoto: this.form.value.coverPhoto,
                placesLived: this.form.value.placesLived,
            };
            if (this.selectedUser._id) {
                // Editing
                saveUser._id = this.selectedUser._id;
                this.userService.update(saveUser).subscribe((result) => {
                    console.log('User updated!');
                });
            }
            else {
                // New
                // We must call subscribe() for new() to be executed
                this.userService.new(saveUser).subscribe((result) => {
                    console.log('User created!');
                });
            }
            this.resetForm();
        }
    }
};
UserTableComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userSearchForm', { static: false })
], UserTableComponent.prototype, "userSearchForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('organizationSearchForm', { static: false })
], UserTableComponent.prototype, "organizationSearchForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false })
], UserTableComponent.prototype, "form", void 0);
UserTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user-table/user-table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-table.component.scss */ "./src/app/components/user-table/user-table.component.scss")).default]
    })
], UserTableComponent);



/***/ }),

/***/ "./src/app/components/vehicle-add/vehicle-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/vehicle-add/vehicle-add.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS1hZGQvdmVoaWNsZS1hZGQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/vehicle-add/vehicle-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/vehicle-add/vehicle-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: VehicleAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleAddComponent", function() { return VehicleAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");



let VehicleAddComponent = class VehicleAddComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.selectedVehicle = {};
        this.lastSavedId = null; // store last added/updated for testing
    }
    ngOnInit() {
    }
    resetForm() {
        this.form.resetForm('');
        this.selectedVehicle = {};
        // Reset the search form
        this.vehicleSearchForm.clearSearch();
    }
    onSubmit() {
        if (this.form.valid) {
            const saveVehicle = {
                vehicleNum: this.form.value.vehicleNum,
                make: this.form.value.make,
                model: this.form.value.model,
                year: this.form.value.year,
                vin: this.form.value.vin,
                userId: "1" // TODO: retrieve userId (required length > 0)
            };
            if (this.selectedVehicle._id) {
                // Editing
                saveVehicle._id = this.selectedVehicle._id;
                this.vehicleService.update(saveVehicle).subscribe((result) => {
                    this.lastSavedId = result._id;
                    console.log('Vehicle updated! Id: ' + this.lastSavedId);
                });
            }
            else {
                // New
                // We must call subscribe() for new() to be executed
                this.vehicleService.new(saveVehicle).subscribe((result) => {
                    this.lastSavedId = result._id;
                    console.log('Vehicle created! Id: ' + this.lastSavedId);
                });
            }
            this.resetForm();
        }
    }
};
VehicleAddComponent.ctorParameters = () => [
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicleSearchForm', { static: false })
], VehicleAddComponent.prototype, "vehicleSearchForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false })
], VehicleAddComponent.prototype, "form", void 0);
VehicleAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-add/vehicle-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-add.component.scss */ "./src/app/components/vehicle-add/vehicle-add.component.scss")).default]
    })
], VehicleAddComponent);



/***/ }),

/***/ "./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS1mdWVsLXVwL3ZlaGljbGUtZnVlbC11cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.ts ***!
  \*************************************************************************/
/*! exports provided: VehicleFuelUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleFuelUpComponent", function() { return VehicleFuelUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_fuel_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fuel-up.service */ "./src/app/services/fuel-up.service.ts");



let VehicleFuelUpComponent = class VehicleFuelUpComponent {
    constructor(fuelUpService) {
        this.fuelUpService = fuelUpService;
        this.selectedVehicle = {};
    }
    resetForm() {
        this.form.resetForm('');
        this.selectedVehicle = {};
        // Reset the search form
        this.vehicleSearchForm.clearSearch();
    }
    onSubmit() {
        if (this.form.valid) {
            const saveFuelUp = {
                userId: "1",
                vehicleId: this.selectedVehicle._id,
                fuelUpDate: new Date(this.form.value.fuelUpDate),
                miles: Number(this.form.value.miles),
                gallons: Number(this.form.value.gallons),
                totalCost: Number(this.form.value.totalCost)
            };
            this.fuelUpService.new(saveFuelUp).subscribe((result) => {
                console.log('Fuel-up added!');
            });
            this.resetForm();
        }
    }
};
VehicleFuelUpComponent.ctorParameters = () => [
    { type: _services_fuel_up_service__WEBPACK_IMPORTED_MODULE_2__["FuelUpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('vehicleSearchForm', { static: false })
], VehicleFuelUpComponent.prototype, "vehicleSearchForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', { static: false })
], VehicleFuelUpComponent.prototype, "form", void 0);
VehicleFuelUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-fuel-up',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-fuel-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-fuel-up.component.scss */ "./src/app/components/vehicle-fuel-up/vehicle-fuel-up.component.scss")).default]
    })
], VehicleFuelUpComponent);



/***/ }),

/***/ "./src/app/components/vehicle-metrics/vehicle-metrics.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/vehicle-metrics/vehicle-metrics.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".vehicle-mileage-log {\n  width: 100%;\n  margin-top: 1rem;\n}\n\n.mat-column-select {\n  overflow: initial;\n}\n\n#selection-actions {\n  margin-top: 20px;\n}\n\n#vehicle-metrics-totals {\n  margin-top: 25px;\n}\n\n#vehicle-metrics-totals > ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZveC9HaXQvZ2hvc3QtZ2FzLWFwcC1kZXYvZ2hvc3QtZ2FzLXRyYWNrZXIvc3JjL2FwcC9jb21wb25lbnRzL3ZlaGljbGUtbWV0cmljcy92ZWhpY2xlLW1ldHJpY3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS1tZXRyaWNzL3ZlaGljbGUtbWV0cmljcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0UsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92ZWhpY2xlLW1ldHJpY3MvdmVoaWNsZS1tZXRyaWNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlaGljbGUtbWlsZWFnZS1sb2cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5tYXQtY29sdW1uLXNlbGVjdCB7XG4gIG92ZXJmbG93OiBpbml0aWFsO1xufVxuXG4jc2VsZWN0aW9uLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4jdmVoaWNsZS1tZXRyaWNzLXRvdGFscyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbiN2ZWhpY2xlLW1ldHJpY3MtdG90YWxzID4gdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG4iLCIudmVoaWNsZS1taWxlYWdlLWxvZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4ubWF0LWNvbHVtbi1zZWxlY3Qge1xuICBvdmVyZmxvdzogaW5pdGlhbDtcbn1cblxuI3NlbGVjdGlvbi1hY3Rpb25zIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuI3ZlaGljbGUtbWV0cmljcy10b3RhbHMge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4jdmVoaWNsZS1tZXRyaWNzLXRvdGFscyA+IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/vehicle-metrics/vehicle-metrics.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/vehicle-metrics/vehicle-metrics.component.ts ***!
  \*************************************************************************/
/*! exports provided: VehicleMetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleMetricsComponent", function() { return VehicleMetricsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_fuel_up_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fuel-up.service */ "./src/app/services/fuel-up.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm2015/collections.js");





let VehicleMetricsComponent = class VehicleMetricsComponent {
    constructor(fuelUpService) {
        this.fuelUpService = fuelUpService;
        this.selectedVehicle = {};
        this.fuelUps = null;
        this.displayedFuelUpCols = ['select', 'fuelUpDate', 'miles', 'gallons', 'calc_mpg', 'totalCost'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true);
    }
    ngOnInit() {
    }
    getFuelUps(vehicle) {
        // The fuel-ups are sorted by fuelUpDate ascending in the backend server.
        this.fuelUpService.getAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(items => items.filter(item => item.vehicleId === vehicle._id))).subscribe(result => this.fuelUps = result);
    }
    getTotalFuelUpMileage() {
        return this.fuelUps.reduce((sum, fuelUp) => sum += fuelUp.miles, 0);
    }
    getAverageFuelUpMpg() {
        return this.fuelUps.length > 0
            ? this.fuelUps.reduce((sumMpg, fuelUp) => sumMpg += fuelUp.miles / fuelUp.gallons, 0) / this.fuelUps.length
            : 0;
    }
    getTotalFuelUpCost() {
        return this.fuelUps.reduce((sumCost, fuelUp) => sumCost += fuelUp.gallons * fuelUp.totalCost, 0);
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.fuelUps.length;
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.fuelUps.forEach(row => this.selection.select(row));
    }
    deleteSelectedFuelUps() {
        if (this.selection.selected.length > 0) {
            this.selection.selected.forEach(fuelUp => {
                this.fuelUpService.delete(fuelUp).subscribe(result => console.log(result));
            });
            this.selection.clear();
            this.getFuelUps(this.selectedVehicle);
        }
    }
    ngOnChanges(changes) {
        if (changes.selectedVehicle.currentValue._id) {
            this.getFuelUps(changes.selectedVehicle.currentValue);
            console.log(this.fuelUps);
        }
        else {
            this.fuelUps = null;
        }
    }
};
VehicleMetricsComponent.ctorParameters = () => [
    { type: _services_fuel_up_service__WEBPACK_IMPORTED_MODULE_2__["FuelUpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VehicleMetricsComponent.prototype, "selectedVehicle", void 0);
VehicleMetricsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-metrics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-metrics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-metrics/vehicle-metrics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-metrics.component.scss */ "./src/app/components/vehicle-metrics/vehicle-metrics.component.scss")).default]
    })
], VehicleMetricsComponent);



/***/ }),

/***/ "./src/app/components/vehicle-search-form/vehicle-search-form.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/vehicle-search-form/vehicle-search-form.component.scss ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS1zZWFyY2gtZm9ybS92ZWhpY2xlLXNlYXJjaC1mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/vehicle-search-form/vehicle-search-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/vehicle-search-form/vehicle-search-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VehicleSearchFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleSearchFormComponent", function() { return VehicleSearchFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/store.service */ "./src/app/services/store.service.ts");





let VehicleSearchFormComponent = class VehicleSearchFormComponent {
    constructor(storeService) {
        this.storeService = storeService;
        this.selectedVehicle = {};
        this.selectedVehicleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.searchOptions = [];
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        this.storeService.searchOptions.subscribe(options => this.searchOptions = options);
        this.filteredSearchOptions = this.searchControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(searchInput => this._filterSearch(searchInput)));
    }
    _filterSearch(searchInput) {
        const filterValue = searchInput.length ? searchInput : '';
        return this.searchOptions.filter(option => option.vehicleNum ? option.vehicleNum.toString().includes(filterValue) : '');
    }
    searchDisplay(option) {
        return option.vehicleNum;
    }
    selectVehicle(event) {
        this.selectedVehicle = event.option.value;
        this.selectedVehicleChange.emit(this.selectedVehicle);
    }
    clearSearch() {
        // Reset search form
        this.searchControl.setValue('');
        this.selectedVehicle = {};
        // Retrieve vehicles again
        this.storeService.fetchVehicleSearchOptions();
    }
};
VehicleSearchFormComponent.ctorParameters = () => [
    { type: _services_store_service__WEBPACK_IMPORTED_MODULE_4__["StoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], VehicleSearchFormComponent.prototype, "selectedVehicle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], VehicleSearchFormComponent.prototype, "selectedVehicleChange", void 0);
VehicleSearchFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-search-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-search-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-search-form/vehicle-search-form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-search-form.component.scss */ "./src/app/components/vehicle-search-form/vehicle-search-form.component.scss")).default]
    })
], VehicleSearchFormComponent);



/***/ }),

/***/ "./src/app/components/vehicle-view/vehicle-view.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/vehicle-view/vehicle-view.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#vehicle-info {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZveC9HaXQvZ2hvc3QtZ2FzLWFwcC1kZXYvZ2hvc3QtZ2FzLXRyYWNrZXIvc3JjL2FwcC9jb21wb25lbnRzL3ZlaGljbGUtdmlldy92ZWhpY2xlLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS12aWV3L3ZlaGljbGUtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmVoaWNsZS12aWV3L3ZlaGljbGUtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2ZWhpY2xlLWluZm8ge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG4iLCIjdmVoaWNsZS1pbmZvIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/vehicle-view/vehicle-view.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/vehicle-view/vehicle-view.component.ts ***!
  \*******************************************************************/
/*! exports provided: VehicleViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleViewComponent", function() { return VehicleViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/vehicle.service */ "./src/app/services/vehicle.service.ts");



let VehicleViewComponent = class VehicleViewComponent {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this.selectedVehicle = null;
    }
    ngOnInit() {
    }
    refreshData() {
        if (this.selectedVehicle !== null) {
            this.vehicleService.getById(this.selectedVehicle._id).subscribe(result => this.selectedVehicle = result);
        }
    }
};
VehicleViewComponent.ctorParameters = () => [
    { type: _services_vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"] }
];
VehicleViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicle-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicle-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/vehicle-view/vehicle-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicle-view.component.scss */ "./src/app/components/vehicle-view/vehicle-view.component.scss")).default]
    })
], VehicleViewComponent);



/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZveC9HaXQvZ2hvc3QtZ2FzLWFwcC1kZXYvZ2hvc3QtZ2FzLXRyYWNrZXIvc3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG59IiwiI2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/services/fuel-up.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/fuel-up.service.ts ***!
  \*********************************************/
/*! exports provided: FuelUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelUpService", function() { return FuelUpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
let FuelUpService = class FuelUpService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient
            .get(API_URL + '/fuelup', httpOptions);
    }
    getById(id) {
        return this.httpClient
            .get(API_URL + '/fuelup/' + id, httpOptions);
    }
    new(newFuelUp) {
        return this.httpClient
            .post(API_URL + '/fuelup', newFuelUp, httpOptions);
    }
    update(fuelUp) {
        return this.httpClient
            .put(API_URL + '/fuelup/' + fuelUp._id, fuelUp, httpOptions);
    }
    delete(fuelUp) {
        return this.httpClient
            .delete(API_URL + '/fuelup/' + fuelUp._id, httpOptions);
    }
};
FuelUpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
FuelUpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FuelUpService);



/***/ }),

/***/ "./src/app/services/orgStore.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/orgStore.service.ts ***!
  \**********************************************/
/*! exports provided: OrgStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrgStoreService", function() { return OrgStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organization.service */ "./src/app/services/organization.service.ts");




let OrgStoreService = class OrgStoreService {
    constructor(organizationService) {
        this.organizationService = organizationService;
        this._searchOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.searchOptions = this._searchOptions.asObservable();
        this.fetchOrganizationSearchOptions();
    }
    fetchOrganizationSearchOptions() {
        this.organizationService.getAll().subscribe(organizations => this._searchOptions.next(organizations));
    }
};
OrgStoreService.ctorParameters = () => [
    { type: _organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"] }
];
OrgStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrgStoreService);



/***/ }),

/***/ "./src/app/services/organization.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/organization.service.ts ***!
  \**************************************************/
/*! exports provided: OrganizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationService", function() { return OrganizationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
let OrganizationService = class OrganizationService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient
            .get(API_URL + '/Organization', httpOptions);
    }
    getById(id) {
        return this.httpClient
            .get(API_URL + '/Organization/' + id, httpOptions);
    }
    new(newOrganization) {
        return this.httpClient
            .post(API_URL + '/Organization', newOrganization, httpOptions);
    }
    update(Organization) {
        return this.httpClient
            .put(API_URL + '/Organization/' + Organization._id, Organization, httpOptions);
    }
    delete(Organization) {
        return this.httpClient
            .delete(API_URL + '/Organization/' + Organization._id, httpOptions);
    }
};
OrganizationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrganizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], OrganizationService);



/***/ }),

/***/ "./src/app/services/store.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/store.service.ts ***!
  \*******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle.service */ "./src/app/services/vehicle.service.ts");




let StoreService = class StoreService {
    constructor(vehicleService) {
        this.vehicleService = vehicleService;
        this._searchOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.searchOptions = this._searchOptions.asObservable();
        this.fetchVehicleSearchOptions();
    }
    fetchVehicleSearchOptions() {
        this.vehicleService.getAll().subscribe(vehicles => this._searchOptions.next(vehicles));
    }
};
StoreService.ctorParameters = () => [
    { type: _vehicle_service__WEBPACK_IMPORTED_MODULE_3__["VehicleService"] }
];
StoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StoreService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
let UserService = class UserService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient
            .get(API_URL + '/User', httpOptions);
    }
    getById(id) {
        return this.httpClient
            .get(API_URL + '/User/' + id, httpOptions);
    }
    new(newUser) {
        return this.httpClient
            .post(API_URL + '/User', newUser, httpOptions);
    }
    update(User) {
        return this.httpClient
            .put(API_URL + '/User/' + User._id, User, httpOptions);
    }
    delete(User) {
        return this.httpClient
            .delete(API_URL + '/User/' + User._id, httpOptions);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/services/userStore.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/userStore.service.ts ***!
  \***********************************************/
/*! exports provided: UserStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStoreService", function() { return UserStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




let UserStoreService = class UserStoreService {
    constructor(userService) {
        this.userService = userService;
        this._searchOptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.searchOptions = this._searchOptions.asObservable();
        this.fetchUserSearchOptions();
    }
    fetchUserSearchOptions() {
        this.userService.getAll().subscribe(users => this._searchOptions.next(users));
    }
};
UserStoreService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
UserStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserStoreService);



/***/ }),

/***/ "./src/app/services/vehicle.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/vehicle.service.ts ***!
  \*********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const API_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
};
let VehicleService = class VehicleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getAll() {
        return this.httpClient
            .get(API_URL + '/vehicle', httpOptions);
    }
    getById(id) {
        return this.httpClient
            .get(API_URL + '/vehicle/' + id, httpOptions);
    }
    new(newVehicle) {
        return this.httpClient
            .post(API_URL + '/vehicle', newVehicle, httpOptions);
    }
    update(vehicle) {
        return this.httpClient
            .put(API_URL + '/vehicle/' + vehicle._id, vehicle, httpOptions);
    }
    delete(vehicle) {
        return this.httpClient
            .delete(API_URL + '/vehicle/' + vehicle._id, httpOptions);
    }
};
VehicleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
VehicleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], VehicleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiUrl: 'https://ghost-mongo-server.azurewebsites.net' // Changed from localhost:3000 for testing
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fox/Git/ghost-gas-app-dev/ghost-gas-tracker/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map