import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { StpDashboard } from './app.dashboard.component';
import { StpTeacherDashboard } from './app.teacher-dashboard.component';
import { StpNavBar } from './app.navbar.component';
import { StpLoginPage } from './app.login-page.component';
import { StpRegistrationPage } from './app.registration-page.component';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: '../templates/app.template.html',
    directives: [
        ROUTER_DIRECTIVES
    ],
    precompile: [
        StpLoginPage,
        StpRegistrationPage,
        StpNavBar,
        StpDashboard,
        StpTeacherDashboard
    ]
})
export class AppComponent {

}