import { Component, OnInit} from '@angular/core';

// Services.
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { ProductService } from './services/ProductService';

// AoT compilation doesn't support 'require'.
import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})


export class AppComponent {

    ////constructor(public locale: LocaleService, public translation: TranslationService) {
    ////    this.locale.AddConfiguration()
    ////        .AddLanguages(['en', 'it'])
    ////        .SetCookieExpiration(30)
    ////        .DefineLanguage('en');
    ////    this.locale.init();

    ////    this.translation.AddConfiguration()
    ////        .AddProvider('./assets/locale-');
    ////    this.translation.init();
    ////}

    constructor(
        public locale: LocaleService,
        public localization: TranslationService,
        private _productService: ProductService
    ) {
        this.locale.AddConfiguration()
            .AddLanguages(['de', 'fr', 'it', 'en'])
            .SetCookieExpiration(30)
            .DefineLanguage('en').DefineDefaultLocale('en', 'US');
        this.locale.init();

        this.localization.init(); // Need to update the translation.

        this.locale.languageCodeChanged.subscribe((item: string) => { this.onLanguageCodeChangedDataRecieved(item); });
    }

    public ChangeCulture(language: string, country: string, currency: string) {
        this.locale.setCurrentLanguage(language, country);
        this.locale.setCurrentCurrency(currency);
    }

    public ChangeCurrency(currency: string) {
        this.locale.setCurrentCurrency(currency);
    }

    private onLanguageCodeChangedDataRecieved(item: string) {
        console.log('onLanguageCodeChangedDataRecieved App');
        console.log(item);
    }
}