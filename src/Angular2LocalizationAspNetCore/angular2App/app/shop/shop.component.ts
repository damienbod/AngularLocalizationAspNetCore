import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from '../services/Product';
import { LocaleService } from 'angular2localization/angular2localization';
import { ProductService } from '../services/ProductService';
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    selector: 'shopcomponent',
    template: require('./shop.component.html'),
    directives: [CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class ShopComponent implements OnInit {

    public message: string;
    public Products: Product[];
    public Currency: string;
    public Price: string;

    constructor(
        public _locale: LocaleService,
        private _productService: ProductService) {
        this.message = "shop.component";

        this._locale.countryCodeChanged.subscribe(item => this.onCountryChangedDataRecieved(item));
        this._locale.currencyCodeChanged.subscribe(currency => this.onChangedCurrencyRecieved(currency));
        
    }

    ngOnInit() {
        console.log("ngOnInit ShopComponent");
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

    private onCountryChangedDataRecieved(item) {
        this.GetProducts();
        console.log("onCountryChangedDataRecieved Shop");
        console.log(item);
    }

    private onChangedCurrencyRecieved(currency) {
        this.Currency = currency;
        console.log("onChangedCurrencyRecieved Shop");
        console.log(currency);
    }
}
