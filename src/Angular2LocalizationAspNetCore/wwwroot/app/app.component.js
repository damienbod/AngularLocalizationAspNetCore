System.register(['@angular/core', '@angular/router', 'angular2localization/angular2localization', './home/home.component', './shop/shop.component', './services/ProductService'], function(exports_1, context_1) {
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
    var core_1, router_1, angular2localization_1, angular2localization_2, home_component_1, shop_component_1, ProductService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (shop_component_1_1) {
                shop_component_1 = shop_component_1_1;
            },
            function (ProductService_1_1) {
                ProductService_1 = ProductService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, locale, localization, _productService) {
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
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.router.navigate(['/home']);
                };
                AppComponent.prototype.ChangeCulture = function (language, country, currency) {
                    this.locale.setCurrentLocale(language, country);
                    this.locale.setCurrentCurrency(currency);
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
                        providers: [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService],
                        pipes: [angular2localization_2.TranslatePipe]
                    }),
                    router_1.Routes([
                        { path: '/home', component: home_component_1.HomeComponent },
                        { path: '/shop', component: shop_component_1.ShopComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, angular2localization_1.LocaleService, angular2localization_1.LocalizationService, ProductService_1.ProductService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map