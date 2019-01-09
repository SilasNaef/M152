(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'M152';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routing/app-routing.module */ "./src/app/routing/app-routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mat_mat_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mat/mat.module */ "./src/app/mat/mat.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nghome/nghome.component */ "./src/app/nghome/nghome.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _galleryitem_galleryitem_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./galleryitem/galleryitem.component */ "./src/app/galleryitem/galleryitem.component.ts");
/* harmony import */ var _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mountain/mountain-list/mountain-list.component */ "./src/app/mountain/mountain-list/mountain-list.component.ts");
/* harmony import */ var _mountain_mountain_item_mountain_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mountain/mountain-item/mountain-item.component */ "./src/app/mountain/mountain-item/mountain-item.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _nlclub_nlclubitem_nlclubitem_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nlclub/nlclubitem/nlclubitem.component */ "./src/app/nlclub/nlclubitem/nlclubitem.component.ts");
/* harmony import */ var _nlclub_nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nlclub/nlclublist/nlclublist.component */ "./src/app/nlclub/nlclublist/nlclublist.component.ts");
/* harmony import */ var _nlclub_nlclubsite_nlclubsite_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nlclub/nlclubsite/nlclubsite.component */ "./src/app/nlclub/nlclubsite/nlclubsite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_6__["HelloworldComponent"],
                _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_8__["NghomeComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
                _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_8__["NghomeComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_9__["GalleryComponent"],
                _galleryitem_galleryitem_component__WEBPACK_IMPORTED_MODULE_10__["GalleryitemComponent"],
                _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_11__["MountainListComponent"],
                _mountain_mountain_item_mountain_item_component__WEBPACK_IMPORTED_MODULE_12__["MountainItemComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_13__["VideoComponent"],
                _nlclub_nlclubitem_nlclubitem_component__WEBPACK_IMPORTED_MODULE_14__["NlclubitemComponent"],
                _nlclub_nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_15__["NlclublistComponent"],
                _nlclub_nlclubsite_nlclubsite_component__WEBPACK_IMPORTED_MODULE_16__["NlclubsiteComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _mat_mat_module__WEBPACK_IMPORTED_MODULE_3__["MatModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin-top: 80px !important;\r\n  width: 75%;\r\n  max-width: 300px;\r\n  margin: auto;\r\n}\r\n#container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 2fr 1fr;\r\n      grid-template-columns: 2fr 1fr;\r\n  text-align: right;\r\n}\r\nh1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\na {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<h1>My Dashboard</h1>\r\n<mat-card>\r\n  <mat-card-title id=\"title\">Angular Startseite</mat-card-title>\r\n  <mat-card-content id=\"content\">Go To AngularStart!</mat-card-content>\r\n  <div id=\"container\">\r\n    <div></div>\r\n    <div id=\"innerdiv\" class=\"86\">\r\n        <button mat-fab routerLink=\"ng\">\r\n          <mat-icon>home</mat-icon>\r\n        </button>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n<mat-card>\r\n  <mat-card-title id=\"title\">Hello World Seite</mat-card-title>\r\n  <mat-card-content id=\"content\">Go To HelloWorld!</mat-card-content>\r\n  <div id=\"container\">\r\n    <div></div>\r\n    <div id=\"innerdiv\" class=\"86\">\r\n      <button mat-fab routerLink=\"hw\">\r\n        <mat-icon>bug_report</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<mat-card>\r\n  <mat-card-title id=\"title\">Gallery Seite</mat-card-title>\r\n  <mat-card-content id=\"content\">Go To Gallery!</mat-card-content>\r\n  <div id=\"container\">\r\n    <div></div>\r\n    <div id=\"innerdiv\" class=\"86\">\r\n      <button mat-fab routerLink=\"gallery\">\r\n        <mat-icon>bug_report</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/gallery/gallery.component.css":
/*!***********************************************!*\
  !*** ./src/app/gallery/gallery.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n#container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 100%;\r\n  -ms-grid-columns: 1fr;\r\n      grid-template-columns: 1fr;\r\n  -ms-grid-rows: 1fr;\r\n      grid-template-rows: 1fr;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  #container {\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (min-width: 1080px) {\r\n  #container {\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.html":
/*!************************************************!*\
  !*** ./src/app/gallery/gallery.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Gallery</h1>\r\n<div id=\"container\" >\r\n  <app-galleryitem *ngFor=\"let mountain of mountains\" [imgUrl]=\"mountain.imgUrl\" [mountainName]=\"mountain.mountainName\" [mountainHeight]=\"mountain.mountainHeight\" ></app-galleryitem>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/gallery/gallery.component.ts":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.mountains = [
            {
                mountainName: "Bristen",
                mountainHeight: "21000m",
                imgUrl: "../../assets/img/bristen.jpg"
            },
            {
                mountainName: "Generoso",
                mountainHeight: "25000",
                imgUrl: "../../assets/img/generoso.jpg"
            },
            {
                mountainName: "Säntis",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/santis.jpg"
            },
            {
                mountainName: "Eiger",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/eiger.jpg"
            },
            {
                mountainName: "Glarnisch",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/glarnisch.jpg"
            },
            {
                mountainName: "Matterhorn",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/matterhorn.jpg"
            },
            {
                mountainName: "Niederhorn",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/niederhorn.jpg"
            },
            {
                mountainName: "Pizbernina",
                mountainHeight: "24000",
                imgUrl: "../../assets/img/pizbernina.jpg"
            }
        ];
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/galleryitem/galleryitem.component.css":
/*!*******************************************************!*\
  !*** ./src/app/galleryitem/galleryitem.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 90%;\r\n  margin: 10px;\r\n}\r\nimg {\r\n  width: 100%;\r\n}\r\nh1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/galleryitem/galleryitem.component.html":
/*!********************************************************!*\
  !*** ./src/app/galleryitem/galleryitem.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title id=\"title\">{{mountainName}}</mat-card-title>\r\n  <mat-card-content id=\"content\">\r\n    <img [src]=\"imgUrl\" />\r\n    <p>Höhe: {{mountainHeight}}</p>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/galleryitem/galleryitem.component.ts":
/*!******************************************************!*\
  !*** ./src/app/galleryitem/galleryitem.component.ts ***!
  \******************************************************/
/*! exports provided: GalleryitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryitemComponent", function() { return GalleryitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryitemComponent = /** @class */ (function () {
    function GalleryitemComponent() {
    }
    GalleryitemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryitemComponent.prototype, "imgUrl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryitemComponent.prototype, "mountainName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], GalleryitemComponent.prototype, "mountainHeight", void 0);
    GalleryitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-galleryitem',
            template: __webpack_require__(/*! ./galleryitem.component.html */ "./src/app/galleryitem/galleryitem.component.html"),
            styles: [__webpack_require__(/*! ./galleryitem.component.css */ "./src/app/galleryitem/galleryitem.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryitemComponent);
    return GalleryitemComponent;
}());



/***/ }),

/***/ "./src/app/helloworld/helloworld.component.css":
/*!*****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin-top: 80px !important;\r\n  width: 75%;\r\n  max-width: 300px;\r\n  margin: auto;\r\n}\r\n\r\n#container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 2fr 1fr;\r\n      grid-template-columns: 2fr 1fr;\r\n  text-align: right;\r\n}\r\n\r\nh1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.html":
/*!******************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title id=\"title\">Hello World Seite</mat-card-title>\r\n  <mat-card-content id=\"content\">Go To HelloWorld!</mat-card-content>\r\n  <div id=\"container\">\r\n    <div></div>\r\n    <div id=\"innerdiv\" class=\"86\">\r\n      <a routerLink=\"\">\r\n        <button mat-fab>\r\n          <mat-icon>home</mat-icon>\r\n        </button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/helloworld/helloworld.component.ts":
/*!****************************************************!*\
  !*** ./src/app/helloworld/helloworld.component.ts ***!
  \****************************************************/
/*! exports provided: HelloworldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloworldComponent", function() { return HelloworldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloworldComponent = /** @class */ (function () {
    function HelloworldComponent() {
    }
    HelloworldComponent.prototype.ngOnInit = function () {
    };
    HelloworldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-helloworld',
            template: __webpack_require__(/*! ./helloworld.component.html */ "./src/app/helloworld/helloworld.component.html"),
            styles: [__webpack_require__(/*! ./helloworld.component.css */ "./src/app/helloworld/helloworld.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloworldComponent);
    return HelloworldComponent;
}());



/***/ }),

/***/ "./src/app/mat/mat.module.ts":
/*!***********************************!*\
  !*** ./src/app/mat/mat.module.ts ***!
  \***********************************/
/*! exports provided: MatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatModule", function() { return MatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatModule = /** @class */ (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]
            ]
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/mountain/mountain-item/mountain-item.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mountain/mountain-item/mountain-item.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 90%;\r\n  margin: 10px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/mountain/mountain-item/mountain-item.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mountain/mountain-item/mountain-item.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <img mat-card-image [src]=\"mountain.img\" alt=\"{{ mountain.name }}\">\n  <mat-card-content>\n    <mat-card-title>{{ mountain.name }}</mat-card-title>\n    <mat-card-subtitle>Höhe: {{ mountain.elevation }}m</mat-card-subtitle>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/mountain/mountain-item/mountain-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mountain/mountain-item/mountain-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: MountainItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainItemComponent", function() { return MountainItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mountain_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mountain.model */ "./src/app/mountain/mountain.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MountainItemComponent = /** @class */ (function () {
    function MountainItemComponent() {
    }
    MountainItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _mountain_model__WEBPACK_IMPORTED_MODULE_1__["Berg"])
    ], MountainItemComponent.prototype, "mountain", void 0);
    MountainItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mountain-item',
            template: __webpack_require__(/*! ./mountain-item.component.html */ "./src/app/mountain/mountain-item/mountain-item.component.html"),
            styles: [__webpack_require__(/*! ./mountain-item.component.css */ "./src/app/mountain/mountain-item/mountain-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MountainItemComponent);
    return MountainItemComponent;
}());



