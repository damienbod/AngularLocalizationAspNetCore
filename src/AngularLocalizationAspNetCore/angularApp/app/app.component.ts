import { Component } from '@angular/core';
import { LocaleService, TranslationService, Language } from 'angular-l10n';
import './app.component.scss';
import '../styles/app.scss';

@Component({
    selector: 'app-component',
    templateUrl: 'app.component.html'
})

export class AppComponent {

    @Language() lang = '';

    constructor(public locale: LocaleService, public translation: TranslationService
    ) {
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
