(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head></head>\n\n<body>\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n        {{ligas.name}}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n    <ion-buttons slot=\"secondary\" (click)=\"SelectLiga('PPL')\">\n        <ion-button>\n\n            <ion-icon slot=\"icon-only\" src=\"../../assets/Liga_NOS_logo.svg\"></ion-icon>\n          \n        </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" (click)=\"SelectLiga('CL')\">\n        <ion-button>\n            <ion-icon slot=\"icon-only\" src=\"../../assets/uefa_logo_3.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n  </ion-buttons>\n    \n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content >\n\n  <!-- <ion-row>\n    <ion-col>\n\n        <ion-button style=\"width: 100%\"  (click)=\"SelectLiga('PPL')\">1ª Liga</ion-button>\n    </ion-col> \n    <ion-col align-self: flex-end>\n        <ion-button style=\"width: 100%\"  (click)=\"SelectLiga('CL')\">UEFA</ion-button> \n    </ion-col>\n  </ion-row> -->\n\n    <ion-card>\n \n    <ion-row>\n      <ion-col>\n        <h2>Location: </h2>\n      </ion-col>\n      <ion-col>\n        <h2>{{ligas.area.name}}</h2>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <h2 style=\"text-align: center\">Season {{standings.season.startDate | date: 'yy'}}/{{standings.season.endDate | date: 'yy'}}: </h2>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n\n        <h3>Start Date: {{standings.season.startDate | date: \"M/d/yy\"}}</h3>\n\n      </ion-col>\n\n      <ion-col>\n          <h3 style=\"text-align: right\">End Date: {{standings.season.endDate | date: \"M/d/yy\"}}</h3>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n  <ion-card >\n      <ion-row text-center justify-content-center align-self-center>\n          <h2 style=\"text-align: center\"> Winner {{ligas.seasons[2].startDate | date: 'yy'}}/{{ligas.seasons[2].endDate | date: 'yy'}}: </h2>\n      </ion-row>\n      <ion-row text-center justify-content-center align-self-center>\n          \n            <img class=\"img-team\" [src]=\"ligas.seasons[2].winner.crestUrl\" routerLink=\"/equipas-info/{{ligas.seasons[2].winner.id}}\" routerDirection=\"root\">\n            \n      </ion-row>\n      <ion-row text-center justify-content-center align-self-center>\n          <a routerLink=\"/equipas-info/{{ligas.seasons[2].winner.id}}\" routerDirection=\"root\">\n            <h3 style=\"text-align: center\">{{ligas.seasons[2].winner.name}}</h3>\n            </a>\n      </ion-row>\n          \n          \n         \n    \n  </ion-card>\n\n    <!-- <ion-row>\n        <ion-col>\n\n            <h1>Standings {{standings.season.startDate | date:'yyyy'}} - {{standings.season.endDate | date:'yyyy'}} :</h1>\n\n          <ion-header-bar>\n            <h2 style=\"color:#005391\" *ngIf=\"teams.type=== 'TOTAL'\">{{teams.group}} </h2> \n          </ion-header-bar>\n          <ion-content *ngIf=\"teams.type=== 'TOTAL'\">\n            <div *ngFor=\"let teams of standings.standings\">\n            <div class=\"row header\">\n              <div class=\"col\">Position</div>\n              <div class=\"col\">Crest</div>\n              <div class=\"col\">Team</div>\n              <div class=\"col\">Points</div>\n              <div class=\"col\">Games</div>\n              <div class=\"col\">Wins</div>\n              <div class=\"col\">Draws</div>\n              <div class=\"col\">Losts</div>\n              <div class=\"col\">Goals Scored</div>\n              <div class=\"col\">Goals Against</div>\n              <div class=\"col\">Goals Difference</div>\n            </div>\n            <div class=\"row\" *ngFor=\"let teams2 of teams.table\">\n                <div class=\"col\">{{data.name}}</div>\n                <div class=\"col\">{{data.code}}</div>\n                <div class=\"col\">LK {{data.limit}}</div>\n                <div class=\"col\">{{data.account}}</div>\n                <div class=\"col\"><button class=\"button\" ng-click=\"ctrl.add($index)\">Add</button></div>\n            </div>\n          </div>\n          </ion-content>\n\n        </ion-col>\n\n      </ion-row> -->\n  \n\n\n  </ion-content>\n\n\n</body>"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.ion-card {\n  padding: 20%; }\n\n.img-team {\n  width: 25%;\n  vertical-align: middle !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWxvL2lvbmljL2lvbmljLXNvY2Nlci9zcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0MsVUFBVTtFQUVYLGlDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53ZWxjb21lLWNhcmQgaW9uLWltZyB7XG4gIG1heC1oZWlnaHQ6IDM1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pb24tY2FyZHtcbiAgcGFkZGluZzogMjAlO1xufVxuXG4uaW1nLXRlYW17XG4gd2lkdGg6IDI1JTtcbi8vICBtYXJnaW4tbGVmdDogMjUlIFxudmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50IDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.service */ "./src/app/tab1/tab1.service.ts");



var Tab1Page = /** @class */ (function () {
    function Tab1Page(ligaService) {
        this.ligaService = ligaService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.ligaService.getCurrentLiga(this.liga);
        this.liga = "PPL";
        // this.name ="1ª Liga"
        this.getCurrentLiga(this.liga);
        this.getCurrentStandings(this.liga);
    };
    Tab1Page.prototype.SelectLiga = function (liga) {
        // this.name= name;
        this.liga = liga;
        this.getCurrentLiga(liga);
        this.getCurrentStandings(liga);
    };
    Tab1Page.prototype.getCurrentLiga = function (liga) {
        var _this = this;
        this.ligaService.getCurrentLiga(liga).subscribe(function (league) { return _this.ligas = league; });
    };
    Tab1Page.prototype.getCurrentStandings = function (Liga) {
        var _this = this;
        this.ligaService.getCurrentStandings(Liga).subscribe(function (teams) { return _this.standings = teams; });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab1_service__WEBPACK_IMPORTED_MODULE_2__["Tab1Service"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.service.ts":
/*!**************************************!*\
  !*** ./src/app/tab1/tab1.service.ts ***!
  \**************************************/
/*! exports provided: Tab1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Service", function() { return Tab1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Tab1Service = /** @class */ (function () {
    function Tab1Service(http) {
        this.http = http;
        this.settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.football-data.org/v2/competitions/",
            "method": "GET",
            "headers": {
                "X-Auth-Token": "9013937226534a229c6f74cc0fa542a3",
                "cache-control": "no-cache",
                "Postman-Token": "d839ddd9-eb5f-4b60-8a6e-ac6250d374bc"
            }
        };
    }
    Tab1Service.prototype.getCurrentLiga = function (liga) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + liga, { headers: headers });
    };
    Tab1Service.prototype.getCurrentStandings = function (liga) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + liga + "/standings", { headers: headers });
    };
    Tab1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Tab1Service);
    return Tab1Service;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map