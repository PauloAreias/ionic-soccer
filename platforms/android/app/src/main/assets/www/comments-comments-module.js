(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"],{

/***/ "./src/app/comments/comments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _comments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments.page */ "./src/app/comments/comments.page.ts");







var routes = [
    {
        path: '',
        component: _comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]
    }
];
var CommentsPageModule = /** @class */ (function () {
    function CommentsPageModule() {
    }
    CommentsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]]
        })
    ], CommentsPageModule);
    return CommentsPageModule;
}());



/***/ }),

/***/ "./src/app/comments/comments.page.html":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Comments</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-card>\n        <ion-item>\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input class=\"bordered\" [(ngModel)]=\"name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Comment</ion-label>\n          <ion-input class=\"bordered\" [(ngModel)]=\"text\"></ion-input>\n        </ion-item>\n      </ion-card>\n        <ion-button expand=\"block\" (click)=\"addParagraph(name, text)\">Send</ion-button>\n\n\n        <h2>Comments:</h2>\n\n\n  <div style=\"overflow-y: scroll; height: 250px\">\n   \n    <ion-card padding *ngFor=\"let paragraph of dataPL.paragraphs\" style=\"text-align: center\">\n        <h4 *ngIf=\"paragraph.name== ''\"> Anonymous</h4>\n        <h4 *ngIf =\"paragraph.name != ''\">{{paragraph.name}}</h4>\n        <p>{{paragraph.text}}</p>\n    </ion-card>\n\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/comments/comments.page.scss":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/comments/comments.page.ts":
/*!*******************************************!*\
  !*** ./src/app/comments/comments.page.ts ***!
  \*******************************************/
/*! exports provided: CommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPage", function() { return CommentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommentsPage = /** @class */ (function () {
    function CommentsPage() {
        this.dataPL = {
            "paragraphs": [
                { "name": "", "text": " 5 stars" }
            ]
        };
    }
    CommentsPage.prototype.ngOnInit = function () {
        this.name = "";
        this.text = "";
    };
    CommentsPage.prototype.addParagraph = function (nome, texto) {
        if (this.text != '') {
            this.dataPL.paragraphs.push({ "name": nome, "text": texto });
            this.text = "";
            this.name = "";
        }
    };
    CommentsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.page.html */ "./src/app/comments/comments.page.html"),
            styles: [__webpack_require__(/*! ./comments.page.scss */ "./src/app/comments/comments.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommentsPage);
    return CommentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=comments-comments-module.js.map