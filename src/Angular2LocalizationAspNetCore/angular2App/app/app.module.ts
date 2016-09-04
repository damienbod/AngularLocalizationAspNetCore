import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';

import { ProductService } from './services/ProductService';

import { LocaleService, LocalizationService } from 'angular2localization/angular2localization';
// Pipes.
import {
    TranslatePipe,
    LocaleDatePipe,
    LocaleDecimalPipe,
    LocalePercentPipe,
    LocaleCurrencyPipe
} from 'angular2localization/angular2localization';

import { LocaleNumberValidator } from 'angular2localization/angular2localization';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        ShopComponent,
        HomeComponent,
        ShopAdminComponent
    ],
    providers: [
        ProductService,
        LocaleService,
        LocalizationService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}