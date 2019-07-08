(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head></head>\n\n<body>\n  <ion-header>\n  <ion-toolbar>\n    <ion-title>\n        {{equipas.competition.name}}\n    </ion-title>\n\n    <ion-buttons slot=\"end\">\n    <ion-buttons slot=\"secondary\" (click)=\"SelectEquipas('PPL')\">\n        <ion-button>\n\n            <ion-icon slot=\"icon-only\" src=\"../../assets/Liga_NOS_logo.svg\"></ion-icon>\n          \n        </ion-button>\n    </ion-buttons>\n\n    <ion-buttons slot=\"secondary\" (click)=\"SelectEquipas('CL')\">\n        <ion-button>\n            <ion-icon slot=\"icon-only\" src=\"../../assets/uefa_logo_3.svg\"></ion-icon>\n        </ion-button>\n    </ion-buttons>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- <ion-row>\n        <ion-col>\n    \n            <ion-button style=\"width: 100%\"  (click)=\"SelectEquipas('PPL')\">1ª Liga</ion-button>\n        </ion-col> \n        <ion-col align-self: flex-end>\n            <ion-button style=\"width: 100%\"  (click)=\"SelectEquipas('CL')\">UEFA</ion-button> \n        </ion-col>\n      </ion-row> -->\n\n\n  <ion-row>\n    <ion-col>\n        <div class=\"tableFixHead\" style=\"overflow-y:scroll; height:550px\"> \n            <table>\n            <thead>\n              <tr>\n                <th >Logo</th>\n                <th >Equipa</th>\n               </tr>\n              </thead>\n              <tbody *ngFor=\"let teams of equipas.teams\">\n                <tr> \n                <td><a routerLink=\"/equipas-info/{{teams.id}}\" routerDirection=\"root\"> <img [src]=\"teams.crestUrl\" width=\"25%\" style=\"margin-right: 2%\" (error)=\"onImageError($event)\"> </a></td>\n                <td><a routerLink=\"/equipas-info/{{teams.id}}\" routerDirection=\"root\"> {{teams.name}}</a></td>\n              </tr>\n              </tbody>\n              </table>\n    </div>\n    </ion-col>\n  </ion-row>\n</ion-content>\n\n</body>\n"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tableFixHead {\n  overflow-y: auto;\n  height: 100px; }\n\n.tableFixHead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0; }\n\ntable {\n  width: 100%;\n  border-collapse: collapse; }\n\n/* Zebra striping */\n\ntr:nth-of-type(odd) {\n  background: #eee; }\n\nth {\n  background: #333;\n  color: white;\n  font-weight: bold; }\n\ntd, th {\n  padding: 6px;\n  border: 1px solid #ccc;\n  text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3BhdWxvL2lvbmljL2lvbmljLXNvY2Nlci9zcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBbUIsZ0JBQWdCO0VBQUUsYUFBYSxFQUFBOztBQUNsRDtFQUFtQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQUUsTUFBTSxFQUFBOztBQUUzQztFQUNJLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTs7QUFFN0IsbUJBQUE7O0FBQ0E7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi50YWJsZUZpeEhlYWQgICAgeyBvdmVyZmxvdy15OiBhdXRvOyBoZWlnaHQ6IDEwMHB4OyB9XG4udGFibGVGaXhIZWFkIHRoIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwOyB9XG5cbnRhYmxlIHsgXG4gICAgd2lkdGg6IDEwMCU7IFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IFxufVxuLyogWmVicmEgc3RyaXBpbmcgKi9cbnRyOm50aC1vZi10eXBlKG9kZCkgeyBcbiAgICBiYWNrZ3JvdW5kOiAjZWVlOyBcbn1cbnRoIHsgXG4gICAgYmFja2dyb3VuZDogIzMzMzsgXG4gICAgY29sb3I6IHdoaXRlOyBcbiAgICBmb250LXdlaWdodDogYm9sZDsgXG59XG50ZCwgdGggeyBcbiAgICBwYWRkaW5nOiA2cHg7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IFxuICAgIHRleHQtYWxpZ246IGxlZnQ7IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tab3_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.service */ "./src/app/tab3/tab3.service.ts");



var Tab3Page = /** @class */ (function () {
    function Tab3Page(equipaService) {
        this.equipaService = equipaService;
    }
    Tab3Page.prototype.ngOnInit = function () {
        this.liga = "PPL";
        this.getCurrentTeams(this.liga);
    };
    Tab3Page.prototype.SelectEquipas = function (liga) {
        this.liga = liga;
        this.getCurrentTeams(liga);
    };
    Tab3Page.prototype.getCurrentTeams = function (Liga) {
        var _this = this;
        this.equipaService.getCurrentTeams(Liga).subscribe(function (teams) { return _this.equipas = teams; });
    };
    Tab3Page.prototype.onImageError = function (event) {
        console.log(event);
        event.target.src = "https://www.vermeer.com.au/wp-content/uploads/2016/12/attachment-no-image-available.png";
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_tab3_service__WEBPACK_IMPORTED_MODULE_2__["Tab3Service"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.service.ts":
/*!**************************************!*\
  !*** ./src/app/tab3/tab3.service.ts ***!
  \**************************************/
/*! exports provided: Tab3Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Service", function() { return Tab3Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Tab3Service = /** @class */ (function () {
    function Tab3Service(http) {
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
    Tab3Service.prototype.getCurrentTeams = function (liga) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + liga + "/teams", { headers: headers });
    };
    Tab3Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Tab3Service);
    return Tab3Service;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map