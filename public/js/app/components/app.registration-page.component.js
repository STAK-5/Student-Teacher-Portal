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
var StpRegistrationPage = (function () {
    function StpRegistrationPage() {
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
    };
    StpRegistrationPage = __decorate([
        core_1.Component({
            selector: 'stp-login-page',
            templateUrl: 'js/app/templates/app.registration-page.template.html',
            directives: [router_1.ROUTER_DIRECTIVES, app_navbar_component_1.StpNavBar]
        }), 
        __metadata('design:paramtypes', [])
    ], StpRegistrationPage);
    return StpRegistrationPage;
}());
exports.StpRegistrationPage = StpRegistrationPage;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLnJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRzs7Ozs7Ozs7Ozs7QUFFSCxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsdUJBQWtDLGlCQUFpQixDQUFDLENBQUE7QUFFcEQscUNBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFRbkQ7SUFJSTtJQUVBLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLGdCQUFnQixHQUFHO1lBQ3BCLFFBQVEsRUFBRSxFQUFFO1lBQ1osTUFBTSxFQUFFLEVBQUU7WUFDVixLQUFLLEVBQUUsRUFBRTtZQUNULFFBQVEsRUFBRSxFQUFFO1NBQ2YsQ0FBQztJQUNOLENBQUM7SUFFRCxzQ0FBUSxHQUFSLFVBQVMsS0FBdUIsRUFBRSxPQUFnQjtRQUc5QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBMUJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLHNEQUFzRDtZQUNuRSxVQUFVLEVBQUUsQ0FBQywwQkFBaUIsRUFBRSxnQ0FBUyxDQUFDO1NBQzdDLENBQUM7OzJCQUFBO0lBdUJGLDBCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQXRCWSwyQkFBbUIsc0JBc0IvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYXBwLnJlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBzeWVkLW11aGFtbWFkLXRhaGEgb24gOC83LzE2LlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBST1VURVJfRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN0cE5hdkJhciB9IGZyb20gJy4vYXBwLm5hdmJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtSZWdpc3RyYXRpb25Vc2VyfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9yZWdpc3RyYXRpb24uaW50ZXJmYWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc3RwLWxvZ2luLXBhZ2UnLFxuICAgIHRlbXBsYXRlVXJsOiAnanMvYXBwL3RlbXBsYXRlcy9hcHAucmVnaXN0cmF0aW9uLXBhZ2UudGVtcGxhdGUuaHRtbCcsXG4gICAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBTdHBOYXZCYXJdXG59KVxuZXhwb3J0IGNsYXNzIFN0cFJlZ2lzdHJhdGlvblBhZ2UgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgICBwdWJsaWMgcmVnaXN0cmF0aW9uVXNlcjogUmVnaXN0cmF0aW9uVXNlcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5yZWdpc3RyYXRpb25Vc2VyID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgICAgICAgcm9sbG5vOiAnJyxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKG1vZGVsOiBSZWdpc3RyYXRpb25Vc2VyLCBpc1ZhbGlkOiBib29sZWFuKXtcblxuXG4gICAgICAgIGNvbnNvbGUubG9nKG1vZGVsLCBpc1ZhbGlkKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
