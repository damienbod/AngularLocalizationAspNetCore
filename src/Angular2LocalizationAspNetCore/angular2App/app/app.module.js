import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';
import { LocaleModule, LocalizationModule } from 'angular2localization';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShopAdminComponent } from './shop-admin/shop-admin.component';
import { ProductService } from './services/ProductService';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        BrowserModule,
                        CommonModule,
                        FormsModule,
                        routing,
                        HttpModule,
                        JsonpModule,
                        LocaleModule.forRoot(),
                        LocalizationModule.forRoot()
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
                    bootstrap: [AppComponent],
                },] },
    ];
    AppModule.ctorParameters = [];
    return AppModule;
}());
