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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var angular2localization_1 = require('angular2localization/angular2localization');
var angular2localization_2 = require('angular2localization/angular2localization');
var home_component_1 = require('./home/home.component');
var shop_component_1 = require('./shop/shop.component');
var shop_admin_component_1 = require('./shop-admin/shop-admin.component');
var ProductService_1 = require('./services/ProductService');
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
            template: require('./app.component.html'),
            styles: [require('./app.component.css')],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [angular2localization_1.LocalizationService, angular2localization_1.LocaleService, ProductService_1.ProductService],
            pipes: [angular2localization_2.TranslatePipe]
        }),
        router_1.Routes([
            { path: '/home', component: home_component_1.HomeComponent },
            { path: '/shop', component: shop_component_1.ShopComponent },
            { path: '/shopAdmin', component: shop_admin_component_1.ShopAdminComponent }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
    ], AppComponent);
    return AppComponent;
}(angular2localization_1.Locale));
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map