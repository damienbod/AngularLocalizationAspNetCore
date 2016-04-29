System.register(['angular2/core', 'angular2/common', 'angular2/router', 'angular2localization/angular2localization', '../services/ProductService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1, angular2localization_1, ProductService_1, angular2localization_2;
    var ShopComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
            },
            function (ProductService_1_1) {
                ProductService_1 = ProductService_1_1;
            }],
        execute: function() {
            ShopComponent = (function () {
                function ShopComponent(_locale, _productService, _router) {
                    var _this = this;
                    this._locale = _locale;
                    this._productService = _productService;
                    this._router = _router;
                    this.message = "shop.component";
                    this._locale.countryCodeChanged.subscribe(function (item) { return _this.onCountryChangedDataRecieved(item); });
                    this._locale.currencyCodeChanged.subscribe(function (currency) { return _this.onChangedCurrencyRecieved(currency); });
                }
                ShopComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit ShopComponent");
                    this.GetProducts();
                    this.Currency = this._locale.getCurrentCurrency();
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
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        pipes: [angular2localization_2.TranslatePipe]
                    }), 
                    __metadata('design:paramtypes', [angular2localization_1.LocaleService, ProductService_1.ProductService, router_1.Router])
                ], ShopComponent);
                return ShopComponent;
            }());
            exports_1("ShopComponent", ShopComponent);
        }
    }
});
//# sourceMappingURL=shop.component.js.map