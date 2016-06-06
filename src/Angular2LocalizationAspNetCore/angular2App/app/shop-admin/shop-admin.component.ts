import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Product } from '../services/Product';
import { ProductCreateEdit } from  '../services/ProductCreateEdit';
import { LocaleService } from 'angular2localization/angular2localization';
import { ProductService } from '../services/ProductService';
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    selector: 'shopadmincomponent',
    template: require('./shop-admin.component.html'),
    directives: [CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class ShopAdminComponent implements OnInit {

    public message: string;
    public Product: ProductCreateEdit;
    public Currency: string;
    public Price: string;

    constructor(
        public _locale: LocaleService,
        private _productService: ProductService) {
        this.message = "shop-admin.component";

        this._locale.countryCodeChanged.subscribe(item => this.onCountryChangedDataRecieved(item));
        this._locale.currencyCodeChanged.subscribe(currency => this.onChangedCurrencyRecieved(currency));
        
    }

    ngOnInit() {
        console.log("ngOnInit ShopAdminComponent");
        // TODO Get product if Id exists
        this.Product = new ProductCreateEdit();

        this.Currency = this._locale.getCurrentCurrency();
        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
            this.Currency = "CHF";
        }
    }

    public SaveProduct() {
        if (this.Product.Id) {
            // TODO update Product
        } else {
            this._productService.CreateProduct(this.Product)
                .subscribe(data => {
                    this.Product = new ProductCreateEdit();
                }, error => {
                    console.log(error)
                },
                () => console.log('Add product complete'));
        }
    }

    private onCountryChangedDataRecieved(item) {
        console.log("onProductDataRecieved");
        console.log(item);
    }

    private onChangedCurrencyRecieved(currency) {
        this.Currency = currency;
        console.log("onChangedCurrencyRecieved");
        console.log(currency);
    }
}
