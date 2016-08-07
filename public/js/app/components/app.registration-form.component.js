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
var StpRegistrationForm = (function () {
    function StpRegistrationForm() {
    }
    StpRegistrationForm.prototype.ngOnInit = function () {
        this.registrationUser = {
            username: '',
            rollno: '',
            email: '',
            password: ''
        };
    };
    StpRegistrationForm.prototype.register = function (model, isValid) {
        console.log(model, isValid);
    };
    StpRegistrationForm = __decorate([
        core_1.Component({
            selector: 'stp-registration-form',
            templateUrl: 'js/app/templates/app.registeration-form.template.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], StpRegistrationForm);
    return StpRegistrationForm;
}());
exports.StpRegistrationForm = StpRegistrationForm;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLnJlZ2lzdHJhdGlvbi1mb3JtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0dBRUc7QUFDSCxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFVbEQ7SUFBQTtJQWtCQSxDQUFDO0lBZkcsc0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRztZQUNwQixRQUFRLEVBQUUsRUFBRTtZQUNaLE1BQU0sRUFBRSxFQUFFO1lBQ1YsS0FBSyxFQUFFLEVBQUU7WUFDVCxRQUFRLEVBQUUsRUFBRTtTQUNmLENBQUM7SUFDTixDQUFDO0lBRUQsc0NBQVEsR0FBUixVQUFTLEtBQXVCLEVBQUUsT0FBZ0I7UUFHOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQXRCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFdBQVcsRUFBRSx1REFBdUQ7WUFDcEUsVUFBVSxFQUFFLEVBQUU7U0FDakIsQ0FBQzs7MkJBQUE7SUFvQkYsMEJBQUM7QUFBRCxDQWxCQSxBQWtCQyxJQUFBO0FBbEJZLDJCQUFtQixzQkFrQi9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAucmVnaXN0cmF0aW9uLWZvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHN5ZWQtbXVoYW1tYWQtdGFoYSBvbiA3LzI4LzE2LlxuICovXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWdpc3RyYXRpb25Vc2VyIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL3JlZ2lzdHJhdGlvbi5pbnRlcmZhY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0cC1yZWdpc3RyYXRpb24tZm9ybScsXG4gICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvdGVtcGxhdGVzL2FwcC5yZWdpc3RlcmF0aW9uLWZvcm0udGVtcGxhdGUuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTdHBSZWdpc3RyYXRpb25Gb3JtIGltcGxlbWVudHMgT25Jbml0e1xuXG4gICAgcHVibGljIHJlZ2lzdHJhdGlvblVzZXI6IFJlZ2lzdHJhdGlvblVzZXI7XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Vc2VyID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgcm9sbG5vOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKG1vZGVsOiBSZWdpc3RyYXRpb25Vc2VyLCBpc1ZhbGlkOiBib29sZWFuKXtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsLCBpc1ZhbGlkKTtcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
