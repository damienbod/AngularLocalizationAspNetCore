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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var angular2localization_1 = require('angular2localization/angular2localization');
var ProductService_1 = require('../services/ProductService');
var angular2localization_2 = require('angular2localization/angular2localization');
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
//# sourceMappingURL=shop.component.js.map