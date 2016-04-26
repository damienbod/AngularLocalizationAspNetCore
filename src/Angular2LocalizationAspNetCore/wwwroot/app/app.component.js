System.register(['angular2/core', 'angular2/platform/common', 'angular2localization/angular2localization', 'angular2/router', './home/home.component', './shop/shop.component'], function(exports_1, context_1) {
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
    var core_1, common_1, angular2localization_1, angular2localization_2, router_1, home_component_1, shop_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (angular2localization_1_1) {
                angular2localization_1 = angular2localization_1_1;
                angular2localization_2 = angular2localization_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (shop_component_1_1) {
                shop_component_1 = shop_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(locale, localization, location) {
                    this.locale = locale;
                    this.localization = localization;
                    this.location = location;
                    this.locale.addLanguage('de');
                    this.locale.addLanguage('fr');
                    this.locale.addLanguage('it');
                    this.locale.addLanguage('en');
                    this.locale.definePreferredLocale('en', 'US', 30);
                    this.localization.translationProvider('./i18n/locale-');
                }
                AppComponent.prototype.ChangeCulture = function (language, country, currency) {
                    this.locale.setCurrentLocale(language, country);
                    this.locale.setCurrentcurrency(currency);
                };
                AppComponent.prototype.ChangeCurrency = function (currency) {
                    this.locale.setCurrentcurrency(currency);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, angular2localization_1.LocaleService, angular2localization_1.LocalizationService],
                        pipes: [angular2localization_2.TranslatePipe]
                    }),
                    router_1.RouteConfig([
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/shop', name: 'Shop', component: shop_component_1.ShopComponent },
                    ]), 
                    __metadata('design:paramtypes', [angular2localization_1.LocaleService, angular2localization_1.LocalizationService, common_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map