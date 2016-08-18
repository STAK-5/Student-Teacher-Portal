/**
 * Created by syed-muhammad-taha on 8/7/16.
 */
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
var app_navbar_component_1 = require('./app.navbar.component');
var registration_service_1 = require('../Services/registration.service');
var StpRegistrationPage = (function () {
    function StpRegistrationPage(_registrationService) {
        this._registrationService = _registrationService;
    }
    StpRegistrationPage.prototype.ngOnInit = function () {
        this.registrationUser = {
            username: '',
            rollno: '',
            email: '',
            password: ''
        };
    };
    StpRegistrationPage.prototype.register = function (model, isValid) {
        console.log(model, isValid);
        this._registrationService.registerUser(model)
            .subscribe(function (res) {
            if (res.status === 200) {
            }
        });
    };
    StpRegistrationPage = __decorate([
        core_1.Component({
            selector: 'stp-login-page',
            templateUrl: 'js/app/templates/app.registration-page.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, app_navbar_component_1.StpNavBar],
            providers: [registration_service_1.RegistrationService]
        }), 
        __metadata('design:paramtypes', [registration_service_1.RegistrationService])
    ], StpRegistrationPage);
    return StpRegistrationPage;
}());
exports.StpRegistrationPage = StpRegistrationPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLnJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFDcEQscUNBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFFbkQscUNBQWtDLGtDQUFrQyxDQUFDLENBQUE7QUFRckU7SUFJSSw2QkFBb0Isb0JBQXlDO1FBQXpDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7SUFBRyxDQUFDO0lBRWpFLHNDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUc7WUFDcEIsUUFBUSxFQUFFLEVBQUU7WUFDWixNQUFNLEVBQUUsRUFBRTtZQUNWLEtBQUssRUFBRSxFQUFFO1lBQ1QsUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFRLEdBQVIsVUFBUyxLQUF1QixFQUFFLE9BQWdCO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO2FBQ3hDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDbEIsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQSxDQUFDO1lBRXZCLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNDLENBQUM7SUE3Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUUsc0RBQXNEO1lBQ25FLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGdDQUFTLENBQUM7WUFDMUMsU0FBUyxFQUFFLENBQUMsMENBQW1CLENBQUM7U0FDbkMsQ0FBQzs7MkJBQUE7SUF5QkYsMEJBQUM7QUFBRCxDQXhCQSxBQXdCQyxJQUFBO0FBeEJZLDJCQUFtQixzQkF3Qi9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAucmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgc3llZC1tdWhhbW1hZC10YWhhIG9uIDgvNy8xNi5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN0cE5hdkJhciB9IGZyb20gJy4vYXBwLm5hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQge1JlZ2lzdHJhdGlvblVzZXJ9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3JlZ2lzdHJhdGlvbi5pbnRlcmZhY2VcIjtcclxuaW1wb3J0IHtSZWdpc3RyYXRpb25TZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9yZWdpc3RyYXRpb24uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RwLWxvZ2luLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvdGVtcGxhdGVzL2FwcC5yZWdpc3RyYXRpb24tcGFnZS50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU3RwTmF2QmFyXSxcclxuICAgIHByb3ZpZGVyczogW1JlZ2lzdHJhdGlvblNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTdHBSZWdpc3RyYXRpb25QYWdlIGltcGxlbWVudHMgT25Jbml0e1xyXG5cclxuICAgIHB1YmxpYyByZWdpc3RyYXRpb25Vc2VyOiBSZWdpc3RyYXRpb25Vc2VyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlZ2lzdHJhdGlvblNlcnZpY2U6IFJlZ2lzdHJhdGlvblNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblVzZXIgPSB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnJyxcclxuICAgICAgICAgICAgcm9sbG5vOiAnJyxcclxuICAgICAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG1vZGVsOiBSZWdpc3RyYXRpb25Vc2VyLCBpc1ZhbGlkOiBib29sZWFuKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhtb2RlbCwgaXNWYWxpZCk7XHJcbiAgICAgICAgdGhpcy5fcmVnaXN0cmF0aW9uU2VydmljZS5yZWdpc3RlclVzZXIobW9kZWwpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAvLyByZWRpcmVjdCB0byBsb2dpbiBwYWdlID0+IG5lZWQgdG8gd2F0Y2ggcmM0OyAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcbn0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
