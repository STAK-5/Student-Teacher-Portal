"use strict";
/**
 * Created by syed-muhammad-taha on 7/28/16.
 */
var router_1 = require('@angular/router');
var app_login_page_component_1 = require('./app.login-page.component');
var app_registration_page_component_1 = require('./app.registration-page.component');
var app_dashboard_component_1 = require('./app.dashboard.component');
var app_teacher_dashboard_component_1 = require("./app.teacher-dashboard.component");
var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: app_login_page_component_1.StpLoginPage
    },
    {
        path: 'register',
        component: app_registration_page_component_1.StpRegistrationPage
    },
    {
        path: 'home',
        component: app_dashboard_component_1.StpDashboard
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLnJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7QUFDSCx1QkFBNEMsaUJBQWlCLENBQUMsQ0FBQTtBQUU5RCx5Q0FBNkIsNEJBQzdCLENBQUMsQ0FEd0Q7QUFDekQsZ0RBQW9DLG1DQUFtQyxDQUFDLENBQUE7QUFDeEUsd0NBQTZCLDJCQUEyQixDQUFDLENBQUE7QUFDekQsZ0RBQW9DLG1DQUFtQyxDQUFDLENBQUE7QUFHeEUsSUFBTSxNQUFNLEdBQWlCO0lBQ3pCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7SUFFcEQ7UUFDSSxJQUFJLEVBQUUsT0FBTztRQUNiLFNBQVMsRUFBRSx1Q0FBWTtLQUMxQjtJQUVEO1FBQ0ksSUFBSSxFQUFFLFVBQVU7UUFDaEIsU0FBUyxFQUFFLHFEQUFtQjtLQUNqQztJQUVEO1FBQ0ksSUFBSSxFQUFFLE1BQU07UUFDWixTQUFTLEVBQUUsc0NBQVk7S0FDMUI7SUFFRDtRQUNJLElBQUksRUFBRSxPQUFPO1FBQ2IsU0FBUyxFQUFFLHFEQUFtQjtLQUNqQztJQUVELEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsdUNBQVksRUFBQyxDQUFtQiw2Q0FBNkM7Q0FDekcsQ0FBQztBQUVXLDRCQUFvQixHQUFHO0lBQ2hDLHNCQUFhLENBQUMsTUFBTSxDQUFDO0NBQ3hCLENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAucm91dGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHN5ZWQtbXVoYW1tYWQtdGFoYSBvbiA3LzI4LzE2LlxuICovXG5pbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBTdHBMb2dpblBhZ2UgfSBmcm9tICcuL2FwcC5sb2dpbi1wYWdlLmNvbXBvbmVudCdcbmltcG9ydCB7IFN0cFJlZ2lzdHJhdGlvblBhZ2UgfSBmcm9tICcuL2FwcC5yZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RwRGFzaGJvYXJkIH0gZnJvbSAnLi9hcHAuZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHBUZWFjaGVyRGFzaGJvYXJkIH0gZnJvbSBcIi4vYXBwLnRlYWNoZXItZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVyQ29uZmlnID0gW1xuICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICdsb2dpbicsIHBhdGhNYXRjaDogJ2Z1bGwnIH0sICAgICAgICAgICAvL1RoaXMgc2hvdWxkIGFsd2F5cyByZW1haW4gb24gdG9wXG5cbiAgICB7XG4gICAgICAgIHBhdGg6ICdsb2dpbicsXG4gICAgICAgIGNvbXBvbmVudDogU3RwTG9naW5QYWdlXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgcGF0aDogJ3JlZ2lzdGVyJyxcbiAgICAgICAgY29tcG9uZW50OiBTdHBSZWdpc3RyYXRpb25QYWdlXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgcGF0aDogJ2hvbWUnLFxuICAgICAgICBjb21wb25lbnQ6IFN0cERhc2hib2FyZFxuICAgIH0sXG5cbiAgICB7XG4gICAgICAgIHBhdGg6ICdob21lIScsXG4gICAgICAgIGNvbXBvbmVudDogU3RwVGVhY2hlckRhc2hib2FyZFxuICAgIH0sXG5cbiAgICB7IHBhdGg6ICcqKicsIGNvbXBvbmVudDogU3RwTG9naW5QYWdlfSAgICAgICAgICAgICAgICAgICAvL1RoaXMgc2hvdWxkIGFsd2F5cyByZW1haW4gb24gZXh0cmVtZSBib3R0b21cbl07XG5cbmV4cG9ydCBjb25zdCBBUFBfUk9VVEVSX1BST1ZJREVSUyA9IFtcbiAgICBwcm92aWRlUm91dGVyKHJvdXRlcylcbl07Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