/***/ }),

/***/ "./src/app/mountain/mountain-list/mountain-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/mountain/mountain-list/mountain-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n#container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 100%;\r\n  -ms-grid-columns: 1fr;\r\n      grid-template-columns: 1fr;\r\n  -ms-grid-rows: 1fr;\r\n      grid-template-rows: 1fr;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  #container {\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (min-width: 1080px) {\r\n  #container {\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/mountain/mountain-list/mountain-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/mountain/mountain-list/mountain-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <app-mountain-item *ngFor=\"let item of mountains.values()\" [mountain]=\"item\"></app-mountain-item>\n</div>\n"

/***/ }),

/***/ "./src/app/mountain/mountain-list/mountain-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/mountain/mountain-list/mountain-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: MountainListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MountainListComponent", function() { return MountainListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _mountain_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mountain.model */ "./src/app/mountain/mountain.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MountainListComponent = /** @class */ (function () {
    function MountainListComponent(route) {
        this.route = route;
        this.mountains = new Map();
    }
    MountainListComponent.prototype.ngOnInit = function () {
        var config = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].mountains;
        var mntParam = this.route.snapshot.params['id'];
        if (mntParam) {
            for (var _i = 0, _a = config.features; _i < _a.length; _i++) {
                var mountain = _a[_i];
                if (mountain.properties.id == mntParam) {
                    this.mountains.set(mountain.properties.id, new _mountain_model__WEBPACK_IMPORTED_MODULE_2__["Berg"](mountain.properties.id, mountain.properties.name, mountain.properties.el, mountain.properties.img, mountain.geometry.coordinates[0], mountain.geometry.coordinates[1]));
                }
            }
        }
        else {
            for (var _b = 0, _c = config.features; _b < _c.length; _b++) {
                var mountain = _c[_b];
                this.mountains.set(mountain.properties.id, new _mountain_model__WEBPACK_IMPORTED_MODULE_2__["Berg"](mountain.properties.id, mountain.properties.name, mountain.properties.el, mountain.properties.img, mountain.geometry.coordinates[0], mountain.geometry.coordinates[1]));
            }
        }
    };
    MountainListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mountain-list',
            template: __webpack_require__(/*! ./mountain-list.component.html */ "./src/app/mountain/mountain-list/mountain-list.component.html"),
            styles: [__webpack_require__(/*! ./mountain-list.component.css */ "./src/app/mountain/mountain-list/mountain-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], MountainListComponent);
    return MountainListComponent;
}());



