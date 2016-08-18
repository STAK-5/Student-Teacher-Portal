/**
 * Created by syed-muhammad-taha on 7/28/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';

import { StpLoginPage } from './app.login-page.component'
import { StpRegistrationPage } from './app.registration-page.component';
import { StpDashboard } from './app.dashboard.component';
import { StpTeacherDashboard } from "./app.teacher-dashboard.component";
import { AuthManager } from './../Services/authmanager.service';

const routes: RouterConfig = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },           //This should always remain on top

    {
        path: 'login',
        component: StpLoginPage,
        canActivate: [AuthManager]
    },

    {
        path: 'register',
        component: StpRegistrationPage
    },

    {
        path: 'home',
        component: StpDashboard,
        canActivate: [AuthManager]
    },

    {
        path: 'home!',
        component: StpTeacherDashboard
    },

    { path: '**', component: StpLoginPage}                   //This should always remain on extreme bottom
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];