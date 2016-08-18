/**
 * Created by syed-muhammad-taha on 8/1/16.
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
var app_sidebar_component_1 = require('./app.sidebar.component');
var app_download_panel_component_1 = require('./app.download-panel.component');
var StpDashboard = (function () {
    function StpDashboard(_router) {
        this._router = _router;
        this.files = [];
        this.files = [
            {
                title: 123,
                mime: 12334
            },
            {
                title: 3
            }
        ];
    }
    StpDashboard.prototype.logout = function () {
        console.log('loged out');
        window.localStorage.removeItem('auth-key');
        this._router.navigate(['/login']);
    };
    StpDashboard = __decorate([
        core_1.Component({
            selector: 'stp-dashboard',
            templateUrl: 'js/app/templates/app.dashboard.template.html',
            directives: [app_sidebar_component_1.StpSideBar, app_download_panel_component_1.StpDownloadPanel]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], StpDashboard);
    return StpDashboard;
}());
exports.StpDashboard = StpDashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBQzFDLHVCQUF1QixpQkFDdkIsQ0FBQyxDQUR1QztBQUN4QyxzQ0FBMkIseUJBQXlCLENBQUMsQ0FBQTtBQUNyRCw2Q0FBaUMsZ0NBQWdDLENBQUMsQ0FBQTtBQVNsRTtJQUdJLHNCQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUZuQyxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBR2pCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVDtnQkFDSSxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUE7SUFDTCxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUF6Qkw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxVQUFVLEVBQUUsQ0FBQyxrQ0FBVSxFQUFFLCtDQUFnQixDQUFDO1NBQzdDLENBQUM7O29CQUFBO0lBdUJGLG1CQUFDO0FBQUQsQ0FyQkEsQUFxQkMsSUFBQTtBQXJCWSxvQkFBWSxlQXFCeEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgc3llZC1tdWhhbW1hZC10YWhhIG9uIDgvMS8xNi5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xyXG5pbXBvcnQgeyBTdHBTaWRlQmFyIH0gZnJvbSAnLi9hcHAuc2lkZWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHBEb3dubG9hZFBhbmVsIH0gZnJvbSAnLi9hcHAuZG93bmxvYWQtcGFuZWwuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RwLWRhc2hib2FyZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ2pzL2FwcC90ZW1wbGF0ZXMvYXBwLmRhc2hib2FyZC50ZW1wbGF0ZS5odG1sJyxcclxuICAgIGRpcmVjdGl2ZXM6IFtTdHBTaWRlQmFyLCBTdHBEb3dubG9hZFBhbmVsXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0cERhc2hib2FyZCB7XHJcbiAgICBmaWxlczogT2JqZWN0W10gPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcil7XHJcbiAgICAgICAgdGhpcy5maWxlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IDEyMyxcclxuICAgICAgICAgICAgICAgIG1pbWU6IDEyMzM0XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2xvZ2VkIG91dCcpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aC1rZXknKTtcclxuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
