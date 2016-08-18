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
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var LoginService = (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (user) {
        var ContentType = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('/users/login', user, ContentType);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL2xvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUE0QixlQUM1QixDQUFDLENBRDBDO0FBQzNDLHFCQUF5QixlQUN6QixDQUFDLENBRHVDO0FBSXhDO0lBQ0ksc0JBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUUsQ0FBQztJQUVsQyw0QkFBSyxHQUFMLFVBQU0sSUFBZTtRQUNqQixJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLENBQUE7UUFDbEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQVJMO1FBQUMsaUJBQVUsRUFBRTs7b0JBQUE7SUFTYixtQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksb0JBQVksZUFPeEIsQ0FBQSIsImZpbGUiOiJTZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJ1xyXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7TG9naW5Vc2VyfSBmcm9tICcuLi9pbnRlcmZhY2VzL2xvZ2luLmludGVyZmFjZSdcclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2luU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcbiAgICBcclxuICAgIGxvZ2luKHVzZXI6IExvZ2luVXNlcil7XHJcbiAgICAgICAgdmFyIENvbnRlbnRUeXBlID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOidhcHBsaWNhdGlvbi9qc29uJ30pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnL3VzZXJzL2xvZ2luJywgdXNlciwgQ29udGVudFR5cGUpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
