import { Component, OnInit} from '@angular/core';
import { Localization, LocaleService, TranslationService } from 'angular-l10n';
import { ProductService } from './services/ProductService';
import './app.component.scss';
import '../style/app.scss';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent extends Localization {

    constructor(public locale: LocaleService, public translation: TranslationService,
        private _productService: ProductService
    ) {
        super(locale, translation);

        this.locale.defaultLocaleChanged.subscribe((item: string) => { this.onLanguageCodeChangedDataRecieved(item); });
    }

    public ChangeCulture(language: string, country: string, currency: string) {
        this.locale.setDefaultLocale(language, country);
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