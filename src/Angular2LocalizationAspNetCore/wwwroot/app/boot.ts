import { bootstrap} from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { provide } from 'angular2/core';
import { AppComponent } from './app.component';
import { Configuration } from './app.constants';

import { TRANSLATE_PROVIDERS } from './ng2-translate/ng2-translate';

bootstrap(AppComponent, [
    HTTP_PROVIDERS,
    TRANSLATE_PROVIDERS,
    Configuration,
]).catch(err => console.error(err));


