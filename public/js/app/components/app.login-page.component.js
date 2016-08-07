/**
 * Created by syed-muhammad-taha on 8/6/16.
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
var StpLoginPage = (function () {
    function StpLoginPage() {
    }
    StpLoginPage.prototype.ngOnInit = function () {
        this.loginUser = {
            id: '',
            password: ''
        };
    };
    StpLoginPage.prototype.login = function (model, valid) {
        console.log(model, valid);
    };
    StpLoginPage = __decorate([
        core_1.Component({
            selector: 'stp-login-page',
            templateUrl: 'js/app/templates/app.login-page.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, app_navbar_component_1.StpNavBar]
        }), 
        __metadata('design:paramtypes', [])
    ], StpLoginPage);
    return StpLoginPage;
}());
exports.StpLoginPage = StpLoginPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmxvZ2luLXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCx1QkFBa0MsaUJBRWxDLENBQUMsQ0FGa0Q7QUFFbkQscUNBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFRbkQ7SUFJSTtJQUVBLENBQUM7SUFHRCwrQkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRztZQUNiLEVBQUUsRUFBRSxFQUFFO1lBQ04sUUFBUSxFQUFFLEVBQUU7U0FDZixDQUFDO0lBQ04sQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxLQUFLLEVBQUUsS0FBYTtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBdkJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLCtDQUErQztZQUM1RCxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBUyxDQUFDO1NBQzdDLENBQUM7O29CQUFBO0lBb0JGLG1CQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQW5CWSxvQkFBWSxlQW1CeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5sb2dpbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzeWVkLW11aGFtbWFkLXRhaGEgb24gOC82LzE2LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcidcblxuaW1wb3J0IHsgU3RwTmF2QmFyIH0gZnJvbSAnLi9hcHAubmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpblVzZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9sb2dpbi5pbnRlcmZhY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzdHAtbG9naW4tcGFnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdqcy9hcHAvdGVtcGxhdGVzL2FwcC5sb2dpbi1wYWdlLnRlbXBsYXRlLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFUywgU3RwTmF2QmFyXVxufSlcbmV4cG9ydCBjbGFzcyBTdHBMb2dpblBhZ2UgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBwdWJsaWMgbG9naW5Vc2VyOkxvZ2luVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5sb2dpblVzZXIgPSB7XG4gICAgICAgICAgICBpZDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJydcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBsb2dpbihtb2RlbCwgdmFsaWQ6Ym9vbGVhbikge1xuICAgICAgICBjb25zb2xlLmxvZyhtb2RlbCwgdmFsaWQpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
