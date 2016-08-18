///<reference path="../../typings.d.ts"/>

import { XHRBackend } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms} from '@angular/forms';
import { HTTP_PROVIDERS } from '@angular/http';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from './components/app.routes';
import { AuthManager } from './Services/authmanager.service';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    APP_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    AuthManager,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
]);