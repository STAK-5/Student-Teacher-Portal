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
var AuthManager = (function () {
    function AuthManager(_router) {
        this._router = _router;
    }
    AuthManager.prototype.canActivate = function (next, state) {
        if (next.url[0].path == 'login') {
            if (window.localStorage.getItem('auth-key')) {
                this._router.navigate(['/home']);
                return false;
            }
            else
                return true;
        }
        if (window.localStorage.getItem('auth-key'))
            return true;
        this._router.navigate(['/']);
        return false;
    };
    AuthManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthManager);
    return AuthManager;
}());
exports.AuthManager = AuthManager;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNlcnZpY2VzL2F1dGhtYW5hZ2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyx1QkFBZ0csaUJBQWlCLENBQUMsQ0FBQTtBQUdsSDtJQUVJLHFCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUFFLENBQUM7SUFDdEMsaUNBQVcsR0FBWCxVQUFZLElBQTRCLEVBQUUsS0FBMEI7UUFDaEUsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLENBQUEsQ0FBQztZQUM1QixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDakMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDO1lBQUMsSUFBSTtnQkFBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRXZCLENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBRSxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUUsQ0FBQztZQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBRWhCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFuQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQW9CYixrQkFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFsQlksbUJBQVcsY0FrQnZCLENBQUEiLCJmaWxlIjoiU2VydmljZXMvYXV0aG1hbmFnZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuRGVhY3RpdmF0ZSwgQ2FuQWN0aXZhdGUsIFJvdXRlciwgUm91dGVyU3RhdGVTbmFwc2hvdCwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoTWFuYWdlciBpbXBsZW1lbnRzIENhbkFjdGl2YXRle1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7fVxyXG4gICAgY2FuQWN0aXZhdGUobmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3Qpe1xyXG4gICAgICAgIGlmKG5leHQudXJsWzBdLnBhdGggPT0gJ2xvZ2luJyl7XHJcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aC1rZXknKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvaG9tZSddKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHJldHVybiB0cnVlOyBcclxuICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aC1rZXknKSApXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbJy8nXSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
