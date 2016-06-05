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
var ShopAdminComponent = (function () {
    function ShopAdminComponent(_locale, _productService) {
        var _this = this;
        this._locale = _locale;
        this._productService = _productService;
        this.message = "shop-admin.component";
        this._locale.countryCodeChanged.subscribe(function (item) { return _this.onCountryChangedDataRecieved(item); });
        this._locale.currencyCodeChanged.subscribe(function (currency) { return _this.onChangedCurrencyRecieved(currency); });
    }
    ShopAdminComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit ShopAdminComponent");
        this.Currency = this._locale.getCurrentCurrency();
        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
            this.Currency = "CHF";
        }
    };
    ShopAdminComponent.prototype.onCountryChangedDataRecieved = function (item) {
        console.log("onProductDataRecieved");
        console.log(item);
    };
    ShopAdminComponent.prototype.onChangedCurrencyRecieved = function (currency) {
        this.Currency = currency;
        console.log("onChangedCurrencyRecieved");
        console.log(currency);
    };
    ShopAdminComponent = __decorate([
        core_1.Component({
            selector: 'shopadmincomponent',
            template: require('./shop-admin.component.html'),
            directives: [common_1.CORE_DIRECTIVES],
            pipes: [angular2localization_2.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [angular2localization_1.LocaleService, ProductService_1.ProductService])
    ], ShopAdminComponent);
    return ShopAdminComponent;
}());
exports.ShopAdminComponent = ShopAdminComponent;
//# sourceMappingURL=shop-admin.component.js.map