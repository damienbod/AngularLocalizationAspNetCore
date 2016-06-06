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

    public Name_de: string;
    public Name_fr: string;
    public Name_it: string;
    public Name_en: string;
    public Description_de: string;
    public Description_fr: string;
    public Description_it: string;
    public Description_en: string;

    
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
        this.initProduct();

        this.Currency = this._locale.getCurrentCurrency();
        if (!(this.Currency === "CHF" || this.Currency === "EUR")) {
            this.Currency = "CHF";
        }
    }

    public Create() {

        // add items to array
        this.Product.LocalizationRecords = [];
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "de-CH", Text: this.Name_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "fr-CH", Text: this.Name_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "it-CH", Text: this.Name_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Name, LocalizationCulture: "en-US", Text: this.Name_en });

        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "de-CH", Text: this.Description_de });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "fr-CH", Text: this.Description_fr });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "it-CH", Text: this.Description_it });
        this.Product.LocalizationRecords.push({ Key: this.Product.Description, LocalizationCulture: "en-US", Text: this.Description_en });

        this._productService.CreateProduct(this.Product)
            .subscribe(data => {
                this.initProduct();
            }, error => {
                console.log(error)
            },
            () => console.log('Add product complete'));

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

    private initProduct() {
        this.Product = new ProductCreateEdit();
    }

}
