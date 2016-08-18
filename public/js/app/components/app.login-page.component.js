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
 * Created by syed-muhammad-taha on 8/6/16.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_navbar_component_1 = require('./app.navbar.component');
var login_service_1 = require("../services/login.service");
var StpLoginPage = (function () {
    function StpLoginPage(_loginService, _router) {
        this._loginService = _loginService;
        this._router = _router;
    }
    StpLoginPage.prototype.ngOnInit = function () {
        this.loginUser = {
            id: '',
            password: ''
        };
    };
    StpLoginPage.prototype.login = function (model, valid) {
        var _this = this;
        console.log(model);
        this._loginService.login(model)
            .subscribe(function (res) {
            console.log('response: ', res);
            if (res.status === 200) {
                var body = JSON.parse(res._body);
                console.log('args: ', body.args);
                window.localStorage.setItem('auth-key', body.args._id);
                _this._router.navigate(['/home']);
            }
        });
    };
    StpLoginPage = __decorate([
        core_1.Component({
            selector: 'stp-login-page',
            templateUrl: 'js/app/templates/app.login-page.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, app_navbar_component_1.StpNavBar],
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, router_1.Router])
    ], StpLoginPage);
    return StpLoginPage;
}());
exports.StpLoginPage = StpLoginPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmxvZ2luLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBMEMsaUJBQzFDLENBQUMsQ0FEMEQ7QUFHM0QscUNBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFFbkQsOEJBQTZCLDJCQUM3QixDQUFDLENBRHVEO0FBT3hEO0lBSUksc0JBQW9CLGFBQTJCLEVBQVUsT0FBZTtRQUFwRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBRzVFLCtCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHO1lBQ2IsRUFBRSxFQUFFLEVBQUU7WUFDTixRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7SUFDTixDQUFDO0lBRUQsNEJBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxLQUFhO1FBQTFCLGlCQVlDO1FBWEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7YUFDMUIsU0FBUyxDQUFDLFVBQUMsR0FBYTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUEsQ0FBQyxHQUFHLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ2pDLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN2RCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQWhDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSwrQ0FBK0M7WUFDNUQsVUFBVSxFQUFFLENBQUMsMEJBQWlCLEVBQUUsZ0NBQVMsQ0FBQztZQUMxQyxTQUFTLEVBQUMsQ0FBQyw0QkFBWSxDQUFDO1NBQzNCLENBQUM7O29CQUFBO0lBNEJGLG1CQUFDO0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxvQkFBWSxlQTJCeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5sb2dpbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHN5ZWQtbXVoYW1tYWQtdGFoYSBvbiA4LzYvMTYuXHJcbiAqL1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnXHJcblxyXG5pbXBvcnQgeyBTdHBOYXZCYXIgfSBmcm9tICcuL2FwcC5uYXZiYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Vc2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvbG9naW4uaW50ZXJmYWNlXCI7XHJcbmltcG9ydCB7IExvZ2luU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlXCJcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0cC1sb2dpbi1wYWdlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnanMvYXBwL3RlbXBsYXRlcy9hcHAubG9naW4tcGFnZS50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU3RwTmF2QmFyXSxcclxuICAgIHByb3ZpZGVyczpbTG9naW5TZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3RwTG9naW5QYWdlIGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIHB1YmxpYyBsb2dpblVzZXI6TG9naW5Vc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2dpblVzZXIgPSB7XHJcbiAgICAgICAgICAgIGlkOiAnJyxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihtb2RlbCwgdmFsaWQ6Ym9vbGVhbikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsKTtcclxuICAgICAgICB0aGlzLl9sb2dpblNlcnZpY2UubG9naW4obW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlczogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXNwb25zZTogJywgcmVzKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBKU09OLnBhcnNlKHJlcy5fYm9keSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FyZ3M6ICcsIGJvZHkuYXJncyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoLWtleScsIGJvZHkuYXJncy5faWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy9ob21lJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
