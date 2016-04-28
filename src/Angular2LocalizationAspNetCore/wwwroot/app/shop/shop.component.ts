import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable } from 'rxjs/Observable';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http } from 'angular2/http';
import { Product } from '../services/Product';
import { LocaleService } from 'angular2localization/angular2localization';
import { ProductService } from '../services/ProductService';
import {TranslatePipe} from 'angular2localization/angular2localization';

@Component({
    selector: 'shopcomponent',
    templateUrl: 'app/shop/shop.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class ShopComponent implements OnInit {

    public message: string;
    public Products: Product[];
    public Currency: string;
    public Price: string;

    constructor(
        private _productService: ProductService,
        private _router: Router) {
        this.message = "shop.component";

        this._productService.changedProductData.subscribe(item => this.onProductDataRecieved(item));
        this._productService.changedCurrency.subscribe(currency => this.onChangedCurrencyRecieved(currency));
        
    }

    ngOnInit() {
        console.log("ngOnInit ShopComponent");
        this.Products = this._productService.Products;
        this.Currency = this._productService.SelectedCurrency;
    }

    private onProductDataRecieved(products) {
        this.Products = products;
        console.log("onProductDataRecieved");
        console.log(this.Products);
    }

    private onChangedCurrencyRecieved(currency) {
        this.Currency = currency;
        console.log("onChangedCurrencyRecieved");
        console.log(currency);
    }
}
