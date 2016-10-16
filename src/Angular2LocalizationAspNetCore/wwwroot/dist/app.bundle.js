webpackJsonp([0],{

/***/ 0:
/*!*****************************!*\
  !*** ./angular2App/boot.ts ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ 1);
	var app_module_1 = __webpack_require__(/*! ./app/app.module */ 23);
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 23:
/*!***************************************!*\
  !*** ./angular2App/app/app.module.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var common_1 = __webpack_require__(/*! @angular/common */ 22);
	var forms_1 = __webpack_require__(/*! @angular/forms */ 24);
	var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ 21);
	var app_component_1 = __webpack_require__(/*! ./app.component */ 28);
	var app_constants_1 = __webpack_require__(/*! ./app.constants */ 34);
	var app_routes_1 = __webpack_require__(/*! ./app.routes */ 37);
	var http_1 = __webpack_require__(/*! @angular/http */ 30);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 67);
	var shop_component_1 = __webpack_require__(/*! ./shop/shop.component */ 69);
	var shop_admin_component_1 = __webpack_require__(/*! ./shop-admin/shop-admin.component */ 71);
	var ProductService_1 = __webpack_require__(/*! ./services/ProductService */ 33);
	var angular2localization_1 = __webpack_require__(/*! angular2localization */ 29);
	var AppModule = (function () {
	    function AppModule() {
	    }
	    AppModule = __decorate([
	        core_1.NgModule({
	            imports: [
	                platform_browser_1.BrowserModule,
	                common_1.CommonModule,
	                forms_1.FormsModule,
	                app_routes_1.routing,
	                http_1.HttpModule,
	                http_1.JsonpModule,
	                angular2localization_1.LocaleModule.forRoot(),
	                angular2localization_1.LocalizationModule.forRoot()
	            ],
	            declarations: [
	                app_component_1.AppComponent,
	                shop_component_1.ShopComponent,
	                home_component_1.HomeComponent,
	                shop_admin_component_1.ShopAdminComponent
	            ],
	            providers: [
	                ProductService_1.ProductService,
	                app_constants_1.Configuration
	            ],
	            bootstrap: [app_component_1.AppComponent],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], AppModule);
	    return AppModule;
	}());
	exports.AppModule = AppModule;


/***/ },

/***/ 28:
/*!******************************************!*\
  !*** ./angular2App/app/app.component.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var angular2localization_1 = __webpack_require__(/*! angular2localization */ 29);
	var ProductService_1 = __webpack_require__(/*! ./services/ProductService */ 33);
	var AppComponent = (function (_super) {
	    __extends(AppComponent, _super);
	    function AppComponent(locale, localization, _productService) {
	        var _this = this;
	        _super.call(this, null, localization);
	        this.locale = locale;
	        this.localization = localization;
	        this._productService = _productService;
	        this.locale.addLanguage('de');
	        this.locale.addLanguage('fr');
	        this.locale.addLanguage('it');
	        this.locale.addLanguage('en');
	        this.locale.definePreferredLocale('en', 'US', 30);
	        this.localization.translationProvider('./i18n/locale-');
	        this.localization.updateTranslation();
	        this.locale.languageCodeChanged.subscribe(function (item) { return _this.onLanguageCodeChangedDataRecieved(item); });
	    }
	    AppComponent.prototype.ChangeCulture = function (language, country, currency) {
	        this.locale.setCurrentLocale(language, country);
	        this.locale.setCurrentCurrency(currency);
	    };
	    AppComponent.prototype.ChangeCurrency = function (currency) {
	        this.locale.setCurrentCurrency(currency);
	    };
	    AppComponent.prototype.onLanguageCodeChangedDataRecieved = function (item) {
	        console.log("onLanguageCodeChangedDataRecieved App");
	        console.log(item);
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            template: __webpack_require__(/*! ./app.component.html */ 35),
	            styles: [__webpack_require__(/*! ./app.component.scss */ 36)]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
	    ], AppComponent);
	    return AppComponent;
	}(angular2localization_1.Locale));
	exports.AppComponent = AppComponent;


/***/ },

