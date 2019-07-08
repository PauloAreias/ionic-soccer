(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\">\n    <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu:</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n          <ion-item (click)=\"SelectStatus('LIVE')\" >\n              <ion-icon name=\"videocam\" slot=\"start\"></ion-icon>\n              <ion-label>Live</ion-label>\n          </ion-item>\n        <ion-item (click)=\"SelectStatus('SCHEDULED')\" >\n          <ion-icon name=\"calendar\" slot=\"start\"></ion-icon>\n          <ion-label>Schedule</ion-label>\n        </ion-item>\n        <ion-item (click)=\"SelectStatus('FINISHED')\" >\n          <ion-icon name=\"checkmark-circle\" slot=\"start\"></ion-icon>\n          <ion-label>Finished</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n\n\n<div class=\"ion-page\" main>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n        {{equipas.competition.name}}\n    </ion-title>\n\n    <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n\n    <ion-buttons slot=\"end\">\n    <ion-buttons slot=\"secondary\" (click)=\"SelectEquipas('PPL')\">\n        <ion-button>\n\n            <ion-icon slot=\"icon-only\" src=\"../../assets/Liga_NOS_logo.svg\"></ion-icon>\n          \n        </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" (click)=\"SelectEquipas('CL')\">\n        <ion-button>\n            <ion-icon slot=\"icon-only\" src=\"../../assets/uefa_logo_3.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n    <!-- <ion-row>\n      <ion-col>\n  \n          <ion-button style=\"width: 100%\"  (click)=\"SelectEquipas('PPL')\">1ª Liga</ion-button>\n      </ion-col> \n      <ion-col align-self: flex-end>\n          <ion-button style=\"width: 100%\"  (click)=\"SelectEquipas('CL')\">UEFA</ion-button> \n      </ion-col>\n    </ion-row> -->\n\n    <ion-row>\n      <ion-col>\n\n        <h2 style=\"text-align: center\">\n          {{estado}}\n        </h2>\n        <div *ngIf =\"estado == 'SCHEDULED'\">\n\n            <div class=\"tableFixHead\" style=\"overflow-y: scroll; height: 450px\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th>Date</th>\n                      <th>Home</th>\n                      <th>Away</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let jogos of matches.matches\">\n                    <tr>\n                      <td>{{jogos.utcDate | date: 'M/dd/yy'}}</td>\n                      <td><a routerLink=\"/equipas-info/{{jogos.homeTeam.id}}\" routerDirection=\"root\">\n                        {{jogos.homeTeam.name}}</a>\n                      </td>\n                      <td><a routerLink=\"/equipas-info/{{jogos.awayTeam.id}}\" routerDirection=\"root\">\n                        {{jogos.awayTeam.name}}\n                      </a>\n                    \n      \n                  </tbody>\n                  </table>\n                </div>\n\n        </div>\n         \n\n\n        <div *ngIf =\"estado == 'FINISHED'\">\n\n            <div class=\"tableFixHead\" style=\"overflow-y: scroll; height: 450px\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th>Date</th>\n                      <th>Home</th>\n                      <th>Score</th>\n                      <th>Away</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let jogos of matches.matches\">\n                    <tr>\n                      <td>{{jogos.utcDate | date: 'M/dd/yy'}}</td>\n                      <td><a routerLink=\"/equipas-info/{{jogos.homeTeam.id}}\" routerDirection=\"root\">\n                        {{jogos.homeTeam.name}}</a>\n                      </td>\n                      <td>{{jogos.score.fullTime.homeTeam}} - {{jogos.score.fullTime.awayTeam}}</td>\n                      <td><a routerLink=\"/equipas-info/{{jogos.awayTeam.id}}\" routerDirection=\"root\">\n                        {{jogos.awayTeam.name}}\n                      </a>\n                    \n      \n                  </tbody>\n                  </table>\n                </div>\n\n        </div>\n\n        <div *ngIf =\"estado == 'LIVE'\">\n\n            <div class=\"tableFixHead\" style=\"overflow-y: scroll; height: 450px\">\n                <table>\n                  <thead>\n                    <tr>\n                      <th>Home</th>\n                      <th>Score</th>\n                      <th>Away</th>\n                    </tr>\n                  </thead>\n                  <tbody *ngFor=\"let jogos of matches.matches\">\n                    <tr>\n                     \n                      <td><a routerLink=\"/equipas-info/{{jogos.homeTeam.id}}\" routerDirection=\"root\">\n                        {{jogos.homeTeam.name}}</a>\n                      </td>\n                      <td>{{jogos.score.fullTime.homeTeam}} - {{jogos.score.fullTime.awayTeam}}</td>\n                      <td><a routerLink=\"/equipas-info/{{jogos.awayTeam.id}}\" routerDirection=\"root\">\n                        {{jogos.awayTeam.name}}\n                      </a>\n                    \n      \n                  </tbody>\n                  </table>\n                </div>\n\n        </div>\n\n        \n            <!-- <ion-row>\n              <ion-col>Date</ion-col>\n              <ion-col>Home Team</ion-col>\n              <ion-col>Score</ion-col>\n              <ion-col>Away Team</ion-col>\n              <ion-col>STATUS</ion-col>\n          </ion-row>\n          <hr>\n            <ion-row *ngFor=\"let jogos of matches.matches\">\n              <ion-col>{{jogos.utcDate | date}}</ion-col>\n              <ion-col>{{jogos.homeTeam.name}}</ion-col>\n              <ion-col>{{jogos.score.fullTime.homeTeam}} - {{jogos.score.fullTime.awayTeam}}</ion-col>\n              <ion-col>{{jogos.awayTeam.name}}</ion-col>\n              <ion-col>{{jogos.status}}</ion-col>\n            </ion-row> -->\n\n          </ion-col>\n\n          </ion-row>\n    \n</ion-content>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableFixHead {\n  overflow-y: auto;\n  height: 100px; }\n\n.tableFixHead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\n/* Zebra striping */\n\ntr:nth-of-type(odd) {\n  background: #eee; }\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\n\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWxvL2lvbmljL2lvbmljLXNvY2Nlci9zcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJBO0VBQW1CLGdCQUFnQjtFQUFFLGFBQWEsRUFBQTs7QUFDbEQ7RUFBbUIsd0JBQWdCO0VBQWhCLGdCQUFnQjtFQUFFLE1BQU0sRUFBQTs7QUFFM0M7RUFDSSxXQUFXO0VBQ1gseUJBQXlCLEVBQUE7O0FBRTdCLG1CQUFBOztBQUNBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gYm9keSB7XG4vLyAgICAgY3Vyc29yOiB1cmwoJ2h0dHA6Ly9pb25pY2ZyYW1ld29yay5jb20vaW1nL2Zpbmdlci5wbmcnKSwgYXV0bztcbi8vIH1cblxuLy8gLmlvbi1jb2wge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmV5O1xuLy8gfVxuXG4vLyAuaW9uLWNvbCB7XG4vLyAgICAgYm9yZGVyOiBzb2xpZCAxcHggZ3JleTtcbi8vICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xuLy8gICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbi8vIH1cblxuLy8gLmlvbi1jb2w6bGFzdC1jaGlsZCB7XG4vLyAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggZ3JleTtcbi8vIH1cblxuLy8gLmlvbi1yb3c6bGFzdC1jaGlsZCAuaW9uLWNvbCB7XG4vLyAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IGdyZXk7XG4vLyB9XG5cbi50YWJsZUZpeEhlYWQgICAgeyBvdmVyZmxvdy15OiBhdXRvOyBoZWlnaHQ6IDEwMHB4OyB9XG4udGFibGVGaXhIZWFkIHRoIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwOyB9XG5cbnRhYmxlIHsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxufVxuLyogWmVicmEgc3RyaXBpbmcgKi9cbnRyOm50aC1vZi10eXBlKG9kZCkgeyBcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcbn1cbnRoIHsgXG4gICAgYmFja2dyb3VuZDogIzMzMzsgXG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG50ZCwgdGggeyBcbiAgICBwYWRkaW5nOiA2cHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab2_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.service */ "./src/app/tab2/tab2.service.ts");



var Tab2Page = /** @class */ (function () {
    function Tab2Page(equipaService) {
        this.equipaService = equipaService;
    }
    Tab2Page.prototype.ngOnInit = function () {
        this.liga = "CL";
        this.estado = "FINISHED";
        this.getCurrentTeams(this.liga);
        this.getCurrentMatches(this.liga, this.estado);
    };
    Tab2Page.prototype.SelectEquipas = function (liga) {
        this.liga = liga;
        this.getCurrentTeams(liga);
        this.getCurrentMatches(this.liga, this.estado);
    };
    Tab2Page.prototype.SelectStatus = function (status) {
        this.estado = status;
        this.getCurrentMatches(this.liga, this.estado);
    };
    Tab2Page.prototype.getCurrentMatches = function (Liga, estado) {
        var _this = this;
        this.equipaService.getCurrentMatches(Liga, estado).subscribe(function (matches) { return _this.matches = matches; });
    };
    Tab2Page.prototype.getCurrentTeams = function (Liga) {
        var _this = this;
        this.equipaService.getCurrentTeams(Liga).subscribe(function (teams) { return _this.equipas = teams; });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab2_service__WEBPACK_IMPORTED_MODULE_2__["Tab2Service"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.service.ts":
/*!**************************************!*\
  !*** ./src/app/tab2/tab2.service.ts ***!
  \**************************************/
/*! exports provided: Tab2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Service", function() { return Tab2Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Tab2Service = /** @class */ (function () {
    function Tab2Service(http) {
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
    Tab2Service.prototype.getCurrentMatches = function (liga, estado) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + liga + "/matches" + "?status=" + estado, { headers: headers });
    };
    Tab2Service.prototype.getCurrentTeams = function (liga) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + liga + "/teams", { headers: headers });
    };
    Tab2Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Tab2Service);
    return Tab2Service;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map