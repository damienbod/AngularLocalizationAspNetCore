import { NgModule, APP_INITIALIZER, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';

import { ProductService } from './services/ProductService';
import { LocalizationModule, LocaleValidationModule, LocaleService, TranslationService } from 'angular-l10n';

// Advanced initialization.
@Injectable()
export class LocalizationConfig {

    constructor(public locale: LocaleService, public translation: TranslationService) { }

    load(): Promise<any> {
        this.locale.addConfiguration()
            .addLanguage('en', 'ltr')
            .addLanguage('it', 'ltr')
            .addLanguage('fr', 'ltr')
            .addLanguage('de', 'ltr')
            .setCookieExpiration(30)
            .defineDefaultLocale('en', 'US')
            .defineCurrency('CHF');
        this.locale.init();

        this.translation.addConfiguration()
            .addProvider('./i18n/locale-');

        const promise: Promise<any> = new Promise((resolve: any) => {
            this.translation.translationChanged.subscribe(() => {
                resolve(true);
            });
        });

        this.translation.init();

        return promise;
    }

}

// AoT compilation requires a reference to an exported function.
export function initLocalization(localizationConfig: LocalizationConfig): Function {
    return () => localizationConfig.load();
}

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        LocalizationModule.forRoot() // New instance of TranslationService.
    ],
    declarations: [
        AppComponent,
        ShopComponent,
        HomeComponent,
        ShopAdminComponent
    ],
    providers: [
        ProductService,
        Configuration,
        LocalizationConfig,
        {
            provide: APP_INITIALIZER,
            useFactory: initLocalization,
            deps: [LocalizationConfig],
            multi: true
        }
    ],
    bootstrap:    [AppComponent],
})

export class AppModule { }