/***/ }),

/***/ "./src/app/mountain/mountain.model.ts":
/*!********************************************!*\
  !*** ./src/app/mountain/mountain.model.ts ***!
  \********************************************/
/*! exports provided: Berg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Berg", function() { return Berg; });
var Berg = /** @class */ (function () {
    function Berg(id, name, elevation, img, longitude, latitude) {
        this.id = id;
        this.name = name;
        this.elevation = elevation;
        this.img = img;
        this.coordinates = { longitude: longitude, latitude: latitude };
    }
    return Berg;
}());



/***/ }),

/***/ "./src/app/nghome/nghome.component.css":
/*!*********************************************!*\
  !*** ./src/app/nghome/nghome.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nghome/nghome.component.html":
/*!**********************************************!*\
  !*** ./src/app/nghome/nghome.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<h2>Here are some links to help you start: </h2>\r\n<ul>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\r\n  </li>\r\n  <li>\r\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\r\n  </li>\r\n</ul>\r\n<a routerLink=\"\">Home</a>\r\n"

/***/ }),

/***/ "./src/app/nghome/nghome.component.ts":
/*!********************************************!*\
  !*** ./src/app/nghome/nghome.component.ts ***!
  \********************************************/
/*! exports provided: NghomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NghomeComponent", function() { return NghomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NghomeComponent = /** @class */ (function () {
    function NghomeComponent() {
    }
    NghomeComponent.prototype.ngOnInit = function () {
    };
    NghomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nghome',
            template: __webpack_require__(/*! ./nghome.component.html */ "./src/app/nghome/nghome.component.html"),
            styles: [__webpack_require__(/*! ./nghome.component.css */ "./src/app/nghome/nghome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NghomeComponent);
    return NghomeComponent;
}());



/***/ }),

/***/ "./src/app/nlclub/nlclub.model.ts":
/*!****************************************!*\
  !*** ./src/app/nlclub/nlclub.model.ts ***!
  \****************************************/
