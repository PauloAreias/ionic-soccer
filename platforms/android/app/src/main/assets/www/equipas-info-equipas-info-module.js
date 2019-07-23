(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["equipas-info-equipas-info-module"],{

/***/ "./src/app/equipas-info/equipas-info.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/equipas-info/equipas-info.module.ts ***!
  \*****************************************************/
/*! exports provided: EquipasInfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipasInfoPageModule", function() { return EquipasInfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _equipas_info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipas-info.page */ "./src/app/equipas-info/equipas-info.page.ts");







var routes = [
    {
        path: '',
        component: _equipas_info_page__WEBPACK_IMPORTED_MODULE_6__["EquipasInfoPage"]
    }
];
var EquipasInfoPageModule = /** @class */ (function () {
    function EquipasInfoPageModule() {
    }
    EquipasInfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_equipas_info_page__WEBPACK_IMPORTED_MODULE_6__["EquipasInfoPage"]]
        })
    ], EquipasInfoPageModule);
    return EquipasInfoPageModule;
}());



/***/ }),

/***/ "./src/app/equipas-info/equipas-info.page.html":
/*!*****************************************************!*\
  !*** ./src/app/equipas-info/equipas-info.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-menu side=\"start\" menuId=\"1\">\n    <ion-header>\n        <ion-toolbar>\n          <ion-title>Menu:</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n          <h2>Options:</h2>\n          <ion-item (click)=\"SelectInfo('info'); closeMenu()\">\n              <ion-icon name=\"information-circle\" slot=\"start\"></ion-icon>\n              <ion-label>Team Info</ion-label>\n          </ion-item>\n        <ion-item (click)=\"SelectInfo('squad'); closeMenu()\" >\n          <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n          <ion-label>Team Squad</ion-label>\n        </ion-item>\n        <ion-item (click)=\"SelectInfo('comp'); closeMenu()\" >\n          <ion-icon name=\"trophy\" slot=\"start\"></ion-icon>\n          <ion-label>Team Competitons</ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n    <ion-footer class=\"bar-stable\">\n      <ion-list>\n          <h2>HomeScreen:</h2>\n          <ion-item routerLink=\"/\" >\n            <ion-icon name=\"home\" slot=\"start\"></ion-icon>\n            <ion-label>Home</ion-label>\n        </ion-item>\n      <ion-item routerLink=\"/tabs/tab2\" >\n        <ion-icon name=\"football\" slot=\"start\"></ion-icon>\n        <ion-label>Matches</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/tabs/tab3\" >\n        <ion-icon name=\"shirt\" slot=\"start\"></ion-icon>\n        <ion-label>Teams</ion-label>\n      </ion-item>\n      <ion-item routerLink=\"/tabs/tab4\" >\n        <ion-icon name=\"chatboxes\" slot=\"start\"></ion-icon>\n        <ion-label>Comments</ion-label>\n      </ion-item>\n      </ion-list>\n    </ion-footer>\n\n  </ion-menu>\n\n\n  <div class=\"ion-page\" main>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-menu-button (click)=\"startMenu()\"></ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-back-button defaultHref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title> {{info.shortname}} </ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n\n    <ion-row >\n      <ion-col>\n          <img [src]=\"info.crestUrl\" width=\"50%\" (error)=\"onImageError($event)\">\n      </ion-col>\n      <ion-col>\n          <h1 style=\"color: #1da1f2\">Stadium:</h1>\n          <h3>{{info.venue}}</h3>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf=\" tinfo =='info'\">\n          <div style=\"overflow-y:scroll; height: 400px;\"> \n              <table class=\"table table-hover\" > \n            <thead style=\"background-color: \"> \n              \n              </thead> \n              <tbody> \n\n                <tr> \n                  <td>Name: {{info.name}} </td>                 \n                </tr> \n                <tr> \n                    <td>Short Name: {{info.shortName}} </td>                 \n                  </tr> \n                  <tr> \n                      <td>Initials: {{info.tla}} </td>                 \n                    </tr> \n\n\n              <tr> \n                  <td> Year of Fundation: {{info.founded}} </td> \n              </tr> \n\n               <tr> \n                  <td> Addres: {{info.address}} </td> \n              </tr> \n              \n                <tr> \n                  <td> Country: {{info.area.name}} </td> \n                </tr> \n\n                 <tr> \n                  <td> Oficial Website : <a href=\"{{info.website}}\">{{info.website}}</a></td> \n                </tr> \n\n                 <tr> \n                  <td> Colors: {{info.clubColors}}</td> \n                </tr> \n                <tr> \n                  <td> Email: {{info.email}}</td> \n                </tr> \n\n                <tr> \n                    <td> Phone: {{info.phone}} </td> \n                  </tr> \n\n                </tbody> \n              </table> \n                \n            </div>\n      </ion-col>\n\n      <ion-col *ngIf=\" tinfo =='squad'\">\n          <!-- <ion-searchbar></ion-searchbar> -->\n          <div class=\"tableFixHead\" style=\"overflow-y:scroll; height:400px; width: 100%\"> \n              <table id=\"myTable\" class=\"table table-hover sorttable\">\n              <thead >\n                <tr>\n                  <th >Position</th>\n                  <th>Name</th>\n                  <th>Role</th>\n                </tr>\n                </thead>\n                <tbody *ngFor =\"let plantel of info.squad\">\n                  <tr>\n                      <td>{{plantel.position}}</td>\n                      <td><a routerLink=\"/player/{{plantel.id}}\">{{plantel.name}}</a></td>\n                      <td>{{plantel.role}}</td>\n                  </tr> \n                  </tbody>\n                </table>\n              </div>\n      </ion-col>\n\n      <ion-col *ngIf=\" tinfo =='comp'\">\n          <div class=\"tableFixHead\" style=\"overflow-y:scroll; height:450px\"> \n              <table id=\"myTable\" class=\"table table-hover sorttable\">\n              <thead  style=\"background-color: rgb(0, 0, 0);\">\n                <tr>\n                  <th>Name</th>\n                  <th >Location</th>\n                </tr>\n                </thead>\n                <tbody *ngFor =\"let comp of info.activeCompetitions\">\n                  <tr>\n                      <td>{{comp.name}}</td>\n                      <td>{{comp.area.name}}</td>\n                  </tr> \n                  </tbody>\n                </table>\n              </div>\n      </ion-col>\n\n    </ion-row>\n    \n    </ion-content>\n    </div>\n\n    <!-- <script>\n        const searchbar = document.querySelector('ion-searchbar');\n        const items = Array.from(document.querySelector('tbody').children);\n        searchbar.addEventListener('ionInput', handleInput);\n        function handleInput(event) {\n          const query = event.target.value.toLowerCase();\n          requestAnimationFrame(() => {\n            items.forEach(item => {\n              const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;\n              item.style.display = shouldShow ? 'block' : 'none';\n            });\n          });\n        }\n      </script> -->\n    \n  \n"

/***/ }),

