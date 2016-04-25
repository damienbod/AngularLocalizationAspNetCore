import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TranslateService, TranslatePipe, TRANSLATE_PROVIDERS } from './ng2-translate/ng2-translate';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component'; 

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ],
    pipes: [TranslatePipe]
})

@RouteConfig([
        { path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true },
        { path: '/shop', name: 'Shop', component: ShopComponent },
])


export class AppComponent {

    constructor(public translate: TranslateService) {

        // var userLang = navigator.language.split('-')[0];
        var userLang = /(fr-ch|en-US|de-CH|it-CH)/gi.test(userLang) ? userLang : 'en-US';

        translate.use(userLang);
    }
}