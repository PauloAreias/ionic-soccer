(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-player-module"],{

/***/ "./src/app/player/player.module.ts":
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/*! exports provided: PlayerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPageModule", function() { return PlayerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _player_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player.page */ "./src/app/player/player.page.ts");







var routes = [
    {
        path: '',
        component: _player_page__WEBPACK_IMPORTED_MODULE_6__["PlayerPage"]
    }
];
var PlayerPageModule = /** @class */ (function () {
    function PlayerPageModule() {
    }
    PlayerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_player_page__WEBPACK_IMPORTED_MODULE_6__["PlayerPage"]]
        })
    ], PlayerPageModule);
    return PlayerPageModule;
}());



/***/ }),

/***/ "./src/app/player/player.page.html":
/*!*****************************************!*\
  !*** ./src/app/player/player.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" id=\"1\">\n    <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu:</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      </ion-content>\n\n      <ion-footer class=\"bar-stable\">\n        <ion-list>\n            <ion-item routerLink=\"/\" >\n              <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n              <ion-label>Home</ion-label>\n          </ion-item>\n        <ion-item routerLink=\"/tabs/tab2\" >\n          <ion-icon name=\"football\" slot=\"start\"></ion-icon>\n          <ion-label>Matches</ion-label>\n        </ion-item>\n        <ion-item routerLink=\"/tabs/tab3\" >\n          <ion-icon name=\"shirt\" slot=\"start\"></ion-icon>\n          <ion-label>Teams</ion-label>\n        </ion-item>\n        </ion-list>\n      </ion-footer>\n  \n    </ion-menu>\n\n\n\n    <div class=\"ion-page\" main>\n    <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"/\"></ion-back-button>\n        </ion-buttons>\n    <ion-title>{{player.name}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-row>\n    <ion-col></ion-col>\n    <ion-col>\n        <img src=\"https://www.mikocoffee.com/private-label-and-export/wp-content/uploads/sites/84/2015/01/person-miko.png\" width=\"100%\">\n    </ion-col>\n    <ion-col></ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      First Name: {{player.firstName}}\n      <hr>\n      Age: {{getSubString(player.dateOfBirth | date: 'yyyy')}}\n      <hr>\n      Position: {{player.position}}\n    </ion-col>\n    <ion-col>\n        Country Of Birth: {{player.countryOfBirth}}\n        <hr>\n        Nationality: {{player.nationality}}\n        <hr>\n        Shirt Number: {{player.shirtNumber}}\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n</div>\n"

/***/ }),

/***/ "./src/app/player/player.page.scss":
/*!*****************************************!*\
  !*** ./src/app/player/player.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/player/player.page.ts":
/*!***************************************!*\
  !*** ./src/app/player/player.page.ts ***!
  \***************************************/
/*! exports provided: PlayerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerPage", function() { return PlayerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ "./src/app/player/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PlayerPage = /** @class */ (function () {
    function PlayerPage(route, PlayerService) {
        this.route = route;
        this.PlayerService = PlayerService;
    }
    PlayerPage.prototype.ngOnInit = function () {
        this.id = "3174";
        this.getCurrentPlayer();
    };
    PlayerPage.prototype.getCurrentPlayer = function () {
        var _this = this;
        var jogadores = this.route.snapshot.paramMap.get('id');
        if (jogadores != null) {
            this.id = jogadores;
        }
        this.PlayerService.getPlayers(this.id).subscribe(function (playerinfo) { return _this.player = playerinfo; });
    };
    PlayerPage.prototype.getSubString = function (AnoNascimento) {
        var ano = AnoNascimento.substr(0, 4);
        var today_date = new Date();
        var today_year = today_date.getFullYear();
        var age = today_year - ano;
        return age;
    };
    PlayerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.page.html */ "./src/app/player/player.page.html"),
            styles: [__webpack_require__(/*! ./player.page.scss */ "./src/app/player/player.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], PlayerPage);
    return PlayerPage;
}());



/***/ }),

/***/ "./src/app/player/player.service.ts":
/*!******************************************!*\
  !*** ./src/app/player/player.service.ts ***!
  \******************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.football-data.org/v2/players/",
            "method": "GET",
            "headers": {
                "X-Auth-Token": "9013937226534a229c6f74cc0fa542a3",
                "cache-control": "no-cache",
                "Postman-Token": "d839ddd9-eb5f-4b60-8a6e-ac6250d374bc"
            }
        };
    }
    PlayerService.prototype.getPlayers = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + id, { headers: headers });
    };
    PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ })

}]);
//# sourceMappingURL=player-player-module.js.map