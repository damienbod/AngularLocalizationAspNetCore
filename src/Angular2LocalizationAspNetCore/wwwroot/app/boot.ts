import { bootstrap} from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide } from 'angular2/core';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    Configuration,
]).catch(err => console.error(err));


