/**
 * Created by syed-muhammad-taha on 7/28/16.
 */

import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {StpLoginForm} from './app.login-form.component';
import {StpRegistrationForm} from './app.registration-form.component';

@Component({
    moduleId: module.id,
    selector: 'stp-nav-bar',
    templateUrl: '../templates/app.navbar.template.html',
    directives: [ROUTER_DIRECTIVES, StpLoginForm, StpRegistrationForm]
})
export class StpNavBar {

}