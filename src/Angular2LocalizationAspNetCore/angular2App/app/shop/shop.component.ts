import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from '../services/Product';
import { ProductService } from '../services/ProductService';
import { TranslatePipe} from 'angular2localization/angular2localization';
import { Locale, LocaleService, LocalizationService} from 'angular2localization/angular2localization';

@Component({
    selector: 'shopcomponent',
    template: require('./shop.component.html')
})

export class ShopComponent extends Locale implements OnInit {

    public message: string;
    public Products: Product[];
    public Currency: string;
    public Price: string;

    constructor(
        public _locale: LocaleService,
        public localization: LocalizationService,
        private _productService: ProductService
    ) {
        super(null, localization);
        this.message = "shop.component";
        this._locale.languageCodeChanged.subscribe(item => this.onLanguageCodeChangedDataRecieved(item));
        this._locale.currencyCodeChanged.subscribe(currency => this.onChangedCurrencyRecieved(currency));     
    }

    ngOnInit() {
        console.log("ngOnInit ShopComponent");
        this.localization.updateTranslation(); // Need to update the translation.   
        this.GetProducts();

        this.Currency = this._locale.getCurrentCurrency();
        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
            this.Currency = "CHF";
        } 
    }

    public GetProducts() {
        console.log('ShopComponent:GetProducts starting...');
        this._productService.GetAvailableProducts()
            .subscribe((data) => {
                this.Products = data;
            },
            error => console.log(error),
            () => {
                console.log('ProductService:GetProducts completed');
            }
            );
    } 

    private onLanguageCodeChangedDataRecieved(item) {
        this.GetProducts();
        console.log("onCountryChangedDataRecieved Shop");
        console.log(item);
    }

    private onChangedCurrencyRecieved(currency) {
        this.Currency = currency;
        console.log("onLanguageCodeChangedDataRecieved Shop");
        console.log(currency);
    }
}
