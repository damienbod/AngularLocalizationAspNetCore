webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var platform_browser_dynamic_1 = __webpack_require__(1);
	var http_1 = __webpack_require__(280);
	var router_1 = __webpack_require__(301);
	var app_component_1 = __webpack_require__(323);
	var app_constants_1 = __webpack_require__(340);
	platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
	    router_1.ROUTER_PROVIDERS,
	    http_1.HTTP_PROVIDERS,
	    app_constants_1.Configuration,
	]);


/***/ },

/***/ 323:
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
	var core_1 = __webpack_require__(7);
	var router_1 = __webpack_require__(301);
	var angular2localization_1 = __webpack_require__(324);
	var angular2localization_2 = __webpack_require__(324);
	var home_component_1 = __webpack_require__(337);
	var shop_component_1 = __webpack_require__(338);
	var ProductService_1 = __webpack_require__(339);
	var AppComponent = (function (_super) {
	    __extends(AppComponent, _super);
	    function AppComponent(router, locale, localization, _productService) {
	        _super.call(this, null, localization);
	        this.router = router;
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
	    }
	    AppComponent.prototype.ngOnInit = function () {
	        this.router.navigate(['/home']);
	    };
	    AppComponent.prototype.ChangeCulture = function (language, country, currency) {
	        this.locale.setCurrentLocale(language, country);
	        this.locale.setCurrentCurrency(currency);
	        this.localization.updateTranslation();
	    };
	    AppComponent.prototype.ChangeCurrency = function (currency) {
	        this.locale.setCurrentCurrency(currency);
	    };
	    AppComponent = __decorate([
	        core_1.Component({
	            selector: 'my-app',
	            templateUrl: 'app/app.component.html',
	            styleUrls: ['app/app.component.css'],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            providers: [angular2localization_1.LocalizationService, angular2localization_1.LocaleService, ProductService_1.ProductService],
	            pipes: [angular2localization_2.TranslatePipe]
	        }),
	        router_1.Routes([
	            { path: '/home', component: home_component_1.HomeComponent },
	            { path: '/shop', component: shop_component_1.ShopComponent }
	        ]), 
	        __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
	    ], AppComponent);
	    return AppComponent;
	}(angular2localization_1.Locale));
	exports.AppComponent = AppComponent;


/***/ },

/***/ 337:
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
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
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
	            templateUrl: 'app/home/home.component.html',
	            directives: [common_1.CORE_DIRECTIVES]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HomeComponent);
	    return HomeComponent;
	}());
	exports.HomeComponent = HomeComponent;


/***/ },

/***/ 338:
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
	var core_1 = __webpack_require__(7);
	var common_1 = __webpack_require__(181);
	var angular2localization_1 = __webpack_require__(324);
	var ProductService_1 = __webpack_require__(339);
	var angular2localization_2 = __webpack_require__(324);
	var ShopComponent = (function () {
	    function ShopComponent(_locale, _productService) {
	        var _this = this;
	        this._locale = _locale;
	        this._productService = _productService;
	        this.message = "shop.component";
	        this._locale.countryCodeChanged.subscribe(function (item) { return _this.onCountryChangedDataRecieved(item); });
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
	    ShopComponent.prototype.onCountryChangedDataRecieved = function (item) {
	        this.GetProducts();
	        console.log("onProductDataRecieved");
	        console.log(item);
	    };
	    ShopComponent.prototype.onChangedCurrencyRecieved = function (currency) {
	        this.Currency = currency;
	        console.log("onChangedCurrencyRecieved");
	        console.log(currency);
	    };
	    ShopComponent = __decorate([
	        core_1.Component({
	            selector: 'shopcomponent',
	            templateUrl: 'app/shop/shop.component.html',
	            directives: [common_1.CORE_DIRECTIVES],
	            pipes: [angular2localization_2.TranslatePipe]
	        }), 
	        __metadata('design:paramtypes', [angular2localization_1.LocaleService, ProductService_1.ProductService])
	    ], ShopComponent);
	    return ShopComponent;
	}());
	exports.ShopComponent = ShopComponent;


/***/ },

/***/ 339:
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
	var core_1 = __webpack_require__(7);
	var http_1 = __webpack_require__(280);
	__webpack_require__(326);
	var app_constants_1 = __webpack_require__(340);
	var angular2localization_1 = __webpack_require__(324);
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
	                headers: _this.headers
	            }).map(function (res) { return res.json(); });
	        };
	        this.actionUrl = _configuration.Server + "api/Shop/";
	    }
	    ProductService.prototype.setHeaders = function () {
	        this.headers = new http_1.Headers();
	        this.headers.append('Content-Type', 'application/json');
	        this.headers.append('Accept', 'application/json');
	    };
	    ProductService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration, angular2localization_1.LocaleService])
	    ], ProductService);
	    return ProductService;
	}());
	exports.ProductService = ProductService;


/***/ },

/***/ 340:
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
	var core_1 = __webpack_require__(7);
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


/***/ }

});
//# sourceMappingURL=app.bundle.js.map