import { Component, OnInit} from '@angular/core';

// Services.
import { Locale, LocaleService, LocalizationService } from 'angular2localization';
import { ProductService } from './services/ProductService';

@Component({
    selector: 'my-app',
    template: require( './app.component.html'),
    styles: [String(require('./app.component.scss'))]
})


export class AppComponent extends Locale {

    constructor(
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

        this.locale.languageCodeChanged.subscribe(item => this.onLanguageCodeChangedDataRecieved(item));

    }

    public ChangeCulture(language: string, country: string, currency: string) {
        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);
    }

    public ChangeCurrency(currency: string) {
        this.locale.setCurrentCurrency(currency);
    }

    private onLanguageCodeChangedDataRecieved(item) {
        console.log("onLanguageCodeChangedDataRecieved App");
        console.log(item);
    }
}