/***/ 33:
/*!****************************************************!*\
  !*** ./angular2App/app/services/ProductService.ts ***!
  \****************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var http_1 = __webpack_require__(/*! @angular/http */ 30);
	__webpack_require__(/*! rxjs/add/operator/map */ 31);
	var Observable_1 = __webpack_require__(/*! rxjs/Observable */ 5);
	var app_constants_1 = __webpack_require__(/*! ../app.constants */ 34);
	var angular2localization_1 = __webpack_require__(/*! angular2localization */ 29);
	var ProductService = (function () {
	    function ProductService(_http, _configuration, _locale) {
	        var _this = this;
	        this._http = _http;
	        this._configuration = _configuration;
	        this._locale = _locale;
	        this.GetAvailableProducts = function () {
	            console.log(_this._locale.getCurrentLanguage());
	            console.log(_this._locale.getCurrentCountry());
	            _this.isoCode = _this._locale.getCurrentLanguage() + "-" + _this._locale.getCurrentCountry();
	            _this.setHeaders();
	            return _this._http.get(_this.actionUrl + "AvailableProducts?culture=" + _this.isoCode, {
	                headers: _this.headers,
	                body: '',
	            }).map(function (res) { return res.json(); });
	        };
	        this.CreateProduct = function (product) {
	            var item = JSON.stringify(product);
	            _this.setHeaders();
	            return _this._http.post(_this.actionUrlShopAdmin, item, {
	                headers: _this.headers
	            }).map(function (response) { return response.json(); });
	        };
	        this.actionUrl = _configuration.Server + "api/Shop/";
	        this.actionUrlShopAdmin = _configuration.Server + "api/ShopAdmin/";
	    }
	    ProductService.prototype.setHeaders = function () {
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    };
	    ProductService.prototype.handleError = function (error) {
	        console.error(error);
	        return Observable_1.Observable.throw(error.json().error || 'Server error');
	    };
	    ProductService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, angular2localization_1.LocaleService])
	    ], ProductService);
	    return ProductService;
	}());
	exports.ProductService = ProductService;


/***/ },

/***/ 34:
/*!******************************************!*\
  !*** ./angular2App/app/app.constants.ts ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var Configuration = (function () {
	    function Configuration() {
	        this.Server = "http://localhost:5000/";
	    }
	    Configuration = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], Configuration);
	    return Configuration;
	}());
	exports.Configuration = Configuration;


/***/ },

/***/ 35:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.html ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\" style=\"margin-top: 15px;\">\r\n   \r\n    <nav class=\"navbar navbar-inverse\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"navbar-header\">\r\n                <a [routerLink]=\"['/home']\" class=\"navbar-brand\"><img src=\"../images/damienbod.jpg\" height=\"40\" style=\"margin-top:-10px;\" /></a>\r\n            </div>\r\n            <ul class=\"nav navbar-nav\">\r\n                <li><a [routerLink]=\"['/home']\">{{ 'NAV_MENU_HOME' | translate:lang }}</a></li>\r\n                <li><a [routerLink]=\"['/shop']\">{{ 'NAV_MENU_SHOP' | translate:lang }}</a></li>\r\n                <li><a [routerLink]=\"['/shopAdmin']\">{{ 'NAV_MENU_SHOP_ADMIN' | translate:lang }}</a></li>\r\n            </ul>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li><a (click)=\"ChangeCulture('de','CH', 'CHF')\">de</a></li>\r\n                <li><a (click)=\"ChangeCulture('fr','CH', 'CHF')\">fr</a></li>\r\n                <li><a (click)=\"ChangeCulture('it','CH', 'CHF')\">it</a></li>\r\n                <li><a (click)=\"ChangeCulture('en','US', 'CHF')\">en</a></li>\r\n            </ul>\r\n\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                <li>\r\n                    <div class=\"navbar\" style=\"margin-bottom:0;\">\r\n                        <form class=\"navbar-form pull-left\">\r\n                            <select (change)=\"ChangeCurrency($event.target.value)\" class=\"form-control\">\r\n                                <option *ngFor=\"let currency of ['CHF', 'EUR']\">{{currency}}</option>\r\n                            </select>\r\n                        </form>\r\n                    </div>\r\n                </li>             \r\n            </ul>\r\n        </div>\r\n    </nav>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ },

/***/ 36:
/*!********************************************!*\
  !*** ./angular2App/app/app.component.scss ***!
  \********************************************/
/***/ function(module, exports) {

	module.exports = "// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\");\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = require(\"!./../../node_modules/style-loader/addStyles.js\")(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(module.hot) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\", function() {\n\t\t\tvar newContent = require(\"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./app.component.scss\");\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}"

/***/ },

