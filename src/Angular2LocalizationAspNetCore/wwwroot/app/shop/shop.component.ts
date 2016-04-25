import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http } from 'angular2/http';
import { TranslateService, TranslatePipe, TRANSLATE_PROVIDERS } from '../ng2-translate/ng2-translate';


@Component({
    selector: 'shopcomponent',
    templateUrl: 'app/shop/shop.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    pipes: [TranslatePipe]
})

export class ShopComponent implements OnInit {

    public message: string;

    constructor(
        private _router: Router) {
        this.message = "shop.component";
    }

    ngOnInit() {
        console.log("ngOnInit ShopComponent");
    }
}
