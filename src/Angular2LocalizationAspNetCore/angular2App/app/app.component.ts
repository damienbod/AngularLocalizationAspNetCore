import { Component, OnInit} from '@angular/core';

// Services.
import { Locale, LocaleService, LocalizationService } from 'angular2localization';
import { ProductService } from './services/ProductService';

// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
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

        this.locale.languageCodeChanged.subscribe(
            (item: string) => { this.onLanguageCodeChangedDataRecieved(item) }
        );

    }

    public ChangeCulture(language: string, country: string, currency: string) {
        this.locale.setCurrentLocale(language, country);
        this.locale.setCurrentCurrency(currency);
    }

    public ChangeCurrency(currency: string) {
        this.locale.setCurrentCurrency(currency);
    }

    private onLanguageCodeChangedDataRecieved(item: string) {
        console.log("onLanguageCodeChangedDataRecieved App");
        console.log(item);
    }
}