/***/ 37:
/*!***************************************!*\
  !*** ./angular2App/app/app.routes.ts ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var router_1 = __webpack_require__(/*! @angular/router */ 38);
	var home_component_1 = __webpack_require__(/*! ./home/home.component */ 67);
	var shop_component_1 = __webpack_require__(/*! ./shop/shop.component */ 69);
	var shop_admin_component_1 = __webpack_require__(/*! ./shop-admin/shop-admin.component */ 71);
	var appRoutes = [
	    { path: '', component: home_component_1.HomeComponent },
	    { path: 'home', component: home_component_1.HomeComponent },
	    { path: 'shop', component: shop_component_1.ShopComponent },
	    { path: 'shopAdmin', component: shop_admin_component_1.ShopAdminComponent }
	];
	exports.routing = router_1.RouterModule.forRoot(appRoutes);


/***/ },

/***/ 67:
/*!************************************************!*\
  !*** ./angular2App/app/home/home.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var HomeComponent = (function () {
	    function HomeComponent() {
	        this.message = "home.component";
	    }
	    HomeComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit HomeComponent");
	    };
	    HomeComponent = __decorate([
	        core_1.Component({
	            selector: 'homecomponent',
	            template: __webpack_require__(/*! ./home.component.html */ 68)
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 68:
/*!**************************************************!*\
  !*** ./angular2App/app/home/home.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\">\r\n\r\n    <p>hello home</p>\r\n\r\n</div>"

/***/ },

/***/ 69:
/*!************************************************!*\
  !*** ./angular2App/app/shop/shop.component.ts ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var ProductService_1 = __webpack_require__(/*! ../services/ProductService */ 33);
	var angular2localization_1 = __webpack_require__(/*! angular2localization */ 29);
	var ShopComponent = (function (_super) {
	    __extends(ShopComponent, _super);
	    function ShopComponent(_locale, localization, _productService) {
	        var _this = this;
	        _super.call(this, null, localization);
	        this._locale = _locale;
	        this.localization = localization;
	        this._productService = _productService;
	        this.message = "shop.component";
	        this._locale.languageCodeChanged.subscribe(function (item) { return _this.onLanguageCodeChangedDataRecieved(item); });
	        this._locale.currencyCodeChanged.subscribe(function (currency) { return _this.onChangedCurrencyRecieved(currency); });
	    }
	    ShopComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit ShopComponent");
	        this.GetProducts();
	        this.Currency = this._locale.getCurrentCurrency();
	        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
	            this.Currency = "CHF";
	        }
	    };
	    ShopComponent.prototype.GetProducts = function () {
	        var _this = this;
	        console.log('ShopComponent:GetProducts starting...');
	        this._productService.GetAvailableProducts()
	            .subscribe(function (data) {
	            _this.Products = data;
	        }, function (error) { return console.log(error); }, function () {
	            console.log('ProductService:GetProducts completed');
	        });
	    };
	    ShopComponent.prototype.onLanguageCodeChangedDataRecieved = function (item) {
	        this.GetProducts();
	        console.log("onCountryChangedDataRecieved Shop");
	        console.log(item);
	    };
	    ShopComponent.prototype.onChangedCurrencyRecieved = function (currency) {
	        this.Currency = currency;
	        console.log("onLanguageCodeChangedDataRecieved Shop");
	        console.log(currency);
	    };
	    ShopComponent = __decorate([
	        core_1.Component({
	            selector: 'shopcomponent',
	            template: __webpack_require__(/*! ./shop.component.html */ 70)
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
	    ], ShopComponent);
	    return ShopComponent;
	}(angular2localization_1.Locale));
	exports.ShopComponent = ShopComponent;


/***/ },

