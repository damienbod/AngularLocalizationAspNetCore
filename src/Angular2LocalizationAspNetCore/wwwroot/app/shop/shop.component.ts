import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http } from 'angular2/http';
import { Product } from '../services/Product';
import { LocaleService } from 'angular2localization/angular2localization';
import { ProductService } from '../services/ProductService';

@Component({
    selector: 'shopcomponent',
    templateUrl: 'app/shop/shop.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class ShopComponent implements OnInit {

    public message: string;
    public Products: Product[];

    constructor(
        private _productService: ProductService,
        private _router: Router) {
        this.message = "shop.component";
    }

    ngOnInit() {
        console.log("ngOnInit ShopComponent");
        this.Products = this._productService.Products;
        // TODO use EventEmitter for the products
    }

    
   
}