/*! exports provided: nlClub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nlClub", function() { return nlClub; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");

var nlClub = /** @class */ (function () {
    function nlClub(id) {
        this.championshipTitle = new Array();
        for (var _i = 0, _a = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            if (club[0] === id) {
                this.nl_id = club[0];
                this.nl_name = club[1];
                this.nl_founderyear = Number(club[2]);
                this.nl_coach = club[3];
                this.nl_ceo = club[4];
                this.nl_sportchef = club[5];
                this.nl_stadion = club[6];
                this.nl_chairs = Number(club[7]);
                this.nl_stand = Number(club[8]);
                this.nl_total = Number(club[8]) + Number(club[7]);
                this.nl_address = club[9];
                this.nl_postalcode = club[10];
                this.nl_city = club[11];
                this.nl_email = club[12];
                this.nl_logo = "assets/nl_assets/" + club[13];
                this.nl_photo = "assets/nl_assets/" + club[14];
            }
        }
        for (var _b = 0, _c = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].championship; _b < _c.length; _b++) {
            var year = _c[_b];
            if (year[2] === id) {
                this.championshipTitle.push(Number(year[0]));
            }
        }
    }
    return nlClub;
}());



/***/ }),

/***/ "./src/app/nlclub/nlclubitem/nlclubitem.component.css":
/*!************************************************************!*\
  !*** ./src/app/nlclub/nlclubitem/nlclubitem.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n    margin: 10px;\r\n  }\r\n  img {\r\n    width: 300px;\r\n  }\r\n  h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }"

/***/ }),

/***/ "./src/app/nlclub/nlclubitem/nlclubitem.component.html":
/*!*************************************************************!*\
  !*** ./src/app/nlclub/nlclubitem/nlclubitem.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-content>\n    <table style=\"width:100%\">\n        <tr>\n          <mat-card-title>{{ nl_club.nl_name }}</mat-card-title>\n        </tr>\n        <tr height=\"300px\">\n          <img mat-card-image [src]=\"nl_club.nl_logo\" alt=\"{{ nl_club.nl_name }}\" width=\"100px\">\n        </tr>\n        <tr>\n            <button mat-fab routerLink=\"{{nl_club.nl_id}}\">\n              <mat-icon>home</mat-icon>\n            </button>\n        </tr>\n      </table>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/nlclub/nlclubitem/nlclubitem.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/nlclub/nlclubitem/nlclubitem.component.ts ***!
  \***********************************************************/
/*! exports provided: NlclubitemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclubitemComponent", function() { return NlclubitemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nlclub_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nlclub.model */ "./src/app/nlclub/nlclub.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NlclubitemComponent = /** @class */ (function () {
    function NlclubitemComponent(route) {
        this.route = route;
    }
    NlclubitemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _nlclub_model__WEBPACK_IMPORTED_MODULE_2__["nlClub"])
    ], NlclubitemComponent.prototype, "nl_club", void 0);
    NlclubitemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclubitem',
            template: __webpack_require__(/*! ./nlclubitem.component.html */ "./src/app/nlclub/nlclubitem/nlclubitem.component.html"),
            styles: [__webpack_require__(/*! ./nlclubitem.component.css */ "./src/app/nlclub/nlclubitem/nlclubitem.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NlclubitemComponent);
    return NlclubitemComponent;
}());



/***/ }),

/***/ "./src/app/nlclub/nlclublist/nlclublist.component.css":
/*!************************************************************!*\
  !*** ./src/app/nlclub/nlclublist/nlclublist.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n  padding-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n#container {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  width: 100%;\r\n  -ms-grid-columns: 1fr;\r\n      grid-template-columns: 1fr;\r\n  -ms-grid-rows: 1fr;\r\n      grid-template-rows: 1fr;\r\n}\r\n\r\n@media (min-width: 600px) {\r\n  #container {\r\n    -ms-grid-columns: 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media (min-width: 1080px) {\r\n  #container {\r\n    -ms-grid-columns: 1fr 1fr 1fr;\r\n        grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n  "

/***/ }),

/***/ "./src/app/nlclub/nlclublist/nlclublist.component.html":
/*!*************************************************************!*\
  !*** ./src/app/nlclub/nlclublist/nlclublist.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n    <app-nlclubitem *ngFor=\"let item of clubs.values()\" [nl_club]=\"item\"></app-nlclubitem>\n</div>"

/***/ }),

/***/ "./src/app/nlclub/nlclublist/nlclublist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/nlclub/nlclublist/nlclublist.component.ts ***!
  \***********************************************************/
/*! exports provided: NlclublistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclublistComponent", function() { return NlclublistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _nlclub_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nlclub.model */ "./src/app/nlclub/nlclub.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NlclublistComponent = /** @class */ (function () {
    function NlclublistComponent(route) {
        this.route = route;
    }
    NlclublistComponent.prototype.ngOnInit = function () {
        this.clubs = new Map();
        for (var _i = 0, _a = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].clubs; _i < _a.length; _i++) {
            var club = _a[_i];
            this.clubs.set(club[0], new _nlclub_model__WEBPACK_IMPORTED_MODULE_2__["nlClub"](club[0]));
        }
    };
    NlclublistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclublist',
            template: __webpack_require__(/*! ./nlclublist.component.html */ "./src/app/nlclub/nlclublist/nlclublist.component.html"),
            styles: [__webpack_require__(/*! ./nlclublist.component.css */ "./src/app/nlclub/nlclublist/nlclublist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], NlclublistComponent);
    return NlclublistComponent;
}());



