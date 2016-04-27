import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http } from 'angular2/http';
import { ProductService } from '../services/ProductService';
import { Product } from '../services/Product';

@Component({
    selector: 'shopcomponent',
    templateUrl: 'app/shop/shop.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    providers: [ ProductService ]
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
        this.getProducts();
    }

    private getProducts() {
        console.log('ShopComponent:getProducts starting...');
        this._productService.GetAvailableProducts()
            .subscribe(data => this.Products = data,
            error => console.log(error),
            () => console.log('ShopComponent:getProducts:Get all completed'));
    }
}
