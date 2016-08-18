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
var http_1 = require('@angular/http');
var RegistrationService = (function () {
    function RegistrationService(_http) {
        this._http = _http;
    }
    RegistrationService.prototype.registerUser = function (user) {
        console.info('registration function invoked');
        var contentType = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post('/users/registration', user, { headers: contentType });
        // .map(res=> res.json());
    };
    RegistrationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], RegistrationService);
    return RegistrationService;
}());
exports.RegistrationService = RegistrationService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL3JlZ2lzdHJhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBSzVDO0lBQ0ksNkJBQW9CLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUUsQ0FBQztJQUMzQiwwQ0FBWSxHQUFuQixVQUFvQixJQUFzQjtRQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDOUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ3RFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN4RSwwQkFBMEI7SUFDbEMsQ0FBQztJQVRMO1FBQUMsaUJBQVUsRUFBRTs7MkJBQUE7SUFVYiwwQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksMkJBQW1CLHNCQVEvQixDQUFBIiwiZmlsZSI6IlNlcnZpY2VzL3JlZ2lzdHJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHtSZWdpc3RyYXRpb25Vc2VyfSBmcm9tICcuLi9pbnRlcmZhY2VzL3JlZ2lzdHJhdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvcngnO1xyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cmF0aW9uU2VydmljZXtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuICAgIHB1YmxpYyByZWdpc3RlclVzZXIodXNlcjogUmVnaXN0cmF0aW9uVXNlcil7XHJcbiAgICAgICAgY29uc29sZS5pbmZvKCdyZWdpc3RyYXRpb24gZnVuY3Rpb24gaW52b2tlZCcpO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCcvdXNlcnMvcmVnaXN0cmF0aW9uJywgdXNlciwge2hlYWRlcnM6IGNvbnRlbnRUeXBlfSk7XHJcbiAgICAgICAgICAgIC8vIC5tYXAocmVzPT4gcmVzLmpzb24oKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