/***/ }),

/***/ "./src/app/nlclub/nlclubsite/nlclubsite.component.css":
/*!************************************************************!*\
  !*** ./src/app/nlclub/nlclubsite/nlclubsite.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    padding-top: 50px;\r\n    text-align: center;\r\n  }\r\n  \r\n  #container {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n    -ms-grid-columns: 1fr;\r\n        grid-template-columns: 1fr;\r\n    -ms-grid-rows: 1fr;\r\n        grid-template-rows: 1fr;\r\n    grid-column-gap: 24px;\r\n    grid-row-gap:  24px\r\n  }\r\n  \r\n  @media (min-width: 600px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  @media (min-width: 1080px) {\r\n    #container {\r\n      -ms-grid-columns: 1fr 1fr 1fr;\r\n          grid-template-columns: 1fr 1fr 1fr;\r\n    }\r\n  }\r\n  \r\n  #table1 {\r\n    display: -ms-grid;\r\n    display: grid;\r\n    width: 100%;\r\n    -ms-grid-columns: 3fr 4fr;\r\n        grid-template-columns: 3fr 4fr;\r\n}\r\n  \r\n  img {\r\n    width: 300px;\r\n}"

/***/ }),

/***/ "./src/app/nlclub/nlclubsite/nlclubsite.component.html":
/*!*************************************************************!*\
  !*** ./src/app/nlclub/nlclubsite/nlclubsite.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n      <mat-card-content>\n          <div id=\"container\">\n                <mat-card>\n                    <mat-card-content>\n                    <div id=\"table1\">\n                      <mat-card-title style=\"font-weight: bold\" >Leitung</mat-card-title>\n                      <p style=\"font-weight: bold\">CEO</p>\n                      <p>{{club.nl_ceo}}</p>\n                      <p style=\"font-weight: bold\">Sportchef</p>\n                      <p>{{club.nl_sportchef}}</p>\n                      <p style=\"font-weight: bold\">Coach</p>\n                      <p>{{club.nl_coach}}</p>\n                      <p style=\"font-weight: bold\">Gründungsjahr</p>\n                      <p>{{club.nl_founderyear}}</p>\n                    </div>\n                  </mat-card-content>\n                </mat-card>\n                <mat-card>\n                    <mat-card-content>\n                    <div id=\"table2\">\n                        <mat-card-title style=\"font-weight: bold\">Stadion</mat-card-title>\n                        <p>{{club.nl_stadion}}</p>\n                        <p style=\"font-weight: bold\">Sitzplätze</p>\n                        <p>{{club.nl_chairs}}</p>\n                        <p style=\"font-weight: bold\">Stehplätze</p>\n                        <p>{{club.nl_stand}}</p>\n                        <p style=\"font-weight: bold\">Stehplätze</p>\n                        <p>{{club.nl_total}}</p>\n                      </div>\n                    </mat-card-content>\n                  </mat-card>\n                  <mat-card>\n                    <mat-card-content>\n                      <div id=\"table2\">\n                        <mat-card-title style=\"font-weight: bold\">Meisterschaften</mat-card-title>\n                        <p *ngFor=\"let title of club.championshipTitle\">{{ title }}</p>\n                      </div>\n                    </mat-card-content>\n                  </mat-card>\n                  <table width= 500px>\n                      <tr>\n                          <td><p style=\"font-weight: bold\">Adresse</p></td>\n                          <td><p>{{club.nl_address}}</p></td>\n                      </tr>\n                      <tr>\n                          <td></td>\n                          <td>{{club.nl_postalcode }} {{club.nl_city }}</td>\n                      </tr>\n                      <tr>\n                          <td><p style=\"font-weight: bold\">EMail Adresse</p></td>\n                          <td><p>{{club.nl_email}}</p></td>\n                      </tr>\n                  </table>\n                <img mat-card-image [src]=\"club.nl_logo\" alt=\"{{ club.nl_name }}\" width=\"100px\">\n                <img mat-card-image [src]=\"club.nl_photo\" alt=\"{{ club.nl_name }}\" width=\"100px\">\n              </div>\n     </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/nlclub/nlclubsite/nlclubsite.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/nlclub/nlclubsite/nlclubsite.component.ts ***!
  \***********************************************************/