/***/ "./src/app/equipas-info/equipas-info.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/equipas-info/equipas-info.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VxdWlwYXMtaW5mby9lcXVpcGFzLWluZm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/equipas-info/equipas-info.page.ts":
/*!***************************************************!*\
  !*** ./src/app/equipas-info/equipas-info.page.ts ***!
  \***************************************************/
/*! exports provided: EquipasInfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipasInfoPage", function() { return EquipasInfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _equipas_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./equipas-info.service */ "./src/app/equipas-info/equipas-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var EquipasInfoPage = /** @class */ (function () {
    function EquipasInfoPage(route, InfoService, menuCtrl, router, AlertController, navCtrl) {
        this.route = route;
        this.InfoService = InfoService;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.AlertController = AlertController;
        this.navCtrl = navCtrl;
    }
    EquipasInfoPage.prototype.ngOnInit = function () {
        this.tinfo = "info";
        this.id = "503";
        this.getCurrentInfo();
    };
    EquipasInfoPage.prototype.getCurrentInfo = function () {
        var _this = this;
        var team = this.route.snapshot.paramMap.get('id');
        if (team != null) {
            this.id = team;
        }
        this.InfoService.getInfoTeams(this.id).subscribe(function (response) { _this.info = response; }, function (error) {
            _this.onIonError();
        });
    };
    EquipasInfoPage.prototype.onImageError = function (event) {
        console.log(event);
        event.target.src = "https://i.ya-webdesign.com/images/no-image-png-12.png";
    };
    EquipasInfoPage.prototype.SelectInfo = function (tinfo) {
        this.tinfo = tinfo;
    };
    EquipasInfoPage.prototype.openMenu = function () {
        this.menuCtrl.open();
    };
    EquipasInfoPage.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    EquipasInfoPage.prototype.toggleMenu = function () {
        this.menuCtrl.toggle();
    };
    EquipasInfoPage.prototype.startMenu = function () {
        this.menuCtrl.isEnabled();
    };
    EquipasInfoPage.prototype.onIonError = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var errorAlert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.AlertController.create({
                            message: "Não será possível carregar os dados da API nos próximos momentos",
                            buttons: [{ text: "Fechar" }]
                        })];
                    case 1:
                        errorAlert = _a.sent();
                        return [4 /*yield*/, errorAlert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EquipasInfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-equipas-info',
            template: __webpack_require__(/*! ./equipas-info.page.html */ "./src/app/equipas-info/equipas-info.page.html"),
            styles: [__webpack_require__(/*! ./equipas-info.page.scss */ "./src/app/equipas-info/equipas-info.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _equipas_info_service__WEBPACK_IMPORTED_MODULE_2__["EquipasInfoService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
    ], EquipasInfoPage);
    return EquipasInfoPage;
}());



/***/ }),

/***/ "./src/app/equipas-info/equipas-info.service.ts":
/*!******************************************************!*\
  !*** ./src/app/equipas-info/equipas-info.service.ts ***!
  \******************************************************/
/*! exports provided: EquipasInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipasInfoService", function() { return EquipasInfoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EquipasInfoService = /** @class */ (function () {
    function EquipasInfoService(http) {
        this.http = http;
        this.settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.football-data.org/v2/teams/",
            "method": "GET",
            "headers": {
                "X-Auth-Token": "9013937226534a229c6f74cc0fa542a3",
                "cache-control": "no-cache",
                "Postman-Token": "d839ddd9-eb5f-4b60-8a6e-ac6250d374bc"
            }
        };
    }
    EquipasInfoService.prototype.getInfoTeams = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"];
        headers = headers.append("X-Auth-Token", this.settings.headers["X-Auth-Token"]);
        return this.http.get(this.settings.url + id, { headers: headers });
    };
    EquipasInfoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EquipasInfoService);
    return EquipasInfoService;
}());



/***/ })

}]);
//# sourceMappingURL=equipas-info-equipas-info-module.js.map