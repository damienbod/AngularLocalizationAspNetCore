import { Component, OnInit } from '@angular/core';
import { Product } from '../services/Product';
import { ProductService } from '../services/ProductService';
import { Locale, LocaleService, LocalizationService } from 'angular2localization';

@Component({
    selector: 'shop-component',
    templateUrl: 'shop.component.html'
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
        this.message = 'shop.component';
        this._locale.languageCodeChanged.subscribe((item: string) => { this.onLanguageCodeChangedDataRecieved(item) });
        this._locale.currencyCodeChanged.subscribe(
            (currency: string) => {
                this.onChangedCurrencyRecieved(currency)
            }
        );
    }

    ngOnInit() {
        console.log('ngOnInit ShopComponent');
        this.GetProducts();

        this.Currency = this._locale.getCurrentCurrency();
        if (!(this.Currency === 'CHF' || this.Currency === 'EUR')) {
            this.Currency = 'CHF';
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

    private onLanguageCodeChangedDataRecieved(item: string) {
        this.GetProducts();
        console.log('onCountryChangedDataRecieved Shop');
        console.log(item);
    }

    private onChangedCurrencyRecieved(currency: string) {
        this.Currency = currency;
        console.log('onLanguageCodeChangedDataRecieved Shop');
        console.log(currency);
    }
}