/*! exports provided: NlclubsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlclubsiteComponent", function() { return NlclubsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nlclub_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nlclub.model */ "./src/app/nlclub/nlclub.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NlclubsiteComponent = /** @class */ (function () {
    function NlclubsiteComponent(route) {
        this.route = route;
    }
    NlclubsiteComponent.prototype.ngOnInit = function () {
        var id;
        id = this.route.snapshot.params['nl_id'];
        this.club = new _nlclub_model__WEBPACK_IMPORTED_MODULE_2__["nlClub"](id);
    };
    NlclubsiteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nlclubsite',
            template: __webpack_require__(/*! ./nlclubsite.component.html */ "./src/app/nlclub/nlclubsite/nlclubsite.component.html"),
            styles: [__webpack_require__(/*! ./nlclubsite.component.css */ "./src/app/nlclub/nlclubsite/nlclubsite.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NlclubsiteComponent);
    return NlclubsiteComponent;
}());



/***/ }),

/***/ "./src/app/routing/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/routing/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nghome/nghome.component */ "./src/app/nghome/nghome.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helloworld/helloworld.component */ "./src/app/helloworld/helloworld.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gallery/gallery.component */ "./src/app/gallery/gallery.component.ts");
/* harmony import */ var _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mountain/mountain-list/mountain-list.component */ "./src/app/mountain/mountain-list/mountain-list.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _nlclub_nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../nlclub/nlclublist/nlclublist.component */ "./src/app/nlclub/nlclublist/nlclublist.component.ts");
/* harmony import */ var _nlclub_nlclubsite_nlclubsite_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../nlclub/nlclubsite/nlclubsite.component */ "./src/app/nlclub/nlclubsite/nlclubsite.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: 'ng', component: _nghome_nghome_component__WEBPACK_IMPORTED_MODULE_2__["NghomeComponent"] },
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'hw', component: _helloworld_helloworld_component__WEBPACK_IMPORTED_MODULE_4__["HelloworldComponent"] },
    { path: 'gallery', component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"] },
    { path: 'ml', component: _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_6__["MountainListComponent"] },
    { path: 'ml/:id', component: _mountain_mountain_list_mountain_list_component__WEBPACK_IMPORTED_MODULE_6__["MountainListComponent"] },
    { path: 'video', component: _video_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"] },
    { path: 'nlclubs', component: _nlclub_nlclublist_nlclublist_component__WEBPACK_IMPORTED_MODULE_8__["NlclublistComponent"] },
    { path: 'nlclubs/:nl_id', component: _nlclub_nlclubsite_nlclubsite_component__WEBPACK_IMPORTED_MODULE_9__["NlclubsiteComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/video/video.component.css":
/*!*******************************************!*\
  !*** ./src/app/video/video.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/video/video.component.html":
/*!********************************************!*\
  !*** ./src/app/video/video.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = /** @class */ (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
    };
    VideoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideoComponent);
    return VideoComponent;
}());



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
var environment = {
    production: false,
    mountains: {
        type: 'FeatureCollection',
        features: [
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.005382, 46.577555]
                },
                properties: {
                    id: 'eig',
                    name: 'Eiger',
                    el: 3967,
                    url: '/e4/pages/eiger.php',
                    img: './assets/img/eiger.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.020156, 45.931455]
                },
                properties: {
                    id: 'mge',
                    name: 'Monte Generoso',
                    el: 1701,
                    url: '/e4/pages/generoso.php',
                    img: './assets/img/generoso.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [7.658434, 45.976653]
                },
                properties: {
                    id: 'mat',
                    name: 'Matterhorn',
                    el: 4477,
                    url: '/e4/pages/matterhorn.php',
                    img: './assets/img/matterhorn.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.681283, 46.73697]
                },
                properties: {
                    id: 'bri',
                    name: 'Bristen',
                    el: 3073,
                    url: '/e4/pages/bristen.php',
                    img: './assets/img/bristen.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [7.775339, 46.711302]
                },
                properties: {
                    id: 'nie',
                    name: 'Niederhorn',
                    el: 1963,
                    url: '/e4/pages/niederhorn.php',
                    img: './assets/img/niederhorn.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.908117, 46.382328]
                },
                properties: {
                    id: 'pbe',
                    name: 'Piz Bernina',
                    el: 4049,
                    url: '/e4/pages/pizbernina.php',
                    img: './assets/img/pizbernina.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.485215, 47.056731]
                },
                properties: {
                    id: 'rig',
                    name: 'Rigi',
                    el: 1798,
                    url: '/e4/pages/rigi.php',
                    img: './assets/img/rigi.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.343259, 47.249403]
                },
                properties: {
                    id: 'san',
                    name: 'Säntis',
                    el: 2502,
                    url: '/e4/pages/santis.php',
                    img: './assets/img/santis.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.437769, 46.772067]
                },
                properties: {
                    id: 'tit',
                    name: 'Titlis',
                    el: 3238,
                    url: '/e4/pages/titlis.php',
                    img: './assets/img/titlis.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.914868, 46.811151]
                },
                properties: {
                    id: 'tod',
                    name: 'Tödi',
                    el: 3614,
                    url: '/e4/pages/todi.php',
                    img: './assets/img/todi.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [9.221249, 46.898255]
                },
                properties: {
                    id: 'tsh',
                    name: 'Tschingelhörner',
                    el: 2849,
                    url: '/e4/pages/tschingelhorner.php',
                    img: './assets/img/tschingelhorner.jpg',
                    mountainrailway: false
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.49205, 47.349499]
                },
                properties: {
                    id: 'uet',
                    name: 'Uetliberg',
                    el: 870,
                    url: '/e4/pages/uetliberg.php',
                    img: './assets/img/uetliberg.jpg',
                    mountainrailway: true
                }
            },
            {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [8.988836, 46.992828]
                },
                properties: {
                    id: 'gla',
                    name: 'foo foo',
                    el: 2914,
                    url: '/e4/pages/glarnisch.php',
                    img: './assets/img/glarnisch.jpg',
                    mountainrailway: true
                }
            }
        ]
    },
    clubs: [
        [
            '1001',
            'HC Ambrì Piotta',
            '1937',
            'Luca Cereda',
            'Michele Orsi',
            'Paolo Duca',
            'Valascia',
            '2000',
            '4500',
            'Casella Postale',
            '6775',
            'Ambri',
            'info@hcap.ch',
            'amb-logo.png',
            'ambri-photo.jpg'
        ],
        [
            '1002',
            'SC Bern',
            '1931',
            'Kari Jalonen',
            'Marc Lüthi',
            'Alex Chatelain',
            'PostFinance-Arena',
            '7139',
            '9892',
            'Mingerstrasse 12B',
            '3014',
            'Bern',
            'info@scb.ch',
            'ber-logo.png',
            'bern-photo.jpg'
        ],
        [
            '1003',
            'EHC Biel',
            '1939',
            'Antti Törmänen',
            'Daniel Villard',
            'Martin Steinegger',
            'Tissot Arena',
            '4411',
            '2110',
            'Bahnhofstrasse 17',
            '2501',
            'Biel',
            'hotline@ehcb.ch',
            'bie-logo.png',
            'biel-photo.jpg'
        ],
        [
            '1004',
            'HC Davos',
            '1921',
            '',
            'Gaudenz F. Domenig',
            'René Müller',
            'Vaillant Arena',
            '3395',
            '3400',
            'Eisbahnstrasse 2',
            '7270',
            'Davos Platz',
            'nfo@hcd.ch',
            'dav-logo.png',
            'davos-photo.jpg'
        ],
        [
            '1005',
            'Fribourg-Gottéron',
            '1938',
            'Mark French',
            'Raphaël Berger',
            'Christian Dubé',
            'BCF-Arena',
            '3174',
            '3526',
            'CP 551',
            '1701',
            'Fribourg',
            'office@fribourg-gotteron.ch',
            'fri-logo.png',
            'fribourg-photo.jpg'
        ],
        [
            '1006',
            'Genève-Servette HC',
            '1905',
            'Chris McSorley',
            'Christophe Stuck',
            'Chris McSorley',
            'Les Vernets',
            '4479',
            '2656',
            'Routes des jeunes 10',
            '1227',
            'Genf',
            'nfo@gshc.ch',
            'gen-logo.png',
            'genf-photo.jpg'
        ],
        [
            '1007',
            'SCL Tigers',
            '1946',
            'Heinz Ehlers',
            'Peter Müller',
            'Marco Bayer',
            'Ilfishalle',
            '2943',
            '3107',
            'Güterstrasse 18',
            '3550',
            'Langnau',
            'nfo@scltigers.ch',
            'lan-logo.png',
            'langnau-photo.jpg'
        ],
        [
            '1008',
            'Lausanne HC',
            '1922',
            'Ville Peltonen',
            'Sacha Weibel',
            'Jan Alston',
            'Malley',
            '4610',
            '2090',
            'Case Postale 171',
            '1000',
            'Lausanne',
            'contact@lausannehc.ch',
            'lau-logo.png',
            'lausanne-photo.jpg'
        ],
        [
            '1009',
            'HC Lugano',
            '1941',
            'Greg Ireland',
            'Jean-Jacques Aeschlimann',
            'Roland Habisreutinger',
            'Cornèr Arena',
            '4200',
            '3000',
            'Casella postale 4226',
            '6904',
            'Lugano',
            'sede@hclugano.ch',
            'lug-logo.png',
            'lugano-photo.jpg'
        ],
        [
            '1010',
            'SC Rapperswil-Jona Lakers',
            '1945',
            'Jeff Tomlinson',
            'Markus Bütler',
            'Roger Maier',
            'St. Galler Kantonalbank Arena',
            '4000',
            '2100',
            'Walter-Denzler-Strasse 3',
            '8640',
            'Rapperswil',
            'info@lakers.ch',
            'rap-logo.png',
            'rapperswil-photo.jpg'
        ],
        [
            '1011',
            'ZSC Lions',
            '1930',
            'Serge Aubin',
            'Peter Zahner',
            'Sven Leuenberger',
            'Hallenstadion',
            '11200',
            '0',
            'Siewerdtstrasse 105',
            '8050',
            'Zürich',
            'info@zsclions.ch',
            'zur-logo.png',
            'zuerich-photo.jpg'
        ],
        [
            '1012',
            'EV Zug',
            '1967',
            'Dan Tangnes',
            'Patrick Lengwiler',
            'Reto Kläy',
            'Bossard Arena',
            '4848',
            '2352',
            'Weststrasse 11',
            '6303',
            'Zug',
            'info@evz.ch',
            'zug-logo.png',
            'zug-photo.jpg'
        ]
    ],
    championship: [
        ['1938', 'HC Davos', '1004'],
        ['1939', 'HC Davos', '1004'],
        ['1940', '', ''],
        ['1941', 'HC Davos', '1004'],
        ['1942', 'HC Davos', '1004'],
        ['1943', 'HC Davos', '1004'],
        ['1944', 'HC Davos', '1004'],
        ['1945', 'HC Davos', '1004'],
        ['1946', 'HC Davos', '1004'],
        ['1947', 'HC Davos', '1004'],
        ['1948', 'HC Davos', '1004'],
        ['1949', 'ZSC Lions', '1011'],
        ['1950', 'HC Davos', '1004'],
        ['1951', 'EHC Arosa', '2006'],
        ['1952', 'EHC Arosa', '2006'],
        ['1953', 'EHC Arosa', '2006'],
        ['1954', 'EHC Arosa', '2006'],
        ['1955', 'EHC Arosa', '2006'],
        ['1956', 'EHC Arosa', '2006'],
        ['1957', 'EHC Arosa', '2006'],
        ['1958', 'HC Davos', '1004'],
        ['1959', 'SC Bern', '1002'],
        ['1960', 'HC Davos', '1004'],
        ['1961', 'ZSC Lions', '1011'],
        ['1962', 'EHC Visp', '2004'],
        ['1963', 'HC Villars', '2001'],
        ['1964', 'HC Villars', '2001'],
        ['1965', 'SC Bern', '1002'],
        ['1966', 'GC Zürich', '2003'],
        ['1967', 'EHC Kloten', '2005'],
        ['1968', 'HC La Chaux-de-Fonds', '2002'],
        ['1969', 'HC La Chaux-de-Fonds', '2002'],
        ['1970', 'HC La Chaux-de-Fonds', '2002'],
        ['1971', 'HC La Chaux-de-Fonds', '2002'],
        ['1972', 'HC La Chaux-de-Fonds', '2002'],
        ['1973', 'HC La Chaux-de-Fonds', '2002'],
        ['1974', 'SC Bern', '1002'],
        ['1975', 'SC Bern', '1002'],
        ['1976', 'SCL Tigers', '1007'],
        ['1977', 'SC Bern', '1002'],
        ['1978', 'EHC Biel', '1003'],
        ['1979', 'SC Bern', '1002'],
        ['1980', 'EHC Arosa', '2006'],
        ['1981', 'EHC Biel', '1003'],
        ['1982', 'EHC Arosa', '2006'],
        ['1983', 'EHC Biel', '1003'],
        ['1984', 'HC Davos', '1004'],
        ['1985', 'HC Davos', '1004'],
        ['1986', 'HC Lugano', '1009'],
        ['1987', 'HC Lugano', '1009'],
        ['1988', 'HC Lugano', '1009'],
        ['1989', 'SC Bern', '1002'],
        ['1990', 'HC Lugano', '1009'],
        ['1991', 'SC Bern', '1002'],
        ['1992', 'SC Bern', '1002'],
        ['1993', 'EHC Kloten', '2005'],
        ['1994', 'EHC Kloten', '2005'],
        ['1995', 'EHC Kloten', '2005'],
        ['1996', 'EHC Kloten', '2005'],
        ['1997', 'SC Bern', '1002'],
        ['1998', 'EV Zug', '1012'],
        ['1999', 'HC Lugano', '1009'],
        ['2000', 'ZSC Lions', '1011'],
        ['2001', 'ZSC Lions', '1011'],
        ['2002', 'HC Davos', '1004'],
        ['2003', 'HC Lugano', '1009'],
        ['2004', 'SC Bern', '1002'],
        ['2005', 'HC Davos', '1004'],
        ['2006', 'HC Lugano', '1009'],
        ['2007', 'HC Davos', '1004'],
        ['2008', 'ZSC Lions', '1011'],
        ['2009', 'HC Davos', '1004'],
        ['2010', 'SC Bern', '1002'],
        ['2011', 'HC Davos', '1004'],
        ['2012', 'ZSC Lions', '1011'],
        ['2013', 'SC Bern', '1002'],
        ['2014', 'ZSC Lions', '1011'],
        ['2015', 'HC Davos', '1004'],
        ['2016', 'SC Bern', '1002'],
        ['2017', 'SC Bern', '1002'],
        ['2018', 'ZSC Lions', '1011']
    ]
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\dev\M152\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map