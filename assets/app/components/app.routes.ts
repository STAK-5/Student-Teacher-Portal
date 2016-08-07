/**
 * Created by syed-muhammad-taha on 7/28/16.
 */
import { provideRouter, RouterConfig } from '@angular/router';

import { StpLoginPage } from './app.login-page.component'
import { StpRegistrationPage } from './app.registration-page.component';
import { StpDashboard } from './app.dashboard.component';
import { StpTeacherDashboard } from "./app.teacher-dashboard.component";


const routes: RouterConfig = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },           //This should always remain on top

    {
        path: 'login',
        component: StpLoginPage
    },

    {
        path: 'register',
        component: StpRegistrationPage
    },

    {
        path: 'home',
        component: StpDashboard
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