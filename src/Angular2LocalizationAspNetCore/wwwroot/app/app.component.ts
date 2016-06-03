import {Component, OnInit} from '@angular/core';
import {Routes, Router, ROUTER_DIRECTIVES} from '@angular/router';

// Services.
import {Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';
// Pipes.
import {TranslatePipe} from 'angular2localization/angular2localization';

// Components.
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component'; 
import { ProductService } from './services/ProductService';

@Component({
    selector: 'my-app',
    template: require( './app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [LocalizationService, LocaleService, ProductService],
    pipes: [TranslatePipe]
})

@Routes([
    { path: '/home', component: HomeComponent },
    { path: '/shop', component: ShopComponent }
])

export class AppComponent extends Locale {

    constructor(
        private router: Router,
        public locale: LocaleService,
        public localization: LocalizationService,
        private _productService: ProductService
    ) {
        super(null, localization);
        // Adds a new language (ISO 639 two-letter code).
        this.locale.addLanguage('de');
        this.locale.addLanguage('fr');
        this.locale.addLanguage('it');
        this.locale.addLanguage('en');

        this.locale.definePreferredLocale('en', 'US', 30);

        this.localization.translationProvider('./i18n/locale-'); // Required: initializes the translation provider with the given path prefix.
        this.localization.updateTranslation(); // Need to update the translation.

    }

    ngOnInit() {

        this.router.navigate(['/home']);

    }

    public ChangeCulture(language: string, country: string, currency: string) {
        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);
        this.localization.updateTranslation();
    }

    public ChangeCurrency(currency: string) {
        this.locale.setCurrentCurrency(currency);
    }
}