import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

import { LocaleModule, LocalizationModule } from 'angular2localization';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';

import { ProductService } from './services/ProductService';




@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule,
        LocaleModule.forRoot(), // New instance of LocaleService.
        LocalizationModule.forRoot() // New instance of LocalizationService.
    ],
    declarations: [
        AppComponent,
        ShopComponent,
        HomeComponent,
        ShopAdminComponent
    ],
    providers: [
        ProductService,
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}