/***/ 70:
/*!**************************************************!*\
  !*** ./angular2App/app/shop/shop.component.html ***!
  \**************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"panel-group\" >\r\n\r\n    <div class=\"panel-group\" *ngIf=\"Products\">\r\n\r\n        <div class=\"mcbutton col-md-4\" style=\"margin-left: -15px; margin-bottom: 10px;\" *ngFor=\"let product of Products\">\r\n            <div class=\"panel panel-default\" >\r\n                <div class=\"panel-heading\" style=\"color: #9d9d9d;background-color: #222;\">\r\n                    {{product.name}}\r\n                    <span style=\"float:right;\" *ngIf=\"Currency === 'CHF'\">{{product.priceCHF}} {{Currency}}</span>\r\n                    <span style=\"float:right;\" *ngIf=\"Currency === 'EUR'\">{{product.priceEUR}} {{Currency}}</span>\r\n                </div>\r\n                <div class=\"panel-body\" style=\"height: 200px;\">\r\n                    <!--<img src=\"images/mc1.jpg\" style=\"width: 100%;margin-top: 20px;\" />-->\r\n                    {{product.description}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ },

/***/ 71:
/*!************************************************************!*\
  !*** ./angular2App/app/shop-admin/shop-admin.component.ts ***!
  \************************************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(/*! @angular/core */ 3);
	var router_1 = __webpack_require__(/*! @angular/router */ 38);
	var ProductCreateEdit_1 = __webpack_require__(/*! ../services/ProductCreateEdit */ 72);
	var angular2localization_1 = __webpack_require__(/*! angular2localization */ 29);
	var ProductService_1 = __webpack_require__(/*! ../services/ProductService */ 33);
	var ShopAdminComponent = (function (_super) {
	    __extends(ShopAdminComponent, _super);
	    function ShopAdminComponent(router, _localeService, localization, _productService) {
	        var _this = this;
	        _super.call(this, null, localization);
	        this.router = router;
	        this._localeService = _localeService;
	        this.localization = localization;
	        this._productService = _productService;
	        this.Product = new ProductCreateEdit_1.ProductCreateEdit();
	        this.submitted = false;
	        this.active = true;
	        this.saving = false;
	        this.message = "shop-admin.component";
	        this._localeService.languageCodeChanged.subscribe(function (item) { return _this.onLanguageCodeChangedDataRecieved(item); });
	    }
	    ShopAdminComponent.prototype.onSubmit = function () {
	        this.submitted = true;
	        this.Create();
	    };
	    ShopAdminComponent.prototype.ngOnInit = function () {
	        console.log("ngOnInit ShopAdminComponent");
	        this.initProduct();
	        this.Currency = this._localeService.getCurrentCurrency();
	        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
	            this.Currency = "CHF";
	        }
	    };
	    ShopAdminComponent.prototype.Create = function () {
	        var _this = this;
	        this.submitted = true;
	        this.saving = true;
	        this.Product.LocalizationRecords = [];
	        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "de-CH", Text: this.Name_de });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "fr-CH", Text: this.Name_fr });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "it-CH", Text: this.Name_it });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "en-US", Text: this.Name_en });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "de-CH", Text: this.Description_de });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "fr-CH", Text: this.Description_fr });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "it-CH", Text: this.Description_it });
	        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "en-US", Text: this.Description_en });
	        this._productService.CreateProduct(this.Product)
	            .subscribe(function (data) {
	            _this.saving = false;
	            _this.router.navigate(['/shop']);
	        }, function (error) {
	            _this.saving = false;
	            console.log(error);
	        }, function () { return _this.saving = false; });
	    };
	    ShopAdminComponent.prototype.onLanguageCodeChangedDataRecieved = function (item) {
	        console.log("onLanguageCodeChangedDataRecieved Shop Admin");
	        console.log(item + " : " + this._localeService.getCurrentLanguage());
	    };
	    ShopAdminComponent.prototype.initProduct = function () {
	        this.Product = new ProductCreateEdit_1.ProductCreateEdit();
	    };
	    ShopAdminComponent = __decorate([
	        core_1.Component({
	            selector: 'shopadmincomponent',
	            template: __webpack_require__(/*! ./shop-admin.component.html */ 73)
	        }), 
	        __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
	    ], ShopAdminComponent);
	    return ShopAdminComponent;
	}(angular2localization_1.Locale));
	exports.ShopAdminComponent = ShopAdminComponent;


/***/ },

/***/ 72:
/*!*******************************************************!*\
  !*** ./angular2App/app/services/ProductCreateEdit.ts ***!
  \*******************************************************/
/***/ function(module, exports) {

	"use strict";
	var ProductCreateEdit = (function () {
	    function ProductCreateEdit() {
	    }
	    return ProductCreateEdit;
	}());
	exports.ProductCreateEdit = ProductCreateEdit;


/***/ },

/***/ 73:
/*!**************************************************************!*\
  !*** ./angular2App/app/shop-admin/shop-admin.component.html ***!
  \**************************************************************/
