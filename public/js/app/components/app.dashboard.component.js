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
var app_sidebar_component_1 = require('./app.sidebar.component');
var app_download_panel_component_1 = require('./app.download-panel.component');
var StpDashboard = (function () {
    function StpDashboard() {
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
    StpDashboard = __decorate([
        core_1.Component({
            selector: 'stp-dashboard',
            templateUrl: 'js/app/templates/app.dashboard.template.html',
            directives: [app_sidebar_component_1.StpSideBar, app_download_panel_component_1.StpDownloadPanel]
        }), 
        __metadata('design:paramtypes', [])
    ], StpDashboard);
    return StpDashboard;
}());
exports.StpDashboard = StpDashboard;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLmRhc2hib2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRTFDLHNDQUEyQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3JELDZDQUFpQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBU2xFO0lBR0k7UUFGQSxVQUFLLEdBQWEsRUFBRSxDQUFDO1FBR2pCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVDtnQkFDSSxLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsS0FBSzthQUNkO1lBQ0Q7Z0JBQ0ksS0FBSyxFQUFFLENBQUM7YUFDWDtTQUNKLENBQUE7SUFDTCxDQUFDO0lBbkJMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw4Q0FBOEM7WUFDM0QsVUFBVSxFQUFFLENBQUMsa0NBQVUsRUFBRSwrQ0FBZ0IsQ0FBQztTQUM3QyxDQUFDOztvQkFBQTtJQWlCRixtQkFBQztBQUFELENBZkEsQUFlQyxJQUFBO0FBZlksb0JBQVksZUFleEIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2FwcC5kYXNoYm9hcmQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHN5ZWQtbXVoYW1tYWQtdGFoYSBvbiA4LzEvMTYuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0cFNpZGVCYXIgfSBmcm9tICcuL2FwcC5zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdHBEb3dubG9hZFBhbmVsIH0gZnJvbSAnLi9hcHAuZG93bmxvYWQtcGFuZWwuY29tcG9uZW50JztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N0cC1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnanMvYXBwL3RlbXBsYXRlcy9hcHAuZGFzaGJvYXJkLnRlbXBsYXRlLmh0bWwnLFxuICAgIGRpcmVjdGl2ZXM6IFtTdHBTaWRlQmFyLCBTdHBEb3dubG9hZFBhbmVsXVxufSlcblxuZXhwb3J0IGNsYXNzIFN0cERhc2hib2FyZCB7XG4gICAgZmlsZXM6IE9iamVjdFtdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLmZpbGVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAxMjMsXG4gICAgICAgICAgICAgICAgbWltZTogMTIzMzRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IDNcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
