import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TranslateService, TranslatePipe, TRANSLATE_PROVIDERS } from './ng2-translate/ng2-translate';

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

export class AppComponent {
    name: string = 'World';

    constructor(public translate: TranslateService) {
        // use navigator lang if available
        var userLang = navigator.language.split('-')[0];
        userLang = /(fr|en)/gi.test(userLang) ? userLang : 'en';

        // this trigger the use of the french or english language after setting the translations
        translate.use(userLang);
    }
}