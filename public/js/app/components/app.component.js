"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_dashboard_component_1 = require('./app.dashboard.component');
var app_teacher_dashboard_component_1 = require('./app.teacher-dashboard.component');
var app_navbar_component_1 = require('./app.navbar.component');
var app_login_page_component_1 = require('./app.login-page.component');
var app_registration_page_component_1 = require('./app.registration-page.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: '../templates/app.template.html',
            directives: [
                router_1.ROUTER_DIRECTIVES
            ],
            precompile: [
                app_login_page_component_1.StpLoginPage,
                app_registration_page_component_1.StpRegistrationPage,
                app_navbar_component_1.StpNavBar,
                app_dashboard_component_1.StpDashboard,
                app_teacher_dashboard_component_1.StpTeacherDashboard
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXBELHdDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELGdEQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3hFLHFDQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHlDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELGdEQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBa0J4RTtJQUFBO0lBRUEsQ0FBQztJQWpCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxVQUFVLEVBQUU7Z0JBQ1IsMEJBQWlCO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLHVDQUFZO2dCQUNaLHFEQUFtQjtnQkFDbkIsZ0NBQVM7Z0JBQ1Qsc0NBQVk7Z0JBQ1oscURBQW1CO2FBQ3RCO1NBQ0osQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgU3RwRGFzaGJvYXJkIH0gZnJvbSAnLi9hcHAuZGFzaGJvYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHBUZWFjaGVyRGFzaGJvYXJkIH0gZnJvbSAnLi9hcHAudGVhY2hlci1kYXNoYm9hcmQuY29tcG9uZW50JztcbmltcG9ydCB7IFN0cE5hdkJhciB9IGZyb20gJy4vYXBwLm5hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RwTG9naW5QYWdlIH0gZnJvbSAnLi9hcHAubG9naW4tcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgU3RwUmVnaXN0cmF0aW9uUGFnZSB9IGZyb20gJy4vYXBwLnJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudCc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi90ZW1wbGF0ZXMvYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVNcbiAgICBdLFxuICAgIHByZWNvbXBpbGU6IFtcbiAgICAgICAgU3RwTG9naW5QYWdlLFxuICAgICAgICBTdHBSZWdpc3RyYXRpb25QYWdlLFxuICAgICAgICBTdHBOYXZCYXIsXG4gICAgICAgIFN0cERhc2hib2FyZCxcbiAgICAgICAgU3RwVGVhY2hlckRhc2hib2FyZFxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
