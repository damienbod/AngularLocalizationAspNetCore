
import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';
import {Location} from 'angular2/platform/common';

import {LocaleService, LocalizationService } from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';
// Components.

import { RouteConfig, AsyncRoute, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component'; 
import { ProductService } from './services/ProductService';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, LocaleService, LocalizationService, ProductService], // Inherited by all descendants.
    pipes: [TranslatePipe]
})

@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
        { path: '/shop', name: 'Shop', component: ShopComponent },
])

export class AppComponent {

    constructor(
        public locale: LocaleService,
        public localization: LocalizationService,
        public location: Location,
        private _productService: ProductService
    ) {
        // Adds a new language (ISO 639 two-letter code).
        this.locale.addLanguage('de');
        this.locale.addLanguage('fr');
        this.locale.addLanguage('it');
        this.locale.addLanguage('en');

        this.locale.definePreferredLocale('en', 'US', 30);

        this.localization.translationProvider('./i18n/locale-'); // Required: initializes the translation provider with the given path prefix.
        this._productService.GetProducts();
        this._productService.UpdateCurrency("CHF");
    }

    public ChangeCulture(language: string, country: string, currency: string) {
        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentcurrency(currency);
        this._productService.GetProducts();
    }

    public ChangeCurrency(currency: string) {
        this.locale.setCurrentcurrency(currency);
        this._productService.UpdateCurrency(currency);
    }
}