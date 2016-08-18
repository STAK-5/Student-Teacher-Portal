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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUFrQyxpQkFBaUIsQ0FBQyxDQUFBO0FBRXBELHdDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELGdEQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQ3hFLHFDQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHlDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELGdEQUFvQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBa0J4RTtJQUFBO0lBRUEsQ0FBQztJQWpCRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLGdDQUFnQztZQUM3QyxVQUFVLEVBQUU7Z0JBQ1IsMEJBQWlCO2FBQ3BCO1lBQ0QsVUFBVSxFQUFFO2dCQUNSLHVDQUFZO2dCQUNaLHFEQUFtQjtnQkFDbkIsZ0NBQVM7Z0JBQ1Qsc0NBQVk7Z0JBQ1oscURBQW1CO2FBQ3RCO1NBQ0osQ0FBQzs7b0JBQUE7SUFHRixtQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksb0JBQVksZUFFeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgU3RwRGFzaGJvYXJkIH0gZnJvbSAnLi9hcHAuZGFzaGJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN0cFRlYWNoZXJEYXNoYm9hcmQgfSBmcm9tICcuL2FwcC50ZWFjaGVyLWRhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHBOYXZCYXIgfSBmcm9tICcuL2FwcC5uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RwTG9naW5QYWdlIH0gZnJvbSAnLi9hcHAubG9naW4tcGFnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHBSZWdpc3RyYXRpb25QYWdlIH0gZnJvbSAnLi9hcHAucmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4uL3RlbXBsYXRlcy9hcHAudGVtcGxhdGUuaHRtbCcsXHJcbiAgICBkaXJlY3RpdmVzOiBbXHJcbiAgICAgICAgUk9VVEVSX0RJUkVDVElWRVNcclxuICAgIF0sXHJcbiAgICBwcmVjb21waWxlOiBbXHJcbiAgICAgICAgU3RwTG9naW5QYWdlLFxyXG4gICAgICAgIFN0cFJlZ2lzdHJhdGlvblBhZ2UsXHJcbiAgICAgICAgU3RwTmF2QmFyLFxyXG4gICAgICAgIFN0cERhc2hib2FyZCxcclxuICAgICAgICBTdHBUZWFjaGVyRGFzaGJvYXJkXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
