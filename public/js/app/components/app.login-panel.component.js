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
/**
 * Created by syed-muhammad-taha on 7/28/16.
 */
var core_1 = require('@angular/core');
var app_login_header_component_1 = require('./app.login-header.component');
var app_login_body_component_1 = require('./app.login-body.component');
var StpLoginPanel = (function () {
    function StpLoginPanel() {
    }
    StpLoginPanel = __decorate([
        core_1.Component({
            selector: 'stp-login-panel',
            templateUrl: 'js/app/templates/app.login-panel.template.html',
            styles: ["\n        .col-xs-12{\n            width: 100%;\n        }\n    "],
            directives: [app_login_header_component_1.StpLoginHeader, app_login_body_component_1.StpLoginBody]
        }), 
        __metadata('design:paramtypes', [])
    ], StpLoginPanel);
    return StpLoginPanel;
}());
exports.StpLoginPanel = StpLoginPanel;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmxvZ2luLXBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFFeEMsMkNBQTZCLDhCQUE4QixDQUFDLENBQUE7QUFDNUQseUNBQTJCLDRCQUE0QixDQUFDLENBQUE7QUFheEQ7SUFBQTtJQUVBLENBQUM7SUFiRDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFdBQVcsRUFBRSxnREFBZ0Q7WUFDN0QsTUFBTSxFQUFFLENBQUMsa0VBSVIsQ0FBQztZQUNGLFVBQVUsRUFBRSxDQUFDLDJDQUFjLEVBQUUsdUNBQVksQ0FBQztTQUM3QyxDQUFDOztxQkFBQTtJQUlGLG9CQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxxQkFBYSxnQkFFekIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5sb2dpbi1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENyZWF0ZWQgYnkgc3llZC1tdWhhbW1hZC10YWhhIG9uIDcvMjgvMTYuXG4gKi9cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtTdHBMb2dpbkhlYWRlcn0gZnJvbSAnLi9hcHAubG9naW4taGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1N0cExvZ2luQm9keX0gZnJvbSAnLi9hcHAubG9naW4tYm9keS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0cC1sb2dpbi1wYW5lbCcsXG4gICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvdGVtcGxhdGVzL2FwcC5sb2dpbi1wYW5lbC50ZW1wbGF0ZS5odG1sJyxcbiAgICBzdHlsZXM6IFtgXG4gICAgICAgIC5jb2wteHMtMTJ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGBdLFxuICAgIGRpcmVjdGl2ZXM6IFtTdHBMb2dpbkhlYWRlciwgU3RwTG9naW5Cb2R5XVxufSlcblxuZXhwb3J0IGNsYXNzIFN0cExvZ2luUGFuZWwge1xuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
