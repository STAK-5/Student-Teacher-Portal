"use strict";
/**
 * Created by syed-muhammad-taha on 7/28/16.
 */
var router_1 = require('@angular/router');
var app_login_page_component_1 = require('./app.login-page.component');
var app_registration_page_component_1 = require('./app.registration-page.component');
var app_dashboard_component_1 = require('./app.dashboard.component');
var app_teacher_dashboard_component_1 = require("./app.teacher-dashboard.component");
var authmanager_service_1 = require('./../Services/authmanager.service');
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: app_login_page_component_1.StpLoginPage,
        canActivate: [authmanager_service_1.AuthManager]
    },
    {
        path: 'register',
        component: app_registration_page_component_1.StpRegistrationPage
    },
    {
        path: 'home',
        component: app_dashboard_component_1.StpDashboard,
        canActivate: [authmanager_service_1.AuthManager]
    },
    {
        path: 'home!',
        component: app_teacher_dashboard_component_1.StpTeacherDashboard
    },
    { path: '**', component: app_login_page_component_1.StpLoginPage } //This should always remain on extreme bottom
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCx1QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU5RCx5Q0FBNkIsNEJBQzdCLENBQUMsQ0FEd0Q7QUFDekQsZ0RBQW9DLG1DQUFtQyxDQUFDLENBQUE7QUFDeEUsd0NBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFDekQsZ0RBQW9DLG1DQUFtQyxDQUFDLENBQUE7QUFDeEUsb0NBQTRCLG1DQUFtQyxDQUFDLENBQUE7QUFFaEUsSUFBTSxNQUFNLEdBQWlCO0lBQ3pCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFFcEQ7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSx1Q0FBWTtRQUN2QixXQUFXLEVBQUUsQ0FBQyxpQ0FBVyxDQUFDO0tBQzdCO0lBRUQ7UUFDSSxJQUFJLEVBQUUsVUFBVTtRQUNoQixTQUFTLEVBQUUscURBQW1CO0tBQ2pDO0lBRUQ7UUFDSSxJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSxzQ0FBWTtRQUN2QixXQUFXLEVBQUUsQ0FBQyxpQ0FBVyxDQUFDO0tBQzdCO0lBRUQ7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSxxREFBbUI7S0FDakM7SUFFRCxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLHVDQUFZLEVBQUMsQ0FBbUIsNkNBQTZDO0NBQ3pHLENBQUM7QUFFVyw0QkFBb0IsR0FBRztJQUNoQyxzQkFBYSxDQUFDLE1BQU0sQ0FBQztDQUN4QixDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwLnJvdXRlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHN5ZWQtbXVoYW1tYWQtdGFoYSBvbiA3LzI4LzE2LlxyXG4gKi9cclxuaW1wb3J0IHsgcHJvdmlkZVJvdXRlciwgUm91dGVyQ29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IFN0cExvZ2luUGFnZSB9IGZyb20gJy4vYXBwLmxvZ2luLXBhZ2UuY29tcG9uZW50J1xyXG5pbXBvcnQgeyBTdHBSZWdpc3RyYXRpb25QYWdlIH0gZnJvbSAnLi9hcHAucmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RwRGFzaGJvYXJkIH0gZnJvbSAnLi9hcHAuZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0cFRlYWNoZXJEYXNoYm9hcmQgfSBmcm9tIFwiLi9hcHAudGVhY2hlci1kYXNoYm9hcmQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEF1dGhNYW5hZ2VyIH0gZnJvbSAnLi8uLi9TZXJ2aWNlcy9hdXRobWFuYWdlci5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xyXG4gICAgeyBwYXRoOiAnJywgcmVkaXJlY3RUbzogJ2xvZ2luJywgcGF0aE1hdGNoOiAnZnVsbCcgfSwgICAgICAgICAgIC8vVGhpcyBzaG91bGQgYWx3YXlzIHJlbWFpbiBvbiB0b3BcclxuXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2xvZ2luJyxcclxuICAgICAgICBjb21wb25lbnQ6IFN0cExvZ2luUGFnZSxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhNYW5hZ2VyXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcclxuICAgICAgICBjb21wb25lbnQ6IFN0cFJlZ2lzdHJhdGlvblBhZ2VcclxuICAgIH0sXHJcblxyXG4gICAge1xyXG4gICAgICAgIHBhdGg6ICdob21lJyxcclxuICAgICAgICBjb21wb25lbnQ6IFN0cERhc2hib2FyZCxcclxuICAgICAgICBjYW5BY3RpdmF0ZTogW0F1dGhNYW5hZ2VyXVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgcGF0aDogJ2hvbWUhJyxcclxuICAgICAgICBjb21wb25lbnQ6IFN0cFRlYWNoZXJEYXNoYm9hcmRcclxuICAgIH0sXHJcblxyXG4gICAgeyBwYXRoOiAnKionLCBjb21wb25lbnQ6IFN0cExvZ2luUGFnZX0gICAgICAgICAgICAgICAgICAgLy9UaGlzIHNob3VsZCBhbHdheXMgcmVtYWluIG9uIGV4dHJlbWUgYm90dG9tXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX1JPVVRFUl9QUk9WSURFUlMgPSBbXHJcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcclxuXTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