/***/ function(module, exports) {

	module.exports = "<div class=\"container\">\r\n    <div [hidden]=\"submitted\">\r\n        <h1>New Product</h1>\r\n        <form *ngIf=\"active\" (ngSubmit)=\"onSubmit()\" #productForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"name\">{{ 'ADD_PRODUCT_NAME' | translate:lang }}</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"name\" required  [(ngModel)]=\"Product.Name\" name=\"name\" placeholder=\"name\" #name=\"ngModel\">\r\n                <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n                    Name is required\r\n                </div>\r\n            </div>\r\n          \r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"description\">{{ 'ADD_PRODUCT_DESCRIPTION' | translate:lang }}</label>\r\n                <input type=\"text\" class=\"form-control\" id=\"description\" required [(ngModel)]=\"Product.Description\" name=\"description\" placeholder=\"description\" #description=\"ngModel\">\r\n                <div [hidden]=\"description.valid || description.pristine\" class=\"alert alert-danger\">\r\n                    description is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"priceEUR\">{{ 'ADD_PRODUCT_PRICE_EUR' | translate:lang }}</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"priceEUR\" required [(ngModel)]=\"Product.PriceEUR\" name=\"priceEUR\" placeholder=\"priceEUR\" #priceEUR=\"ngModel\">\r\n                <div [hidden]=\"priceEUR.valid || priceEUR.pristine\" class=\"alert alert-danger\">\r\n                    priceEUR is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"priceCHF\">{{ 'ADD_PRODUCT_PRICE_CHF' | translate:lang }}</label>\r\n                <input type=\"number\" class=\"form-control\" id=\"priceCHF\" required [(ngModel)]=\"Product.PriceCHF\" name=\"priceCHF\" placeholder=\"priceCHF\" #priceCHF=\"ngModel\">\r\n                <div [hidden]=\"priceCHF.valid || priceCHF.pristine\" class=\"alert alert-danger\">\r\n                    priceCHF is required\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\" >{{ 'ADD_PRODUCT_LOCALIZED_NAME' | translate:lang }}</label>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>de</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Namede\" required [(ngModel)]=\"Name_de\"  name=\"Namede\" #Namede=\"ngModel\">\r\n                        <div [hidden]=\"Namede.valid || Namede.pristine\" class=\"alert alert-danger\">\r\n                            Name_de is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>fr</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Namefr\" required  [(ngModel)]=\"Name_fr\"  name=\"Namefr\" #Namefr=\"ngModel\">\r\n                        <div [hidden]=\"Namefr.valid || Namefr.pristine\" class=\"alert alert-danger\">\r\n                            Name_fr is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>it</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Nameit\" required [(ngModel)]=\"Name_it\" name=\"Nameit\" #Nameit=\"ngModel\">\r\n                        <div [hidden]=\"Nameit.valid || Nameit.pristine\" class=\"alert alert-danger\">\r\n                            Name_it is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>en</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Nameen\" required [(ngModel)]=\"Name_en\"  name=\"Nameen\" #Nameen=\"ngModel\">\r\n                        <div [hidden]=\"Nameen.valid || Nameen.pristine\" class=\"alert alert-danger\">\r\n                            Name_en is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n                <label class=\"control-label\">{{ 'ADD_PRODUCT_LOCALIZED_DESCRIPTION' | translate:lang }}</label>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>de</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Descriptionde\" required [(ngModel)]=\"Description_de\" name=\"Descriptionde\" #Descriptionde=\"ngModel\">\r\n                        <div [hidden]=\"Descriptionde.valid || Descriptionde.pristine\" class=\"alert alert-danger\">\r\n                            Description DE is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>fr</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Descriptionfr\" required [(ngModel)]=\"Description_fr\" name=\"Descriptionfr\" #Descriptionfr=\"ngModel\">\r\n                        <div [hidden]=\"Descriptionfr.valid || Descriptionfr.pristine\" class=\"alert alert-danger\">\r\n                            Description FR is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>it</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Descriptionit\" required [(ngModel)]=\"Description_it\" name=\"Descriptionit\" #Descriptionit=\"ngModel\">\r\n                        <div [hidden]=\"Descriptionit.valid || Descriptionit.pristine\" class=\"alert alert-danger\">\r\n                            Description IT is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\"><em>en</em></div>\r\n                    <div class=\"col-md-9\">\r\n                        <input type=\"text\" class=\"form-control\" id=\"Descriptionen\" required [(ngModel)]=\"Description_en\" name=\"Descriptionen\" #Descriptionen=\"ngModel\">\r\n                        <div [hidden]=\"Descriptionen.valid || Descriptionen.pristine\" class=\"alert alert-danger\">\r\n                            Description EN is required\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!productForm.form.valid\">Submit</button>\r\n\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }

});
//# sourceMappingURL=app.bundle.js.map